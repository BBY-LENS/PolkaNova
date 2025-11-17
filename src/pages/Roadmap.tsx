import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

const Roadmap = () => {
  const phases = [
    {
      status: 'completed',
      title: 'Phase 1: Foundation',
      quarter: 'Q4 2024',
      items: [
        'Core monitoring infrastructure',
        'Real-time data streaming',
        'Basic 3D visualizations',
        'Dashboard interface',
      ]
    },
    {
      status: 'completed',
      title: 'Phase 2: Intelligence',
      quarter: 'Q1 2025',
      items: [
        'AI-powered anomaly detection',
        'PulseBot assistant integration',
        'Statistical modeling',
        'Automated alerts',
      ]
    },
    {
      status: 'in-progress',
      title: 'Phase 3: Immersion',
      quarter: 'Q2 2025',
      items: [
        'Dual-mode aesthetic system',
        'Advanced animations & transitions',
        'Enhanced 3D effects',
        'Particle systems',
      ]
    },
    {
      status: 'planned',
      title: 'Phase 4: Expansion',
      quarter: 'Q3 2025',
      items: [
        'Multi-chain support',
        'Custom alert rules',
        'Historical data analysis',
        'Performance benchmarking',
      ]
    },
    {
      status: 'planned',
      title: 'Phase 5: Integration',
      quarter: 'Q4 2025',
      items: [
        'Wallet integration',
        'Governance participation',
        'Validator management',
        'API for developers',
      ]
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-healthy" />;
      case 'in-progress':
        return <Clock className="w-6 h-6 text-warning" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

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
            <h1 className="text-5xl font-bold mb-4 neon-text-cyan">Roadmap</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our journey to building the ultimate Polkadot network intelligence platform
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard neonColor={
                  phase.status === 'completed' ? 'lime' : 
                  phase.status === 'in-progress' ? 'cyan' : 
                  'magenta'
                }>
                  <div className="flex items-start gap-4">
                    {getStatusIcon(phase.status)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold font-mono-metrics">
                          {phase.title}
                        </h3>
                        <span className="text-sm text-muted-foreground font-mono-metrics">
                          {phase.quarter}
                        </span>
                      </div>
                      <ul className="space-y-2 mt-4">
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              phase.status === 'completed' ? 'bg-healthy' :
                              phase.status === 'in-progress' ? 'bg-warning' :
                              'bg-muted-foreground'
                            }`} />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Roadmap;
