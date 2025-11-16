import { motion } from 'framer-motion';

type HeartProps = {
  status?: 'healthy' | 'warning' | 'critical';
  className?: string;
};

export const Heart2D = ({ status = 'healthy', className = '' }: HeartProps) => {
  const color = status === 'healthy' ? '#39ff14' : status === 'warning' ? '#ffff00' : '#ff0033';
  const pulseSpeed = status === 'healthy' ? 0.8 : status === 'warning' ? 0.5 : 0.3;

  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: pulseSpeed,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: `drop-shadow(0 0 20px ${color})` }}>
        <path
          d="M50,85 C50,85 15,60 15,40 C15,25 25,15 35,15 C42,15 47,20 50,25 C53,20 58,15 65,15 C75,15 85,25 85,40 C85,60 50,85 50,85 Z"
          fill={color}
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
};
