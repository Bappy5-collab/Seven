"use client";
import { Box, Typography, Button, Stack } from "@mui/material";
import Image from "next/image";

const logos = [
    { src: "/agency/emirates-logo-png_seeklogo-478189-removebg-preview.png", w: 150, h: 56 },
    { src: "/agency/JD_Sports-Logo.wine.png", w: 164, h: 56 },
    { src: "/agency/SharkNinja_logo-removebg-preview.png", w: 164, h: 56 },
    { src: "/agency/images-removebg-preview.png", w: 138, h: 56 },
    { src: "/agency/images__1_-removebg-preview.png", w: 138, h: 56 },
    { src: "/agency/s-l1200-removebg-preview.png", w: 150, h: 56 },
];

export default function DrivingDemand() {
    return (
        <Box sx={{ py: { xs: 8, md: 12 }, overflow: "hidden" }}>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "flex-start", md: "center" },
                    px: { xs: 3, md: 4 },
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
                <Box
                    sx={{
                        overflow: "hidden",
                        flex: 1,
                        position: "relative",
                        maskImage:
                            "linear-gradient(to right, transparent 0, #000 160px, #000 calc(100% - 160px), transparent 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent 0, #000 160px, #000 calc(100% - 160px), transparent 100%)",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 9,
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
                    px: { xs: 3, md: 4 },
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
                            fontSize: { xs: "1.1rem", md: "1.6rem" },
                            fontWeight: 600,
                            lineHeight: { xs: 1.5, md: 1.35 },
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
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            lineHeight: 1.55,
                            color: "#111",
                            mt: 3,
                        }}
                    >
                        A global team of search-first content marketers engineering semantic
                        relevancy & category signals for both the internet and people
                    </Typography>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 1.5, md: 0 }}
                        sx={{
                            mt: { xs: 3, md: 1 },
                            alignItems: { xs: "stretch", md: "center" },
                        }}
                    >
                        <Button
                            sx={{
                                borderRadius: "999px",
                                px: 4,
                                py: { xs: 2, md: 1.7 },
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
                                    background: "#fff",
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
