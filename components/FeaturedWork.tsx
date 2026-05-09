"use client";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
    { name: "SIXT", date: "2023-2025", img: "/FeaturesWork/1.png" },
    { name: "Dojo - B2B", date: "2021-2025", img: "/FeaturesWork/2.png" },
    { name: "Magnet Trade - B2B", date: "2023-2024", img: "/FeaturesWork/3.png" },
    { name: "Leading E Sim brand globally", date: "2023-2025", img: "/FeaturesWork/4.png" },
    { name: "JD Sports", date: "2025", img: "/FeaturesWork/5.png" },
    { name: "Parkdean Resorts", date: "2019-2025", img: "/FeaturesWork/1.png" },
    { name: "Pooky", date: "2025", img: "/FeaturesWork/2.png" },
    { name: "Revolution Beauty", date: "2022-2025", img: "/FeaturesWork/3.png" },
    { name: "Lloyds Pharmacy", date: "2022-23", img: "/FeaturesWork/4.png" },
    { name: "PrettyLittleThing", date: "", img: "/FeaturesWork/5.png" },
];

const STEP_VH = 35;

export default function FeaturedWork() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [smoothProgress, setSmoothProgress] = useState(0);
    const targetProgress = useRef(0);
    const currentProgress = useRef(0);
    const outerRef = useRef<HTMLDivElement>(null);
    const touchStartY = useRef(0);

    useEffect(() => {
        const el = outerRef.current;
        if (!el) return;

        let raf = 0;
        let running = true;

        const readScroll = () => {
            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight;
            const total = el.offsetHeight - vh;
            const scrolled = Math.min(total, Math.max(0, -rect.top));
            targetProgress.current = total > 0 ? scrolled / total : 0;
        };

        const tick = () => {
            if (!running) return;
            // lerp current toward target — extra smoothing layer on top of Lenis
            const t = targetProgress.current;
            const c = currentProgress.current;
            const next = c + (t - c) * 0.12;
            currentProgress.current = Math.abs(next - t) < 0.0001 ? t : next;
            setSmoothProgress(currentProgress.current);

            const idx = Math.min(
                projects.length - 1,
                Math.max(0, Math.round(currentProgress.current * (projects.length - 1)))
            );
            setActiveIndex(idx);

            raf = requestAnimationFrame(tick);
        };

        readScroll();
        currentProgress.current = targetProgress.current;
        raf = requestAnimationFrame(tick);

        const onScroll = () => readScroll();

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", readScroll);
        return () => {
            running = false;
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", readScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        const delta = touchStartY.current - e.changedTouches[0].clientY;
        if (Math.abs(delta) < 40) return;
    };

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const rowHeight = isLg ? 78 : 68;

    const progressIndex = smoothProgress * (projects.length - 1);
    const imageOffset = progressIndex;

    return (
        <Box>
            <Box
                ref={outerRef}
                sx={{
                    position: "relative",
                    height: `${projects.length * STEP_VH + 100}vh`,
                }}
            >
                <Box
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                    sx={{
                        position: "sticky",
                        top: 0,
                        height: "100vh",
                        background: "#0a0a0a",
                        overflow: "hidden",
                        display: "flex",
                        px: { xs: 2, sm: 3, md: 6, lg: 8 },
                        m: { xs: 1, md: 2 },
                        borderRadius: "16px",
                    }}
                >
                    {/* ── LEFT PANEL ── */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            flexDirection: "column",
                            width: { md: "43%", lg: "40%" },
                            flexShrink: 0,
                            height: "100%",
                            pt: 8,
                            pr: { md: 4, lg: 6 },
                            overflow: "hidden",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "1.3rem",
                                fontWeight: 600,
                                letterSpacing: "0.07em",
                                mb: 5,
                            }}
                        >
                            Featured Work
                        </Typography>

                        <Box
                            sx={{
                                position: "relative",
                                flex: 1,
                                overflow: "hidden",
                                // soft fade mask top + bottom so items "enter" / "exit"
                                maskImage:
                                    "linear-gradient(to bottom, transparent 0%, #000 18%, #000 70%, transparent 100%)",
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, transparent 0%, #000 18%, #000 70%, transparent 100%)",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    transform: `translate3d(0, calc(28vh - ${progressIndex * rowHeight}px), 0)`,
                                    willChange: "transform",
                                }}
                            >
                                {projects.map((p, i) => {
                                    const distance = Math.abs(i - progressIndex);
                                    const opacity = Math.max(0, 1 - distance * 0.42);

                                    return (
                                        <Box
                                            key={i}
                                            sx={{
                                                height: `${rowHeight}px`,
                                                display: "flex",
                                                alignItems: "flex-start",
                                                opacity,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 1,
                                                    letterSpacing: "-0.03em",
                                                    fontSize: { md: "3rem", lg: "3.8rem", xl: "4.4rem" },
                                                    minWidth: 0,
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                }}
                                            >
                                                {p.name}
                                            </Typography>

                                            {p.date && (
                                                <Typography
                                                    component="span"
                                                    sx={{
                                                        color: "rgba(255,255,255,0.55)",
                                                        fontWeight: 400,
                                                        flexShrink: 0,
                                                        whiteSpace: "nowrap",
                                                        fontSize: "0.78rem",
                                                        lineHeight: 1,
                                                    }}
                                                >
                                                    [{p.date}]
                                                </Typography>
                                            )}
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Box>
                    </Box>

                    {/* ── RIGHT PANEL: image carousel ── */}
                    <Box
                        sx={{
                            flex: 1,
                            height: "100%",
                            overflow: "hidden",
                            position: "relative",
                        }}
                    >
                        {/* Mobile label */}
                        <Box
                            sx={{
                                display: { xs: "flex", md: "none" },
                                position: "absolute",
                                top: 20,
                                left: 0,
                                zIndex: 2,
                                pointerEvents: "none",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "rgba(255,255,255,0.35)",
                                    fontSize: "0.72rem",
                                    fontWeight: 500,
                                    letterSpacing: "0.07em",
                                    textTransform: "uppercase",
                                }}
                            >
                                Featured Work
                            </Typography>
                        </Box>

                        {/* Progress dots */}
                        <Box
                            sx={{
                                position: "absolute",
                                right: -18,
                                top: "50%",
                                transform: "translateY(-50%)",
                                display: { xs: "none", md: "flex" },
                                flexDirection: "column",
                                gap: "6px",
                                zIndex: 3,
                                pointerEvents: "none",
                            }}
                        >
                            {projects.map((_, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        width: 4,
                                        height: i === activeIndex ? 16 : 4,
                                        borderRadius: "2px",
                                        background:
                                            i === activeIndex ? "#fff" : "rgba(255,255,255,0.3)",
                                        transition: "all 0.4s ease",
                                    }}
                                />
                            ))}
                        </Box>

                        {/* Image stack — translates continuously with scroll progress */}
                        <Box
                            sx={{
                                pt: "20px",
                                transform: `translate3d(0, calc(-${imageOffset} * (84vh + 14px)), 0)`,
                                willChange: "transform",
                            }}
                        >
                            {projects.map((p, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        height: "84vh",
                                        mb: "14px",
                                        borderRadius: { xs: "10px", md: "14px" },
                                        overflow: "hidden",
                                        position: "relative",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src={p.img}
                                        alt={p.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                    />

                                    {/* Mobile overlay */}
                                    <Box
                                        sx={{
                                            display: { xs: "flex", md: "none" },
                                            position: "absolute",
                                            bottom: 20,
                                            left: 16,
                                            flexDirection: "column",
                                            gap: 0.3,
                                            opacity: i === activeIndex ? 1 : 0,
                                            transition: "opacity 0.5s ease",
                                            pointerEvents: "none",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "#fff",
                                                fontWeight: 700,
                                                fontSize: "1.6rem",
                                                lineHeight: 1.1,
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {p.name}
                                        </Typography>
                                        {p.date && (
                                            <Typography
                                                sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem" }}
                                            >
                                                [{p.date}]
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
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
                            Explore Our Work ↗
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
                            Explore Our Work ↗
                        </Box>
                    </Box>
                </Button>
            </Box>
        </Box>
    );
}
