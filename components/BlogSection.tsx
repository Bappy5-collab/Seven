"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useRef, useState } from "react";

const posts = [
    {
        category: "News",
        title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
        author: "Carrie Rose",
        authorColor: "#c8b8a2",
        readTime: "2 mins",
        img: "/FeaturesWork/1.png",
    },
    {
        category: "Food/Hospitality/Drink",
        title: "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
        author: "Ray Saddiq",
        authorColor: "#a2b8c8",
        readTime: "2 mins",
        img: "/FeaturesWork/2.png",
    },
    {
        category: "Food/Hospitality/Drink",
        title: "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
        author: "Carrie Rose",
        authorColor: "#c8b8a2",
        readTime: "2 mins",
        img: "/FeaturesWork/3.png",
    },
];

function BlogCard({ post, index }: { post: (typeof posts)[0]; index: number }) {
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
                bgcolor: "#fff",
                borderRadius: index === 2 ? "0px" : "18px", // ✅ 3rd card no radius
                overflow: "hidden",
                flex: 1,
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                cursor: "none",
                position: "relative",
            }}
        >
            {/* Image */}
            <Box
                sx={{
                    position: "relative",
                    height: { xs: "220px", md: "280px" },
                    overflow: "hidden",
                }}
            >
                <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: index === 1 ? "center" : "center", // ✅ 2nd card clean center
                        transition: "all 0.4s ease",
                    }}
                />

                {/* ✅ Blur overlay (bottom → top) */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backdropFilter: "blur(10px)",
                        background: "rgba(0,0,0,0.2)",
                        transform: cursor.visible ? "translateY(0%)" : "translateY(100%)",
                       
                        // ✅ logic
                        borderTopLeftRadius: cursor.visible ? "0%" : "50%",
                        borderTopRightRadius: cursor.visible ? "0%" : "50%",

                        // 🔥 key trick: delay only when entering
                        transition: cursor.visible
                            ? "transform 0.5s ease, border-radius 0.3s ease 0.3s"
                            : "transform 0.5s ease, border-radius 0.3s ease",

                        zIndex: 1,
                    }}
                />

                {/* Category pill */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        bgcolor: "rgba(255,255,255,0.82)",
                        backdropFilter: "blur(6px)",
                        borderRadius: "999px",
                        px: 1.5,
                        py: 0.4,
                        zIndex: 2,
                    }}
                >
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, color: "#111", lineHeight: 1.5 }}>
                        {post.category}
                    </Typography>
                </Box>
            </Box>

            {/* Cursor-following circle */}
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

            {/* Content */}
            <Box sx={{ p: { xs: 2.5, md: 3 }, display: "flex", flexDirection: "column", gap: 1.5, flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                    <Box
                        sx={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            bgcolor: post.authorColor,
                        }}
                    />
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 600, color: "#111" }}>
                        {post.author}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.4, ml: 0.5 }}>
                        <AccessTimeIcon sx={{ fontSize: "0.8rem", color: "#777" }} />
                        <Typography sx={{ fontSize: "0.78rem", color: "#777" }}>{post.readTime}</Typography>
                    </Box>
                </Box>

                <Typography
                    sx={{
                        fontWeight: 800,
                        fontSize: { xs: "1rem", md: "1.05rem" },
                        lineHeight: 1.4,
                        letterSpacing: "-0.02em",
                        color: "#111",
                    }}
                >
                    {post.title}
                </Typography>
            </Box>
        </Box>
    );
}

export default function BlogSection() {
    return (
        <Box sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 3, md: 4 }, px: { xs: 2, md: 6 } }}>
            {/* Header */}

            <Box
                sx={{
                    width: "100%",
                    mb: { xs: 6, md: 10 },
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
                    {/* LEFT SIDE */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: "40px", md: "80px" },
                                fontWeight: 700,
                                color: "#111",
                                lineHeight: 1,
                            }}
                        >
                            What’s
                        </Typography>

                        <Box
                            component="img"
                            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                            alt="preview"
                            sx={{
                                width: { xs: 50, md: 80 },
                                height: { xs: 50, md: 80 },
                                borderRadius: "20px",
                                objectFit: "cover",
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: { xs: "40px", md: "80px" },
                                fontWeight: 700,
                                color: "#111",
                                lineHeight: 1,
                            }}
                        >
                            New
                        </Typography>
                    </Box>

                    {/* RIGHT BUTTON */}
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

                {/* ✅ HORIZONTAL LINE */}
                <Box
                    sx={{
                        width: "100%",
                        height: "1px",
                        bgcolor: "#ddd",
                        mt: { xs: 3, md: 5 },
                    }}
                />
            </Box>

            {/* Cards */}
            <Box
                sx={{
                    display: "flex",
                    gap: { xs: 2, md: 2.5 },
                    flexDirection: { xs: "column", md: "row" },
                    maxWidth: "1400px",
                    mx: "auto",
                }}
            >
                {posts.map((post, i) => (
                    <BlogCard key={post.title} post={post} index={i} />
                ))}
            </Box>
        </Box>
    );
}