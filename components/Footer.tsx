"use client";
import { Box, Container, Typography, Grid, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const footerLinks = {
  Services: ["Search & Growth Strategy", "Onsite SEO", "Content Experience", "Digital PR", "Social Media", "B2B Marketing", "Data & Insights"],
  Work: ["Case Studies", "Results", "Industries"],
  About: ["Our Story", "Culture", "Meet The Risers", "Testimonials", "Awards"],
  Connect: ["Blog", "Webinars", "Careers", "Get in touch"],
};

const offices = [
  { city: "Sheffield", detail: "HQ — S1 2GU" },
  { city: "Manchester", detail: "M1 1AD" },
  { city: "London", detail: "EC2A 4NE" },
  { city: "New York", detail: "NY 10001" },
];

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#000", color: "#fff", pt: { xs: 8, md: 12 }, pb: 4 }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, md: 6 } }}>
        {/* CTA Band */}
        <Box
          sx={{
            borderTop: "1px solid #222",
            borderBottom: "1px solid #222",
            py: 6,
            mb: 8,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontWeight: 900,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              lineHeight: 1,
              color: "#fff",
              maxWidth: "600px",
            }}
          >
            Ready to create a category leader?
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              borderBottom: "2px solid #fff",
              pb: 0.5,
              flexShrink: 0,
              "&:hover": { opacity: 0.7 },
            }}
          >
            <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "#fff" }}>Get in touch</Typography>
            <ArrowForwardIcon sx={{ color: "#fff" }} />
          </Box>
        </Box>

        {/* Links Grid */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          {Object.entries(footerLinks).map(([section, links]) => (
            <Grid key={section} size={{ xs: 6, sm: 6, md: 3 }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#888",
                  mb: 2.5,
                }}
              >
                {section}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {links.map((link) => (
                  <Typography
                    key={link}
                    sx={{
                      color: "#ccc",
                      fontSize: "0.875rem",
                      cursor: "pointer",
                      "&:hover": { color: "#fff" },
                      transition: "color 0.15s",
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Offices */}
        <Box sx={{ borderTop: "1px solid #222", pt: 6, mb: 6 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#888",
              mb: 3,
            }}
          >
            Our Offices
          </Typography>
          <Grid container spacing={4}>
            {offices.map((office) => (
              <Grid key={office.city} size={{ xs: 6, sm: 3 }}>
                <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>{office.city}</Typography>
                <Typography sx={{ color: "#888", fontSize: "0.8rem", mt: 0.5 }}>{office.detail}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ borderColor: "#222", mb: 4 }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 3,
          }}
        >
          {/* Legal */}
          <Box>
            <Typography sx={{ color: "#fff", fontWeight: 900, fontSize: "1.2rem", textTransform: "uppercase", mb: 1 }}>
              Rise at Seven
            </Typography>
            <Typography sx={{ color: "#666", fontSize: "0.75rem" }}>
              © {new Date().getFullYear()} Rise at Seven Ltd. Company No. 12345678 · VAT No. GB123456789
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
              {["Privacy Policy", "Cookie Policy", "Terms"].map((item) => (
                <Typography
                  key={item}
                  sx={{ color: "#666", fontSize: "0.75rem", cursor: "pointer", "&:hover": { color: "#fff" } }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {[
              { icon: <FacebookIcon fontSize="small" />, label: "Facebook" },
              { icon: <XIcon fontSize="small" />, label: "X (Twitter)" },
              { icon: <LinkedInIcon fontSize="small" />, label: "LinkedIn" },
              { icon: <YouTubeIcon fontSize="small" />, label: "YouTube" },
              { icon: <InstagramIcon fontSize="small" />, label: "Instagram" },
            ].map((social) => (
              <IconButton
                key={social.label}
                aria-label={social.label}
                sx={{
                  color: "#888",
                  border: "1px solid #333",
                  borderRadius: 0,
                  width: 40,
                  height: 40,
                  "&:hover": { color: "#fff", borderColor: "#fff", bgcolor: "transparent" },
                  transition: "all 0.15s",
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
