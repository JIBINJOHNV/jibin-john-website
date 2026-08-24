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
  assert.match(html, /<a[^>]*\bclass=["']skip-link["'][^>]*\bhref=["']#main-content["']/i);
  assert.match(html, /<header[^>]*\bid=["']top["']/i);
  assert.match(html, /<main[^>]*\bid=["']main-content["']/i);
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

  let blog = await worker.fetch(new Request("http://localhost/blog"), environment, context);
  if ([301, 302, 307, 308].includes(blog.status)) {
    const location = blog.headers.get("location");
    assert.ok(location, "redirected Blog response includes a location");
    blog = await worker.fetch(new Request(new URL(location, "http://localhost")), environment, context);
  }
  assert.equal(blog.status, 200);
  assert.match(await blog.text(), /Articles (?:are currently )?in preparation/i);

  let sitemap = await worker.fetch(new Request("http://localhost/sitemap.xml"), environment, context);
  if ([301, 302, 307, 308].includes(sitemap.status)) {
    const location = sitemap.headers.get("location");
    assert.ok(location, "redirected sitemap response includes a location");
    sitemap = await worker.fetch(new Request(new URL(location, "http://localhost")), environment, context);
  }
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /https:\/\/drjibinjohn\.com\/blog/i);

  let robots = await worker.fetch(new Request("http://localhost/robots.txt"), environment, context);
  if ([301, 302, 307, 308].includes(robots.status)) {
    const location = robots.headers.get("location");
    assert.ok(location, "redirected robots response includes a location");
    robots = await worker.fetch(new Request(new URL(location, "http://localhost")), environment, context);
  }
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /https:\/\/drjibinjohn\.com\/sitemap\.xml/i);
});
