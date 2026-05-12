"use client";
import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import Logo from "./Logo";

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
        px: { xs: 1, md: 1.2 },
        pb: { xs: 1, md: 1.5 },
        borderRadius: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          bgcolor: "#000",
          color: "#fff",
          borderRadius: { xs: "24px", md: "30px" },
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
              xs: "1fr 1fr",
              sm: "1fr 1fr",
              md: "1.5fr 1fr 1fr 1fr",
            },
            columnGap: { xs: 3, md: 6 },
            rowGap: { xs: 5, md: 6 },
            pb: { xs: 6, md: 10 },
          }}
        >
          {/* newsletter + socials */}
          <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" } }}>
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
                borderRadius: '50px',
                pl: { xs: 2.5, md: 3 },
                pr: 1,
                py: 1,
                mb: 3.5,
                maxWidth: { xs: "100%", md: 480 },
                width: "100%",
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

                  "&:hover": {
                    bgcolor: "white",
                  },

                  "&:hover .arrow": {
                    transform: "rotate(90deg) translateY(2px)", // niche dike baka
                  },
                }}
              >
                <NorthEastIcon
                  className="arrow"
                  sx={{
                    fontSize: 18,
                    transition: "transform 0.3s ease",
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
              {socials.map((s) => (
                <Box
                  key={s.label}
                  component="a"
                  href="#"
                  aria-label={s.label}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 0.9,
                    color: "#fff",
                    textDecoration: "none",
                    transition: "opacity 0.15s",

                    "&:hover": {
                      opacity: 0.7,
                    },

                    "&:hover .arrow": {
                      transform: "translate(2px, -2px)",
                    },

                    "&:hover .social-icon": {
                      borderRadius: "4px",
                    },
                  }}
                >
                  <Box
                    className="social-icon"
                    sx={{
                      width: 40,
                      height: 20,
                      bgcolor: "#fff",
                      borderRadius: "50px", // default full rounded
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#000",
                      flexShrink: 0,
                      transition: "all 0.25s ease",
                    }}
                  >
                    {s.render()}

                    <NorthEastIcon
                      className="arrow"
                      sx={{
                        fontSize: 11,
                        ml: 0.2,
                        transition: "transform 0.15s",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* link columns */}
          {linkColumns.map((col, idx) => (
            <Box
              key={idx}
              sx={{
                gridColumn: idx === 2 ? { xs: "1 / -1", md: "auto" } : "auto",
                borderLeft: "2px solid #1f1f1f",
                pl: { xs: 2.5, md: 4 },
              }}
            >
              {col.map((link) => (
                <Box
                  key={link}
                  component="a"
                  href="#"
                  sx={{
                    position: "relative",
                    display: "block",
                    overflow: "hidden",
                    height: "32px",
                    textDecoration: "none",


                    "&:hover .link-inner": {
                      transform: "translateY(-50%)",
                    },
                  }}
                >
                  <Box
                    className="link-inner"
                    sx={{
                      transition: "transform 0.35s cubic-bezier(0.76, 0, 0.24, 1)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "1.05rem", md: "1.2rem" },
                        fontWeight: 700,
                        color: "#fff",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {link}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: "1.05rem", md: "1.2rem" },
                        fontWeight: 500,
                        color: "#fff",
                        height: "32px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {link}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          ))}
        </Box>

        {/* big wordmark */}
        <Box sx={{ position: "relative", mb: { xs: 5, md: 7 } }}>
          <Logo width="100%" color="#fff" sx={{ display: "block" }} />
        </Box>

        {/* bottom bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: 1.5, md: 0.2 },
            fontSize: { xs: "0.7rem", md: "0.75rem" },
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              columnGap: { xs: 1, md: 1 },
              rowGap: { xs: 0.6, md: 0.1 },
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
                bgcolor: "white",
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
                bgcolor: "white",
                borderRadius: "50%",
              }}
            />

            <span>VAT Registered GB 322402945</span>

            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                lineHeight: 1,
                "&:hover": { color: "#fff" },
              }}
            >
              Privacy Policy
            </Box>

            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                lineHeight: 1,
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
              color: "white",
              textDecoration: "none",
              lineHeight: 1,
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
