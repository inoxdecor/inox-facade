// Next exports nested segment payloads on disk while its router requests
// dot-separated names. Keep both forms for plain static web servers.
import { readdir, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../out/", import.meta.url));
async function visit(directory, routeRoot = null) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    const base =
      routeRoot ||
      (entry.isDirectory() && entry.name.startsWith("__next.")
        ? directory
        : null);
    if (entry.isDirectory()) await visit(file, base);
    else if (base && entry.name.endsWith(".txt")) {
      const flattened = path.relative(base, file).split(path.sep).join(".");
      await copyFile(file, path.join(base, flattened));
    }
  }
}
await visit(root);
console.log("Static route payloads prepared for portable hosting.");
