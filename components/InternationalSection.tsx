"use client";
import { Box, Container, Typography, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const markets = [
  { country: "United States", city: "New York", flag: "🇺🇸", services: "Digital PR · SEO · Social" },
  { country: "Spain", city: "Madrid", flag: "🇪🇸", services: "Digital PR · Content · SEO" },
  { country: "Germany", city: "Berlin", flag: "🇩🇪", services: "Digital PR · SEO · Strategy" },
  { country: "Netherlands", city: "Amsterdam", flag: "🇳🇱", services: "Digital PR · SEO · Social" },
];

export default function InternationalSection() {
  return (
    <Box sx={{ bgcolor: "#000", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            mb: 6,
            gap: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#888",
                mb: 1,
              }}
            >
              Global reach
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "#fff",
              }}
            >
              International
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              "&:hover": { opacity: 0.7 },
              pb: 0.5,
              borderBottom: "2px solid #fff",
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "0.875rem", color: "#fff" }}>View international</Typography>
            <ArrowForwardIcon sx={{ fontSize: "1rem", color: "#fff" }} />
          </Box>
        </Box>

        {/* Markets Grid */}
        <Grid container spacing={0}>
          {markets.map((market, index) => (
            <Grid
              key={market.country}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                borderRight: {
                  xs: "none",
                  md: index !== markets.length - 1 ? "1px solid #333" : "none",
                },
                borderBottom: { xs: "1px solid #333", md: "none" },
                p: { xs: 4, md: 5 },
                cursor: "pointer",
                "&:hover": { bgcolor: "#111" },
              }}
            >
              <Typography sx={{ fontSize: "3rem", mb: 3 }}>{market.flag}</Typography>
              <Typography
                sx={{ color: "#fff", fontWeight: 900, fontSize: "1.3rem", mb: 0.5, letterSpacing: "-0.02em" }}
              >
                {market.country}
              </Typography>
              <Typography sx={{ color: "#888", fontSize: "0.875rem", mb: 2 }}>{market.city}</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {market.services.split(" · ").map((s) => (
                  <Box
                    key={s}
                    sx={{
                      border: "1px solid #444",
                      px: 1.5,
                      py: 0.5,
                      fontSize: "0.7rem",
                      color: "#aaa",
                      fontWeight: 600,
                    }}
                  >
                    {s}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
