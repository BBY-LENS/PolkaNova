import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Scanline/Sweep effect on enter */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-50"
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(to bottom, transparent 0%, rgba(0,243,255,0.1) 50%, transparent 100%)'
            : 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
        }}
      />
      
      {/* Flash effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.4 }}
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle, rgba(0,243,255,0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,182,193,0.3) 0%, transparent 70%)',
        }}
      />
      
      {children}
    </motion.div>
  );
};
