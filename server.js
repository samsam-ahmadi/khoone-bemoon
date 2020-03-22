const express = require("express");
const next = require("next");
const LRUCache = require("lru-cache");
const compression = require("compression");
const { join } = require("path");
const NODE_ENV = process.env.NODE_ENV;
const config = require(`./configs/${NODE_ENV}`);
const ENV = config.api_base_path;
const { parse } = require("url");
const port = parseInt(config.port, 10) || 88;
const dev = ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 10, // 1hour
});

app.prepare().then(() => {
  const server = express();
  server.use(compression()).get("/public/workbox/sw.js", (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    const filePath = join(__dirname, ".next", pathname);
    app.serveStatic(req, res, filePath);
  });

  server.get("/", (req, res) => {
    renderAndCache(req, res, "/index");
  });

  const robotsOptions = {
    root: __dirname + "/public/",
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
  };

  server.get("/robots.txt", (req, res) =>
    res.status(200).sendFile("robots.txt", robotsOptions),
  );

  server.get("/sitemap.xml", (req, res) =>
    res.status(200).sendFile("sitemap.xml", robotsOptions),
  );
  server.get("*", (req, res) => {
    if (req.url.includes("/sw")) {
      const filePath = join(__dirname, "public", "workbox", "sw.js");
      app.serveStatic(req, res, filePath);
    } else if (req.url.startsWith("public/workbox/")) {
      app.serveStatic(req, res, join(__dirname, req.url));
    } else {
      return handle(req, res);
    }
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.url}`;
}

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    res.setHeader("x-cache", "HIT");
    res.send(ssrCache.get(key));
    return;
  }

  try {
    // If not let's render the page into HTML
    const html = await app.renderToHTML(req, res, pagePath, queryParams);

    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader("x-cache", "MISS");
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}
