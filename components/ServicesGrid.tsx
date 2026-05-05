"use client";

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const servicesLeft = [
  {
    title: "Digital PR",
    image: "/images/service1.jpg",
  },
  {
    title: "Search & Growth Strategy",
  },
  {
    title: "Data & Insights",
  },
];

const servicesRight = [
  { title: "Organic Social & Content" },
  { title: "Content Experience" },
  { title: "Onsite SEO" },
];

const ServicesSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <Box sx={{ background: "#f5f5f5", px: { xs: 3, md: 8 }, py: 8 }}>
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
            px: 3,
            py: 1,
            background: "#fff",
            color: "#000",
            textTransform: "none",
          }}
        >
          View All Services ↗
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
        {/* LEFT */}
        <Box>
          {servicesLeft.map((item, i) => {
            const isHover = hovered === item.title;

            return (
              <Box
                key={i}
                onMouseEnter={() => setHovered(item.title)}
                onMouseLeave={() => setHovered(null)}
                sx={{
                  position: "relative",
                  py: 4,
                  borderBottom: "1px solid #ddd",
                  cursor: "pointer",
                  overflow: "hidden",
                }}
              >
                {/* BACKGROUND IMAGE */}
                {item.image && (
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      opacity: isHover ? 1 : 0,
                      transform: isHover ? "scale(1)" : "scale(1.05)",
                      transition: "all 0.5s ease",
                      zIndex: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "80px",
                      }}
                    />

                    {/* DARK OVERLAY (for readability) */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.35)",
                        borderRadius: "80px",
                      }}
                    />
                  </Box>
                )}

                {/* TEXT */}
                <Typography
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    fontSize: { xs: "28px", md: "40px" },
                    fontWeight: 500,
                    color: isHover ? "#fff" : "#000",
                    transition: "all 0.3s ease",
                    pl: 2,
                  }}
                >
                  {isHover && "7 "}
                  {item.title}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* RIGHT */}
        <Box>
          {servicesRight.map((item, i) => (
            <Box
              key={i}
              sx={{
                py: 4,
                borderBottom: "1px solid #ddd",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "28px", md: "40px" },
                  fontWeight: 500,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesSection;