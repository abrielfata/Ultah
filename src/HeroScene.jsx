import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, Sparkles, useTexture, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Enhanced Magic Crystal Component
function MagicCrystal() {
  const meshRef = useRef();
  const innerRef = useRef();
  const outerRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.1;
      innerRef.current.rotation.z += delta * 0.15;
    }
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.1;
      outerRef.current.rotation.z -= delta * 0.05;
    }
  });

  return (
    <group>
      {/* Outer Ring */}
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={outerRef} position={[0, 0, 0]}>
          <torusGeometry args={[3, 0.05, 8, 32]} />
          <meshPhysicalMaterial
            color="#d4af37"
            emissive="#d4af37"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      {/* Main Crystal */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.5, 1]} />
          <MeshDistortMaterial
            color="#ffffff"
            transparent
            opacity={0.8}
            distort={0.3}
            speed={2}
            roughness={0}
            metalness={0.1}
          />
        </mesh>
      </Float>

      {/* Inner Core */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.5}>
        <mesh ref={innerRef} position={[0, 0, 0]}>
          <octahedronGeometry args={[0.8, 2]} />
          <meshPhysicalMaterial
            color="#f4d03f"
            transparent
            opacity={0.7}
            transmission={1}
            roughness={0}
            metalness={0}
            thickness={0.5}
            ior={1.5}
            emissive="#f4d03f"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Sparkles Effect */}
      <Sparkles
        count={50}
        scale={[8, 8, 8]}
        size={3}
        speed={0.4}
        color="#d4af37"
      />
    </group>
  );
}

// Floating Particles Component
function FloatingParticles() {
  const particlesRef = useRef();
  const particleCount = 100;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color('#d4af37'),
      new THREE.Color('#f4d03f'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#b8941f')
    ];

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Color
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Scale
      scales[i] = Math.random() * 0.5 + 0.5;
    }

    return { positions, colors, scales };
  }, []);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
      particlesRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={particleCount}
          array={particles.scales}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Dynamic Camera Controller
function CameraController() {
  const { camera } = useThree();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    camera.position.x = Math.sin(time * 0.1) * 2;
    camera.position.y = Math.cos(time * 0.15) * 1;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Enhanced Lighting Setup
function LightingSetup() {
  return (
    <>
      <ambientLight intensity={0.4} color="#f8f6f0" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="#ffffff"
        castShadow
      />
      <pointLight 
        position={[5, 5, 5]} 
        intensity={0.8} 
        color="#d4af37"
        distance={20}
      />
      <pointLight 
        position={[-5, -5, -5]} 
        intensity={0.6} 
        color="#f4d03f"
        distance={15}
      />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#ffffff"
        castShadow
      />
    </>
  );
}

// Main Hero Scene Component
export function HeroScene() {
  return (
    <Canvas 
      camera={{ 
        position: [0, 0, 8], 
        fov: 60,
        near: 0.1,
        far: 100
      }} 
      className="hero-canvas"
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      }}
      shadows
    >
      {/* Dynamic camera movement */}
      <CameraController />
      
      {/* Enhanced lighting */}
      <LightingSetup />
      
      {/* Background stars */}
      <Stars 
        radius={100} 
        depth={50} 
        count={3000} 
        factor={4} 
        saturation={0.2} 
        fade 
        speed={0.5}
      />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Main crystal centerpiece */}
      <MagicCrystal />
      
      {/* Environmental effects */}
      <fog attach="fog" args={['#060010', 15, 30]} />
    </Canvas>
  );
}