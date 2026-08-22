import { readFile, readdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const appDirectory = fileURLToPath(new URL("../app/", import.meta.url));
const basePath = "/jibin-john-website";

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await visit(path);
      continue;
    }
    if (![".tsx", ".ts", ".css"].includes(extname(entry.name))) continue;

    const source = await readFile(path, "utf8");
    const prepared = source
      .replace(/(<a\b[^>]*?\bhref=)(["'])\//g, `$1$2${basePath}/`)
      .replace(/(<img\b[^>]*?\bsrc=)(["'])\//g, `$1$2${basePath}/`)
      .replace(/url\((["']?)\//g, `url($1${basePath}/`);

    if (prepared !== source) await writeFile(path, prepared);
  }
}

await visit(appDirectory);
