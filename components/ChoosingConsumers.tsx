"use client";
import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { Box, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const IMG_LEFT = "/FeaturesWork/3.png";
const IMG_RIGHT = "/FeaturesWork/4.png";

function MarqueeUnit() {
  const wordSx = {
    fontSize: { xs: "14vw", md: "10.5vw" },
    fontWeight: 500,
    letterSpacing: "-0.03em",
    lineHeight: 1,
    color: "#0a0a0a",
    whiteSpace: "nowrap" as const,
  };
  const imgSx = {
    width: { xs: 90, md: 180 },
    height: { xs: 90, md: 180 },
    borderRadius: { xs: "20px", md: "28px" },
    objectFit: "cover" as const,
    flexShrink: 0,
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: { xs: 3, md: 5 },
        pr: { xs: 3, md: 5 },
      }}
    >
      <Typography component="span" sx={wordSx}>
        Choosing Consumers
      </Typography>
      <Box component="img" src={IMG_LEFT} alt="" sx={imgSx} />
      <Typography component="span" sx={wordSx}>
        Not Algorithms
      </Typography>
      <Box component="img" src={IMG_RIGHT} alt="" sx={imgSx} />
    </Box>
  );
}

export default function ChoosingConsumers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <Box
      ref={sectionRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      sx={{
        position: "relative",
        bgcolor: "#f0f0ec",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
        cursor: { md: "none" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "choosingMarquee 28s linear infinite",
          "@keyframes choosingMarquee": {
            "0%": { transform: "translate3d(0, 0, 0)" },
            "100%": { transform: "translate3d(-50%, 0, 0)" },
          },
        }}
      >
        {/* duplicated for a seamless loop — translating by -50% lands on the
            start of the second copy */}
        <MarqueeUnit />
        <MarqueeUnit />
      </Box>

      {/* cursor-following CTA pill (desktop only) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
          pointerEvents: "none",
          opacity: hovering ? 1 : 0,
          transition: "opacity 0.2s ease",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 1,
          bgcolor: "#b8f4cf",
          color: "#0a0a0a",
          pl: 2.5,
          pr: 2,
          py: 1.4,
          borderRadius:'30px',
          fontWeight: 600,
          fontSize: "0.95rem",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          zIndex: 5,
        }}
      >
        Send Us Your Brief
        <NorthEastIcon sx={{ fontSize: 16 }} />
      </Box>
    </Box>
  );
}
