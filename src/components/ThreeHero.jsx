import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    sphereRef.current.rotation.x = time * 0.15;
    sphereRef.current.rotation.y = time * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={sphereRef} args={[1, 128, 128]} scale={2.5}>
        <MeshDistortMaterial
          color="#f43f5e"
          attach="material"
          distort={0.45}
          speed={3}
          roughness={0.1}
          metalness={1}
          emissive="#f43f5e"
          emissiveIntensity={0.2}
        />
      </Sphere>
    </Float>
  );
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 z-0 bg-[#030712]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#f43f5e" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#22d3ee" />
        <spotLight position={[0, 5, 0]} intensity={1} color="#ffffff" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
