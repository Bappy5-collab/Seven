"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const bannerImages = [
  "/banner/banner-1.png",
  "/banner/banner-2.png",
  "/banner/banner-3.png",
];

const awardLogos = [
  { abbr: "GLOBAL\nSEARCH\nAWARDS" },
  { abbr: "The\nDrum" },
  { abbr: "UK Social\nMedia\nAwards" },
  { abbr: "CONTENT\nAWARDS" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  // Set random starting image on each page load (client-side only to avoid hydration mismatch)
  useEffect(() => {
    const random = Math.floor(Math.random() * bannerImages.length);
    setCurrent(random);
  }, []);

  // Change image every 1 minute
  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % bannerImages.length);
        setFading(false);
      }, 600);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        bgcolor: "#000",
        borderRadius: "25px",
        mb: "12px",
      }}
    >
      {/* Background images */}
      {bannerImages.map((src, idx) => (
        <Box
          key={src}
          sx={{
            position: "absolute",
            inset: 0,
            opacity: idx === current ? (fading ? 0 : 1) : 0,
            transition: "opacity 0.6s ease-in-out",
            zIndex: 0,
          }}
        >
          <Image
            src={src}
            alt={`Banner ${idx + 1}`}
            fill
            priority={idx === 0}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              filter: "blur(7px) brightness(0.85)",
              transform: "scale(1.05)",
            }}
          />
        </Box>
      ))}

      {/* Dark gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.60) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: "100px", md: "130px" },
          flexGrow: 1,
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {/* Awards badge */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: { xs: 2, md: 3 } }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "0.62rem", md: "0.7rem" },
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1.7,
              mb: 1.5,
              opacity: 0.9,
            }}
          >
            #1 Most Recommended
            <br />
            Content Marketing Agency
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 1.5 } }}>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "1.1rem" }}>❧</Typography>
            {awardLogos.map((a, i) => (
              <Box
                key={i}
                sx={{
                  border: "1px solid rgba(255,255,255,0.45)",
                  px: { xs: 1, md: 1.5 },
                  py: { xs: 0.5, md: 0.8 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: { xs: "44px", md: "58px" },
                  height: { xs: "36px", md: "44px" },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "0.42rem", md: "0.52rem" },
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    textAlign: "center",
                    lineHeight: 1.3,
                    whiteSpace: "pre-line",
                    opacity: 0.9,
                  }}
                >
                  {a.abbr}
                </Typography>
              </Box>
            ))}
            <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "1.1rem" }}>❧</Typography>
          </Box>
        </Box>

        {/* Giant Headline */}
        <Box sx={{ textAlign: "center", px: { xs: 2, md: 4 }, width: "100%" }}>
          {/* Line 1: We Create */}
          <Typography
            component="div"
            sx={{
              fontSize: { xs: "3.8rem", sm: "5.5rem", md: "6rem", lg: "8rem" },
              fontWeight: 600,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              color: "#fff",
              textAlign: "center",
            }}
          >
            We Create
          </Typography>

          {/* Line 2: Category [inline image] Leaders */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: { xs: "wrap", md: "nowrap" },
              rowGap: { xs: "0.1rem", md: 0 },
              gap: { xs: "0.4rem", md: "0.8rem" },
              mt: { xs: "0.1rem", md: "0.2rem" },
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: { xs: "3.8rem", sm: "5.5rem", md: "6rem", lg: "8rem" },
                fontWeight: 600,
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
                color: "#fff",
              }}
            >
              Category
            </Typography>

            {/* Inline image — rounded rectangle, same as original */}
            <Box
              sx={{
                width: { xs: "52px", sm: "72px", md: "100px", lg: "120px" },
                height: { xs: "52px", sm: "72px", md: "100px", lg: "120px" },
                borderRadius: { xs: "14px", md: "20px" },
                overflow: "hidden",
                flexShrink: 0,
                position: "relative",
                border: "2px solid rgba(255,255,255,0.25)",
                opacity: fading ? 0 : 1,
                transition: "opacity 0.6s ease-in-out",
              }}
            >
              <Image
                src={bannerImages[current]}
                alt="Inline preview"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </Box>

            <Typography
              component="span"
              sx={{
                fontSize: { xs: "3.8rem", sm: "5.5rem", md: "6rem", lg: "8rem" },
                fontWeight: 600,
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
                color: "#fff",
              }}
            >
              Leaders
            </Typography>
          </Box>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "2rem" },
              color: "rgba(255,255,255,0.82)",
              fontWeight: 600,
              mt: 3,
              letterSpacing: "-0.01em",
            }}
          >
            on every searchable platform
          </Typography>
        </Box>
      </Box>

      {/* Bottom info bar */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "flex-end" },
          textAlign: { xs: "center", md: "left" },
          gap: { xs: 2, md: 0 },
          px: { xs: 3, md: 5 },
          pb: 4,
          pt: 6,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "0.72rem", md: "0.88rem" },
            maxWidth: "390px",
            lineHeight: 1.6,
            fontWeight: 500,
            order: { xs: 2, md: 1 },
          }}
        >
          Organic media planners creating, distributing & optimising
          <br />
          search-first content for SEO, Social, PR, AI & LLM search.
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "0.72rem", md: "0.88rem" },
            maxWidth: "390px",
            lineHeight: 1.6,
            fontWeight: 500,
            order: { xs: 1, md: 2 },
          }}
        >
          4 Global Offices serving
          <br />
          UK, USA (New York) & EU
        </Typography>
      </Box>
    </Box>
  );
}
