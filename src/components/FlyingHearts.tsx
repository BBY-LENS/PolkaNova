import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type HeartParticle = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  delay: number;
  duration: number;
};

export const FlyingHearts = () => {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          initial={{ x: '50%', y: '50%', scale: 0, opacity: 0 }}
          animate={{
            x: `${heart.x}%`,
            y: `${heart.y}%`,
            scale: [0, 0.5, 0.5, 0],
            opacity: [0, 1, 1, 0],
            rotate: heart.rotation,
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="20" height="20" viewBox="0 0 100 110" className="neon-glow-cyan">
            {/* Heart with wings */}
            <path
              d="M50,85 C50,85 15,60 15,40 C15,25 25,15 35,15 C42,15 47,20 50,25 C53,20 58,15 65,15 C75,15 85,25 85,40 C85,60 50,85 50,85 Z"
              fill="#00f3ff"
              opacity="0.8"
            />
            {/* Left wing */}
            <path
              d="M25,35 Q10,30 5,40 Q0,50 10,55 Q20,50 25,45 Z"
              fill="#ff00ff"
              opacity="0.6"
            />
            {/* Right wing */}
            <path
              d="M75,35 Q90,30 95,40 Q100,50 90,55 Q80,50 75,45 Z"
              fill="#ff00ff"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
