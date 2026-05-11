"use client";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function AlertBanner() {
  // 0 = full-screen FLAT green sheet — square corners, flat bottom, no arch, text hidden
  // 1 = the sheet rises up to the top, growing a rounded arched bottom on the way up
  //     (the arch stays visible the whole way to the top)
  // 2 = parked at the top: the arch smooths back out into the plain little pill
  // 3 = overlay removed; the banner is just its normal self underneath
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 800 + 1100);
    const t3 = setTimeout(() => setPhase(3), 800 + 1100 + 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const fullscreen = phase === 0; // flat, covering the whole screen
  const rising = phase === 1; // mid-flight: rounded + arched
  const showOverlay = phase < 3;

  return (
    <Box
      component="a"
      href="https://riseatseven.com/multi-channel-search-report-2026-/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        bgcolor: "#a8f5e0",
        color: "#000",
        py: 1,
        px: 2,
        mx: "12px",
        mt: "10px",
        minHeight: "40px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        cursor: "pointer",
        textDecoration: "none",
        position: "relative",
        zIndex: 101,
        "&:hover": { bgcolor: "#90f0d4" },
      }}
    >
      {/* Page-load intro overlay. It starts as a dead-flat full-screen green
          sheet (no rounding, no arch). As it rises up into the banner's place
          it rounds its corners AND its own bottom edge curves up into a deep
          arch (see sketch) — the sheet itself is clipped to that shape, so
          there's nothing painted below it: you only ever see the green sheet,
          with the page showing through where it's clipped away. Once parked
          the arch smooths back out into the plain little pill. position:fixed,
          so the page underneath never reflows and the rise stays smooth. */}
      {showOverlay && (
        <Box
          aria-hidden
          sx={{
            position: "fixed",
            top: fullscreen ? 0 : "10px",
            left: fullscreen ? 0 : "12px",
            right: fullscreen ? 0 : "12px",
            height: fullscreen ? "100vh" : "40px",
            bgcolor: "#a8f5e0",
            // square while full-screen; rounds up as it rises
            borderRadius: fullscreen ? "0px" : "14px",
            zIndex: 2,
            // The bottom edge: flat while full-screen / parked, a deep upward
            // arch (apex ~48% up the sheet, landing on the bottom corners)
            // while rising. Same vertex count in both polygons so it tweens.
            clipPath: rising
              ? "polygon(0% 0%, 100% 0%, 100% 100%, 93.75% 88.1%, 87.5% 78.1%, 75% 63.4%, 62.5% 54.8%, 50% 52%, 37.5% 54.8%, 25% 63.4%, 12.5% 78.1%, 6.25% 88.1%, 0% 100%)"
              : "polygon(0% 0%, 100% 0%, 100% 100%, 93.75% 100%, 87.5% 100%, 75% 100%, 62.5% 100%, 50% 100%, 37.5% 100%, 25% 100%, 12.5% 100%, 6.25% 100%, 0% 100%)",
            transition:
              "top 1.85s cubic-bezier(0.16,1,0.3,1), left 1.85s cubic-bezier(0.16,1,0.3,1), right 1.85s cubic-bezier(0.16,1,0.3,1), height 1.85s cubic-bezier(0.16,1,0.3,1), border-radius 1.85s cubic-bezier(0.16,1,0.3,1), clip-path 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      )}
      <Typography
        sx={{
          fontSize: { xs: "0.75rem", md: "0.82rem" },
          fontWeight: 700,
          textAlign: "center",
          lineHeight: 1.25,
          position: "relative",
          zIndex: 3,
          opacity: fullscreen || rising ? 0 : 1,
          transition: "opacity 0.5s ease 0.15s",
        }}
      >
        🚨 Where are your customers actually searching? Download the report
      </Typography>
    </Box>
  );
}
