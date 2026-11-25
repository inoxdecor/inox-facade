import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";
const display = localFont({
  src: "../public/fonts/instrument-serif.ttf",
  variable: "--font-display",
  display: "swap",
});
const body = localFont({
  src: "../public/fonts/manrope.ttf",
  variable: "--font-body",
  display: "swap",
});
const mono = localFont({
  src: "../public/fonts/jetbrains-mono.ttf",
  variable: "--font-mono",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://systems.example.com",
  ),
  title: {
    default: "Building Systems | INOX Decor",
    template: "%s | INOX Building Systems",
  },
  description:
    "Architectural aluminium systems by INOX Decor. Explore fluting, box profiles, perforated and designer panels, and aluminium bamboo.",
  openGraph: {
    title: "INOX — Building Systems",
    description:
      "Bespoking luxury metalness. Grandiodising exteriors and interiors.",
    images: [
      { url: "/images/pdf/hero-facade.webp", width: 1054, height: 1005 },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
