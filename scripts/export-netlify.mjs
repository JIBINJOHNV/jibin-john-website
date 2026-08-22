import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const outputRoot = path.join(projectRoot, "netlify-dist");
const routes = [
  "/",
  "/about",
  "/blog",
  "/conferences",
  "/contact",
  "/continuing-education",
  "/publications",
  "/research",
  "/skills-specializations",
];

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(path.join(projectRoot, "dist/client"), outputRoot, { recursive: true });

const workerModule = await import(
  pathToFileURL(path.join(projectRoot, "dist/server/index.js")).href,
);
const executionContext = {
  waitUntil() {},
  passThroughOnException() {},
};

async function render(route) {
  const response = await workerModule.default.fetch(
    new Request(`https://netlify-static.local${route}`),
    {},
    executionContext,
  );

  if (!response.ok) {
    throw new Error(`Rendering ${route} failed with HTTP ${response.status}`);
  }

  return response.text();
}

for (const route of routes) {
  const directory =
    route === "/" ? outputRoot : path.join(outputRoot, route.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), await render(route), "utf8");
}

for (const route of ["/robots.txt", "/sitemap.xml"]) {
  await writeFile(path.join(outputRoot, route.slice(1)), await render(route), "utf8");
}

const learningDirectory = path.join(outputRoot, "learning");
await mkdir(learningDirectory, { recursive: true });
await writeFile(
  path.join(learningDirectory, "index.html"),
  '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=/continuing-education"><title>Continuing Education</title><link rel="canonical" href="/continuing-education"></head><body><p><a href="/continuing-education">Continue to Continuing Education</a></p></body></html>',
  "utf8",
);
await writeFile(
  path.join(outputRoot, "_redirects"),
  "/learning /continuing-education 301\n",
  "utf8",
);

await writeFile(
  path.join(outputRoot, "404.html"),
  '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Page not found | Jibin John, PhD</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#171c1a;color:#f4f6f2;font-family:Inter,system-ui,sans-serif}.not-found{width:min(680px,calc(100% - 48px));text-align:center}.not-found span{color:#add0b6;font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}.not-found h1{margin:18px 0 12px;font-size:clamp(42px,8vw,76px);letter-spacing:-.05em}.not-found p{color:#cbd5cd;line-height:1.7}.not-found a{display:inline-flex;margin-top:22px;padding:14px 22px;border-radius:999px;background:#7fae91;color:#171c1a;font-weight:800;text-decoration:none}</style></head><body><main class="not-found"><span>404</span><h1>Page not found.</h1><p>The requested page is unavailable or may have moved.</p><a href="/">Return to homepage</a></main></body></html>',
  "utf8",
);

console.log(`Netlify export written to ${outputRoot}`);
