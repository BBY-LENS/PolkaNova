import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { Book, Code, Gauge, MessageSquare } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

const Docs = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl font-bold mb-4 neon-text-cyan">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Learn how to navigate and use PolkaNova effectively
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard neonColor="cyan">
                <div className="flex items-start gap-4">
                  <Book className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3 font-mono-metrics">Getting Started</h2>
                    <p className="text-muted-foreground mb-4">
                      PolkaNova provides real-time monitoring of the Polkadot network. Navigate through different
                      sections using the top navigation bar. Switch between dark (Cyberpunk) and light (Garden) modes
                      using the theme toggle button.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Home: Immersive landing page with animated elements</li>
                      <li>Dashboard: Core monitoring interface with live data</li>
                      <li>Analytics: Deep dive into network statistics</li>
                      <li>Network Status: Overall health and validator information</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard neonColor="magenta">
                <div className="flex items-start gap-4">
                  <Gauge className="w-12 h-12 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3 font-mono-metrics">Dashboard Guide</h2>
                    <p className="text-muted-foreground mb-4">
                      The dashboard features multiple tabs for different aspects of network monitoring:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li><strong>Relay Chain:</strong> Central heartbeat visualization with vital metrics</li>
                      <li><strong>Parachains:</strong> Monitor all active parachains and their health</li>
                      <li><strong>Anomalies:</strong> AI-detected issues and warnings</li>
                      <li><strong>Governance:</strong> Track proposals and voting activity</li>
                      <li><strong>PulseBot:</strong> Chat with AI assistant for insights</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <GlassCard neonColor="lime">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-12 h-12 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3 font-mono-metrics">Using PulseBot</h2>
                    <p className="text-muted-foreground mb-4">
                      PulseBot is your AI assistant for understanding network behavior. Access it via the floating
                      chat button in the bottom-right corner or through the Dashboard's PulseBot tab.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Ask about specific metrics or anomalies</li>
                      <li>Request explanations of complex network events</li>
                      <li>Get insights on parachain performance</li>
                      <li>Understand governance proposals</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <GlassCard neonColor="cyan">
                <div className="flex items-start gap-4">
                  <Code className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3 font-mono-metrics">Understanding Status Colors</h2>
                    <p className="text-muted-foreground mb-4">
                      PolkaNova uses a color-coded system to indicate network health:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-healthy" />
                        <span className="text-muted-foreground"><strong>Green/Lime:</strong> Healthy - All systems operating normally</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-warning" />
                        <span className="text-muted-foreground"><strong>Yellow:</strong> Warning - Attention needed but not critical</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-destructive" />
                        <span className="text-muted-foreground"><strong>Red:</strong> Critical - Immediate issues detected</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Docs;
