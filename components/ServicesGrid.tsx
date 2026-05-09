"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

type Service = { title: string; image: string };

const servicesLeft: Service[] = [
  { title: "Digital PR", image: "/FeaturesWork/1.png" },
  { title: "Search & Growth Strategy", image: "/FeaturesWork/2.png" },
  { title: "Data & Insights", image: "/FeaturesWork/3.png" },
];

const servicesRight: Service[] = [
  { title: "Organic Social & Content", image: "/FeaturesWork/4.png" },
  { title: "Content Experience", image: "/FeaturesWork/5.png" },
  { title: "Onsite SEO", image: "/FeaturesWork/1.png" },
];

const ServiceItem = ({
  item,
  isHover,
  onEnter,
  onLeave,
}: {
  item: Service;
  isHover: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) => (
  <Box
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    sx={{
      position: "relative",
      borderBottom: "1px solid #ddd",
      cursor: "pointer",
      overflow: "hidden",
      borderRadius: isHover ? "999px" : "0px",
      transition: "border-radius 0.45s ease",
    }}
  >
    {/* Background image */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        opacity: isHover ? 1 : 0,
        transform: isHover ? "scale(1)" : "scale(1.06)",
        transition: "opacity 0.45s ease, transform 0.6s ease",
        zIndex: 1,
        borderRadius: "999px",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={item.image}
        alt=""
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.42)",
        }}
      />
    </Box>

    {/* Content row */}
    <Box
      sx={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        gap: { xs: 1.5, md: 2.5 },
        py: { xs: 3, md: 4 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: isHover ? { xs: 36, md: 48 } : 0,
          opacity: isHover ? 1 : 0,
          transform: isHover ? "translateX(0)" : "translateX(-10px)",
          overflow: "hidden",
          transition:
            "opacity 0.35s ease, transform 0.45s ease, width 0.45s ease",
          color: "#fff",
          flexShrink: 0,
        }}
      >
        <NorthEastIcon sx={{ fontSize: { xs: 28, md: 38 } }} />
      </Box>

      <Typography
        sx={{
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: 500,
          color: isHover ? "#fff" : "#000",
          transition: "color 0.3s ease",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {item.title}
      </Typography>
    </Box>
  </Box>
);

const ServicesSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Box sx={{ px: { xs: 3, md: 8 }, py: 8 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 6,
        }}
      >
        <Typography sx={{ fontSize: "72px", fontWeight: 600 }}>
          Our Services
        </Typography>

        <Button
          sx={{
            borderRadius: "999px",
            px: 4,
            py: 1.5,
            background: "#fff",
            color: "#111",
            fontWeight: 600,
            fontSize: "0.88rem",
            textTransform: "none",
            boxShadow: "none",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
            "&:hover": { background: "#f5f5f5" },
            "&:hover .text": { transform: "translateY(-120%)" },
            "&:hover .text-hover": { transform: "translateY(0%)" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: "1.2em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Box
              className="text"
              sx={{
                transition: "0.35s ease",
                transform: "translateY(0%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              View All Services ↗
            </Box>
            <Box
              className="text-hover"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: "translateY(120%)",
                transition: "0.35s ease",
              }}
            >
              View All Services ↗
            </Box>
          </Box>
        </Button>
      </Box>

      <Box sx={{ borderBottom: "1px solid #ddd", mb: 4 }} />

      {/* Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
        }}
      >
        <Box>
          {servicesLeft.map((item) => (
            <ServiceItem
              key={item.title}
              item={item}
              isHover={hovered === item.title}
              onEnter={() => setHovered(item.title)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </Box>

        <Box>
          {servicesRight.map((item) => (
            <ServiceItem
              key={item.title}
              item={item}
              isHover={hovered === item.title}
              onEnter={() => setHovered(item.title)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;
