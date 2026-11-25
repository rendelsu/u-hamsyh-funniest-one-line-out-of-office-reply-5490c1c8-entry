import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, "Out of office until Monday — my agent is covering, so if a reply sounds organized, it's a forgery.\n");
chmodSync(outFile, 0o644);
