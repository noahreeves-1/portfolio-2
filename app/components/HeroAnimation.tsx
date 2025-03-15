"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

interface TesseractProps {
  size?: number;
  rotationSpeed?: number;
  color?: string;
}

interface EdgeProps {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color: string | number;
  opacity?: number;
  pulse?: boolean;
}

// Mouse control for the tesseract
const MouseControl = ({ children }: { children: React.ReactNode }) => {
  const { mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (groupRef.current) {
      // Gentle rotation following mouse position
      const targetRotationX = -mouse.y * 0.5;
      const targetRotationY = mouse.x * 0.5;

      // Smooth interpolation
      groupRef.current.rotation.x +=
        (targetRotationX - groupRef.current.rotation.x) * 0.03;
      groupRef.current.rotation.y +=
        (targetRotationY - groupRef.current.rotation.y) * 0.03;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

// Tesseract (4D hypercube) visualization
const Tesseract = ({
  size = 1.5,
  rotationSpeed = 0.5,
  color = "#4285F4",
}: TesseractProps) => {
  const outerCubeRef = useRef<THREE.Group>(null!);
  const innerCubeRef = useRef<THREE.Group>(null!);
  const edgesRef = useRef<THREE.Group>(null!);
  const cubeSize = useRef({ outer: size, inner: size * 0.5 });

  // Generate the vertices for a cube centered at origin
  const generateCubeVertices = (cubeSize: number) => {
    return [
      [-cubeSize, -cubeSize, -cubeSize], // 0
      [cubeSize, -cubeSize, -cubeSize], // 1
      [cubeSize, cubeSize, -cubeSize], // 2
      [-cubeSize, cubeSize, -cubeSize], // 3
      [-cubeSize, -cubeSize, cubeSize], // 4
      [cubeSize, -cubeSize, cubeSize], // 5
      [cubeSize, cubeSize, cubeSize], // 6
      [-cubeSize, cubeSize, cubeSize], // 7
    ].map((coords) => new THREE.Vector3(...coords));
  };

  // Generate the edges connecting vertices
  const generateCubeEdges = () => {
    return [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0], // bottom face
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 4], // top face
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7], // connecting edges
    ];
  };

  // Create the connections between outer and inner cube
  const generateTesseractConnections = (vertices: THREE.Vector3[]) => {
    return vertices.map((_, i) => [i, i]);
  };

  // Precompute the vertices and edges
  const { outerVertices, innerVertices, cubeEdges, tesseractConnections } =
    useMemo(() => {
      const outerVertices = generateCubeVertices(cubeSize.current.outer);
      const innerVertices = generateCubeVertices(cubeSize.current.inner);
      const cubeEdges = generateCubeEdges();
      const tesseractConnections = generateTesseractConnections(outerVertices);

      return { outerVertices, innerVertices, cubeEdges, tesseractConnections };
    }, []);

  // Multiple rotation effects
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Complex rotations for outer cube
    if (outerCubeRef.current) {
      outerCubeRef.current.rotation.x = time * rotationSpeed * 0.3;
      outerCubeRef.current.rotation.y = time * rotationSpeed * 0.2;
      outerCubeRef.current.rotation.z = time * rotationSpeed * 0.1;
    }

    // Inverse rotations for inner cube (creates the "rotating in on itself" effect)
    if (innerCubeRef.current) {
      innerCubeRef.current.rotation.x = -time * rotationSpeed * 0.6;
      innerCubeRef.current.rotation.y = -time * rotationSpeed * 0.5;
      innerCubeRef.current.rotation.z = -time * rotationSpeed * 0.3;

      // Pulsing effect for the inner cube
      const pulseScale = 0.8 + Math.sin(time * 2) * 0.2;
      innerCubeRef.current.scale.set(pulseScale, pulseScale, pulseScale);
    }

    // Edges container rotates independently
    if (edgesRef.current) {
      edgesRef.current.rotation.x = time * rotationSpeed * 0.15;
      edgesRef.current.rotation.z = time * rotationSpeed * 0.25;
    }
  });

  // Color calculations for gradient effects
  const colors = useMemo(() => {
    return {
      outer: color,
      inner: new THREE.Color(color).offsetHSL(0, 0.2, 0.1).getStyle(),
      edges: new THREE.Color(color).offsetHSL(0, 0, 0.2).getStyle(),
    };
  }, [color]);

  return (
    <group>
      {/* Outer cube */}
      <group ref={outerCubeRef}>
        {outerVertices.map((vertex, i) => (
          <mesh key={`outer-${i}`} position={vertex}>
            <sphereGeometry args={[0.15, 24, 24]} />
            <meshPhysicalMaterial
              color={colors.outer}
              emissive={colors.outer}
              emissiveIntensity={0.5}
              transparent={true}
              opacity={0.9}
              metalness={0.9}
              roughness={0.1}
              clearcoat={1}
            />
          </mesh>
        ))}

        {/* Outer cube edges */}
        {cubeEdges.map(([start, end], i) => (
          <Edge
            key={`outer-edge-${i}`}
            start={outerVertices[start]}
            end={outerVertices[end]}
            color={colors.outer}
          />
        ))}
      </group>

      {/* Inner cube (represents the 4th dimension) */}
      <group ref={innerCubeRef}>
        {innerVertices.map((vertex, i) => (
          <mesh key={`inner-${i}`} position={vertex}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshPhysicalMaterial
              color={colors.inner}
              emissive={colors.inner}
              emissiveIntensity={0.8}
              transparent={true}
              opacity={0.95}
              metalness={0.9}
              roughness={0.1}
              clearcoat={1}
              transmission={0.2}
            />
          </mesh>
        ))}

        {/* Inner cube edges */}
        {cubeEdges.map(([start, end], i) => (
          <Edge
            key={`inner-edge-${i}`}
            start={innerVertices[start]}
            end={innerVertices[end]}
            color={colors.inner}
            opacity={0.6}
          />
        ))}
      </group>

      {/* Edges connecting outer and inner cubes (represents the 5th dimension) */}
      <group ref={edgesRef}>
        {tesseractConnections.map(([outerIndex, innerIndex], i) => (
          <Edge
            key={`tesseract-edge-${i}`}
            start={outerVertices[outerIndex]}
            end={innerVertices[innerIndex]}
            color={colors.edges}
            opacity={0.4}
            pulse={true}
          />
        ))}
      </group>
    </group>
  );
};

// Edge component for connecting vertices
const Edge = ({
  start,
  end,
  color = "#ffffff",
  opacity = 0.5,
  pulse = false,
}: EdgeProps) => {
  const lineRef = useRef<THREE.Group>(null!);
  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);
  const material = useRef<THREE.LineBasicMaterial>(null!);

  useFrame((state) => {
    // Update line geometry points
    lineGeometry.setFromPoints([start, end]);

    // Pulse effect on opacity if enabled
    if (pulse && material.current) {
      const time = state.clock.getElapsedTime();
      material.current.opacity =
        opacity * 0.6 + Math.sin(time * 3) * (opacity * 0.4);
    }
  });

  return (
    <group ref={lineRef}>
      <primitive
        object={
          new THREE.Line(
            lineGeometry,
            new THREE.LineBasicMaterial({
              color: color,
              transparent: true,
              opacity: opacity,
              linewidth: 1,
            })
          )
        }
        ref={material}
      />
    </group>
  );
};

// Effects layer that adds visual polish to the scene
const Effects = () => {
  return (
    <group>
      {/* Ambient particles to give depth to the scene */}
      {Array.from({ length: 30 }).map((_, i) => (
        <AmbientParticle key={i} />
      ))}
    </group>
  );
};

// Ambient floating particles
const AmbientParticle = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const startPosition = useMemo(() => {
    const radius = 8 + Math.random() * 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;

    return new THREE.Vector3(
      radius * Math.sin(theta) * Math.cos(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(theta)
    );
  }, []);

  const speed = useMemo(() => 0.2 + Math.random() * 0.3, []);
  const size = useMemo(() => 0.02 + Math.random() * 0.04, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Circular motion with slight offset
    ref.current.position.x = startPosition.x + Math.sin(time * speed) * 1;
    ref.current.position.y = startPosition.y + Math.cos(time * speed) * 1;
    ref.current.position.z = startPosition.z + Math.sin(time * speed * 0.5) * 1;

    // Fade opacity with distance from center
    const distance = ref.current.position.length();
    const material = ref.current.material as THREE.MeshBasicMaterial;
    material.opacity = Math.max(0, 1 - distance / 15) * 0.8;
  });

  return (
    <mesh ref={ref} position={startPosition}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent={true}
        opacity={0.5}
        depthWrite={false}
      />
    </mesh>
  );
};

// Main component that wraps the Canvas
const HeroAnimation = () => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={0.6}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.2} />

        <MouseControl>
          <Tesseract color="#5c6cff" />
          <Effects />
        </MouseControl>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default HeroAnimation;
