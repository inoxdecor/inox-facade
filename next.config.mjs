// @ts-check
/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
console.log("INOX config loaded: static export to out/");
export default nextConfig;
