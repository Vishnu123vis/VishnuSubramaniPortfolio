"use client";

import { useEffect, useRef } from "react";

function lerp(a: number, b: number, n: number) {
  return a + (b - a) * n;
}

/**
 * Editorial-style cursor: sharp dot + softly trailing ring (lerp).
 * Uses CSS vars (--fg, --cursor-ring) so it inverts in dark mode.
 * Disabled on touch / reduced-motion. No extra npm deps.
 */
export default function SmoothCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    const root = document.documentElement;
    root.classList.add("cursor-custom-on");

    const move = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const leave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const loop = () => {
      ring.current.x = lerp(ring.current.x, target.current.x, 0.14);
      ring.current.y = lerp(ring.current.y, target.current.y, 0.14);

      const dx = dotRef.current;
      const rx = ringRef.current;
      if (dx) {
        dx.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (rx) {
        rx.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(rafRef.current);
      root.classList.remove("cursor-custom-on");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] opacity-0 transition-opacity duration-150"
        style={{
          width: 32,
          height: 32,
          borderRadius: 9999,
          border: "1px solid var(--cursor-ring)",
          willChange: "transform",
        }}
        aria-hidden
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10001] h-[5px] w-[5px] opacity-0 rounded-full transition-opacity duration-150"
        style={{ background: "var(--fg)", willChange: "transform" }}
        aria-hidden
      />
    </>
  );
}
