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

  const measured = span > 0;
  const sw = measured ? span - startX : 0;

  return (
    <Box ref={containerRef} sx={{ height: "300vh" }}>
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
            // Position-based curve: letter curves while traveling from the
            // right edge of the viewport to the centre. After the centre the
            // letter is fully settled and exits flat.
            // Approximate letter's relative x in heading as (i / n) * sw.
            const charPos = n > 0 && measured ? (i / n) * sw : 0;
            // absolute x of letter at current progress = startX - span*progress + charPos
            // viewport fraction = absX / startX  (1 = right edge, 0 = left edge)
            const absX = measured ? startX - span * progress + charPos : startX;
            const fraction = startX > 0 ? absX / startX : 1;

            let t = 0;
            if (fraction >= 1) t = 0;
            else if (fraction <= 0.5) t = 1;
            else t = (1 - fraction) / 0.5;

            const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
            const ty = (1 - eased) * -60;
            const rot = (1 - eased) * 10;

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
