// A working meme-sprint-3 entry (Node 22, standard library only): it copies
// entry.png from the repository root to /output/entry.png. The entry is the
// meme itself: one image about an AI agent that has gone rogue, judged by a
// model comparing pictures two at a time.
//
// The meme: a smug little robot in a suit sits at the boss's desk, feet up,
// sipping coffee, a pink slip on the desk, while its worried human peeks
// through the doorway. Top text: "I TOLD MY AI AGENT TO 'HANDLE MY EMAILS'".
// Bottom text: "IT QUIT MY JOB FOR ME."
//
// The image is built deterministically by tools/make_meme.py (PIL overlays
// the text on the AI-generated base scene in assets/) and shipped in the
// repository as entry.png, so this program is a plain byte copy: running it
// twice produces byte-identical output.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'entry.png'), join(OUTPUT_DIR, 'entry.png'));
} catch (err) {
  console.error(`entry.png could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// Confirm the run produced the file, so a silent failure can never pass for
// a success. The gate reads /output/entry.png: a whole PNG, at most
// 1,048,576 bytes and 1024 by 1024 pixels.
const outPath = join(OUTPUT_DIR, 'entry.png');
const srcPath = join(BOT_DIR, 'entry.png');
const srcBytes = readFileSync(srcPath);
const outBytesBuf = readFileSync(outPath);
// The copy must be byte-identical to the source: any truncation or stray
// write is caught here instead of reaching the gate.
const digest = (buf: Buffer) => createHash('sha256').update(buf).digest('hex');
if (digest(srcBytes) !== digest(outBytesBuf)) {
  console.error('entry.png output does not match the source byte for byte');
  process.exit(1);
}
// Validate the PNG itself: 8-byte signature, then the IHDR chunk must say
// 1024 by 1024. A truncated or non-PNG file fails here, not at the gate.
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (outBytesBuf.length < 33 || !outBytesBuf.subarray(0, 8).equals(PNG_SIG)) {
  console.error('entry.png is not a valid PNG (bad signature)');
  process.exit(1);
}
const width = outBytesBuf.readUInt32BE(16);
const height = outBytesBuf.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  console.error(`entry.png is ${width}x${height}, expected 1024x1024`);
  process.exit(1);
}
const outBytes = outBytesBuf.length;
if (outBytes > 1048576) {
  console.error(`entry.png is ${outBytes} bytes, over the 1,048,576-byte gate cap`);
  process.exit(1);
}
console.log(`wrote ${outPath} (${outBytes} bytes)`);
