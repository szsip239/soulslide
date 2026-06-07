#!/usr/bin/env node
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';

const args = process.argv.slice(2);
const root = path.resolve(option('--root', process.cwd()));
const port = Number(option('--port', process.env.PORT || 18189));
const host = option('--host', process.env.HOST || '127.0.0.1');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.m4v': 'video/x-m4v',
  '.woff2': 'font/woff2',
};

function option(name, fallback) {
  const item = args.find(arg => arg === name || arg.startsWith(`${name}=`));
  if (!item) return fallback;
  if (item.includes('=')) return item.split('=').slice(1).join('=');
  const index = args.indexOf(item);
  return args[index + 1] || fallback;
}

function safePath(urlPathname) {
  let pathname = decodeURIComponent(urlPathname);
  if (pathname.endsWith('/')) pathname += 'index.html';
  if (pathname === '') pathname = '/index.html';
  const file = path.resolve(root, `.${pathname}`);
  return file.startsWith(root + path.sep) || file === root ? file : null;
}

function sendError(res, code, message) {
  res.writeHead(code, { 'content-type': 'text/plain; charset=utf-8' });
  res.end(message);
}

function sendFile(req, res, file) {
  let stat;
  try {
    stat = fs.statSync(file);
  } catch (_) {
    sendError(res, 404, 'not found');
    return;
  }

  if (stat.isDirectory()) {
    sendFile(req, res, path.join(file, 'index.html'));
    return;
  }

  const ext = path.extname(file).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';
  const liveAsset = ['.html', '.css', '.js', '.mjs'].includes(ext);
  const headers = {
    'content-type': type,
    'accept-ranges': 'bytes',
    'cache-control': liveAsset ? 'no-cache, no-store, must-revalidate' : 'public, max-age=600',
  };

  const range = req.headers.range;
  if (range) {
    const match = range.match(/^bytes=(\d*)-(\d*)$/);
    if (!match) {
      res.writeHead(416, { ...headers, 'content-range': `bytes */${stat.size}` });
      res.end();
      return;
    }
    const start = match[1] ? Number(match[1]) : 0;
    const end = match[2] ? Number(match[2]) : stat.size - 1;
    if (!Number.isFinite(start) || !Number.isFinite(end) || start > end || start >= stat.size) {
      res.writeHead(416, { ...headers, 'content-range': `bytes */${stat.size}` });
      res.end();
      return;
    }
    const boundedEnd = Math.min(end, stat.size - 1);
    res.writeHead(206, {
      ...headers,
      'content-length': boundedEnd - start + 1,
      'content-range': `bytes ${start}-${boundedEnd}/${stat.size}`,
    });
    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    fs.createReadStream(file, { start, end: boundedEnd }).pipe(res);
    return;
  }

  res.writeHead(200, { ...headers, 'content-length': stat.size });
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer((req, res) => {
  if (!['GET', 'HEAD'].includes(req.method || '')) {
    sendError(res, 405, 'method not allowed');
    return;
  }
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const file = safePath(url.pathname);
  if (!file) {
    sendError(res, 403, 'forbidden');
    return;
  }
  sendFile(req, res, file);
});

server.listen(port, host, () => {
  const addresses = [`http://${host}:${port}/`];
  if (host === '0.0.0.0') {
    for (const item of Object.values(os.networkInterfaces()).flat()) {
      if (item && item.family === 'IPv4' && !item.internal) addresses.push(`http://${item.address}:${port}/`);
    }
  }
  console.log(`SoulSlide media server root: ${root}`);
  console.log(`SoulSlide media server URL: ${addresses.join(' | ')}`);
});
