"use client";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { getLenis } from "./lenisInstance";

type Project = {
    name: string;
    date: string;
    img: string;
    hoverColor: string;
    hoverTitle: string;
    pillLabel: string;
};

const projects: Project[] = [
    {
        name: "SIXT",
        date: "2023-2025",
        img: "/FeaturesWork/1.png",
        hoverColor: "#cc7a3d",
        hoverTitle: "An extra 3m clicks regionally through SEO",
        pillLabel: "Car rental",
    },
    {
        name: "Dojo - B2B",
        date: "2021-2025",
        img: "/FeaturesWork/2.png",
        hoverColor: "#fcd0bb",
        hoverTitle: "A B2B success story for Dojo card machines",
        pillLabel: "Card Machines",
    },
    {
        name: "Magnet Trade - B2B",
        date: "2023-2024",
        img: "/FeaturesWork/3.png",
        hoverColor: "#d9b8ff",
        hoverTitle: "A full service SEO success story 170%+ increase",
        pillLabel: "Trade",
    },
    {
        name: "Leading E Sim brand globally",
        date: "2023-2025",
        img: "/FeaturesWork/4.png",
        hoverColor: "#9bd9c9",
        hoverTitle: "Scaling a global eSIM brand across 4 markets",
        pillLabel: "eSIM",
    },
    {
        name: "JD Sports",
        date: "2025",
        img: "/FeaturesWork/5.png",
        hoverColor: "#111",
        hoverTitle: "JD Sports tops Black Friday SERPs across the UK",
        pillLabel: "Sportswear",
    },
    {
        name: "Parkdean Resorts",
        date: "2019-2025",
        img: "/FeaturesWork/1.png",
        hoverColor: "#5fb27a",
        hoverTitle: "6 years of growth driving holiday bookings",
        pillLabel: "Holidays",
    },
    {
        name: "Pooky",
        date: "2025",
        img: "/FeaturesWork/2.png",
        hoverColor: "#f3d4d8",
        hoverTitle: "A lighting brand that shines in organic search",
        pillLabel: "Lighting",
    },
    {
        name: "Revolution Beauty",
        date: "2022-2025",
        img: "/FeaturesWork/3.png",
        hoverColor: "#ec5b8d",
        hoverTitle: "+220% organic revenue for Revolution Beauty",
        pillLabel: "Beauty",
    },
    {
        name: "Lloyds Pharmacy",
        date: "2022-23",
        img: "/FeaturesWork/4.png",
        hoverColor: "#23408a",
        hoverTitle: "Lloyds Pharmacy: from category leader to category dominator",
        pillLabel: "Pharmacy",
    },
    {
        name: "PrettyLittleThing",
        date: "",
        img: "/FeaturesWork/5.png",
        hoverColor: "#ff5fa8",
        hoverTitle: "Owning fashion search for PrettyLittleThing",
        pillLabel: "Fashion",
    },
];

function ProjectImage({ project, isActive, selected }: { project: Project; isActive: boolean; selected: boolean }) {
    const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
    };

    // colored bg shows on direct hover OR when this project's name was clicked
    const show = cursor.visible || selected;

    const isDark = project.hoverColor === "#111" || project.hoverColor === "#23408a" || project.hoverColor === "#ec5b8d" || project.hoverColor === "#ff5fa8";
    const titleColor = isDark ? "#fff" : "#111";

    return (
        <Box
            ref={ref}
            onMouseMove={handleMove}
            onMouseEnter={() => setCursor((c) => ({ ...c, visible: true }))}
            onMouseLeave={() => setCursor((c) => ({ ...c, visible: false }))}
            sx={{
                height: { xs: "72vh", md: "84vh" },
                mb: "14px",
                borderRadius: { xs: "10px", md: "14px" },
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
                cursor: cursor.visible ? "none" : "default",
            }}
        >
            <Image
                src={project.img}
                alt={project.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 60vw"
            />

            {/* Hover overlay — colored background, title, pill.
                Rises up from the bottom with a rounded top, then flattens —
                same gesture as the blog-card blur overlay. */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: project.hoverColor,
                    transform: show ? "translateY(0%)" : "translateY(100%)",
                    borderTopLeftRadius: show ? "0%" : "50%",
                    borderTopRightRadius: show ? "0%" : "50%",
                    transition: show
                        ? "transform 0.35s cubic-bezier(0.33,1,0.68,1), border-radius 0.22s ease 0.16s"
                        : "transform 0.3s ease, border-radius 0.25s ease",
                    pointerEvents: "none",
                    zIndex: 1,
                    display: { xs: "none", md: "block" },
                }}
            >
                {/* Hover title — top-left. Appears only after the sheet has
                    risen to fill the image, never during the rise. */}
                <Typography
                    sx={{
                        position: "absolute",
                        top: { md: 36, lg: 48 },
                        left: { md: 36, lg: 48 },
                        right: { md: 36, lg: 48 },
                        color: titleColor,
                        fontWeight: 700,
                        fontSize: { md: "2.2rem", lg: "2.8rem", xl: "3.2rem" },
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        opacity: show ? 1 : 0,
                        transition: show
                            ? "opacity 0.3s ease 0.34s"
                            : "opacity 0.12s ease",
                    }}
                >
                    {project.hoverTitle}
                </Typography>

                {/* Bottom-right pill with search icon + label + chart icon */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: { md: 28, lg: 36 },
                        right: { md: 28, lg: 36 },
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        bgcolor: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        borderRadius: "999px",
                        px: 2,
                        py: 1,
                        opacity: show ? 1 : 0,
                        transition: show
                            ? "opacity 0.3s ease 0.34s"
                            : "opacity 0.12s ease",
                    }}
                >
                    <SearchIcon sx={{ fontSize: "1.05rem", color: titleColor }} />
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 500, color: titleColor, lineHeight: 1 }}>
                        {project.pillLabel}
                    </Typography>
                    <TrendingUpIcon sx={{ fontSize: "1.05rem", color: titleColor }} />
                </Box>
            </Box>

            {/* Mobile overlay (date above the project name) */}
            <Box
                sx={{
                    display: { xs: "flex", md: "none" },
                    position: "absolute",
                    bottom: 20,
                    left: 16,
                    flexDirection: "column",
                    gap: 0.3,
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.5s ease",
                    pointerEvents: "none",
                    zIndex: 2,
                }}
            >
                {project.date && (
                    <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem" }}>
                        [{project.date}]
                    </Typography>
                )}
                <Typography
                    sx={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "1.6rem",
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                    }}
                >
                    {project.name}
                </Typography>
            </Box>
        </Box>
    );
}

const STEP_VH = 35;

export default function FeaturedWork() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [smoothProgress, setSmoothProgress] = useState(0);
    const targetProgress = useRef(0);
    const currentProgress = useRef(0);
    const outerRef = useRef<HTMLDivElement>(null);
    const touchStartY = useRef(0);
    // cursor-following arrow circle — tracked across the whole right panel
    const rightPanelRef = useRef<HTMLDivElement>(null);
    const [panelCursor, setPanelCursor] = useState({ x: 0, y: 0, visible: false });
    // hovering a project name lights up that image's colored bg (no scroll);
    // clicking it ALSO smooth-scrolls the page to that project (via Lenis) and
    // keeps it lit. A real wheel/touch scroll clears the click selection.
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const goToProject = (i: number) => {
        const el = outerRef.current;
        if (!el) return;
        setSelectedIndex(i);
        const sectionTop = el.getBoundingClientRect().top + window.scrollY;
        const range = el.offsetHeight - window.innerHeight;
        const progress = projects.length > 1 ? i / (projects.length - 1) : 0;
        const targetY = sectionTop + progress * range;
        const lenis = getLenis();
        if (lenis) lenis.scrollTo(targetY, { duration: 1.4 });
        else window.scrollTo({ top: targetY, behavior: "smooth" });
    };

    useEffect(() => {
        const clearSelection = () => setSelectedIndex(null);
        window.addEventListener("wheel", clearSelection, { passive: true });
        window.addEventListener("touchmove", clearSelection, { passive: true });
        return () => {
            window.removeEventListener("wheel", clearSelection);
            window.removeEventListener("touchmove", clearSelection);
        };
    }, []);

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
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const rowHeight = isLg ? 110 : 92;

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
                        // m + px lands the card's content at the same left/right
                        // edge as the other sections (which use px: { xs: 3, md: 8 }).
                        px: { xs: 2, md: 4 },
                        m: { xs: 1, md: 2 },
                        borderRadius: "16px",
                    }}
                >
                    {/* ── LEFT PANEL ── */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            flexDirection: "column",
                            width: "50%",
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
                                            onClick={() => goToProject(i)}
                                            onMouseEnter={() => setHoveredIndex(i)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            sx={{
                                                height: `${rowHeight}px`,
                                                display: "flex",
                                                alignItems: "flex-start",
                                                opacity,
                                                cursor: "pointer",
                                                transform: "translateX(0)",
                                                transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                                                "&:hover": { transform: "translateX(12px)" },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: "#fff",
                                                    fontWeight: 700,
                                                    lineHeight: 1,
                                                    letterSpacing: "-0.03em",
                                                    fontSize: { md: "3.6rem", lg: "4.7rem", xl: "5.4rem" },
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
                        ref={rightPanelRef}
                        onMouseMove={(e) => {
                            const r = rightPanelRef.current?.getBoundingClientRect();
                            if (!r) return;
                            setPanelCursor({ x: e.clientX - r.left, y: e.clientY - r.top, visible: true });
                        }}
                        onMouseEnter={() => setPanelCursor((c) => ({ ...c, visible: true }))}
                        onMouseLeave={() => setPanelCursor((c) => ({ ...c, visible: false }))}
                        sx={{
                            flex: 1,
                            height: "100%",
                            overflow: "hidden",
                            position: "relative",
                            cursor: !isMobile && panelCursor.visible ? "none" : "default",
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

                        {/* Image stack — translates continuously with scroll progress
                            (step matches the per-screen image height + 14px gap). */}
                        <Box
                            sx={{
                                pt: "20px",
                                transform: {
                                    xs: `translate3d(0, calc(-${imageOffset} * (72vh + 14px)), 0)`,
                                    md: `translate3d(0, calc(-${imageOffset} * (84vh + 14px)), 0)`,
                                },
                                willChange: "transform",
                            }}
                        >
                            {projects.map((p, i) => (
                                <ProjectImage
                                    key={i}
                                    project={p}
                                    isActive={i === activeIndex}
                                    selected={selectedIndex === i || hoveredIndex === i}
                                />
                            ))}
                        </Box>

                        {/* Cursor-following arrow circle — follows the cursor across
                            the whole image carousel, popping from small to full size. */}
                        {!isMobile && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: panelCursor.x,
                                    top: panelCursor.y,
                                    transform: panelCursor.visible
                                        ? "translate(-50%, -50%) scale(1)"
                                        : "translate(-50%, -50%) scale(0.15)",
                                    width: 110,
                                    height: 110,
                                    borderRadius: "50%",
                                    bgcolor: "#b8f5e4",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    pointerEvents: "none",
                                    zIndex: 5,
                                    opacity: panelCursor.visible ? 1 : 0,
                                    transition: panelCursor.visible
                                        ? "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.18s ease"
                                        : "transform 0.22s ease, opacity 0.22s ease",
                                }}
                            >
                                <NorthEastIcon sx={{ color: "#000", fontSize: "2rem" }} />
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 5,
                    width: "100%",
                        mx: { xs: 2, md: 0 }, 
                }}
            >
                <Button
                    sx={{
                        borderRadius: "999px",
                        px: 4,
                        py: 1.5,

                        width: { xs: "100%", md: "auto" }, // mobile full width
                        maxWidth: { xs: "100%", md: "fit-content" },

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
