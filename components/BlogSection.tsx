"use client";
import { Box, Container, Typography, Grid, Avatar } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const posts = [
  {
    category: "SEO",
    title: "Where are your customers actually searching in 2025?",
    excerpt:
      "New data reveals the shift from traditional search to AI-powered discovery — and what it means for your organic strategy.",
    author: "Carrie Rose",
    authorInitials: "CR",
    date: "Apr 28, 2025",
    readTime: "5 min read",
    bgColor: "#f0f0f0",
  },
  {
    category: "Digital PR",
    title: "The Death of the Press Release: What's Actually Working in PR Right Now",
    excerpt:
      "Traditional PR tactics are losing ground fast. Here's what the data says is actually driving coverage and links in 2025.",
    author: "Ray Saddiq",
    authorInitials: "RS",
    date: "Apr 22, 2025",
    readTime: "7 min read",
    bgColor: "#f0f0f0",
  },
  {
    category: "Social SEO",
    title: "TikTok, Reddit & AI Overviews: The New Search Landscape",
    excerpt:
      "Search is no longer just Google. We break down which platforms are capturing search intent and how to show up on all of them.",
    author: "Carrie Rose",
    authorInitials: "CR",
    date: "Apr 15, 2025",
    readTime: "6 min read",
    bgColor: "#f0f0f0",
  },
];

export default function BlogSection() {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 12 }, borderBottom: "1px solid #e0e0e0" }}>
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
              Latest thinking
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
              News & Insights
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
            <Typography sx={{ fontWeight: 700, fontSize: "0.875rem" }}>View all articles</Typography>
            <ArrowForwardIcon sx={{ fontSize: "1rem" }} />
          </Box>
        </Box>

        {/* Blog Cards */}
        <Grid container spacing={0}>
          {posts.map((post, index) => (
            <Grid
              key={post.title}
              size={{ xs: 12, md: 4 }}
              sx={{
                borderRight: {
                  xs: "none",
                  md: index !== posts.length - 1 ? "1px solid #e0e0e0" : "none",
                },
                cursor: "pointer",
                "&:hover": { "& .blog-title": { textDecoration: "underline" } },
              }}
            >
              {/* Image Placeholder */}
              <Box
                sx={{
                  bgcolor: post.bgColor,
                  height: "220px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid #e0e0e0",
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    bgcolor: "#ddd",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "2rem" }}>📰</Typography>
                </Box>
              </Box>

              {/* Content */}
              <Box sx={{ p: 4 }}>
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
                  {post.category}
                </Box>

                <Typography
                  className="blog-title"
                  sx={{
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                    mb: 2,
                  }}
                >
                  {post.title}
                </Typography>

                <Typography sx={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.6, mb: 3 }}>
                  {post.excerpt}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: "#000",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                    }}
                  >
                    {post.authorInitials}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 700 }}>{post.author}</Typography>
                    <Typography sx={{ fontSize: "0.75rem", color: "#888" }}>
                      {post.date} · {post.readTime}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
