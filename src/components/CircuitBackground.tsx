import { useTheme } from '@/contexts/ThemeContext';

export const CircuitBackground = () => {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path 
              d="M 0 100 L 50 100 L 50 50 L 100 50 M 100 50 L 150 50 L 150 100 L 200 100 M 50 100 L 50 150 L 100 150 M 150 100 L 150 150 L 100 150"
              stroke={theme === 'dark' ? '#00f3ff' : '#ff6b9d'}
              strokeWidth="2"
              fill="none"
            />
            <circle cx="50" cy="50" r="3" fill={theme === 'dark' ? '#39ff14' : '#ff6b9d'} />
            <circle cx="100" cy="50" r="3" fill={theme === 'dark' ? '#ff00ff' : '#ff6b9d'} />
            <circle cx="150" cy="50" r="3" fill={theme === 'dark' ? '#39ff14' : '#ff6b9d'} />
            <circle cx="50" cy="150" r="3" fill={theme === 'dark' ? '#ff00ff' : '#ff6b9d'} />
            <circle cx="100" cy="150" r="3" fill={theme === 'dark' ? '#00f3ff' : '#ff6b9d'} />
            <circle cx="150" cy="150" r="3" fill={theme === 'dark' ? '#39ff14' : '#ff6b9d'} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};
