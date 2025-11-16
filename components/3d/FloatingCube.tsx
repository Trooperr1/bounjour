'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.z = Math.cos(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={1.5}>
      <RoundedBox ref={meshRef} args={[2, 2, 2]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.9}
          roughness={0.1}
          wireframe
        />
      </RoundedBox>
    </Float>
  );
}

export default function FloatingCube() {
  return (
    <div className="w-full h-full absolute inset-0 opacity-30">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <spotLight position={[-5, 5, 5]} angle={0.3} penumbra={1} intensity={0.5} />
        <AnimatedCube />
      </Canvas>
    </div>
  );
}
