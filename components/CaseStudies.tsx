"use client";
import { Box, Container, Typography, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const caseStudies = [
  {
    client: "SIXT",
    metric: "3m",
    metricLabel: "clicks regionally through SEO",
    category: "SEO",
    bgColor: "#FF6B00",
  },
  {
    client: "Red Bull",
    metric: "420%",
    metricLabel: "increase in organic visibility",
    category: "Content",
    bgColor: "#CC0000",
  },
  {
    client: "JD Sports",
    metric: "#1",
    metricLabel: "rankings for key fashion terms",
    category: "Digital PR",
    bgColor: "#000",
  },
  {
    client: "Parkdean Resorts",
    metric: "65%",
    metricLabel: "growth in organic sessions",
    category: "SEO",
    bgColor: "#1a6b3c",
  },
  {
    client: "Speedo",
    metric: "200%",
    metricLabel: "increase in organic revenue",
    category: "SEO & Content",
    bgColor: "#003087",
  },
  {
    client: "Vodafone",
    metric: "87%",
    metricLabel: "uplift in Share of Voice",
    category: "Digital PR",
    bgColor: "#e60000",
  },
];

export default function CaseStudies() {
  return (
    <Box sx={{ bgcolor: "#f9f9f9", py: { xs: 8, md: 12 }, borderBottom: "1px solid #e0e0e0" }}>
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
              Proven results
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
              }}
            >
              Our Work
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
              borderBottom: "2px solid #000",
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "0.875rem" }}>View all case studies</Typography>
            <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
          </Box>
        </Box>

        {/* Case Studies Grid */}
        <Grid container spacing={0}>
          {caseStudies.map((cs, index) => (
            <Grid
              key={cs.client}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{
                borderRight: {
                  xs: "none",
                  sm: index % 2 === 0 ? "1px solid #e0e0e0" : "none",
                  md: index % 3 !== 2 ? "1px solid #e0e0e0" : "none",
                },
                borderBottom: "1px solid #e0e0e0",
              }}
            >
              {/* Color Block */}
              <Box
                sx={{
                  bgcolor: cs.bgColor,
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: "1.8rem",
                    letterSpacing: "-0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  {cs.client}
                </Typography>
              </Box>

              {/* Content */}
              <Box
                sx={{
                  p: 4,
                  bgcolor: "#fff",
                  cursor: "pointer",
                  "&:hover": { bgcolor: "#f9f9f9" },
                  "&:hover .arrow": { opacity: 1 },
                }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    bgcolor: "#000",
                    color: "#fff",
                    px: 1.5,
                    py: 0.5,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  {cs.category}
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {cs.metric}
                </Typography>
                <Typography sx={{ color: "#666", fontSize: "0.9rem", mb: 3 }}>{cs.metricLabel}</Typography>
                <Box
                  className="arrow"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    opacity: 0,
                    transition: "opacity 0.2s",
                  }}
                >
                  <Typography sx={{ fontSize: "0.8rem", fontWeight: 700 }}>Read case study</Typography>
                  <ArrowForwardIcon sx={{ fontSize: "0.9rem" }} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
