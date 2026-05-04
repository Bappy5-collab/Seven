"use client";
import { useState } from "react";
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

const navLinks = [
  { label: "Services", hasDropdown: true },
  { label: "International", hasDropdown: true },
  { label: "About", hasDropdown: true },
  { label: "Work", badge: "23" },
  { label: "Careers" },
  { label: "Blog" },
  { label: "Webinar" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: "absolute",
          top: "14px",
          left: "14px",
          right: "14px",
          zIndex: 100,
          borderRadius: "14px",
          px: { xs: 2.5, md: 4 },
          py: 0,
          display: "flex",
          alignItems: "center",
          minHeight: "62px",

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
              color: "#fff",
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
          <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                endIcon={
                  link.hasDropdown ? (
                    <AddIcon sx={{ fontSize: "0.9rem !important" }} />
                  ) : undefined
                }
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  px: 1,      
                  py: 0.3,    
                  minWidth: "auto",
                  "&:hover": {
                    color: "black",
                    bgcolor: "white",
                    borderRadius: "50px"
                  },
                  "& .MuiButton-endIcon": { ml: 0.3 },
                  borderRadius: "8px",
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
            ))}
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
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "#fff" }}>
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
