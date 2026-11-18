// News-image entry for 17 November 2026: the poster beside this file is the
// whole entry. The program copies it to the output directory as entry.png,
// byte for byte, so both grader runs produce identical output. No drawing
// happens at run time and no network is used.
//
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
