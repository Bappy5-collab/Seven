"use client";
import { Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";

const logos = [
    { src: "/logos/kroger.svg", w: 90, h: 34 },
    { src: "/logos/hubspot.svg", w: 100, h: 34 },
    { src: "/logos/xbox.svg", w: 100, h: 34 },
    { src: "/logos/sixt.svg", w: 80, h: 34 },
    { src: "/logos/revolution.svg", w: 130, h: 34 },
];

export default function DrivingDemand() {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, overflow: "hidden" }}>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "flex-start", md: "center" },
                    px: { xs: 3, md: 8 },
                    mb: { xs: 8, md: 15 },
                    gap: { xs: 2, md: 5 },
                }}
            >
                {/* Left text — sits above the logos on mobile */}
                <Typography
                    sx={{
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        color: "black",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                    }}
                >
                    The agency behind
                </Typography>

                {/* Marquee track */}
                <Box sx={{ overflow: "hidden", flex: 1 }}>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 6,
                            width: "max-content",
                            animation: "marquee 18s linear infinite",
                            "@keyframes marquee": {
                                "0%": { transform: "translateX(0)" },
                                "100%": { transform: "translateX(-50%)" },
                            },
                            "&:hover": { animationPlayState: "paused" },
                        }}
                    >
                        {[...logos, ...logos].map((logo, i) => (
                            <Box
                                key={i}
                                sx={{
                                    opacity: 0.65,
                                    flexShrink: 0,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Image
                                    src={logo.src}
                                    alt="client logo"
                                    width={logo.w}
                                    height={logo.h}
                                    style={{ objectFit: "contain" }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Two-column: paragraph left, heading right */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",

                    flexWrap: { xs: "wrap", md: "nowrap" },
                    gap: { xs: 5, md: 25 },
                    px: { xs: 3, md: 8 },
                }}
            >
                {/* Left — paragraph (desktop only; on mobile it renders inside the right block) */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "45%" },
                        pt: { md: 1 },
                        order: { xs: 2, md: 1 },
                        display: { xs: "none", md: "block" },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "1rem", md: "1.4rem" },
                            fontWeight: 600,
                            lineHeight: { xs: 1.4, md: 1 },
                            color: "#111",
                        }}
                    >
                        A global team of search-first content marketers engineering semantic
                        relevancy & category signals for both the internet and people
                    </Typography>
                </Box>

                {/* Right — large heading + buttons */}
                <Box sx={{ width: { xs: "100%", md: "58%" }, order: { xs: 1, md: 2 } }}>
                    <Typography
                        component="h2"
                        sx={{
                            fontSize: { xs: "3rem", sm: "4rem", md: "5.2rem", lg: "4.5rem" },
                            fontWeight: 600,
                            lineHeight: 1.02,
                            letterSpacing: "-0.03em",
                            color: "#111",
                        }}
                    >
                        Driving Demand &{" "}
                        <Box component="span" sx={{ whiteSpace: "nowrap" }}>
                            Discovery
                            <Box
                                component="span"
                                sx={{
                                    display: "inline-block",
                                    ml: 1.5,
                                    verticalAlign: "middle",
                                    mb: "0.12em",
                                }}
                            >
                                <Image
                                    src="/Banner/Driving.png"
                                    alt="inline"
                                    width={76}
                                    height={76}
                                    style={{ borderRadius: "14px", display: "block" }}
                                />
                            </Box>
                        </Box>
                    </Typography>

                    {/* Mobile-only paragraph — sits between heading and buttons */}
                    <Typography
                        sx={{
                            display: { xs: "block", md: "none" },
                            fontSize: "1rem",
                            fontWeight: 600,
                            lineHeight: 1.4,
                            color: "#111",
                            mt: 3,
                        }}
                    >
                        A global team of search-first content marketers engineering semantic
                        relevancy & category signals for both the internet and people
                    </Typography>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 1.5, md: 2 }}
                        sx={{
                            mt: { xs: 3, md: 4 },
                            alignItems: { xs: "stretch", md: "center" },
                        }}
                    >
                        <Button
                            sx={{
                                borderRadius: "999px",
                                px: 4,
                                py: { xs: 2, md: 1.5 },
                                background: "#fff",
                                color: "#111",
                                fontWeight: 600,
                                fontSize: { xs: "1rem", md: "0.88rem" },
                                textTransform: "none",
                                boxShadow: "none",
                                position: "relative",
                                overflow: "hidden",
                                width: { xs: "100%", md: "auto" },

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
                                    Our Story ↗
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
                                    Our Story ↗
                                </Box>
                            </Box>
                        </Button>

                        <Button
                            sx={{
                                borderRadius: "999px",
                                px: { xs: 0, md: 4 },
                                py: { xs: 1, md: 1.5 },
                                background: { xs: "transparent", md: "#fff" },
                                color: "#111",

                                fontWeight: 600,
                                fontSize: { xs: "1rem", md: "0.88rem" },
                                textTransform: "none",
                                boxShadow: "none",
                                position: "relative",
                                overflow: "hidden",

                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                lineHeight: 1,

                                "&:hover": {
                                    background: { xs: "transparent", md: "#f5f5f5" },
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
                                    Our Services ↗
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
                                    Our Services ↗
                                </Box>
                            </Box>
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}
