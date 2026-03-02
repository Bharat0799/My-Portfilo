
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const OrganicShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { viewport } = useThree();

  // Mouse move handler
  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Slow rotation
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
    
    // Parallax effect based on mouse move
    const targetX = mousePos.x * 0.2;
    const targetY = mousePos.y * 0.2;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 4]} />
        <MeshDistortMaterial
          color="#111111"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#B6FF00"
          emissiveIntensity={0.05}
        />
      </mesh>
    </Float>
  );
};

export const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Canvas gl={{ alpha: true }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} color="#B6FF00" intensity={0.5} />
        
        {/* Rim lighting effect */}
        <pointLight position={[0, 5, 0]} color="#B6FF00" intensity={0.3} />
        
        <OrganicShape />
      </Canvas>
    </div>
  );
};
