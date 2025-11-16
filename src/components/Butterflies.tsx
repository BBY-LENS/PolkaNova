import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Butterfly = {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
  duration: number;
  path: number[];
};

const butterflyColors = [
  '#ff6b9d', '#c44569', '#f8b500', '#3c6382',
  '#60a3bc', '#ea8685', '#82ccdd', '#b8e994',
  '#f6b93b', '#e55039', '#4a69bd', '#78e08f'
];

export const Butterflies = () => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    const newButterflies = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: butterflyColors[Math.floor(Math.random() * butterflyColors.length)],
      delay: Math.random() * 3,
      duration: 8 + Math.random() * 8,
      path: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }));
    setButterflies(newButterflies);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {butterflies.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          className="absolute"
          initial={{ x: `${butterfly.x}%`, y: `${butterfly.y}%` }}
          animate={{
            x: [`${butterfly.x}%`, `${butterfly.path[0]}%`, `${butterfly.path[1]}%`, `${butterfly.x}%`],
            y: [`${butterfly.y}%`, `${butterfly.path[2]}%`, `${butterfly.path[3]}%`, `${butterfly.y}%`],
          }}
          transition={{
            duration: butterfly.duration,
            delay: butterfly.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.svg
            width="30"
            height="30"
            viewBox="0 0 100 100"
            animate={{ rotateY: [0, 180, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {/* Left wing */}
            <ellipse cx="30" cy="50" rx="25" ry="35" fill={butterfly.color} opacity="0.8" />
            {/* Right wing */}
            <ellipse cx="70" cy="50" rx="25" ry="35" fill={butterfly.color} opacity="0.8" />
            {/* Body */}
            <ellipse cx="50" cy="50" rx="8" ry="40" fill="#333" />
            {/* Antenna */}
            <path d="M45,20 Q40,10 35,5 M55,20 Q60,10 65,5" stroke="#333" strokeWidth="2" fill="none" />
          </motion.svg>
        </motion.div>
      ))}
    </div>
  );
};
