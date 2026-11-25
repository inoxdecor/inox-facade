import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../out",
);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".webp": "image/webp",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ttf": "font/ttf",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".ico": "image/x-icon",
  ".md": "text/plain",
};
http
  .createServer((req, res) => {
    let target;
    try {
      target = path.resolve(
        root,
        "." + decodeURIComponent(new URL(req.url, "http://localhost").pathname),
      );
    } catch {
      res.writeHead(400);
      return res.end("Bad request");
    }
    if (target !== root && !target.startsWith(root + path.sep)) {
      res.writeHead(403);
      return res.end("Forbidden");
    }
    if (fs.existsSync(target) && fs.statSync(target).isDirectory())
      target = path.join(target, "index.html");
    if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      return res.end(fs.readFileSync(path.join(root, "404.html")));
    }
    res.writeHead(200, {
      "Content-Type": types[path.extname(target)] || "application/octet-stream",
    });
    fs.createReadStream(target).pipe(res);
  })
  .listen(Number(process.env.PORT) || 3012, "127.0.0.1", () =>
    console.log(
      "Building Systems: http://localhost:" + (process.env.PORT || 3012),
    ),
  );
