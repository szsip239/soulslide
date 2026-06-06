#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const codexSkill = path.join(repoRoot, '.agents/skills/soulslide');
const claudeSkill = path.join(repoRoot, '.claude/skills/soulslide');

fs.rmSync(claudeSkill, { recursive: true, force: true });
fs.mkdirSync(path.dirname(claudeSkill), { recursive: true });
fs.cpSync(codexSkill, claudeSkill, { recursive: true });
fs.rmSync(path.join(claudeSkill, 'agents'), { recursive: true, force: true });

console.log(`Synced Claude skill: ${path.relative(repoRoot, claudeSkill)}`);

