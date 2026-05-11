"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useEffect, useRef, useState } from "react";

type Post = {
    category?: string;
    title: string;
    author: string;
    authorColor: string;
    readTime: string;
    img: string;
};

const posts: Post[] = [
    {
        title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
        author: "Ray Saddiq",
        authorColor: "#a2b8c8",
        readTime: "3 mins",
        img: "/FeaturesWork/1.png",
    },
    {
        title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion",
        author: "Ray Saddiq",
        authorColor: "#a2b8c8",
        readTime: "2 mins",
        img: "/FeaturesWork/2.png",
    },
    {
        category: "News",
        title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
        author: "Carrie Rose",
        authorColor: "#c8b8a2",
        readTime: "2 mins",
        img: "/FeaturesWork/3.png",
    },
];

function BlogCard({ post }: { post: Post }) {
    const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
    };

    return (
        <Box
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setCursor((c) => ({ ...c, visible: true }))}
            onMouseLeave={() => setCursor((c) => ({ ...c, visible: false }))}
            sx={{
                flex: { xs: "0 0 86%", md: 1 },
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                cursor: "none",
                position: "relative",
                scrollSnapAlign: { xs: "center", md: "none" },
            }}
        >
            {/* Image */}
            <Box
                sx={{
                    position: "relative",
                    aspectRatio: "1 / 1",
                    borderRadius: "20px",
                    overflow: "hidden",
                    bgcolor: "#eee",
                }}
            >
                <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                />

                {/* Blur overlay (slides up from bottom) */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                         height: "100%",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        background: "rgba(0,0,0,0.2)",
                        transform: cursor.visible ? "translateY(0%)" : "translateY(100%)",
                        borderTopLeftRadius: cursor.visible ? "0%" : "50%",
                        borderTopRightRadius: cursor.visible ? "0%" : "50%",
                        transition: cursor.visible
                            ? "transform 0.5s ease, border-radius 0.3s ease 0.3s"
                            : "transform 0.5s ease, border-radius 0.3s ease",
                        zIndex: 1,
                        pointerEvents: "none",
                    }}
                />

                {/* Category badge — only on cards that have one */}
                {post.category && (
                    <Box
                        sx={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            bgcolor: "#fff",
                            borderRadius: "999px",
                            px: 1.6,
                            py: 0.55,
                            zIndex: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "0.82rem",
                                fontWeight: 600,
                                color: "#111",
                                lineHeight: 1.4,
                            }}
                        >
                            {post.category}
                        </Typography>
                    </Box>
                )}
            </Box>

            {/* Cursor-following circle with arrow — covers the whole card */}
            <Box
                sx={{
                    position: "absolute",
                    left: cursor.x,
                    top: cursor.y,
                    transform: "translate(-50%, -50%)",
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    bgcolor: "#4ecdc4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                    zIndex: 20,
                    opacity: cursor.visible ? 1 : 0,
                    transition: "opacity 0.2s ease",
                }}
            >
                <NorthEastIcon sx={{ color: "#000", fontSize: "1.6rem" }} />
            </Box>

            {/* Pills row */}
            <Box sx={{ display: "flex", gap: 0.8, mt: 2, flexWrap: "wrap" }}>
                {/* Author pill */}
                <Box
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.9,
                        bgcolor: "white",
                        borderRadius: "999px",
                        pl: 0.6,
                        pr: 1.4,
                        py: 0.5,
                    }}
                >
                    <Box
                        sx={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            bgcolor: post.authorColor,
                            flexShrink: 0,
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "0.90rem",
                            fontWeight: 700,
                            color: "#605c5c",
                            lineHeight: 1,
                        }}
                    >
                        {post.author}
                    </Typography>
                </Box>

                {/* Time pill */}
                <Box
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        bgcolor: "white",
                        borderRadius: "999px",
                        px: 1.2,
                        py: 0.5,
                    }}
                >
                    <AccessTimeIcon sx={{ fontSize: "0.95rem", color: "#444" }} />
                    <Typography
                        sx={{
                            fontSize: "0.90rem",
                            fontWeight: 700,
                            color: "#605c5c",
                            lineHeight: 1,
                        }}
                    >
                        {post.readTime}
                    </Typography>
                </Box>
            </Box>

            {/* Title */}
            <Typography
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.15rem", md: "1.75rem" },
                    lineHeight: 1.25,
                    letterSpacing: "-0.02em",
                    color: "#111",
                    mt: 2,
                }}
            >
                {post.title}
            </Typography>
        </Box>
    );
}

export default function BlogSection() {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [carouselProgress, setCarouselProgress] = useState(0);

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
        <Box sx={{ py: { xs: 8, md: 12 }, px: { xs: 3, md: 4 } }}>
            {/* Header */}

            <Box
                sx={{
                    width: "100%",
                    mb: { xs: 4, md: 4 },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 2,
                    }}
                >
                    {/* LEFT SIDE — on mobile this wraps to "What's [img]" / "New",
                        sized like the "Our [img] Services" heading. */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            columnGap: { xs: 1.2, md: 2 },
                            rowGap: { xs: 0.5, md: 0 },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: "3.6rem", md: "80px" },
                                fontWeight: 700,
                                color: "#111",
                                lineHeight: 1,
                                letterSpacing: { xs: "-0.03em", md: "normal" },
                            }}
                        >
                            What’s
                        </Typography>

                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                            alt="preview"
                            sx={{
                                width: { xs: 56, md: 80 },
                                height: { xs: 56, md: 80 },
                                borderRadius: { xs: "12px", md: "20px" },
                                objectFit: "cover",
                                flexShrink: 0,
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: { xs: "3.6rem", md: "80px" },
                                fontWeight: 700,
                                color: "#111",
                                lineHeight: 1,
                                letterSpacing: { xs: "-0.03em", md: "normal" },
                                width: { xs: "100%", md: "auto" },
                            }}
                        >
                            New
                        </Typography>
                    </Box>

                    {/* RIGHT BUTTON — desktop only */}
                      <Button
                            sx={{
                                display: { xs: "none", md: "flex" },
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
                                     Explore More Thoughts ↗
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
                                    Explore More Thoughts ↗
                                </Box>
                            </Box>
                        </Button>
                </Box>

                {/* HORIZONTAL LINE — desktop only */}
                <Box
                    sx={{
                        display: { xs: "none", md: "block" },
                        width: "100%",
                        height: "1px",
                        bgcolor: "#ddd",
                        mt: { xs: 3, md: 5 },
                    }}
                />
            </Box>

            {/* Cards — horizontal carousel on mobile, row on desktop */}
            <Box
                ref={scrollerRef}
                sx={{
                    display: "flex",
                    gap: { xs: 2, md: 2.5 },
                    overflowX: { xs: "auto", md: "visible" },
                    scrollSnapType: { xs: "x mandatory", md: "none" },
                    WebkitOverflowScrolling: "touch",
                    // align the card row with the "What's New" heading (section px)
                    px: { xs: 2, md: 0 },
                    mx: { xs: -2, md: 0 },
                    "&::-webkit-scrollbar": { display: "none" },
                    scrollbarWidth: "none",
                }}
            >
                {posts.map((post) => (
                    <BlogCard key={post.title} post={post} />
                ))}
            </Box>

            {/* Mobile-only progress bar — full width within the section padding */}
            <Box
                sx={{
                    display: { xs: "block", md: "none" },
                    position: "relative",
                    width: "100%",
                    mt: 3,
                    height: 3,
                    bgcolor: "#e2e2e2",
                    borderRadius: 2,
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        height: "100%",
                        width: `${100 / posts.length}%`,
                        left: `${carouselProgress * (100 - 100 / posts.length)}%`,
                        bgcolor: "#111",
                        borderRadius: 2,
                        transition: "left 0.05s linear",
                    }}
                />
            </Box>

            {/* Mobile-only "Explore More Thoughts" full-width button */}
            <Button
                fullWidth
                sx={{
                    display: { xs: "flex", md: "none" },
                    mt: 3,
                    borderRadius: "999px",
                    py: 2,
                    background: "#fff",
                    color: "#111",
                    fontWeight: 600,
                    fontSize: "1rem",
                    textTransform: "none",
                    boxShadow: "none",
                    border: "1px solid #ddd",
                    "&:hover": { background: "#fff" },
                }}
            >
                Explore More Thoughts ↗
            </Button>
        </Box>
    );
}