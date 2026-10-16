"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photos = [
  { src: "/photos/alto-performance.webp", alt: "Playing alto saxophone with the band at Waterloo", width: 1200, height: 1009 },
  { src: "/photos/outdoor-jazz.webp", alt: "Playing saxophone at an outdoor performance", width: 700, height: 1505 },
  { src: "/photos/hack-the-north.webp", alt: "With my saxophone and the goose mascot at Hack the North", width: 900, height: 1200 },
];

export default function GhostNotes() {
  const [open, setOpen] = useState(false);
  const entry = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (!entry.current?.contains(event.target as Node)) setOpen(false);
    };
    const dismissWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", dismissWithEscape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", dismissWithEscape);
    };
  }, [open]);

  return (
    <div ref={entry} className="music-entry" data-open={open}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setOpen(true); }}
      onPointerLeave={() => setOpen(false)}
      onFocusCapture={(event) => { if (event.target.tagName === "A") setOpen(true); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <div className="music-summary">
        <span className="text-soft" aria-hidden>↳</span>
        <a className="link-quiet" href="https://www.instagram.com/ghost_notes_official/" target="_blank" rel="noopener noreferrer" aria-describedby="ghost-notes-venues">ghost notes</a>
        <span id="ghost-notes-venues" className="text-muted text-[13px]">(Played at Hack the North, restaurants, and coffee shops)</span>
        <span className="text-muted">— I lead a jazz band and play alto saxophone.</span>
        <button type="button" className="music-toggle text-muted" aria-expanded={open} aria-controls="ghost-notes-photos" onClick={() => setOpen(!open)}>{open ? "hide photos" : "photos"}</button>
      </div>
      <div id="ghost-notes-photos" className="music-gallery" aria-hidden={!open} inert={!open}>
        <div className="photo-strip">
          {photos.map((photo) => (
            <a key={photo.src} href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`View photo: ${photo.alt}`}>
              <Image {...photo} alt={photo.alt} sizes="(max-width: 640px) 30vw, 270px" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
