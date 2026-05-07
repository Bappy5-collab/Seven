import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rise at Seven – Organic Media Agency",
  description:
    "Organic media planners creating, distributing & optimising search-first content for SEO, Social, PR, AI and LLM search.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${fraunces.variable}`} style={{ margin: 0, padding: 0 }}>
        <SmoothScroll />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
