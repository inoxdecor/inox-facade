// Next exports nested segment payloads on disk while its router requests
// dot-separated names. Keep both forms for plain static web servers.
import { access, readFile, readdir, copyFile } from "node:fs/promises";
import path from "node:path";
// Match next build and npm lifecycle hooks, even when a host stages or symlinks
// source files and this script resolves to a different directory.
const root = path.resolve(process.cwd(), "out");
try {
  await access(path.join(root, "index.html"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
  const manifest = await readFile(path.resolve(".next/required-server-files.json"), "utf8")
    .then(JSON.parse).catch(() => null);
  console.error("Export diagnostics:", JSON.stringify({ cwd: process.cwd(), expectedOutput: root, effectiveOutput: manifest?.config?.output, effectiveDistDir: manifest?.config?.distDir, configFile: manifest?.config?.configFileName }));
  throw new Error(
    'Static export missing: out/index.html was not generated. Run npm run build with output: "export" in next.config.mjs. On Hostinger, use the repository root, build command "npm run build", and output directory "out"; check that the host is not overriding the Next.js config.',
  );
}

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
