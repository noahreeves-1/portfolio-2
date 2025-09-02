"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Preload } from "@react-three/drei";
import * as THREE from "three";
import TorusKnotHero from "./TorusKnotHero";
import TorusKnotFallback from "./TorusKnotFallback";

interface HeroAnimationProps {
  primary?: string;
  secondary?: string;
  background?: string;
  speed?: number;
  intensity?: number;
}

const HeroAnimation = ({
  primary = "#5c6cff",
  secondary = "#7c8cff",
  background = "transparent",
  speed = 0.5,
  intensity = 0.8,
}: HeroAnimationProps) => {
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<THREE.Mesh & { setVisibility?: (visible: boolean) => void }>(null);

  // Check WebGL support and reduced motion preference
  useEffect(() => {
    // Check WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        return !!gl;
      } catch {
        return false;
      }
    };
    
    setWebGLSupported(checkWebGL());
    
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener("change", handleMotionChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Intersection Observer for visibility
  useEffect(() => {
    const currentRef = containerRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // Update mesh visibility if it exists
        if (meshRef.current?.setVisibility) {
          meshRef.current.setVisibility(entry.isIntersecting);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Show static fallback for reduced motion or no WebGL
  if (reducedMotion || !webGLSupported) {
    return (
      <div 
        ref={containerRef}
        style={{ 
          position: "relative", 
          width: "100%", 
          height: "100%",
          background: background
        }}
      >
        <TorusKnotFallback 
          primary={primary} 
          secondary={secondary} 
        />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: "relative", 
        width: "100%", 
        height: "100%",
        background: background
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
        dpr={Math.min(2, window.devicePixelRatio)} // Cap DPR for performance
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        frameloop={isVisible ? "always" : "never"} // Pause when not visible
      >
        {/* Balanced ambient */}
        <ambientLight intensity={0.25} />
        
        {/* Main key light */}
        <spotLight
          position={[5, 10, 5]}
          angle={0.25}
          penumbra={0.5}
          intensity={1.2}
          color="#ffffff"
          castShadow
        />
        
        {/* Rim light with subtle blue tone */}
        <spotLight
          position={[-10, 0, -10]}
          angle={0.3}
          penumbra={0.2}
          intensity={0.8}
          color="#3b82f6"
        />
        
        {/* Fill light */}
        <pointLight position={[0, -5, 5]} intensity={0.3} color="#ffffff" />
        
        <TorusKnotHero
          primary={primary}
          secondary={secondary}
          speed={speed}
          intensity={intensity}
          enableParallax={true}
          enableColorDrift={true}
        />
        
        {/* Studio environment for realistic reflections */}
        <Environment 
          preset="studio" 
          background={false}
        />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default HeroAnimation;