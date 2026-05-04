"use client";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function AlertBanner() {
  return (
    <Box
      component="a"
      href="https://riseatseven.com/multi-channel-search-report-2026-/"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        bgcolor: "#a8f5e0",
        color: "#000",
        py: 1,
        px: 2,
        mx: "12px",
        mt: "10px",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        cursor: "pointer",
        textDecoration: "none",
        position: "relative",
        zIndex: 101,
        "&:hover": { bgcolor: "#90f0d4" },
      }}
    >
      <Typography
        sx={{ fontSize: { xs: "0.75rem", md: "0.82rem" }, fontWeight: 700, textAlign: "center" }}
      >
        🚨 Where are your customers actually searching? Download the report
      </Typography>
    
    </Box>
  );
}
