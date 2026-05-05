"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* px of scroll to fully transition one card */
const SCROLL_PER_CARD = 500;

const cards = [
    {
        bg: "#111",
        rotation: -4,
        textColor: "#fff",
        subColor: "rgba(255,255,255,0.65)",
        img: "/Banner/Screenshot 2026-05-04 173305.png",
        title: "Pioneers",
        body: [
            "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
            "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
        ],
    },
    {
        bg: "#b8f5e4",
        rotation: 3,
        textColor: "#111",
        subColor: "rgba(0,0,0,0.58)",
        img: "/Banner/Screenshot 2026-05-04 173321.png",
        title: "Award Winning",
        body: [
            "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
        ],
    },
    {
        bg: "#ffffff",
        rotation: -2,
        textColor: "#111",
        subColor: "rgba(0,0,0,0.58)",
        img: "/Banner/Screenshot 2026-05-04 173347.png",
        title: "Results Driven",
        body: [
            "Our work consistently delivers measurable impact — from organic traffic growth to revenue generation. We build strategies that don't just rank, they convert.",
        ],
    },
];

export default function LegacySection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    /* scroll progress: 0 → cards.length */
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

    const activeIdx = Math.min(Math.floor(progress), cards.length - 1);

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = stickyRef.current?.getBoundingClientRect();
        if (!rect) return;
        const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        setTilt({ x: -ny * 9, y: nx * 9 });
    };

    return (
        /*
         * Outer track: tall enough for all card transitions + final hold.
         * (cards.length + 1) gives one extra SCROLL_PER_CARD to hold the last card.
         */
        <Box
            ref={trackRef}
            sx={{ height: `calc(${(cards.length + 1) * SCROLL_PER_CARD}px + 100vh)` }}
        >
            {/* Sticky frame — stays pinned while track scrolls */}
            <Box
                ref={stickyRef}
                onMouseMove={onMouseMove}
                onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false); }}
                onMouseEnter={() => setIsHovered(true)}
                sx={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    background: "#f0efed",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {/* Section label */}
                <Typography
                    sx={{
                        fontSize: { xs: "0.88rem", md: "0.95rem" },
                        fontWeight: 500,
                        color: "#111",
                        mb: { xs: 6, md: 8 },
                        letterSpacing: "0.01em",
                    }}
                >
                    Legacy In The Making
                </Typography>

                {/*
                 * Card stack.
                 * Cards are absolutely stacked (inset:0) with different base rotations.
                 * z-index decreases by card index so card 0 is always on top.
                 * As a card slides upward its content is revealed card below peeks through.
                 */}
                <Box
                    sx={{
                        position: "relative",
                        width: { xs: "82vw", sm: "400px", md: "440px" },
                        height: { xs: "520px", md: "580px" },
                        perspective: "1200px",
                    }}
                >
                    {cards.map((card, i) => {
                        /*
                         * cardProgress > 0 means this card has started exiting.
                         * Clamp so it can't go beyond -120% (fully off-screen).
                         */
                        const cardProgress = Math.max(0, progress - i);
                        const exitPct = Math.min(cardProgress * 120, 120);
                        const isActive = i === activeIdx;

                        return (
                            <Box
                                key={i}
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background: card.bg,
                                    borderRadius: "28px",
                                    /* card 0 on top, card 2 at back */
                                    zIndex: cards.length - i,
                                    px: { xs: 4, md: 5 },
                                    pt: { xs: 5, md: 6 },
                                    pb: { xs: 6, md: 7 },
                                    textAlign: "center",
                                    overflow: "hidden",
                                    boxShadow: "0 32px 90px rgba(0,0,0,0.18)",
                                    transform: [
                                        `translateY(-${exitPct}%)`,
                                        `rotateX(${isActive ? tilt.x : 0}deg)`,
                                        `rotateY(${isActive ? tilt.y : 0}deg)`,
                                        `rotate(${card.rotation}deg)`,
                                    ].join(" "),
                                    transition: isActive && isHovered
                                        ? "transform 0.08s linear"
                                        : "transform 0.55s cubic-bezier(0.16,1,0.3,1)",
                                    willChange: "transform",
                                }}
                            >
                                {/* Photo */}
                                <Box
                                    sx={{
                                        width: { xs: 155, md: 185 },
                                        height: { xs: 185, md: 215 },
                                        borderRadius: "16px",
                                        overflow: "hidden",
                                        mx: "auto",
                                        mb: 3.5,
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
                                        fontSize: { xs: "3rem", md: "3.8rem" },
                                        fontWeight: 800,
                                        color: card.textColor,
                                        lineHeight: 1,
                                        letterSpacing: "-0.03em",
                                        mb: 2.5,
                                    }}
                                >
                                    {card.title}
                                </Typography>

                                {/* Body paragraphs */}
                                {card.body.map((text, j) => (
                                    <Typography
                                        key={j}
                                        sx={{
                                            fontSize: { xs: "0.85rem", md: "0.9rem" },
                                            color: card.subColor,
                                            lineHeight: 1.65,
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
    );
}
