"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SCROLL_PER_CARD = 500;

const cards = [
    {
        bg: "#111",
        rotation: 4,
        scale: 1,
        textColor: "#fff",
        subColor: "rgba(255,255,255,0.85)",
        img: "/Banner/banner-1.png",
        title: "Pioneers",
        body: [
            "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
            "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
        ],
    },
    {
        bg: "#b8f5e4",
        rotation: 6,
        scale: 1.04,
        textColor: "#111",
        subColor: "rgba(0,0,0,0.65)",
        img: "/Banner/banner-2.png",
        title: "Award Winning",
        body: [
            "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
        ],
    },
    {
        bg: "#ffffff",
        rotation: 8,
        scale: 1.08,
        textColor: "#111",
        subColor: "rgba(0,0,0,0.58)",
        img: "/Banner/banner-3.png",
        title: "Speed",
        body: [
            "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.",
        ],
    },
];

export default function LegacySection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const [carouselProgress, setCarouselProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const el = trackRef.current;
            if (!el) return;
            const scrolled = Math.max(0, -el.getBoundingClientRect().top);
            setProgress(scrolled / SCROLL_PER_CARD);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        const onScroll = () => {
            const max = el.scrollWidth - el.clientWidth;
            if (max <= 0) {
                setCarouselProgress(0);
                return;
            }
            setCarouselProgress(el.scrollLeft / max);
        };
        onScroll();
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
        {/* Mobile-only horizontal carousel */}
        <Box
            sx={{
                display: { xs: "block", md: "none" },
                py: 4,
                px: 3,
            }}
        >
            <Typography
                sx={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#111",
                    letterSpacing: "0.01em",
                    textAlign: "center",
                    mb: 3,
                }}
            >
                Legacy In The Making
            </Typography>

            <Box
                ref={scrollerRef}
                sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                    pb: 1,
                    "&::-webkit-scrollbar": { display: "none" },
                    scrollbarWidth: "none",
                }}
            >
                {cards.map((card, i) => (
                    <Box
                        key={i}
                        sx={{
                            flex: "0 0 100%",
                            scrollSnapAlign: "center",
                            background: card.bg,
                            borderRadius: "20px",
                            px: 2.5,
                            pt: 2,
                            pb: 3,
                            textAlign: "center",
                            boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
                        }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                aspectRatio: "16 / 11",
                                borderRadius: "12px",
                                overflow: "hidden",
                                mb: 2,
                                background: "#ccc",
                            }}
                        >
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 0px"
                                style={{ objectFit: "cover" }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: "1.9rem",
                                fontWeight: 800,
                                color: card.textColor,
                                lineHeight: 1,
                                letterSpacing: "-0.03em",
                                mb: 1.5,
                            }}
                        >
                            {card.title}
                        </Typography>

                        {card.body.map((text, j) => (
                            <Typography
                                key={j}
                                sx={{
                                    fontSize: "0.82rem",
                                    color: card.subColor,
                                    lineHeight: 1.55,
                                    mb: j < card.body.length - 1 ? 1.4 : 0,
                                }}
                            >
                                {text}
                            </Typography>
                        ))}
                    </Box>
                ))}
            </Box>

            {/* Progress bar — full width within the section padding */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    mt: 3,
                    height: 4,
                    bgcolor: "#e2e2e2",
                    borderRadius: 2,
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        height: "100%",
                        width: `${100 / cards.length}%`,
                        left: `${carouselProgress * (100 - 100 / cards.length)}%`,
                        bgcolor: "#111",
                        borderRadius: 2,
                        transition: "left 0.05s linear",
                    }}
                />
            </Box>
        </Box>

        {/* Desktop-only sticky rotating-stack (existing) */}
        <Box
            ref={trackRef}
            sx={{
                display: { xs: "none", md: "block" },
                height: `calc(${cards.length * SCROLL_PER_CARD}px + 100vh)`,
            }}
        >
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                 
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    mt:{xs:3, md:4},
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "0.88rem", md: "1.25rem" },
                        fontWeight: 700,
                        color: "#111",
                        letterSpacing: "0.01em",
                    }}
                >
                    Legacy In The Making
                </Typography>

                {/*
                 * Extra padding on container so rotated back-cards don't clip.
                 * All cards use position:absolute + inset:0 so they share the
                 * same bounding box and rotate around a common center.
                 */}
                <Box
                    sx={{
                        position: "relative",
                        width: { xs: "76vw", sm: "400px", md: "640px" },
                        height: { xs: "520px", md: "670px" },
                        /* room for rotated corners of back cards */
                        p: "40px",
                        mx: "auto",
                        mb:{xs:1, md:2},
                    }}
                >
                    {/* Inner anchor — cards rotate around THIS box's center */}
                    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                        {cards.map((card, i) => {
                            const cardProgress = Math.max(0, progress - i);
                            const exitFraction = Math.min(cardProgress, 1); // 0→1 as card exits
                            const exitPct = exitFraction * 120;

                            /*
                             * As card scrolls out it rotates counter-clockwise:
                             * left goes down, right goes up.
                             * At exitFraction=0 → baseRotation, at 1 → baseRotation - 20deg
                             */
                            const displayRotation = card.rotation - exitFraction * 20;

                            return (
                                <Box
                                    key={i}
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        background: card.bg,
                                        borderRadius: "26px",
                                        /* front card highest z */
                                        zIndex: cards.length - i,
                                        px: { xs: 3.5, md: 4.5 },
                                        pt: { xs: 4.5, md: 5.5 },
                                        pb: { xs: 5.5, md: 6.5 },
                                        textAlign: "center",
                                        overflow: "hidden",
                                        boxShadow: "0 28px 80px rgba(0,0,0,0.20)",
                                        transformOrigin: "center center",
                                        transform: [
                                            `translateY(-${exitPct}%)`,
                                            `rotate(${displayRotation}deg)`,
                                            `scale(${card.scale})`,
                                        ].join(" "),
                                        transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1)",
                                        willChange: "transform",
                                    }}
                                >
                                    {/* Photo */}
                                    <Box
                                        sx={{
                                            width: { xs: 148, md: 178 },
                                            height: { xs: 178, md: 210 },
                                            borderRadius: "14px",
                                            overflow: "hidden",
                                            mx: "auto",
                                            mb: 3,
                                            position: "relative",
                                            background: "#ccc",
                                        }}
                                    >
                                        <Image
                                            src={card.img}
                                            alt={card.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "2.8rem", md: "3.6rem" },
                                            fontWeight: 800,
                                            color: card.textColor,
                                            lineHeight: 1,
                                            letterSpacing: "-0.03em",
                                            mb: 2.5,
                                        }}
                                    >
                                        {card.title}
                                    </Typography>

                                    {/* Body */}
                                    {card.body.map((text, j) => (
                                        <Typography
                                            key={j}
                                            sx={{
                                                fontSize: { xs: "0.82rem", md: "0.88rem" },
                                                color: card.subColor,
                                                lineHeight: 1.7,
                                                mb: j < card.body.length - 1 ? 2 : 0,
                                            }}
                                        >
                                            {text}
                                        </Typography>
                                    ))}
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    );
}