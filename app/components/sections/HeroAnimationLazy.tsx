"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import TorusKnotFallback from "./TorusKnotFallback";

// Lazy load the HeroAnimation only when visible
const HeroAnimation = dynamic(() => import("./HeroAnimation"), {
  ssr: false,
  loading: () => null, // No loading placeholder - clean transition
});

interface HeroAnimationLazyProps {
  primary?: string;
  secondary?: string;
  background?: string;
  speed?: number;
  intensity?: number;
}

export default function HeroAnimationLazy({
  primary = "#5c6cff",
  secondary = "#7c8cff",
  background = "transparent",
  speed = 0.5,
  intensity = 0.8,
}: HeroAnimationLazyProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if we should even attempt to load 3D
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Simple WebGL check
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
      } catch {
        return false;
      }
    })();

    // Only load 3D if both conditions are met
    setShouldLoad(!prefersReducedMotion && hasWebGL);
  }, []);

  useEffect(() => {
    const currentRef = containerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Once it's visible, load the component and don't unload it
        if (entry.isIntersecting && !isVisible && shouldLoad) {
          setIsVisible(true);
        }
      },
      {
        // Start loading when the element is 100px away from viewport
        rootMargin: "100px",
        threshold: 0,
      }
    );

    if (currentRef && shouldLoad) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible, shouldLoad]);

  // Always show fallback if 3D shouldn't load
  if (!shouldLoad) {
    return (
      <div ref={containerRef} className="w-full h-full">
        <TorusKnotFallback primary={primary} secondary={secondary} />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible ? (
        <HeroAnimation 
          primary={primary}
          secondary={secondary}
          background={background}
          speed={speed}
          intensity={intensity}
        />
      ) : null}
    </div>
  );
}