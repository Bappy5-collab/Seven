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
    {/* Background image — desktop hover only */}
    <Box
      sx={{
        display: { xs: "none", md: "block" },
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
        gap: { xs: 2, md: 2.5 },
        py: { xs: 2, md: 4 },
        px: { xs: 0, md: 3 },
      }}
    >
      {/* Mobile-only thumbnail */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          width: 56,
          height: 56,
          borderRadius: "10px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={item.image}
          alt=""
          sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </Box>

      {/* Desktop hover arrow */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          width: isHover ? 48 : 0,
          opacity: isHover ? 1 : 0,
          transform: isHover ? "translateX(0)" : "translateX(-10px)",
          overflow: "hidden",
          transition:
            "opacity 0.35s ease, transform 0.45s ease, width 0.45s ease",
          color: "#fff",
          flexShrink: 0,
        }}
      >
        <NorthEastIcon sx={{ fontSize: 38 }} />
      </Box>

      <Typography
        sx={{
          fontSize: { xs: "1.55rem", md: "40px" },
          fontWeight: 500,
          color: isHover ? "#fff" : "#000",
          transition: "color 0.3s ease",
          whiteSpace: { xs: "normal", md: "nowrap" },
          lineHeight: { xs: 1.1, md: "inherit" },
          letterSpacing: { xs: "-0.02em", md: "inherit" },
          overflow: "hidden",
          textOverflow: { xs: "clip", md: "ellipsis" },
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
      {/* Mobile heading: "Our [img] Services" */}
      <Box sx={{ display: { xs: "block", md: "none" }, mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            columnGap: 1.2,
            rowGap: 0.5,
          }}
        >
          <Typography
            sx={{
              fontSize: "3.6rem",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#111",
            }}
          >
            Our
          </Typography>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: "12px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src="/Banner/Driving.png"
              alt=""
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: "3.6rem",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#111",
              width: "100%",
            }}
          >
            Services
          </Typography>
        </Box>
      </Box>

      {/* Desktop header */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
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

      <Box sx={{ display: { xs: "none", md: "block" }, borderBottom: "1px solid #ddd", mb: 4 }} />

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

      {/* Mobile-only: full-width "View All Services" button at the bottom */}
      <Button
        fullWidth
        sx={{
          display: { xs: "flex", md: "none" },
          mt: 4,
          borderRadius: "999px",
          py: 2,
          background: "#fff",
          color: "#111",
          fontWeight: 600,
          fontSize: "1rem",
          textTransform: "none",
          boxShadow: "none",
          border: "1px solid #ddd",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          "&:hover": { background: "#f5f5f5" },
        }}
      >
        View All Services ↗
      </Button>
    </Box>
  );
};

export default ServicesSection;
