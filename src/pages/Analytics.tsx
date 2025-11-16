import { GlassCard } from '@/components/GlassCard';
import { BarChart } from '@/components/BarChart';
import { useMockData } from '@/hooks/useMockData';
import { TrendingUp, Activity, Zap } from 'lucide-react';

const Analytics = () => {
  const { parachains } = useMockData();

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 neon-text-cyan font-mono-metrics">Network Analytics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard neonColor="cyan">
            <div className="flex items-center gap-4">
              <TrendingUp className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Volume</p>
                <p className="text-2xl font-bold text-primary">2.4M DOT</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard neonColor="magenta">
            <div className="flex items-center gap-4">
              <Activity className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Active Validators</p>
                <p className="text-2xl font-bold text-secondary">297</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard neonColor="lime">
            <div className="flex items-center gap-4">
              <Zap className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Block Time</p>
                <p className="text-2xl font-bold text-accent">6.1s</p>
              </div>
            </div>
          </GlassCard>
        </div>

        <GlassCard className="mb-8">
          <h2 className="text-2xl font-bold mb-6 neon-text-magenta font-mono-metrics">Transaction Volume (24h)</h2>
          <BarChart 
            data={parachains.map(p => ({ name: p.name, value: p.activity }))}
            color="#ff00ff"
            label="Transactions"
          />
        </GlassCard>

        <GlassCard>
          <h2 className="text-2xl font-bold mb-6 neon-text-lime font-mono-metrics">Cross-Chain Messages</h2>
          <BarChart 
            data={parachains.map(p => ({ name: p.name, value: p.xcmMessages }))}
            color="#39ff14"
            label="XCM Messages"
          />
        </GlassCard>
      </div>
    </div>
  );
};

export default Analytics;
