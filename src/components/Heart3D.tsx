import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

type HeartProps = {
  status: 'healthy' | 'warning' | 'critical';
  scale?: number;
};

export const Heart3D = ({ status, scale = 1 }: HeartProps) => {
  const meshRef = useRef<Mesh>(null);
  
  const color = status === 'healthy' ? '#39ff14' : status === 'warning' ? '#ffff00' : '#ff0033';
  const speed = status === 'healthy' ? 0.5 : status === 'warning' ? 1.5 : 3;
  const intensity = status === 'healthy' ? 0.8 : status === 'warning' ? 1.2 : 1.8;

  useFrame((state) => {
    if (meshRef.current) {
      // Heartbeat pump effect (no rotation)
      const time = state.clock.elapsedTime * speed;
      // Create a heartbeat pattern: quick pump in, quick pump out, pause
      const heartbeat = Math.abs(Math.sin(time * 2)) * Math.exp(-((time * 2) % (Math.PI * 2)) / 2);
      const pulse = heartbeat * 0.15 * intensity + 1;
      meshRef.current.scale.set(pulse * scale, pulse * scale, pulse * scale);
    }
  });

  // Create heart shape
  const heartShape = new THREE.Shape();
  heartShape.moveTo(0, 0);
  heartShape.bezierCurveTo(0, -0.3, -0.6, -0.3, -0.6, 0);
  heartShape.bezierCurveTo(-0.6, 0.3, 0, 0.6, 0, 1);
  heartShape.bezierCurveTo(0, 0.6, 0.6, 0.3, 0.6, 0);
  heartShape.bezierCurveTo(0.6, -0.3, 0, -0.3, 0, 0);

  const extrudeSettings = {
    depth: 0.4,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1
  };

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={[Math.PI, 0, 0]}>
      <extrudeGeometry args={[heartShape, extrudeSettings]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
      <pointLight position={[0, 0, 2]} intensity={intensity} color={color} distance={10} />
    </mesh>
  );
};
