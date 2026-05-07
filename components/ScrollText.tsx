"use client";
import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

const PHRASE = "Ready to Rise at Seven?";

export default function ScrollText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [progress, setProgress] = useState(0);
  const [startX, setStartX] = useState(0);
  const [span, setSpan] = useState(0);

  useEffect(() => {
    const measure = () => {
      const heading = headingRef.current;
      if (!heading) return;
      // marquee: heading starts fully off-screen to the right (translateX =
      // viewportWidth) and ends fully off-screen to the left (translateX =
      // -scrollWidth). letters appear at the right edge as the heading shifts
      // leftward, exit at the left edge.
      const sw = heading.scrollWidth;
      const vw = window.innerWidth;
      setStartX(vw);
      setSpan(sw + vw);
    };
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      setProgress(Math.min(Math.max(scrolled / total, 0), 1));
    };
    measure();
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const chars = Array.from(PHRASE);
  const n = chars.length;

  // Calibrate per-letter slice timing so each letter's drop-in starts when it
  // crosses the right edge of the viewport during the marquee. The marquee's
  // entry phase covers progress ∈ [0, scrollWidth / span]; after that all
  // letters are visible and the heading continues exiting to the left.
  const measured = span > 0;
  const sw = measured ? span - startX : 0;
  const entryEnd = measured ? sw / span : 1;
  const STAGGER = n > 1 ? entryEnd / (n - 1) : 1;
  // each letter animates for a window slightly longer than one stagger step
  // so adjacent letters overlap → continuous cascade.
  const PER_LETTER = STAGGER * 1.6 || 0.06;

  return (
    <Box ref={containerRef} sx={{ height: "500vh", background: "#f2f2f2" }}>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="h2"
          ref={headingRef}
          aria-label={PHRASE}
          style={{
            // marquee: heading starts at +viewportWidth (off-screen right),
            // ends at -scrollWidth (off-screen left). scroll-up reverses.
            transform: `translate3d(${startX - span * progress}px, 0, 0)`,
            willChange: "transform",
          }}
          sx={{
            flexShrink: 0,
            m: 0,
            px: { xs: 2, md: 6 },
            whiteSpace: "nowrap",
            fontSize: { xs: "30vw", md: "16vw" },
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            color: "#0a0a0a",
            display: "flex",
            alignItems: "baseline",
          }}
        >
          {chars.map((ch, i) => {
            const start = i * STAGGER;
            const end = start + PER_LETTER;
            const local = Math.min(
              Math.max((progress - start) / (end - start), 0),
              1
            );
            // ease-out cubic
            const eased = 1 - Math.pow(1 - local, 3);
            // every letter starts individually at translate(0, -60%) rotate(10deg)
            // and animates out of that state as its slice arrives.
            const ty = (1 - eased) * -60; // %
            const rot = (1 - eased) * 10; // deg

            if (ch === " ") {
              return (
                <span
                  key={i}
                  aria-hidden="true"
                  style={{ display: "inline-block", width: "0.25em" }}
                />
              );
            }

            return (
              <span
                key={i}
                aria-hidden="true"
                style={{
                  position: "relative",
                  display: "inline-block",
                  transform: `translate3d(0, ${ty}%, 0) rotate(${rot}deg)`,
                  transformOrigin: "50% 100%",
                  willChange: "transform",
                }}
              >
                {ch}
              </span>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
