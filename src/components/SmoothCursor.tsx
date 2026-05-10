"use client";

import { useEffect, useRef } from "react";

/**
 * Awwwards-style cursor:
 * - Small dot + soft trailing ring with `mix-blend-mode: difference` so it
 *   auto-inverts against any background (works in both themes).
 * - Magnetic snap toward links/buttons: the ring grows, eases ~25% toward the
 *   element's center, and the dot fades — a subtle pull, not a hard latch.
 *
 * Disabled on touch / reduced-motion. No external deps.
 */

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, label, summary, [data-cursor="hover"]';

const RING_IDLE = 30;
const RING_HOVER = 58;
const DOT_SIZE = 5;
const MAGNET_PULL = 0.22;
const POSITION_LERP = 0.18;
const SIZE_LERP = 0.22;

function lerp(a: number, b: number, n: number) {
  return a + (b - a) * n;
}

export default function SmoothCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rawPos = useRef({ x: 0, y: 0 });
  const ringTarget = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0, size: RING_IDLE });
  const isHovering = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    const root = document.documentElement;
    root.classList.add("cursor-custom-on");

    const onMove = (e: MouseEvent) => {
      rawPos.current.x = e.clientX;
      rawPos.current.y = e.clientY;

      const el = (e.target as Element | null)?.closest?.(
        INTERACTIVE_SELECTOR
      ) as HTMLElement | null;

      if (el) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        ringTarget.current.x = e.clientX + (cx - e.clientX) * MAGNET_PULL;
        ringTarget.current.y = e.clientY + (cy - e.clientY) * MAGNET_PULL;
        isHovering.current = true;
      } else {
        ringTarget.current.x = e.clientX;
        ringTarget.current.y = e.clientY;
        isHovering.current = false;
      }

      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const tick = () => {
      ringPos.current.x = lerp(
        ringPos.current.x,
        ringTarget.current.x,
        POSITION_LERP
      );
      ringPos.current.y = lerp(
        ringPos.current.y,
        ringTarget.current.y,
        POSITION_LERP
      );
      const wantSize = isHovering.current ? RING_HOVER : RING_IDLE;
      ringPos.current.size = lerp(ringPos.current.size, wantSize, SIZE_LERP);

      const ring = ringRef.current;
      const dot = dotRef.current;
      if (ring) {
        ring.style.width = `${ringPos.current.size}px`;
        ring.style.height = `${ringPos.current.size}px`;
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
        ring.style.background = isHovering.current
          ? "rgba(255,255,255,0.95)"
          : "transparent";
        ring.style.borderColor = isHovering.current
          ? "transparent"
          : "rgba(255,255,255,0.85)";
      }
      if (dot) {
        dot.style.transform = `translate3d(${rawPos.current.x}px, ${rawPos.current.y}px, 0) translate(-50%, -50%)`;
        dot.style.opacity = isHovering.current ? "0" : "1";
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafRef.current);
      root.classList.remove("cursor-custom-on");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] rounded-full opacity-0"
        style={{
          width: RING_IDLE,
          height: RING_IDLE,
          borderWidth: 1.5,
          borderStyle: "solid",
          borderColor: "rgba(255,255,255,0.85)",
          background: "transparent",
          mixBlendMode: "difference",
          willChange: "transform, width, height, background, border-color",
          transitionProperty: "opacity",
          transitionDuration: "150ms",
        }}
        aria-hidden
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10001] rounded-full opacity-0"
        style={{
          width: DOT_SIZE,
          height: DOT_SIZE,
          background: "#ffffff",
          mixBlendMode: "difference",
          willChange: "transform, opacity",
          transitionProperty: "opacity",
          transitionDuration: "150ms",
        }}
        aria-hidden
      />
    </>
  );
}
