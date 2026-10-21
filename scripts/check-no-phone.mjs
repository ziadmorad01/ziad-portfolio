#!/usr/bin/env node
/**
 * Privacy guard. Runs automatically before `npm run build`.
 * Fails the build if anything that looks like an Egyptian mobile number
 * appears in the project's source, docs or public text files.
 *
 * The number itself is intentionally NOT written here: only a pattern.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const scanDirs = ["src", "public", "scripts"];
const scanFiles = ["README.md", "package.json", ".env.example"];
const textExt = new Set([
  ".ts", ".tsx", ".js", ".mjs", ".json", ".md", ".css", ".html",
  ".txt", ".xml", ".webmanifest", ".svg",
]);

// Egyptian mobile: 01X + 8 digits (local) or +20 / 0020 + 1X + 8 digits,
// with any mix of spaces or dashes between digits.
const patterns = [
  /(?<![\d.])(?:\+\s?20|0020|0)[\s-]?1[0125](?:[\s-]?\d){8}(?!\d)/,
];

const hits = [];

function scanFile(file) {
  if (!textExt.has(path.extname(file).toLowerCase())) return;
  const text = fs.readFileSync(file, "utf8");
  text.split("\n").forEach((line, i) => {
    if (patterns.some((p) => p.test(line))) {
      hits.push(`${path.relative(root, file)}:${i + 1}`);
    }
  });
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else scanFile(full);
  }
}

scanDirs.forEach((d) => walk(path.join(root, d)));
scanFiles.forEach((f) => {
  const full = path.join(root, f);
  if (fs.existsSync(full)) scanFile(full);
});

if (hits.length > 0) {
  console.error("\n✖ Privacy check failed: a phone-number-like value was found at:");
  hits.forEach((h) => console.error("   - " + h));
  console.error("\nRemove it before building. This site must never publish a phone number.\n");
  process.exit(1);
}

// PDFs can't be reliably text-scanned, so remind the owner to check manually.
const publicDir = path.join(root, "public");
if (fs.existsSync(publicDir)) {
  const pdfs = fs.readdirSync(publicDir).filter((f) => f.toLowerCase().endsWith(".pdf"));
  if (pdfs.length > 0) {
    console.warn(
      `\n⚠ PDF in /public: ${pdfs.join(", ")}\n  Open it and confirm it contains NO phone number before deploying.\n`,
    );
  }
}

console.log("✔ Privacy check passed: no phone-number-like values found.");
