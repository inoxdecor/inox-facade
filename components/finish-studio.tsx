"use client";
import { useState } from "react";
import { finishes } from "@/data/products";
export function FinishStudio({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className={`finish-studio ${compact ? "compact" : ""}`}>
      <div
        className="finish-preview"
        style={
          { "--sample-color": finishes[selected].color } as React.CSSProperties
        }
      >
        <div className="sample-panel" />
        <span className="sample-caption">
          {finishes[selected].name}
          <span>Aluminium / finish study</span>
        </span>
      </div>
      <div className="finish-controls">
        <p className="eyebrow">A finish for your vision</p>
        <h3>
          Material, with
          <br />
          <em>character.</em>
        </h3>
        <p>
          From the warmth of wood to the quiet lustre of metal. Explore the
          palette.
        </p>
        <div className="swatches" role="group" aria-label="Panel finish">
          <span className="sr-only" aria-live="polite">
            Selected finish: {finishes[selected].name}
          </span>
          {finishes.map((f, i) => (
            <button
              key={f.name}
              onClick={() => setSelected(i)}
              onMouseEnter={() => setSelected(i)}
              onFocus={() => setSelected(i)}
              aria-pressed={selected === i}
              aria-label={f.name}
              className={selected === i ? "swatch selected" : "swatch"}
            >
              <span
                style={{
                  background:
                    f.name === "Custom RAL"
                      ? "conic-gradient(#a56e4b,#d8c29d,#8fa89b,#68858d,#a56e4b)"
                      : f.color,
                }}
              />
              <small>{f.name}</small>
            </button>
          ))}
        </div>
        <p className="fine-print">
          Digital samples are indicative. Please request a physical finish
          sample.
        </p>
      </div>
    </div>
  );
}
