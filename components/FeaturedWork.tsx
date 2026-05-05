"use client";
import { Box, Button, Typography } from "@mui/material";
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

export default function FeaturedWork() {
    const [activeIndex, setActiveIndex] = useState(0);
    // wheel listener is on the whole section
    const sectionRef = useRef<HTMLDivElement>(null);
    const activeIdxRef = useRef(0);
    const lockedRef = useRef(false);
    const touchStartY = useRef(0);

    useEffect(() => {
        activeIdxRef.current = activeIndex;
    }, [activeIndex]);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            const current = activeIdxRef.current;
            const goingDown = e.deltaY > 0;
            const canGoDown = current < projects.length - 1;
            const canGoUp = current > 0;

            if ((goingDown && canGoDown) || (!goingDown && canGoUp)) {
                e.preventDefault();
                if (lockedRef.current) return;
                lockedRef.current = true;

                setActiveIndex((prev) =>
                    goingDown
                        ? Math.min(projects.length - 1, prev + 1)
                        : Math.max(0, prev - 1)
                );

                setTimeout(() => {
                    lockedRef.current = false;
                }, 1800);
            }
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, []);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        const delta = touchStartY.current - e.changedTouches[0].clientY;
        if (Math.abs(delta) < 40) return;
        setActiveIndex((prev) =>
            delta > 0
                ? Math.min(projects.length - 1, prev + 1)
                : Math.max(0, prev - 1)
        );
    };

    return (
        <Box>
            <Box
                ref={sectionRef}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                sx={{
                    height: "100vh",
                    background: "#0a0a0a",
                    overflow: "hidden",
                    display: "flex",
                    px: { xs: 2, sm: 3, md: 6, lg: 8 },
                    m: { xs: 1, md: 2 }, // margin
                    borderRadius: "16px", // or 2 if using theme spacing

                    cursor: "ns-resize",
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

                    <Box sx={{ overflow: "hidden", flex: 1 }}>
                        {projects.map((p, i) => {
                            const diff = i - activeIndex;
                            const isActive = diff === 0;
                            const isAbove = diff < 0;
                            const distBelow = Math.max(0, diff);

                            return (
                                <Box
                                    key={i}
                                    sx={{
                                        maxHeight: isAbove
                                            ? "0px"
                                            : isActive
                                                ? "320px"
                                                : `${Math.max(22, 90 - distBelow * 16)}px`,
                                        opacity: isAbove
                                            ? 0
                                            : isActive
                                                ? 1
                                                : Math.max(0.04, 0.5 - distBelow * 0.13),
                                        overflow: "hidden",
                                        transition:
                                            "max-height 4s cubic-bezier(0.16,1,0.3,1)," +
                                            "opacity 4s cubic-bezier(0.16,1,0.3,1)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "baseline",
                                            flexWrap: "wrap",
                                            gap: 1,
                                            pb: isActive ? 2 : 0.35,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "#fff",
                                                fontWeight: 700,
                                                lineHeight: 1.04,
                                                letterSpacing: isActive ? "-0.035em" : "-0.01em",
                                                fontSize: isActive
                                                    ? { md: "3.6rem", lg: "4.6rem", xl: "5.2rem" }
                                                    : distBelow === 1
                                                        ? { md: "1.75rem", lg: "2.2rem" }
                                                        : { md: "0.9rem", lg: "1.1rem" },
                                                transition:
                                                    "font-size 4s cubic-bezier(0.16,1,0.3,1)," +
                                                    "letter-spacing 4s ease",
                                                whiteSpace: distBelow > 0 ? "nowrap" : "normal",
                                                overflow: "hidden",
                                                textOverflow: distBelow > 0 ? "ellipsis" : "clip",
                                                maxWidth: "100%",
                                            }}
                                        >
                                            {p.name}
                                        </Typography>

                                        {p.date && (
                                            <Typography
                                                component="span"
                                                sx={{
                                                    color: "rgba(255,255,255,0.45)",
                                                    fontWeight: 400,
                                                    flexShrink: 0,
                                                    fontSize: isActive ? "0.85rem" : "0.58rem",
                                                    transition:
                                                        "font-size 4s cubic-bezier(0.16,1,0.3,1)",
                                                }}
                                            >
                                                [{p.date}]
                                            </Typography>
                                        )}
                                    </Box>
                                </Box>
                            );
                        })}
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

                    {/* Image stack */}
                    <Box
                        sx={{
                            pt: "20px",
                            transform: `translateY(calc(-${activeIndex} * (84vh + 14px)))`,
                            transition: "transform 1.8s cubic-bezier(0.16,1,0.3,1)",
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
