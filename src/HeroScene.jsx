import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

// Komponen untuk objek 3D di tengah
function MagicCrystal() {
  const meshRef = useRef();

  // Membuat objek berputar perlahan
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1.5}
    >
      <mesh ref={meshRef}>
        {/* Menggunakan Icosahedron (bentuk seperti kristal) */}
        <icosahedronGeometry args={[1.2, 1]} />
        {/* Material yang memberikan efek seperti kaca/permata */}
        <meshPhysicalMaterial
          color="#ff7b9b"
          transmission={1.0}
          roughness={0.1}
          metalness={0.0}
          thickness={1.5}
          ior={1.5}
        />
      </mesh>
    </Float>
  );
}

// Komponen utama untuk scene 3D
export function HeroScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 60 }} 
      className="hero-canvas"
    >
      {/* Cahaya untuk menerangi objek */}
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff7b9b" />
      
      {/* Taburan bintang di latar belakang */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <MagicCrystal />
    </Canvas>
  );
}