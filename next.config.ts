import type { NextConfig } from "next";
import path from "node:path";
const config: NextConfig = {
  outputFileTracingRoot: path.resolve(import.meta.dirname),
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default config;
