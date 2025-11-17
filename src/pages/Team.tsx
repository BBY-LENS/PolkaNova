import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

const Team = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & Lead Developer',
      bio: 'Former Parity engineer with 5+ years in blockchain monitoring systems.',
      avatar: '🚀',
      links: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'AI/ML Engineer',
      bio: 'Specialized in anomaly detection and predictive analytics for distributed systems.',
      avatar: '🤖',
      links: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Yuki Tanaka',
      role: 'UI/UX Designer',
      bio: 'Cyberpunk aesthetic expert bringing immersive experiences to web3.',
      avatar: '🎨',
      links: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Alex Kumar',
      role: 'Backend Architect',
      bio: 'Substrate core contributor focusing on telemetry and data pipelines.',
      avatar: '⚡',
      links: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
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
            <h1 className="text-5xl font-bold mb-4 neon-text-cyan">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the minds behind PolkaNova's cyberpunk vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard neonColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'magenta' : 'lime'}>
                  <div className="flex items-start gap-4">
                    <div className="text-6xl">{member.avatar}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1 font-mono-metrics">
                        {member.name}
                      </h3>
                      <p className="text-primary mb-3 font-mono-metrics text-sm">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex gap-3">
                        <a 
                          href={member.links.github} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a 
                          href={member.links.linkedin} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href={member.links.twitter} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                      </div>
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

export default Team;
