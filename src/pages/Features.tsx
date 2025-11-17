import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { Activity, Zap, Brain, Shield, Network, Eye } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Live telemetry from relay chain and all active parachains. Monitor block production, finality, and validator performance in real-time.',
      color: 'cyan'
    },
    {
      icon: Zap,
      title: 'Anomaly Detection',
      description: 'AI-powered statistical models detect unusual patterns before they become critical issues. Automated alerts for network anomalies.',
      color: 'magenta'
    },
    {
      icon: Brain,
      title: 'PulseBot AI Assistant',
      description: 'Natural language interface to understand complex network behavior. Ask questions, get insights, and receive intelligent explanations.',
      color: 'lime'
    },
    {
      icon: Shield,
      title: '3D Health Visualization',
      description: 'Interactive 3D heart represents network health. Visual feedback through color, animation, and particle effects.',
      color: 'cyan'
    },
    {
      icon: Network,
      title: 'Cross-Chain Analytics',
      description: 'Track XCM message flows, HRMP channels, and inter-parachain communications. Visualize the entire Polkadot ecosystem.',
      color: 'magenta'
    },
    {
      icon: Eye,
      title: 'Immersive Interface',
      description: 'Dual-mode aesthetic: Cyberpunk neon for dark mode, butterfly garden for light mode. Every interaction is animated.',
      color: 'lime'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4 neon-text-cyan">Features</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              PolkaNova brings next-generation intelligence to Polkadot network monitoring
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard neonColor={feature.color as any} className="h-full">
                  <feature.icon className={`w-16 h-16 mb-6 ${
                    feature.color === 'cyan' ? 'text-primary' : 
                    feature.color === 'magenta' ? 'text-secondary' : 
                    'text-accent'
                  }`} />
                  <h3 className="text-2xl font-bold mb-4 font-mono-metrics">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Features;
