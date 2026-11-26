// Office Artifacts: The One-Line Placard Contest
// Writes a single museum placard line for an ordinary office object,
// treated as an ancient artifact, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node stdlib only. No fallback output directory: MAKEFUN_OUTPUT_DIR
// must be set, or the program throws.
import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const placard =
  "Stapler, c. 1997–present. Pressed steel and plastic. Recovered from a desk drawer, still loaded. Donated by the Department of Temporary Solutions, which never returned for it.";

if (placard.includes("\n") || placard.length === 0 || placard.length > 180) {
  throw new Error("placard must be one line of 1-180 characters");
}

mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, placard + "\n", "utf8");
chmodSync(entryPath, 0o644);
