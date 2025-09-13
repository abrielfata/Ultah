import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Elegant Birthday Cake Component
function ElegantBirthdayCake() {
  const cakeRef = useRef();
  const candleRefs = useRef([]);
  
  useFrame((state, delta) => {
    if (cakeRef.current) {
      cakeRef.current.rotation.y += delta * 0.15; // Slower rotation
      // Gentle, subtle bounce
      cakeRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
    
    // Animate candles with subtle movement
    candleRefs.current.forEach((candle, index) => {
      if (candle) {
        candle.rotation.z = Math.sin(state.clock.elapsedTime * 1.2 + index) * 0.05;
      }
    });
  });

  return (
    <group>
      {/* Main Elegant Cake */}
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
        <group ref={cakeRef} position={[0, -1, 0]}>
          {/* Bottom Layer - Soft Cream */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[2, 2, 0.8, 32]} />
            <meshPhysicalMaterial
              color="#e8dcc6"
              roughness={0.4}
              metalness={0.05}
              emissive="#f5f2ed"
              emissiveIntensity={0.02}
            />
          </mesh>
          
          {/* Middle Layer - Warm Taupe */}
          <mesh position={[0, 0.6, 0]}>
            <cylinderGeometry args={[1.5, 1.5, 0.6, 32]} />
            <meshPhysicalMaterial
              color="#d4c4a8"
              roughness={0.4}
              metalness={0.05}
              emissive="#e8dcc6"
              emissiveIntensity={0.03}
            />
          </mesh>
          
          {/* Top Layer - Soft Sage */}
          <mesh position={[0, 1.1, 0]}>
            <cylinderGeometry args={[1, 1, 0.4, 32]} />
            <meshPhysicalMaterial
              color="#b8c5a6"
              roughness={0.4}
              metalness={0.05}
              emissive="#d4c4a8"
              emissiveIntensity={0.02}
            />
          </mesh>
          
          {/* Elegant Candles */}
          {Array.from({ length: 3 }, (_, i) => {
            const angle = (i / 3) * Math.PI * 2;
            const x = Math.cos(angle) * 0.5;
            const z = Math.sin(angle) * 0.5;
            
            return (
              <group key={i} position={[x, 1.4, z]}>
                {/* Candle stick */}
                <mesh 
                  ref={(el) => candleRefs.current[i] = el}
                  position={[0, 0, 0]}
                >
                  <cylinderGeometry args={[0.025, 0.025, 0.25, 8]} />
                  <meshPhysicalMaterial
                    color="#f5f2ed"
                    emissive="#e8dcc6"
                    emissiveIntensity={0.1}
                  />
                </mesh>
                
                {/* Gentle Flame */}
                <mesh position={[0, 0.15, 0]}>
                  <sphereGeometry args={[0.04, 8, 8]} />
                  <meshPhysicalMaterial
                    color="#c9ad7f"
                    emissive="#d4c4a8"
                    emissiveIntensity={0.3}
                    transparent
                    opacity={0.9}
                  />
                </mesh>
              </group>
            );
          })}
        </group>
      </Float>
      
      {/* Subtle sparkles around cake */}
      <Sparkles
        count={40}
        scale={[4, 4, 4]}
        size={2}
        speed={0.3}
        color="#e8dcc6"
      />
    </group>
  );
}

// Gentle Floating Elements
function FloatingElements() {
  const elementRefs = useRef([]);
  
  const elementColors = ['#e8dcc6', '#b8c5a6', '#d4c4a8', '#c9ad7f'];
  
  useFrame((state, delta) => {
    elementRefs.current.forEach((element, index) => {
      if (element) {
        // Very gentle floating motion
        element.position.y = 2 + Math.sin(state.clock.elapsedTime * 0.6 + index) * 0.2;
        element.position.x = Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.3;
        element.rotation.z = Math.sin(state.clock.elapsedTime * 0.4 + index) * 0.05;
      }
    });
  });

  return (
    <group position={[2.5, 0, -1.5]}>
      {elementColors.map((color, index) => (
        <group key={index}>
          {/* Floating sphere */}
          <Float speed={0.5 + index * 0.1} rotationIntensity={0.05} floatIntensity={0.4}>
            <mesh 
              ref={(el) => elementRefs.current[index] = el}
              position={[index * 0.6 - 1, 2 + index * 0.2, 0]}
            >
              <sphereGeometry args={[0.3, 12, 12]} />
              <MeshDistortMaterial
                color={color}
                distort={0.05}
                speed={0.5}
                roughness={0.4}
                metalness={0.1}
                emissive={color}
                emissiveIntensity={0.08}
                transparent
                opacity={0.8}
              />
            </mesh>
          </Float>
        </group>
      ))}
    </group>
  );
}

// Subtle Particles
function SubtleParticles() {
  const particlesRef = useRef();
  const particleCount = 80;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const particleColors = [
      new THREE.Color('#e8dcc6'),
      new THREE.Color('#d4c4a8'),
      new THREE.Color('#b8c5a6'),
      new THREE.Color('#c9ad7f'),
      new THREE.Color('#d4a99a')
    ];

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Color
      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Size
      sizes[i] = Math.random() * 1.5 + 0.5;
    }

    return { positions, colors, sizes };
  }, []);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
      particlesRef.current.rotation.x += delta * 0.02;
      
      // Very gentle falling motion
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= delta * 0.2; // Slower fall
        if (positions[i] < -10) {
          positions[i] = 10; // Reset to top
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
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
          attach="attributes-size"
          count={particleCount}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Elegant Geometric Ring
function ElegantRing() {
  const ringRef = useRef();
  
  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
      ringRef.current.rotation.y += delta * 0.15;
      // Very subtle pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      ringRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={ringRef} position={[-2.5, 0.5, -1]}>
        <torusGeometry args={[1.2, 0.08, 6, 30]} />
        <meshPhysicalMaterial
          color="#c9ad7f"
          emissive="#d4c4a8"
          emissiveIntensity={0.15}
          transparent
          opacity={0.9}
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Gentle Camera Movement
function GentleCamera() {
  const { camera } = useThree();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    // Very subtle and gentle camera movement
    camera.position.x = Math.sin(time * 0.1) * 0.8;
    camera.position.y = Math.cos(time * 0.08) * 0.4 + 0.3;
    camera.position.z = 7 + Math.sin(time * 0.05) * 0.3;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Soft Elegant Lighting
function ElegantLighting() {
  return (
    <>
      {/* Warm ambient light */}
      <ambientLight intensity={0.7} color="#faf8f5" />
      
      {/* Main directional light */}
      <directionalLight
        position={[8, 8, 4]}
        intensity={0.8}
        color="#ffffff"
        castShadow
      />
      
      {/* Subtle colored point lights */}
      <pointLight 
        position={[4, 2, 4]} 
        intensity={0.4} 
        color="#e8dcc6"
        distance={15}
      />
      <pointLight 
        position={[-4, 1, -4]} 
        intensity={0.3} 
        color="#b8c5a6"
        distance={12}
      />
      <pointLight 
        position={[0, 4, -2]} 
        intensity={0.35} 
        color="#d4c4a8"
        distance={14}
      />
      
      {/* Soft top light */}
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.3}
        color="#c9ad7f"
        castShadow
      />
    </>
  );
}

// Main Elegant Hero Scene Component
export function HeroScene() {
  return (
    <Canvas 
      camera={{ 
        position: [0, 1.5, 7], 
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
      {/* Gentle camera movement */}
      <GentleCamera />
      
      {/* Elegant lighting */}
      <ElegantLighting />
      
      {/* Subtle starry background */}
      <Stars 
        radius={80} 
        depth={40} 
        count={1000} 
        factor={2} 
        saturation={0.3} 
        fade 
        speed={0.1}
      />
      
      {/* Main elegant cake centerpiece */}
      <ElegantBirthdayCake />
      
      {/* Floating elements */}
      <FloatingElements />
      
      {/* Subtle particles */}
      <SubtleParticles />
      
      {/* Elegant ring decoration */}
      <ElegantRing />
      
      {/* Additional subtle sparkles */}
      <Sparkles
        count={60}
        scale={[12, 12, 12]}
        size={1}
        speed={0.2}
        color="#e8dcc6"
      />
      
      {/* Soft atmospheric fog */}
      <fog attach="fog" args={['#faf8f5', 8, 25]} />
    </Canvas>
  );
}