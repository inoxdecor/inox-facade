import type { MetadataRoute } from "next";
import { products } from "@/data/products";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://systems.example.com"
  ).replace(/\/$/, "");
  return [
    { url: base + "/" },
    ...products.map((p) => ({ url: `${base}/products/${p.slug}/` })),
  ];
}
