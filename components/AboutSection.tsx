"use client";
import { Box, Container, Typography, Grid } from "@mui/material";

const pillars = [
  {
    title: "Pioneers",
    desc: "We created the category of organic media and we continue to push its boundaries every day.",
    number: "01",
  },
  {
    title: "Award Winning",
    desc: "79 awards and counting. Recognition from the industry's most respected bodies for our work and culture.",
    number: "02",
  },
  {
    title: "Speed",
    desc: "60 minutes from idea to published. We move at the speed of search and social culture.",
    number: "03",
  },
];

export default function AboutSection() {
  return (
    <Box sx={{ bgcolor: "#efeeec", py: { xs: 8, md: 12 }, borderBottom: "1px solid #e0e0e0" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        <Grid container spacing={0} sx={{ alignItems: "stretch" }}>
          {/* Left: About text */}
          <Grid size={{ xs: 12, md: 5 }} sx={{ pr: { md: 8 }, mb: { xs: 6, md: 0 } }}>
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
              Who we are
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 900,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                mb: 4,
              }}
            >
              Create Category Leaders
            </Typography>
            <Typography sx={{ color: "#555", fontSize: "1rem", lineHeight: 1.8, mb: 3 }}>
              Rise at Seven is an organic media agency. We&apos;re not a traditional SEO agency, not a content agency,
              not a PR agency — we&apos;re all three working together, at speed.
            </Typography>
            <Typography sx={{ color: "#555", fontSize: "1rem", lineHeight: 1.8, mb: 3 }}>
              We exist to make brands the most visible and authoritative in their space, across search, social, and
              AI discovery.
            </Typography>
            <Typography sx={{ color: "#555", fontSize: "1rem", lineHeight: 1.8 }}>
              Founded in 2019, we&apos;ve grown to 4 offices and 200+ team members. Our work has won 79 awards and
              created measurable, lasting growth for our clients.
            </Typography>
          </Grid>

          {/* Right: Pillars */}
          <Grid size={{ xs: 12, md: 7 }} sx={{ borderLeft: { md: "1px solid #e0e0e0" }, pl: { md: 8 } }}>
            {pillars.map((pillar, index) => (
              <Box
                key={pillar.title}
                sx={{
                  display: "flex",
                  gap: 4,
                  pb: 5,
                  mb: 5,
                  borderBottom: index !== pillars.length - 1 ? "1px solid #e0e0e0" : "none",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#ccc",
                    letterSpacing: "0.1em",
                    flexShrink: 0,
                    mt: 0.5,
                  }}
                >
                  {pillar.number}
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: "1.5rem", md: "2rem" },
                      letterSpacing: "-0.02em",
                      mb: 1.5,
                      textTransform: "uppercase",
                    }}
                  >
                    {pillar.title}
                  </Typography>
                  <Typography sx={{ color: "#666", fontSize: "0.95rem", lineHeight: 1.7 }}>
                    {pillar.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
