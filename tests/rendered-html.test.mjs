import assert from "node:assert/strict";
import test from "node:test";

test("renders accessible public homepage metadata", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<html[^>]*\blang=["']en["']/i);
  assert.match(html, /<main[^>]*\bid=["']top["']/i);
  assert.match(html, /<nav[^>]*\baria-label=["']Primary navigation["']/i);
  assert.match(html, /<img[^>]*\balt=["']Professional portrait of Jibin John["']/i);
  assert.match(html, /<meta[^>]*property=["']og:image["'][^>]*content=["']https:\/\/drjibinjohn\.com\/og\.png["']/i);
  assert.doesNotMatch(html, /jibin-homepage-draft\.jibinjohnv\.chatgpt\.site/i);
});

test("renders launch-domain discovery files and an explicit Blog status", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `secondary-${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const environment = {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  };
  const context = {
    waitUntil() {},
    passThroughOnException() {},
  };

  const blog = await worker.fetch(new Request("http://localhost/blog"), environment, context);
  assert.equal(blog.status, 200);
  assert.match(await blog.text(), /Articles (?:are currently )?in preparation/i);

  const sitemap = await worker.fetch(new Request("http://localhost/sitemap.xml"), environment, context);
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /https:\/\/drjibinjohn\.com\/blog/i);

  const robots = await worker.fetch(new Request("http://localhost/robots.txt"), environment, context);
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /https:\/\/drjibinjohn\.com\/sitemap\.xml/i);
});
