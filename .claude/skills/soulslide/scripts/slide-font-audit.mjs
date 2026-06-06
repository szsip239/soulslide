#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const skillRoot = path.resolve(__dirname, '..');
const cwd = process.cwd();

const args = process.argv.slice(2);
const noFail = args.includes('--no-fail');
const json = args.includes('--json');
const minBodyPx = optionNumber('--min-body-px', 16);
const minLabelPx = optionNumber('--min-label-px', 14.5);
const minMetaPx = optionNumber('--min-meta-px', 12.5);
const targets = args.filter(arg => !arg.startsWith('--'));

const BOX_HINT = /(card|panel|box|tile|step|item|mini|module|block|lens|pill|note|quote|stat|row|cell|frame|story|flow|meta|skill|practice|account|warning|chain|grid|ladder|routine|map|matrix|scenario|case|shot|cap|seq|overlay|closing|cover)/i;
const LABEL_HINT = /(^|[^a-z0-9])(tag|label|lb|caption|cap|badge|kicker|eyebrow|cmd-title|k|hint|foot|url|mono|count|num|no|ord|pg|mark|dot|line|arrow|icon|qr|overlay|motif|brand|topic|page|date|unit)(?=$|[^a-z0-9])/i;
const META_HINT = /(^|[^a-z0-9])(cite|source|src|ref|credit|byline|author|meta)(?=$|[^a-z0-9])/i;

function optionNumber(name, fallback) {
  const item = args.find(arg => arg.startsWith(`${name}=`));
  if (!item) return fallback;
  const value = Number(item.split('=').slice(1).join('='));
  return Number.isFinite(value) ? value : fallback;
}

function listDefaultSlides() {
  const dir = path.join(skillRoot, 'assets/templates');
  return fs.readdirSync(dir)
    .filter(name => name.endsWith('.html'))
    .map(name => path.join(dir, name))
    .sort();
}

function resolveTarget(item) {
  const cwdPath = path.resolve(cwd, item);
  if (fs.existsSync(cwdPath)) return cwdPath;
  return path.resolve(skillRoot, item);
}

function expandTargets(items) {
  if (!items.length) return listDefaultSlides();
  const files = [];
  for (const item of items) {
    const target = resolveTarget(item);
    if (!fs.existsSync(target)) continue;
    const stat = fs.statSync(target);
    if (stat.isDirectory()) {
      for (const name of fs.readdirSync(target)) {
        if (name.endsWith('.html')) files.push(path.join(target, name));
      }
      continue;
    }
    files.push(target);
  }
  return files.sort();
}

function displayPath(file) {
  const relCwd = path.relative(cwd, file);
  if (!relCwd.startsWith('..')) return relCwd;
  return path.relative(skillRoot, file);
}

function lineAt(text, index) {
  return text.slice(0, index).split('\n').length;
}

function fontPx(value) {
  const matches = [...value.matchAll(/(-?\d*\.?\d+)\s*(rem|em|px|%)/gi)];
  if (!matches.length) return null;
  const pxValues = matches.map(([, raw, unit]) => {
    const n = Number(raw);
    const u = unit.toLowerCase();
    if (u === 'px') return n;
    if (u === 'rem' || u === 'em') return n * 16;
    if (u === '%') return n * 0.16;
    return null;
  }).filter(value => Number.isFinite(value));
  return pxValues.length ? Math.min(...pxValues) : null;
}

function auditCss(css, rel, offsetLine = 0) {
  const issues = [];
  const cleaned = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const ruleRe = /([^{}]+)\{([^{}]*font-size\s*:[^{}]*)\}/g;
  for (const ruleMatch of cleaned.matchAll(ruleRe)) {
    const selector = ruleMatch[1].trim().replace(/\s+/g, ' ');
    const body = ruleMatch[2];
    if (!BOX_HINT.test(selector)) continue;
    const fontMatch = body.match(/font-size\s*:\s*([^;]+);?/i);
    if (!fontMatch) continue;
    const rawSize = fontMatch[1].trim();
    const px = fontPx(rawSize);
    if (px === null) continue;
    const metaLike = META_HINT.test(selector);
    const labelLike = !metaLike && LABEL_HINT.test(selector);
    const minPx = metaLike ? minMetaPx : labelLike ? minLabelPx : minBodyPx;
    if (px < minPx) {
      issues.push({
        file: rel,
        line: offsetLine + lineAt(css, ruleMatch.index) - 1,
        selector,
        fontSize: rawSize,
        px: Number(px.toFixed(2)),
        minPx,
        kind: metaLike ? 'metadata' : labelLike ? 'label' : 'body',
      });
    }
  }
  return issues;
}

function linkedStylesheets(html, file) {
  const stylesheets = [];
  const linkRe = /<link\b[^>]*>/gi;
  for (const linkMatch of html.matchAll(linkRe)) {
    const tag = linkMatch[0];
    if (!/\brel\s*=\s*["'][^"']*stylesheet/i.test(tag)) continue;
    const hrefMatch = tag.match(/\bhref\s*=\s*["']([^"']+)["']/i);
    if (!hrefMatch) continue;
    const href = hrefMatch[1];
    if (/^(https?:)?\/\//i.test(href)) continue;
    const localHref = href.split(/[?#]/)[0];
    const cssPath = path.resolve(path.dirname(file), localHref);
    if (fs.existsSync(cssPath)) stylesheets.push(cssPath);
  }
  return stylesheets;
}

function auditFile(file) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = displayPath(file);
  const issues = [];

  const styleRe = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
  for (const styleMatch of html.matchAll(styleRe)) {
    const style = styleMatch[1];
    const styleOffset = styleMatch.index + styleMatch[0].indexOf(styleMatch[1]);
    issues.push(...auditCss(style, rel, lineAt(html, styleOffset)));
  }

  return { issues, stylesheets: linkedStylesheets(html, file) };
}

const targetFiles = expandTargets(targets);
const stylesheetSet = new Set();
const issues = [];
for (const file of targetFiles) {
  const result = auditFile(file);
  issues.push(...result.issues);
  for (const cssPath of result.stylesheets) stylesheetSet.add(cssPath);
}
for (const cssPath of [...stylesheetSet].sort()) {
  issues.push(...auditCss(fs.readFileSync(cssPath, 'utf8'), displayPath(cssPath), 1));
}

if (json) {
  console.log(JSON.stringify({ minBodyPx, minLabelPx, minMetaPx, files: targetFiles.map(displayPath), issues }, null, 2));
} else {
  console.log(`SoulSlide font audit: body >= ${minBodyPx}px, label >= ${minLabelPx}px, metadata >= ${minMetaPx}px`);
  if (!issues.length) {
    console.log('OK: no undersized box text found.');
  } else {
    for (const issue of issues) {
      console.log(`${issue.file}:${issue.line} [${issue.kind}] ${issue.selector} -> ${issue.fontSize} (${issue.px}px < ${issue.minPx}px)`);
    }
    console.log(`Found ${issues.length} undersized box text styles.`);
  }
}

if (issues.length && !noFail) process.exit(1);

