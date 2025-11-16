import { GlassCard } from '@/components/GlassCard';
import { Heart3DCanvas } from '@/components/Heart3DCanvas';
import { useMockData } from '@/hooks/useMockData';
import { Shield, Cpu, Wifi, Database } from 'lucide-react';

const NetworkStatus = () => {
  const { relayChain, networkStatus } = useMockData();

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8 neon-text-cyan font-mono-metrics">Network Status</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <GlassCard neonColor="cyan" className="flex flex-col items-center justify-center p-8">
            <h2 className="text-2xl font-bold mb-4 neon-text-cyan">Relay Chain Health</h2>
            <div className="w-64 h-64">
              <Heart3DCanvas status={relayChain.status} autoRotate={false} />
            </div>
            <p className="text-xl mt-4 capitalize">{relayChain.status}</p>
          </GlassCard>

          <div className="grid grid-cols-2 gap-4">
            <GlassCard neonColor="magenta">
              <Shield className="w-10 h-10 text-secondary mb-2" />
              <p className="text-sm text-muted-foreground">Security Level</p>
              <p className="text-2xl font-bold text-secondary">High</p>
            </GlassCard>

            <GlassCard neonColor="lime">
              <Cpu className="w-10 h-10 text-accent mb-2" />
              <p className="text-sm text-muted-foreground">CPU Usage</p>
              <p className="text-2xl font-bold text-accent">47%</p>
            </GlassCard>

            <GlassCard neonColor="cyan">
              <Wifi className="w-10 h-10 text-primary mb-2" />
              <p className="text-sm text-muted-foreground">Network Latency</p>
              <p className="text-2xl font-bold text-primary">23ms</p>
            </GlassCard>

            <GlassCard neonColor="magenta">
              <Database className="w-10 h-10 text-secondary mb-2" />
              <p className="text-sm text-muted-foreground">Storage Used</p>
              <p className="text-2xl font-bold text-secondary">2.1TB</p>
            </GlassCard>
          </div>
        </div>

        <GlassCard>
          <h2 className="text-2xl font-bold mb-6 neon-text-magenta font-mono-metrics">System Metrics</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Block Production</span>
                <span className="text-primary font-bold">{networkStatus.blockProduction}%</span>
              </div>
              <div className="w-full bg-muted/20 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full neon-glow-cyan" 
                  style={{ width: `${networkStatus.blockProduction}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Validator Performance</span>
                <span className="text-secondary font-bold">{networkStatus.validatorPerformance}%</span>
              </div>
              <div className="w-full bg-muted/20 rounded-full h-2">
                <div 
                  className="bg-secondary h-2 rounded-full" 
                  style={{ width: `${networkStatus.validatorPerformance}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Network Uptime</span>
                <span className="text-accent font-bold">99.98%</span>
              </div>
              <div className="w-full bg-muted/20 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full w-[99.98%]" />
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default NetworkStatus;
