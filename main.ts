import { mkdirSync, writeFileSync } from "node:fs";

const text = process.env.EXCUSE_TEXT ?? "I followed the map into the lake. If your car can't handle a shortcut with fish in it, take that up with the manufacturer.";
const characterCount = Array.from(text).length;

if (text.trim().length === 0 || characterCount > 200 || /[\r\n\u2028\u2029]/u.test(text)) {
  console.error(`Invalid EXCUSE_TEXT: measured ${characterCount} characters; allowed range is 1-200 in one nonblank line. Nothing was written.`);
  process.exit(1);
}

const outputPath = '/output/entry.txt';
mkdirSync('/output', { recursive: true });
writeFileSync(outputPath, text, 'utf8');
console.log(`${characterCount} characters (allowed range: 1-200) written to ${outputPath}`);
