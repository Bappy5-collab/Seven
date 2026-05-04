"use client";
import { Box, Container, Typography, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const services = [
  {
    title: "Search & Growth Strategy",
    desc: "Data-led strategies that build sustainable organic growth and market visibility.",
    icon: "📊",
  },
  {
    title: "Onsite SEO",
    desc: "Technical and content optimisation that makes your site the destination for search.",
    icon: "🔍",
  },
  {
    title: "Content Experience",
    desc: "Search-first content that creates, captures and converts demand at every stage.",
    icon: "✍️",
  },
  {
    title: "B2B Marketing",
    desc: "Connecting complex B2B brands to the right audiences through organic channels.",
    icon: "🤝",
  },
  {
    title: "Digital PR",
    desc: "Authoritative coverage and links from the publications your customers trust.",
    icon: "📰",
  },
  {
    title: "Social Media & Campaigns",
    desc: "Social strategies that drive awareness, engagement and organic discovery.",
    icon: "📱",
  },
  {
    title: "Data & Insights",
    desc: "Intelligence that powers smarter decisions across every organic channel.",
    icon: "📈",
  },
  {
    title: "Social SEO / Search",
    desc: "Optimising your brand presence wherever your customers are searching next.",
    icon: "🔎",
  },
];

export default function ServicesGrid() {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 12 }, borderBottom: "1px solid #e0e0e0" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        {/* Section Header */}
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
              What we do
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
              Our Services
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
            <Typography sx={{ fontWeight: 700, fontSize: "0.875rem" }}>View all services</Typography>
            <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
          </Box>
        </Box>

        {/* Services Grid */}
        <Grid container>
          {services.map((service, index) => (
            <Grid
              key={service.title}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                borderRight: { xs: "none", sm: index % 2 === 0 ? "1px solid #e0e0e0" : "none", md: index % 4 !== 3 ? "1px solid #e0e0e0" : "none" },
                borderBottom: "1px solid #e0e0e0",
                p: 4,
                cursor: "pointer",
                transition: "background 0.2s",
                "&:hover": { bgcolor: "#f9f9f9" },
                "&:hover .arrow": { opacity: 1 },
              }}
            >
              <Typography sx={{ fontSize: "2rem", mb: 2 }}>{service.icon}</Typography>
              <Typography sx={{ fontWeight: 800, fontSize: "1rem", mb: 1.5, letterSpacing: "-0.01em" }}>
                {service.title}
              </Typography>
              <Typography sx={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.6, mb: 3 }}>
                {service.desc}
              </Typography>
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
                <Typography sx={{ fontSize: "0.8rem", fontWeight: 700 }}>Learn more</Typography>
                <ArrowForwardIcon sx={{ fontSize: "0.9rem" }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
