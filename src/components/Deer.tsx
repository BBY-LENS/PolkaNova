import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export const Deer = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      className="absolute bottom-20 left-10 w-32 h-32 pointer-events-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0.6, 1, 0.6],
        y: [0, -5, 0]
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg viewBox="0 0 100 120" className="w-full h-full">
        {theme === 'dark' ? (
          /* Neon Cyberpunk Deer */
          <g>
            {/* Body */}
            <ellipse cx="50" cy="80" rx="15" ry="20" 
              fill="none" 
              stroke="#00f3ff" 
              strokeWidth="2"
              filter="drop-shadow(0 0 8px #00f3ff)"
            />
            
            {/* Head */}
            <circle cx="50" cy="55" r="12" 
              fill="none" 
              stroke="#00f3ff" 
              strokeWidth="2"
              filter="drop-shadow(0 0 8px #00f3ff)"
            />
            
            {/* Legs */}
            <line x1="42" y1="95" x2="42" y2="115" stroke="#00f3ff" strokeWidth="2" filter="drop-shadow(0 0 5px #00f3ff)" />
            <line x1="48" y1="95" x2="48" y2="115" stroke="#00f3ff" strokeWidth="2" filter="drop-shadow(0 0 5px #00f3ff)" />
            <line x1="52" y1="95" x2="52" y2="115" stroke="#00f3ff" strokeWidth="2" filter="drop-shadow(0 0 5px #00f3ff)" />
            <line x1="58" y1="95" x2="58" y2="115" stroke="#00f3ff" strokeWidth="2" filter="drop-shadow(0 0 5px #00f3ff)" />
            
            {/* Glowing Antlers */}
            <motion.g
              animate={{ 
                filter: ["drop-shadow(0 0 10px #ff00ff)", "drop-shadow(0 0 20px #ff00ff)", "drop-shadow(0 0 10px #ff00ff)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <path d="M 45 50 L 40 35 L 35 40 M 40 35 L 38 25" 
                stroke="#ff00ff" 
                strokeWidth="2" 
                fill="none"
              />
              <path d="M 55 50 L 60 35 L 65 40 M 60 35 L 62 25" 
                stroke="#ff00ff" 
                strokeWidth="2" 
                fill="none"
              />
              {/* Antler nodes */}
              <circle cx="35" cy="40" r="2" fill="#ff00ff" />
              <circle cx="38" cy="25" r="2" fill="#ff00ff" />
              <circle cx="65" cy="40" r="2" fill="#ff00ff" />
              <circle cx="62" cy="25" r="2" fill="#ff00ff" />
            </motion.g>
            
            {/* Eyes */}
            <circle cx="47" cy="55" r="2" fill="#39ff14" filter="drop-shadow(0 0 5px #39ff14)" />
            <circle cx="53" cy="55" r="2" fill="#39ff14" filter="drop-shadow(0 0 5px #39ff14)" />
          </g>
        ) : (
          /* Golden Garden Deer */
          <g>
            {/* Body */}
            <ellipse cx="50" cy="80" rx="15" ry="20" 
              fill="#f4e4c1" 
              stroke="#d4af37" 
              strokeWidth="2"
              filter="drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))"
            />
            
            {/* Head */}
            <circle cx="50" cy="55" r="12" 
              fill="#f4e4c1" 
              stroke="#d4af37" 
              strokeWidth="2"
              filter="drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))"
            />
            
            {/* Legs */}
            <line x1="42" y1="95" x2="42" y2="115" stroke="#d4af37" strokeWidth="2.5" />
            <line x1="48" y1="95" x2="48" y2="115" stroke="#d4af37" strokeWidth="2.5" />
            <line x1="52" y1="95" x2="52" y2="115" stroke="#d4af37" strokeWidth="2.5" />
            <line x1="58" y1="95" x2="58" y2="115" stroke="#d4af37" strokeWidth="2.5" />
            
            {/* Shimmering Golden Antlers */}
            <motion.g
              animate={{ 
                opacity: [0.8, 1, 0.8],
                filter: ["drop-shadow(0 0 5px #ffd700)", "drop-shadow(0 0 10px #ffd700)", "drop-shadow(0 0 5px #ffd700)"]
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <path d="M 45 50 L 40 35 L 35 40 M 40 35 L 38 25 L 32 30 M 38 25 L 36 18" 
                stroke="#d4af37" 
                strokeWidth="2.5" 
                fill="none"
              />
              <path d="M 55 50 L 60 35 L 65 40 M 60 35 L 62 25 L 68 30 M 62 25 L 64 18" 
                stroke="#d4af37" 
                strokeWidth="2.5" 
                fill="none"
              />
              {/* Antler blooms */}
              <circle cx="35" cy="40" r="3" fill="#ffd700" />
              <circle cx="32" cy="30" r="2.5" fill="#ffd700" />
              <circle cx="36" cy="18" r="3" fill="#ffd700" />
              <circle cx="65" cy="40" r="3" fill="#ffd700" />
              <circle cx="68" cy="30" r="2.5" fill="#ffd700" />
              <circle cx="64" cy="18" r="3" fill="#ffd700" />
            </motion.g>
            
            {/* Eyes */}
            <circle cx="47" cy="55" r="2" fill="#8b4513" />
            <circle cx="53" cy="55" r="2" fill="#8b4513" />
            
            {/* Spots */}
            <circle cx="45" cy="78" r="2" fill="#d4af37" opacity="0.6" />
            <circle cx="52" cy="82" r="2" fill="#d4af37" opacity="0.6" />
            <circle cx="48" cy="85" r="1.5" fill="#d4af37" opacity="0.6" />
          </g>
        )}
      </svg>
    </motion.div>
  );
};
