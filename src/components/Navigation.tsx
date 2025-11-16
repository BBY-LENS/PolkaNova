import { Link, useLocation } from 'react-router-dom';
import { Activity, BarChart3, TrendingUp, Wifi, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Activity },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/analytics', label: 'Analytics', icon: TrendingUp },
    { path: '/network-status', label: 'Network', icon: Wifi },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card neon-border-cyan">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 neon-glow-cyan flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <span className="text-2xl font-bold neon-text-cyan">PolkaNova</span>
          </Link>

          <div className="flex gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300',
                    isActive 
                      ? 'neon-text-cyan neon-glow-cyan' 
                      : 'text-muted-foreground hover:text-primary hover:neon-glow-cyan'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-mono-metrics">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
