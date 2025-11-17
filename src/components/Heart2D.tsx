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
        scale: [1, 1.2, 1, 1.08, 1],
      }}
      transition={{
        duration: pulseSpeed,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.3, 0.5, 0.7, 1]
      }}
    >
      {/* Heartbeat shockwave rings */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          scale: [0.8, 2],
          opacity: [0.6, 0],
        }}
        transition={{
          duration: pulseSpeed,
          repeat: Infinity,
          ease: "easeOut"
        }}
        style={{
          border: `2px solid ${color}`,
          filter: `drop-shadow(0 0 10px ${color})`,
        }}
      />
      
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: `drop-shadow(0 0 30px ${color})` }}>
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <motion.path
          d="M50,85 C50,85 15,60 15,40 C15,25 25,15 35,15 C42,15 47,20 50,25 C53,20 58,15 65,15 C75,15 85,25 85,40 C85,60 50,85 50,85 Z"
          fill="url(#heartGradient)"
          stroke={color}
          strokeWidth="2"
          animate={{
            fill: [color, `${color}dd`, color],
          }}
          transition={{
            duration: pulseSpeed,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </motion.div>
  );
};
