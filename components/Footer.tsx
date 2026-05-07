"use client";
import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import NorthEastIcon from "@mui/icons-material/NorthEast";

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.78a8.16 8.16 0 0 0 4.77 1.52V6.83a4.85 4.85 0 0 1-1.84-.14z" />
    </svg>
  );
}

const socials: { label: string; render: () => ReactNode }[] = [
  { label: "Facebook", render: () => <FacebookIcon sx={{ fontSize: 20 }} /> },
  { label: "X", render: () => <XIcon sx={{ fontSize: 18 }} /> },
  { label: "LinkedIn", render: () => <LinkedInIcon sx={{ fontSize: 20 }} /> },
  { label: "YouTube", render: () => <YouTubeIcon sx={{ fontSize: 22 }} /> },
  { label: "TikTok", render: () => <TikTokIcon size={18} /> },
  { label: "Instagram", render: () => <InstagramIcon sx={{ fontSize: 20 }} /> },
];

const linkColumns: string[][] = [
  ["Services", "Work", "About", "Culture", "Meet The Risers"],
  ["Testimonials", "Blog & Resources", "Webinars", "Careers"],
  ["Sheffield", "Manchester", "London", "New York", "Contact"],
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#f2f2f2",
        px: { xs: 1, md: 1.2 },
        pb: { xs: 1, md: 1.5 },
      }}
    >
      <Box
        sx={{
          bgcolor: "#000",
          color: "#fff",
          borderRadius: { xs: 4, md: 6 },
          overflow: "hidden",
          px: { xs: 3, md: 5 },
          pt: { xs: 6, md: 9 },
          pb: { xs: 4, md: 5 },
        }}
      >
        {/* top grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.5fr 1fr 1fr 1fr",
            },
            gap: { xs: 5, md: 6 },
            pb: { xs: 6, md: 10 },
          }}
        >
          {/* newsletter + socials */}
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "1.35rem", md: "1.6rem" },
                lineHeight: 1.2,
                mb: 3,
                color: "#fff",
              }}
            >
              Stay updated with Rise news
            </Typography>

            <Box
              component="form"
              onSubmit={(e) => e.preventDefault()}
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#1c1c1c",
                borderRadius: 999,
                pl: 3,
                pr: 1,
                py: 1,
                mb: 3.5,
                maxWidth: 480,
              }}
            >
              <Box
                component="input"
                type="email"
                placeholder="Your Email Address"
                sx={{
                  flex: 1,
                  bgcolor: "transparent",
                  border: "none",
                   borderRadius:'50px',
                  outline: "none",
                  color: "#fff",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                  py: 1.2,
                  "&::placeholder": { color: "#7a7a7a" },
                }}
              />
              <Box
                component="button"
                type="submit"
                aria-label="Subscribe"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  bgcolor: "#b8f4cf",
                  color: "#000",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background-color 0.15s",
                  "&:hover": { bgcolor: "#9aebbb" },
                }}
              >
                <NorthEastIcon sx={{ fontSize: 18 }} />
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2.5 }}>
              {socials.map((s) => (
                <Box
                  key={s.label}
                  component="a"
                  href="#"
                  aria-label={s.label}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.4,
                    color: "#fff",
                    textDecoration: "none",
                    transition: "opacity 0.15s",
                    "&:hover": { opacity: 0.7 },
                    "&:hover .arrow": { transform: "translate(2px, -2px)" },
                  }}
                >
                  {s.render()}
                  <NorthEastIcon
                    className="arrow"
                    sx={{
                      fontSize: 11,
                      transition: "transform 0.15s",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* link columns */}
          {linkColumns.map((col, idx) => (
            <Box
              key={idx}
              sx={{
                borderLeft: { md: "1px solid #1f1f1f" },
                pl: { md: 4 },
              }}
            >
              {col.map((link) => (
                <Typography
                  key={link}
                  component="a"
                  href="#"
                  sx={{
                    display: "block",
                    fontSize: { xs: "1.05rem", md: "1.2rem" },
                    fontWeight: 500,
                    color: "#fff",
                    textDecoration: "none",
                    mb: 1.8,
                    transition: "opacity 0.15s",
                    "&:hover": { opacity: 0.7 },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>

        {/* big wordmark */}
        <Box sx={{ position: "relative", mb: { xs: 5, md: 7 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 0.85,
              color: "#fff",
              fontSize: { xs: "22vw", md: "15.5vw" },
              whiteSpace: "nowrap",
            }}
          >
            <span>Rise at Seven</span>
            <Box
              component="span"
              sx={{
                fontSize: "0.18em",
                ml: "0.05em",
                mt: "0.4em",
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              ®
            </Box>
          </Box>
        </Box>

        {/* bottom bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
            fontSize: "0.85rem",
            color: "#9a9a9a",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              columnGap: { xs: 3, md: 4 },
              rowGap: 1,
            }}
          >
            <span>
              © {new Date().getFullYear()} Rise at Seven Ltd. All rights reserved
            </span>
            <Box
              component="span"
              sx={{
                display: { xs: "none", md: "inline-block" },
                width: 4,
                height: 4,
                bgcolor: "#9a9a9a",
                borderRadius: "50%",
              }}
            />
            <span>Company Number 11955187</span>
            <Box
              component="span"
              sx={{
                display: { xs: "none", md: "inline-block" },
                width: 4,
                height: 4,
                bgcolor: "#9a9a9a",
                borderRadius: "50%",
              }}
            />
            <span>VAT Registered GB 322402945</span>
            <Box
              component="a"
              href="#"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#fff" },
              }}
            >
              Privacy Policy
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "inherit",
                textDecoration: "none",
                "&:hover": { color: "#fff" },
              }}
            >
              Terms &amp; conditions
            </Box>
          </Box>

          <Box
            component="a"
            href="#"
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&:hover": { color: "#fff" },
            }}
          >
            Website MadeByShape
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
