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
      columns: [
        [{ label: "B2B Marketing", image: "/FeaturesWork/4.png" }],
      ],
    },
  },
  {
    label: "International",
    hasDropdown: true,
    dropdown: {
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
      columns: [
        [
          { label: "Blog", image: "/FeaturesWork/4.png" },
          { label: "Case Studies", image: "/FeaturesWork/5.png" },
          { label: "Reports", image: "/FeaturesWork/1.png" },
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
                  width: "min(1100px, 92vw)",
                  pt: "14px",
                  animation: "fadeSlide 0.18s ease-out",
                  "@keyframes fadeSlide": {
                    from: { opacity: 0, transform: "translate(-50%, -8px)" },
                    to: { opacity: 1, transform: "translate(-50%, 0)" },
                  },
                }}
              >
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "28px",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
                  display: "flex",
                  overflow: "hidden",
                  p: 4,
                  gap: 4,
                }}
              >
                {/* Left — items */}
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                  {activeDropdown.title && (
                    <Typography
                      sx={{
                        color: "#888",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        mb: 1,
                      }}
                    >
                      {activeDropdown.title}
                    </Typography>
                  )}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: `repeat(${activeDropdown.columns.length}, 1fr)`,
                      columnGap: 4,
                      rowGap: 1,
                    }}
                  >
                    {activeDropdown.columns.map((col, ci) => (
                      <Box key={ci} sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                        {col.map((item) => {
                          const isItemHover = hoveredItem?.label === item.label;
                          return (
                            <Typography
                              key={item.label}
                              onMouseEnter={() => setHoveredItem(item)}
                              sx={{
                                color: "#000",
                                fontSize: "1.5rem",
                                fontWeight: 600,
                                cursor: "pointer",
                                lineHeight: 1.3,
                                opacity: isItemHover ? 1 : 0.85,
                                transform: isItemHover ? "translateX(4px)" : "translateX(0)",
                                transition: "opacity 0.18s, transform 0.18s",
                              }}
                            >
                              {item.label}
                            </Typography>
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
                      width: { md: 320, lg: 360 },
                      height: { md: 260, lg: 290 },
                      position: "relative",
                      borderRadius: "20px",
                      overflow: "hidden",
                      bgcolor: "#f4f4f4",
                    }}
                  >
                    <Image
                      key={sideImage}
                      src={sideImage}
                      alt={hoveredItem?.label ?? "preview"}
                      fill
                      sizes="360px"
                      style={{ objectFit: "cover" }}
                    />
                    {activeDropdown.cta && (
                      <Button
                        endIcon={<NorthEastIcon sx={{ fontSize: "0.85rem !important" }} />}
                        sx={{
                          position: "absolute",
                          left: "50%",
                          bottom: 16,
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
              endIcon={<NorthEastIcon sx={{ fontSize: "0.85rem !important" }} />}
              sx={{
                bgcolor: "#fff",
                color: "#000",
                fontWeight: 700,
                fontSize: "1rem",
                px: 2.5,
                py: 0.9,
                borderRadius: "50px",
                "&:hover": { bgcolor: "#e8e8e8" },
                "& .MuiButton-endIcon": { ml: 0.4 },
              }}
            >
              Get In Touch
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
