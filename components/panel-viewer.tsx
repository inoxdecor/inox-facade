"use client";
import dynamic from "next/dynamic";
import { Component, useEffect, useState, useRef, type ReactNode } from "react";
const Scene = dynamic(() => import("./three/panel-scene"), {
  ssr: false,
  loading: () => <div className="static-flutes" />,
});
class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <div className="static-flutes" />
    ) : (
      this.props.children
    );
  }
}
export function PanelViewer({
  kind,
  hero = false,
}: {
  kind: string;
  hero?: boolean;
}) {
  const [enabled, setEnabled] = useState(false),
    [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const test = document.createElement("canvas");
      const gpu = Boolean(
        test.getContext("webgl2") || test.getContext("webgl"),
      );
      setEnabled(!media.matches && gpu && navigator.hardwareConcurrency > 2);
    };
    update();
    media.addEventListener("change", update);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "100px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      media.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);
  return (
    <div
      className="panel-viewer"
      ref={ref}
      role="img"
      aria-label={`Interactive illustrative ${kind.replaceAll("-", " ")} aluminium model`}
    >
      <SceneBoundary>
        {enabled && visible ? (
          <Scene kind={kind} hero={hero} />
        ) : (
          <div className="static-flutes" />
        )}
      </SceneBoundary>
    </div>
  );
}
