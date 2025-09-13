import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Cute Birthday Cake Component
function BirthdayCake() {
  const cakeRef = useRef();
  const candleRefs = useRef([]);
  
  useFrame((state, delta) => {
    if (cakeRef.current) {
      cakeRef.current.rotation.y += delta * 0.3;
      // Gentle bounce
      cakeRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
    }
    
    // Animate candles
    candleRefs.current.forEach((candle, index) => {
      if (candle) {
        candle.rotation.z = Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
      }
    });
  });

  return (
    <group>
      {/* Main Cake Base */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={cakeRef} position={[0, -1, 0]}>
          {/* Bottom Layer */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[2, 2, 0.8, 32]} />
            <meshPhysicalMaterial
              color="#ff69b4"
              roughness={0.3}
              metalness={0.1}
              emissive="#ff1493"
              emissiveIntensity={0.1}
            />
          </mesh>
          
          {/* Middle Layer */}
          <mesh position={[0, 0.6, 0]}>
            <cylinderGeometry args={[1.5, 1.5, 0.6, 32]} />
            <meshPhysicalMaterial
              color="#ffb347"
              roughness={0.3}
              metalness={0.1}
              emissive="#ff8c00"
              emissiveIntensity={0.1}
            />
          </mesh>
          
          {/* Top Layer */}
          <mesh position={[0, 1.1, 0]}>
            <cylinderGeometry args={[1, 1, 0.4, 32]} />
            <meshPhysicalMaterial
              color="#98fb98"
              roughness={0.3}
              metalness={0.1}
              emissive="#00ff7f"
              emissiveIntensity={0.1}
            />
          </mesh>
          
          {/* Candles */}
          {Array.from({ length: 5 }, (_, i) => {
            const angle = (i / 5) * Math.PI * 2;
            const x = Math.cos(angle) * 0.6;
            const z = Math.sin(angle) * 0.6;
            
            return (
              <group key={i} position={[x, 1.5, z]}>
                {/* Candle stick */}
                <mesh 
                  ref={(el) => candleRefs.current[i] = el}
                  position={[0, 0, 0]}
                >
                  <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
                  <meshPhysicalMaterial
                    color="#fff44f"
                    emissive="#fff44f"
                    emissiveIntensity={0.3}
                  />
                </mesh>
                
                {/* Flame */}
                <mesh position={[0, 0.2, 0]}>
                  <sphereGeometry args={[0.05, 8, 8]} />
                  <meshPhysicalMaterial
                    color="#ff6347"
                    emissive="#ff4500"
                    emissiveIntensity={0.8}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              </group>
            );
          })}
        </group>
      </Float>
      
      {/* Sparkles around cake */}
      <Sparkles
        count={80}
        scale={[6, 6, 6]}
        size={4}
        speed={0.6}
        color="#fff44f"
      />
    </group>
  );
}

// Cute Floating Balloons
function FloatingBalloons() {
  const balloonRefs = useRef([]);
  const stringRefs = useRef([]);
  
  const balloonColors = ['#ff69b4', '#87ceeb', '#98fb98', '#ffb347', '#dda0dd'];
  
  useFrame((state, delta) => {
    balloonRefs.current.forEach((balloon, index) => {
      if (balloon) {
        // Gentle floating motion
        balloon.position.y = 2 + Math.sin(state.clock.elapsedTime + index) * 0.3;
        balloon.position.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.5;
        balloon.rotation.z = Math.sin(state.clock.elapsedTime + index) * 0.1;
      }
    });
  });

  return (
    <group position={[3, 0, -2]}>
      {balloonColors.map((color, index) => (
        <group key={index}>
          {/* Balloon */}
          <Float speed={1 + index * 0.2} rotationIntensity={0.1} floatIntensity={0.8}>
            <mesh 
              ref={(el) => balloonRefs.current[index] = el}
              position={[index * 0.8 - 1.6, 2 + index * 0.3, 0]}
            >
              <sphereGeometry args={[0.4, 16, 16]} />
              <MeshDistortMaterial
                color={color}
                distort={0.1}
                speed={1}
                roughness={0.2}
                metalness={0.1}
                emissive={color}
                emissiveIntensity={0.2}
              />
            </mesh>
          </Float>
          
          {/* String */}
          <mesh position={[index * 0.8 - 1.6, 1, 0]}>
            <cylinderGeometry args={[0.005, 0.005, 2, 4]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Cute Confetti Particles
function ConfettiParticles() {
  const particlesRef = useRef();
  const particleCount = 150;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const confettiColors = [
      new THREE.Color('#ff69b4'),
      new THREE.Color('#ffb347'),
      new THREE.Color('#98fb98'),
      new THREE.Color('#87ceeb'),
      new THREE.Color('#dda0dd'),
      new THREE.Color('#fff44f')
    ];

    for (let i = 0; i < particleCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;

      // Color
      const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Size
      sizes[i] = Math.random() * 2 + 1;
    }

    return { positions, colors, sizes };
  }, []);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.1;
      particlesRef.current.rotation.x += delta * 0.05;
      
      // Make particles fall gently
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] -= delta * 0.5; // Fall down
        if (positions[i] < -12) {
          positions[i] = 12; // Reset to top
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
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Cute Rainbow Ring
function RainbowRing() {
  const ringRef = useRef();
  
  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.5;
      ringRef.current.rotation.y += delta * 0.3;
      // Gentle pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      ringRef.current.scale.setScalar(scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={ringRef} position={[-3, 1, -1]}>
        <torusGeometry args={[1.5, 0.1, 8, 50]} />
        <meshPhysicalMaterial
          color="#ff69b4"
          emissive="#ff1493"
          emissiveIntensity={0.4}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Enhanced Camera Controller with more playful movement
function CuteCamera() {
  const { camera } = useThree();
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    // More gentle and cute camera movement
    camera.position.x = Math.sin(time * 0.2) * 1.5;
    camera.position.y = Math.cos(time * 0.15) * 0.8 + 0.5;
    camera.position.z = 8 + Math.sin(time * 0.1) * 0.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Cute Lighting Setup
function CuteLighting() {
  return (
    <>
      {/* Warm ambient light */}
      <ambientLight intensity={0.6} color="#fff5ee" />
      
      {/* Main directional light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        color="#ffffff"
        castShadow
      />
      
      {/* Colorful point lights for party atmosphere */}
      <pointLight 
        position={[5, 3, 5]} 
        intensity={1} 
        color="#ff69b4"
        distance={20}
      />
      <pointLight 
        position={[-5, 2, -5]} 
        intensity={0.8} 
        color="#87ceeb"
        distance={15}
      />
      <pointLight 
        position={[0, 5, -3]} 
        intensity={0.9} 
        color="#98fb98"
        distance={18}
      />
      <pointLight 
        position={[3, -2, 8]} 
        intensity={0.7} 
        color="#ffb347"
        distance={12}
      />
      
      {/* Spotlight for dramatic effect */}
      <spotLight
        position={[0, 15, 0]}
        angle={0.4}
        penumbra={1}
        intensity={0.8}
        color="#fff44f"
        castShadow
      />
    </>
  );
}

// Main Cute Hero Scene Component
export function HeroScene() {
  return (
    <Canvas 
      camera={{ 
        position: [0, 2, 8], 
        fov: 65,
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
      {/* Cute camera movement */}
      <CuteCamera />
      
      {/* Party lighting */}
      <CuteLighting />
      
      {/* Starry background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={2000} 
        factor={4} 
        saturation={0.8} 
        fade 
        speed={0.3}
      />
      
      {/* Main birthday cake centerpiece */}
      <BirthdayCake />
      
      {/* Floating balloons */}
      <FloatingBalloons />
      
      {/* Confetti particles */}
      <ConfettiParticles />
      
      {/* Rainbow ring decoration */}
      <RainbowRing />
      
      {/* Additional sparkles for magic */}
      <Sparkles
        count={200}
        scale={[15, 15, 15]}
        size={2}
        speed={0.4}
        color="#ffffff"
      />
      
      {/* Party atmosphere fog */}
      <fog attach="fog" args={['#0a0a0a', 12, 35]} />
    </Canvas>
  );
}