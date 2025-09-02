"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { 
  Group, 
  Color, 
  Mesh, 
  TorusKnotGeometry, 
  MeshStandardMaterial,
  BufferAttribute
} from "three";

interface TorusKnotHeroProps {
  primary?: string;
  secondary?: string;
  background?: string;
  speed?: number;
  intensity?: number;
  enableParallax?: boolean;
  enableColorDrift?: boolean;
}

const TorusKnotHero = ({
  speed = 0.5,
  intensity = 0.8,
  enableParallax = true,
  enableColorDrift = false,
}: TorusKnotHeroProps) => {
  const groupRef = useRef<Group>(null!);
  const meshRef = useRef<Mesh>(null!);
  const { mouse } = useThree();
  
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setPaused] = useState(false);
  
  // Track visibility states
  useEffect(() => {
    const handleVisibilityChange = () => {
      setPaused(document.hidden);
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  
  // Create faceted geometry with vertex colors
  const { geometry, material } = useMemo(() => {
    // Create angular/faceted geometry - thicker tube
    const geometry = new TorusKnotGeometry(
      1.5,  // radius
      0.5,  // tube radius (thicker for more presence)
      64,   // tubular segments (smooth path)
      6,    // radial segments (hexagonal for sharper look)
      2,    // p value
      3     // q value
    );
    
    // Get position attribute for color calculation
    const positions = geometry.attributes.position;
    const count = positions.count;
    
    // Create color array
    const colors = new Float32Array(count * 3);
    
    // Define gradient colors (brighter metallic with electric blue)
    const gradientColors = [
      new Color("#f3f4f6"), // Bright silver
      new Color("#d1d5db"), // Light silver
      new Color("#0ea5e9"), // Electric blue
      new Color("#0284c7"), // Sky blue
      new Color("#0ea5e9"), // Electric blue
      new Color("#d1d5db"), // Light silver
      new Color("#f3f4f6"), // Back to bright silver
    ];
    
    // Apply gradient based on position along the knot
    for (let i = 0; i < count; i++) {
      // Get position along the knot (0 to 1)
      const t = (i / count) * gradientColors.length;
      const colorIndex = Math.floor(t) % gradientColors.length;
      const nextColorIndex = (colorIndex + 1) % gradientColors.length;
      const blend = t - Math.floor(t);
      
      // Interpolate between colors
      const color = new Color().lerpColors(
        gradientColors[colorIndex],
        gradientColors[nextColorIndex],
        blend
      );
      
      // Add some variation based on radial position
      const radialOffset = (i % 8) / 8;
      color.offsetHSL(0, 0, radialOffset * 0.1 - 0.05);
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    // Add color attribute to geometry
    geometry.setAttribute('color', new BufferAttribute(colors, 3));
    
    // Create material with flat shading for faceted look
    const material = new MeshStandardMaterial({
      vertexColors: true,
      metalness: 0.8,  // Higher metalness for more shine
      roughness: 0.15,  // Smoother for better reflections
      flatShading: true, // Key for angular/faceted appearance
      envMapIntensity: intensity * 2,
      emissive: new Color("#0ea5e9"), // Electric blue glow
      emissiveIntensity: 0.05, // Subtle glow
    });
    
    return { geometry, material };
  }, [intensity]);
  
  // Animation frame
  useFrame((state, delta) => {
    if (!groupRef.current || !meshRef.current || isPaused || !isVisible) return;
    
    const time = state.clock.getElapsedTime();
    
    // Slow, confident rotation
    groupRef.current.rotation.x += delta * speed * 0.3;
    groupRef.current.rotation.y += delta * speed * 0.2;
    
    // Optional micro parallax
    if (enableParallax) {
      const targetX = mouse.y * 0.03;
      const targetY = mouse.x * 0.03;
      
      meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.02;
      meshRef.current.rotation.y += (targetY - meshRef.current.rotation.y) * 0.02;
    }
    
    // Optional subtle pulsing of emissive intensity
    if (enableColorDrift) {
      const pulse = Math.sin(time * 0.5) * 0.01 + 0.02;
      material.emissiveIntensity = pulse;
    }
  });
  
  // Set visibility callback for parent to control
  useEffect(() => {
    const mesh = meshRef.current;
    if (mesh) {
      (mesh as Mesh & { setVisibility?: (visible: boolean) => void }).setVisibility = (visible: boolean) => {
        setIsVisible(visible);
      };
    }
  }, []);
  
  return (
    <group ref={groupRef}>
      <mesh 
        ref={meshRef}
        geometry={geometry}
        material={material}
        castShadow
        receiveShadow
      />
    </group>
  );
};

export default TorusKnotHero;