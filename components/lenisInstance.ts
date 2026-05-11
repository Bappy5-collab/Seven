"use client";
import type Lenis from "lenis";

// Shared handle to the single Lenis instance created in <SmoothScroll />, so
// other components can trigger programmatic smooth scrolls without prop drilling
// or polluting `window` (the lenis package already owns `window.lenis`).
let instance: Lenis | null = null;

export const setLenis = (l: Lenis | null) => {
  instance = l;
};

export const getLenis = (): Lenis | null => instance;
