"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { getProject, types } from "@theatre/core";
import { useEffect, useMemo, useRef, useState } from "react";
import { DoubleSide, Shape, Path, type Group } from "three";
import theatreState from "@/theatre/state.json";
const project = getProject("inox", { state: theatreState });
function Panel({
  kind,
  hero,
  pattern,
}: {
  kind: string;
  hero: boolean;
  pattern: string;
}) {
  const ref = useRef<Group>(null);
  const rotation = useRef(-0.18);
  const sheet = useMemo(
    () => project.sheet(hero ? "hero" : "productIntro"),
    [hero],
  );
  useEffect(() => {
    const obj = sheet.object("panel", { rotationY: types.number(-0.18) });
    const unsub = obj.onValuesChange((v) => {
      rotation.current = v.rotationY;
    });
    let cancelled = false;
    project.ready.then(() => {
      if (!cancelled) {
        sheet.sequence.position = 0;
        void sheet.sequence.play({ iterationCount: 1 });
      }
    });
    return () => {
      cancelled = true;
      unsub();
      sheet.sequence.pause();
    };
  }, [sheet]);
  useFrame(({ pointer, clock }, delta) => {
    if (ref.current) {
      ref.current.rotation.y +=
        (rotation.current + pointer.x * 0.24 - ref.current.rotation.y) *
        Math.min(1, delta * 5);
      ref.current.rotation.x +=
        (-pointer.y * 0.1 - ref.current.rotation.x) * Math.min(1, delta * 5);
      ref.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.035;
    }
  });
  const plate = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(-1.5, -1.6);
    shape.lineTo(1.5, -1.6);
    shape.lineTo(1.5, 1.6);
    shape.lineTo(-1.5, 1.6);
    shape.closePath();
    for (let x = -1.3; x < 1.4; x += 0.25)
      for (let y = -1.4; y < 1.5; y += 0.25) {
        const hole = new Path();
        if (pattern === "Square") {
          hole.moveTo(x - 0.065, y - 0.065);
          hole.lineTo(x - 0.065, y + 0.065);
          hole.lineTo(x + 0.065, y + 0.065);
          hole.lineTo(x + 0.065, y - 0.065);
          hole.closePath();
        } else hole.absarc(x, y, 0.075, 0, Math.PI * 2, true);
        shape.holes.push(hole);
      }
    return shape;
  }, [pattern]);
  const color =
    kind === "aluminium-bamboo"
      ? "#aa8c50"
      : kind === "designer-panels"
        ? "#b99e86"
        : "#bc9b72";
  return (
    <group ref={ref} rotation={[0, -0.18, 0]}>
      {kind === "perforated-panels" ? (
        <mesh>
          <extrudeGeometry
            args={[plate, { depth: 0.055, bevelEnabled: false }]}
          />
          <meshStandardMaterial
            color={color}
            metalness={0.65}
            roughness={0.4}
            side={DoubleSide}
          />
        </mesh>
      ) : kind === "designer-panels" ? (
        Array.from({ length: 42 }, (_, i) => (
          <mesh
            key={i}
            position={[
              (i % 6) * 0.5 - 1.25,
              Math.floor(i / 6) * 0.45 - 1.35,
              0,
            ]}
            rotation={[0.28 * (i % 2 ? 1 : -1), 0.35, Math.PI / 4]}
          >
            <boxGeometry args={[0.36, 0.36, 0.12]} />
            <meshStandardMaterial
              color={color}
              metalness={0.7}
              roughness={0.35}
            />
          </mesh>
        ))
      ) : (
        Array.from(
          { length: kind === "aluminium-bamboo" ? 12 : 22 },
          (_, i) => (
            <RoundedBox
              key={i}
              position={[
                (i - (kind === "aluminium-bamboo" ? 5.5 : 10.5)) *
                  (kind === "aluminium-bamboo" ? 0.25 : 0.145),
                0,
                0,
              ]}
              args={[
                kind === "box-profiles" ? 0.095 : 0.135,
                3.3,
                kind === "box-profiles" ? 0.3 : 0.24,
              ]}
              radius={kind === "aluminium-bamboo" ? 0.065 : 0.025}
              smoothness={3}
            >
              <meshStandardMaterial
                color={color}
                metalness={kind === "aluminium-bamboo" ? 0.15 : 0.72}
                roughness={0.36}
              />
            </RoundedBox>
          ),
        )
      )}
    </group>
  );
}
export default function PanelScene({
  kind,
  hero,
}: {
  kind: string;
  hero: boolean;
}) {
  const [pattern, setPattern] = useState("Round");
  useEffect(() => {
    if (
      process.env.NODE_ENV === "development" &&
      new URLSearchParams(location.search).has("studio")
    )
      import("@theatre/studio").then(({ default: studio }) =>
        studio.initialize(),
      );
  }, []);
  return (
    <>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.5], fov: 43 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.6} />
        <directionalLight position={[2, 4, 5]} intensity={4} />
        <directionalLight position={[-3, 1, 2]} intensity={2} color="#e3e8e4" />
        <Panel kind={kind} hero={hero} pattern={pattern} />
      </Canvas>
      {kind === "perforated-panels" && (
        <div
          className="pattern-toggle"
          role="group"
          aria-label="3D perforation pattern"
        >
          {["Round", "Square"].map((p) => (
            <button
              key={p}
              aria-pressed={p === pattern}
              onClick={() => setPattern(p)}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
