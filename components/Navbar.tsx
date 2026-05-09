"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Typography,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import AddIcon from "@mui/icons-material/Add";

type DropdownItem = { label: string; image: string };
type DropdownConfig = {
  title?: string;
  columns: DropdownItem[][];
  cta?: string;
  width?: string;
};
type NavLink = {
  label: string;
  hasDropdown?: boolean;
  badge?: string;
  dropdown?: DropdownConfig;
};

const navLinks: NavLink[] = [
  {
    label: "Services",
    hasDropdown: true,
    dropdown: {
      title: "Core Services",
      width: "min(1100px, 92vw)",
      columns: [
        [
          { label: "Search & Growth Strategy", image: "/FeaturesWork/1.png" },
          { label: "Onsite SEO", image: "/FeaturesWork/2.png" },
          { label: "Content Experience", image: "/FeaturesWork/3.png" },
          { label: "B2B Marketing", image: "/FeaturesWork/4.png" },
        ],
        [
          { label: "Digital PR", image: "/FeaturesWork/5.png" },
          { label: "Social Media & Campaigns", image: "/FeaturesWork/1.png" },
          { label: "Data & Insights", image: "/FeaturesWork/2.png" },
          { label: "Social SEO/Search", image: "/FeaturesWork/3.png" },
        ],
      ],
      cta: "View All Services",
    },
  },
  {
    label: "Industries",
    hasDropdown: true,
    dropdown: {
      width: "min(520px, 70vw)",
      columns: [
        [{ label: "B2B Marketing", image: "/FeaturesWork/4.png" }],
      ],
    },
  },
  {
    label: "International",
    hasDropdown: true,
    dropdown: {
      width: "min(560px, 72vw)",
      columns: [
        [
          { label: "US Digital PR", image: "/FeaturesWork/1.png" },
          { label: "Spain Digital PR", image: "/FeaturesWork/2.png" },
          { label: "Germany Digital PR", image: "/FeaturesWork/3.png" },
          { label: "Netherlands Digital PR", image: "/FeaturesWork/4.png" },
        ],
      ],
    },
  },
  {
    label: "About",
    hasDropdown: true,
    dropdown: {
      width: "min(540px, 70vw)",
      columns: [
        [
          { label: "About Us", image: "/FeaturesWork/5.png" },
          { label: "Meet The Risers", image: "/FeaturesWork/1.png" },
          { label: "Culture", image: "/FeaturesWork/2.png" },
          { label: "Testimonials", image: "/FeaturesWork/3.png" },
        ],
      ],
    },
  },
  { label: "Work", badge: "23" },
  { label: "Careers" },
  {
    label: "Blog & Resources",
    hasDropdown: true,
    dropdown: {
      width: "min(720px, 82vw)",
      columns: [
        [
          { label: "Blog", image: "/FeaturesWork/4.png" },
          { label: "Category Leaderboard", image: "/FeaturesWork/5.png" },
          { label: "Multi Channel Search Report", image: "/FeaturesWork/1.png" },
        ],
      ],
    },
  },
  { label: "Webinar" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<DropdownItem | null>(null);
  const [atTop, setAtTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const isTop = y < 80;
      setAtTop(isTop);
      if (isTop) {
        setHidden(false);
      } else if (y > lastY + 4) {
        setHidden(true);
        setOpenDropdown(null);
      } else if (y < lastY - 4) {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrolled = !atTop;

  const activeLink = navLinks.find((l) => l.label === openDropdown);
  const activeDropdown = activeLink?.dropdown;
  const flatItems = activeDropdown?.columns.flat() ?? [];
  const sideImage = hoveredItem?.image ?? flatItems[0]?.image;

  const handleEnter = (link: NavLink) => {
    if (link.hasDropdown && link.dropdown) {
      setOpenDropdown(link.label);
      setHoveredItem(link.dropdown.columns.flat()[0] ?? null);
    } else {
      setOpenDropdown(null);
      setHoveredItem(null);
    }
  };

  const handleLeaveAll = () => {
    setOpenDropdown(null);
    setHoveredItem(null);
  };

  return (
    <>
      {/* Page backdrop blur — visible only when a dropdown is open */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          pointerEvents: "none",
          backdropFilter: openDropdown ? "blur(10px)" : "blur(0px)",
          WebkitBackdropFilter: openDropdown ? "blur(10px)" : "blur(0px)",
          backgroundColor: openDropdown ? "rgba(0,0,0,0.18)" : "rgba(0,0,0,0)",
          opacity: openDropdown ? 1 : 0,
          transition: "opacity 0.45s ease, background-color 0.45s ease, backdrop-filter 0.45s ease",
        }}
      />
      <Box
        component="nav"
        sx={{
          position: scrolled ? "fixed" : "absolute",
          top: "14px",
          left: scrolled ? "14px" : 0,
          right: scrolled ? "14px" : 0,
          zIndex: 100,
          borderRadius: scrolled ? "999px" : "14px",
          px: { xs: 2.5, md: 3 },
          py: 0,
          display: "flex",
          alignItems: "center",
          minHeight: "62px",
          bgcolor: scrolled ? "rgba(245, 240, 232, 0.78)" : "transparent",
          backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.08)" : "none",
          transform: hidden ? "translateY(-130%)" : "translateY(0)",
          transition: "transform 0.35s ease, background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Logo — left */}
        <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: { xs: "1.4rem", md: "1.55rem" },
              color: scrolled ? "#111" : "#fff",
              transition: "color 0.3s ease",
              cursor: "pointer",
              letterSpacing: "0.02em",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            Rise at Seven
            <Box
              component="sup"
              sx={{
                fontSize: "0.38rem",
                verticalAlign: "super",
                fontStyle: "normal",
                fontWeight: 400,
                fontFamily: "var(--font-fraunces), serif",
                ml: "1px",
              }}
            >
              ®
            </Box>
          </Typography>
        </Box>

        {/* Desktop Nav — center */}
        {!isMobile && (
          <Box
            onMouseLeave={handleLeaveAll}
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              position: "relative",
            }}
          >
            {navLinks.map((link) => {
              const isActive = openDropdown === link.label;
              return (
                <Button
                  key={link.label}
                  onMouseEnter={() => handleEnter(link)}
                  endIcon={
                    link.hasDropdown ? (
                      <AddIcon sx={{ fontSize: "0.9rem !important" }} />
                    ) : undefined
                  }
                  sx={{
                    color: isActive
                      ? "black"
                      : scrolled
                        ? "#111"
                        : "rgba(255,255,255,0.85)",
                    bgcolor: isActive ? "white" : "transparent",
                    borderRadius: "50px",
                    fontWeight: 700,
                    fontSize: "1rem",
                    px: 1.4,
                    py: 0.4,
                    minWidth: "auto",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    transition: "background-color 0.2s, color 0.2s",
                    "&:hover": {
                      color: "black",
                      bgcolor: "white",
                      borderRadius: "50px",
                    },
                    "& .MuiButton-endIcon": { ml: 0.3 },
                  }}
                >
                  {link.badge ? (
                    <Badge
                      badgeContent={link.badge}
                      sx={{
                        "& .MuiBadge-badge": {
                          bgcolor: "#a8f5e0",
                          color: "#000",
                          fontSize: "0.58rem",
                          fontWeight: 700,
                          minWidth: "17px",
                          height: "17px",
                          top: "-4px",
                          right: "-8px",
                        },
                      }}
                    >
                      {link.label}
                    </Badge>
                  ) : (
                    link.label
                  )}
                </Button>
              );
            })}

            {/* Dropdown Panel */}
            {activeDropdown && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: activeDropdown.width ?? "min(1100px, 92vw)",
                  pt: "14px",
                  animation: "fadeSlide 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
                  "@keyframes fadeSlide": {
                    from: { opacity: 0, transform: "translate(-50%, -14px)" },
                    to: { opacity: 1, transform: "translate(-50%, 0)" },
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "32px",
                    boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                    display: "flex",
                    overflow: "hidden",
                    p: 3,
                    gap: 3,
                    alignItems: "center",
                    justifyContent: activeDropdown.title ? "flex-start" : "space-between",
                  }}
                >
                  {/* Left — items */}
                  <Box
                    sx={{
                      flex: activeDropdown.title ? 1 : "0 1 auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: activeDropdown.title ? "flex-start" : "center",
                      gap: 2,
                      py: activeDropdown.title ? 0 : 1,
                      px: 1,
                      alignSelf: activeDropdown.title ? "stretch" : "center",
                      minWidth: 0,
                    }}
                  >
                    {activeDropdown.title && (
                      <Typography
                        sx={{
                          color: "#8a8a8a",
                          fontSize: "1rem",
                          fontWeight: 500,
                          mb: 1.5,
                        }}
                      >
                        {activeDropdown.title}
                      </Typography>
                    )}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${activeDropdown.columns.length}, 1fr)`,
                        columnGap: 5,
                        rowGap: 1.2,
                      }}
                    >
                      {activeDropdown.columns.map((col, ci) => (
                        <Box
                          key={ci}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.2,
                          }}
                        >
                          {col.map((item) => {
                            const fontSize = activeDropdown.title ? "1.3rem" : "1.6rem";
                            const textStyle = {
                              color: "#000",
                              fontSize,
                              fontWeight: 700,
                              lineHeight: 1.3,
                              letterSpacing: "-0.01em",
                              whiteSpace: "nowrap" as const,
                            };
                            return (
                              <Box
                                key={item.label}
                                onMouseEnter={() => setHoveredItem(item)}
                                sx={{
                                  position: "relative",
                                  overflow: "hidden",
                                  cursor: "pointer",
                                  height: "1.3em",
                                  fontSize,
                                  width: "fit-content",
                                  "&:hover .nav-item-text": {
                                    transform: "translateY(-110%)",
                                  },
                                  "&:hover .nav-item-text-hover": {
                                    transform: "translateY(0%)",
                                  },
                                }}
                              >
                                <Box
                                  className="nav-item-text"
                                  sx={{
                                    ...textStyle,
                                    transform: "translateY(0%)",
                                    transition: "transform 0.35s ease",
                                  }}
                                >
                                  {item.label}
                                </Box>
                                <Box
                                  className="nav-item-text-hover"
                                  sx={{
                                    ...textStyle,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    transform: "translateY(110%)",
                                    transition: "transform 0.35s ease",
                                  }}
                                >
                                  {item.label}
                                </Box>
                              </Box>
                            );
                          })}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Right — side image */}
                  {sideImage && (
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: activeDropdown.title ? { md: 340, lg: 380 } : { md: 220, lg: 240 },
                        height: activeDropdown.title ? { md: 270, lg: 300 } : { md: 220, lg: 240 },
                        position: "relative",
                        borderRadius: "22px",
                        overflow: "hidden",
                        bgcolor: "#f4f4f4",
                        alignSelf: "center",
                      }}
                    >
                      <Box
                        key={sideImage}
                        sx={{
                          position: "absolute",
                          inset: 0,
                          animation: "imgFade 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                          "@keyframes imgFade": {
                            from: { opacity: 0, transform: "scale(1.04)" },
                            to: { opacity: 1, transform: "scale(1)" },
                          },
                        }}
                      >
                        <Image
                          src={sideImage}
                          alt={hoveredItem?.label ?? "preview"}
                          fill
                          sizes="400px"
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                      {activeDropdown.cta && (
                        <Button
                          endIcon={<NorthEastIcon sx={{ fontSize: "0.85rem !important" }} />}
                          sx={{
                            position: "absolute",
                            left: "50%",
                            bottom: 18,
                            transform: "translateX(-50%)",
                            bgcolor: "#000",
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            px: 2.5,
                            py: 1,
                            borderRadius: "50px",
                            whiteSpace: "nowrap",
                            "&:hover": { bgcolor: "#222" },
                          }}
                        >
                          {activeDropdown.cta}
                        </Button>
                      )}
                    </Box>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        )}

        {/* Right — Get In Touch or mobile icon */}
        <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          {!isMobile && (
            <Button
              sx={{
                borderRadius: "999px",
                px: 4,
                py: 1.5,
                background: "#fff",
                color: "#111",
                fontWeight: 600,
                fontSize: "0.88rem",
                textTransform: "none",
                boxShadow: "none",
                position: "relative",
                overflow: "hidden",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,

                "&:hover": {
                  background: "#f5f5f5",
                },

                "&:hover .text": {
                  transform: "translateY(-120%)",
                },

                "&:hover .text-hover": {
                  transform: "translateY(0%)",
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "1.2em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* Default text */}
                <Box
                  className="text"
                  sx={{
                    transition: "0.35s ease",
                    transform: "translateY(0%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Get In Touch ↗
                </Box>

                {/* Hover text */}
                <Box
                  className="text-hover"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "translateY(120%)",
                    transition: "0.35s ease",
                  }}
                >
                  Get In Touch ↗
                </Box>
              </Box>
            </Button>
          )}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: scrolled ? "#111" : "#fff", transition: "color 0.3s ease" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { sx: { width: "100%", bgcolor: "#000" } } }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
            <Typography sx={{ color: "#fff", fontFamily: "var(--font-fraunces), serif", fontWeight: 300, fontStyle: "italic", fontSize: "1.5rem" }}>
              Rise at Seven
              <sup style={{ fontSize: "0.45rem", fontStyle: "normal" }}>®</sup>
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "#fff" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  onClick={() => setDrawerOpen(false)}
                  sx={{ py: 1.5, borderBottom: "1px solid #222", "&:hover": { bgcolor: "#111" } }}
                >
                  <ListItemText
                    primary={link.label}
                    slotProps={{
                      primary: { style: { color: "#fff", fontWeight: 700, fontSize: "1.3rem" } },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            fullWidth
            sx={{
              mt: 4,
              bgcolor: "#fff",
              color: "#000",
              fontWeight: 700,
              fontSize: "1rem",
              py: 1.5,
              borderRadius: "50px",
              "&:hover": { bgcolor: "#f0f0f0" },
            }}
          >
            Get In Touch
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
