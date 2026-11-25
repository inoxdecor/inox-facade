import { readFile, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";
import path from "node:path";

// Managed hosts may wrap next.config before npm runs and force standalone.
// Generate the static config immediately before invoking the official CLI.
const configPath = path.resolve("next.config.mjs");
const original = await readFile(configPath);
const config = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
const env = { ...process.env };
delete env.NEXT_PRIVATE_STANDALONE;
delete env.__NEXT_PRIVATE_STANDALONE_CONFIG;
delete env.NEXT_ADAPTER_PATH;
let status = 1;
try {
  await writeFile(configPath, `export default ${JSON.stringify(config, null, 2)};\n`);
  console.log("INOX build: enforcing static export to out/");
  const require = createRequire(import.meta.url);
  const result = spawnSync(process.execPath, [require.resolve("next/dist/bin/next"), "build", "--webpack"], { stdio: "inherit", env });
  if (result.error) throw result.error;
  status = result.status ?? 1;
  if (status === 0) {
    const manifest = JSON.parse(await readFile(".next/required-server-files.json", "utf8"));
    if (manifest.config.output !== "export") {
      throw new Error(`Build output was overridden to ${manifest.config.output}; static export is required.`);
    }
    await readFile("out/index.html");
  }
} finally {
  await writeFile(configPath, original);
}
process.exitCode = status;
