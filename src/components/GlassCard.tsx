import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  neonColor?: 'cyan' | 'magenta' | 'lime';
  hoverable?: boolean;
};

export const GlassCard = ({ 
  children, 
  className = '', 
  neonColor = 'cyan',
  hoverable = true 
}: GlassCardProps) => {
  const borderClass = neonColor === 'cyan' 
    ? 'neon-border-cyan' 
    : neonColor === 'magenta' 
    ? 'neon-border-magenta' 
    : 'border-accent/50';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={hoverable ? { scale: 1.02, transition: { duration: 0.2 } } : {}}
      className={cn(
        'glass-card rounded-xl p-6 backdrop-blur-xl',
        borderClass,
        className
      )}
    >
      {children}
    </motion.div>
  );
};
