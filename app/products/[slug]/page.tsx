import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductDetail } from "@/components/product-detail";
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  return { title: p?.name, description: p?.tagline };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = products.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  return <ProductDetail product={products[index]} index={index} />;
}
