import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

type Particle = {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
};

export const Waterfall = () => {
  const { theme } = useTheme();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: 45 + Math.random() * 10,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
      size: theme === 'dark' ? 2 + Math.random() * 3 : 3 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, [theme]);

  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-32 -translate-x-1/2 pointer-events-none overflow-hidden opacity-30">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            background: theme === 'dark' 
              ? 'radial-gradient(circle, rgba(0,243,255,0.8) 0%, rgba(0,243,255,0) 70%)'
              : 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(135,206,235,0.3) 70%)',
            boxShadow: theme === 'dark'
              ? '0 0 10px rgba(0,243,255,0.6)'
              : '0 0 8px rgba(255,255,255,0.5)',
          }}
          initial={{ y: '-10%', opacity: 0 }}
          animate={{
            y: '110%',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};
