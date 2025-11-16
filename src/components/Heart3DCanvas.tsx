import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Heart3D } from './Heart3D';

type Heart3DCanvasProps = {
  status: 'healthy' | 'warning' | 'critical';
  className?: string;
  scale?: number;
  autoRotate?: boolean;
};

export const Heart3DCanvas = ({ 
  status, 
  className = '', 
  scale = 1,
  autoRotate = true 
}: Heart3DCanvasProps) => {
  return (
    <div className={className}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <Heart3D status={status} scale={scale} />
        {autoRotate && <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />}
      </Canvas>
    </div>
  );
};
