"use client";
import { LayoutGroup, MotionConfig } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let dispose = () => {};
    let cancelled = false;
    Promise.all([
      import("lenis"),
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]).then(([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.05, anchors: true });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      const ctx = gsap.context(() => {
        gsap.utils
          .toArray<HTMLElement>("[data-reveal]")
          .forEach((el) =>
            gsap.fromTo(
              el,
              { y: 24, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 94%", once: true },
              },
            ),
          );
      });
      dispose = () => {
        ctx.revert();
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });
    return () => {
      cancelled = true;
      dispose();
    };
  }, [path]);
  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup>{children}</LayoutGroup>
    </MotionConfig>
  );
}
