import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart3DCanvas } from '@/components/Heart3DCanvas';
import { ScanLineOverlay } from '@/components/ScanLineOverlay';
import { GlassCard } from '@/components/GlassCard';
import { Activity, Zap, Brain, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      <ScanLineOverlay />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl font-bold mb-6">
                <span className="neon-text-cyan glitch" data-text="PolkaNova">PolkaNova</span>
              </h1>
              <p className="text-3xl mb-4 neon-text-magenta">
                The Cyberpunk Brain of Polkadot
              </p>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Next-generation intelligence layer for Polkadot network monitoring. 
                Real-time anomaly detection, 3D visualizations, and AI-powered insights.
              </p>
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  className="neon-border-cyan neon-glow-cyan bg-primary/10 hover:bg-primary/20 text-primary font-mono-metrics text-lg px-8 py-6"
                >
                  Enter Dashboard
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96"
            >
              <Heart3DCanvas status="healthy" className="w-full h-full" scale={1.5} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 neon-text-lime">Why PolkaNova?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Polkadot's telemetry is massive, fragmented, and hard to interpret. 
              PolkaNova transforms raw network data into actionable intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Activity,
                title: 'Real-Time Monitoring',
                description: 'Monitor relay chain and all active parachains with live updates',
                color: 'cyan'
              },
              {
                icon: Zap,
                title: 'Anomaly Detection',
                description: 'AI-powered detection of network issues before they escalate',
                color: 'magenta'
              },
              {
                icon: Brain,
                title: 'PulseBot Assistant',
                description: 'Natural language explanations of complex network behavior',
                color: 'lime'
              },
              {
                icon: Shield,
                title: '3D Visualizations',
                description: 'Interactive health indicators with stunning visual feedback',
                color: 'cyan'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard neonColor={feature.color as any}>
                  <feature.icon className={`w-12 h-12 mb-4 ${
                    feature.color === 'cyan' ? 'text-primary' : 
                    feature.color === 'magenta' ? 'text-secondary' : 
                    'text-accent'
                  }`} />
                  <h3 className="text-xl font-bold mb-2 font-mono-metrics">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NextGen vs Original */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center neon-text-cyan">
              NextGen Evolution
            </h2>
            
            <GlassCard className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full font-mono-metrics">
                  <thead>
                    <tr className="border-b border-primary/30">
                      <th className="text-left py-4 px-4 text-muted-foreground">Feature</th>
                      <th className="text-left py-4 px-4 text-muted-foreground">Original PolkaPulse</th>
                      <th className="text-left py-4 px-4 text-primary">PolkaNova</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Monitoring Scope', 'Basic relay chain', 'Relay + all parachains'],
                      ['Visualizations', '2D charts', '3D animated health indicators'],
                      ['AI Assistance', 'None', 'PulseBot AI explanations'],
                      ['Anomaly Detection', 'Manual', 'Automated statistical models'],
                      ['User Experience', 'Data dashboards', 'Immersive cyberpunk interface'],
                    ].map(([feature, old, newVal], index) => (
                      <tr key={index} className="border-b border-primary/10">
                        <td className="py-4 px-4 text-accent">{feature}</td>
                        <td className="py-4 px-4 text-muted-foreground">{old}</td>
                        <td className="py-4 px-4 text-primary font-bold">{newVal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 neon-text-magenta">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Enter the dashboard and feel the pulse of Polkadot's network
            </p>
            <Link to="/dashboard">
              <Button 
                size="lg"
                className="neon-border-magenta neon-glow-cyan bg-secondary/10 hover:bg-secondary/20 text-secondary font-mono-metrics text-lg px-12 py-6"
              >
                Launch Dashboard
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
