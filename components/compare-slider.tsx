"use client";
import Image from "next/image";
import { useId, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
export function CompareSlider({
  finishOnly = false,
}: {
  finishOnly?: boolean;
}) {
  const [value, setValue] = useState(50);
  const id = useId();
  return (
    <figure className={`compare ${finishOnly ? "finish-compare" : ""}`}>
      <div className="compare-base">
        {finishOnly ? (
          <div className="raw-panel" />
        ) : (
          <Image
            src="/images/pdf/hero-facade.webp"
            alt="Original building with a clean, contemporary aluminium facade"
            fill
            sizes="(max-width: 700px) 100vw, 70vw"
          />
        )}
      </div>
      <div
        className="compare-overlay"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        {finishOnly ? (
          <div className="coated-panel" />
        ) : (
          <Image
            src="/images/illustrations/facade-before.webp"
            alt="AI illustration of the same building aged with damp stains, peeling plaster, mildew and worn timber fins"
            fill
            sizes="(max-width: 700px) 100vw, 70vw"
          />
        )}
      </div>
      <span className="compare-label before">
        {finishOnly ? "Wood finish" : "Before · aged building"}
      </span>
      <span className="compare-label after">
        {finishOnly ? "Raw aluminium" : "After · renewed facade"}
      </span>
      <div className="compare-handle" style={{ left: `${value}%` }}>
        <span>
          <ChevronsLeftRight size={22} />
        </span>
      </div>
      <label htmlFor={id} className="sr-only">
        {finishOnly
          ? "Compare raw aluminium and wood finish"
          : "Compare the aged building illustration and the original renewed facade"}
      </label>
      <input
        id={id}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-valuetext={`${value}% ${finishOnly ? "wood finish" : "aged building illustration"} visible`}
      />
      <figcaption>
        {finishOnly
          ? "Illustrative material study. Actual finishes may vary."
          : "AI-illustrated before; original catalogue after. Concept only, not an actual renovation. Drag to compare."}
      </figcaption>
    </figure>
  );
}
