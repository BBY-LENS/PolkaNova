import { GlassCard } from '@/components/GlassCard';
import { Heart2D } from '@/components/Heart2D';
import { Github, Twitter, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6">
            <Heart2D status="healthy" />
          </div>
          <h1 className="text-5xl font-bold mb-4 neon-text-cyan font-mono-metrics">About PolkaNova</h1>
          <p className="text-xl text-muted-foreground">The Next-Wave Intelligence Layer for Polkadot</p>
        </div>

        <GlassCard className="mb-8">
          <h2 className="text-3xl font-bold mb-4 neon-text-magenta font-mono-metrics">Our Mission</h2>
          <p className="text-lg text-foreground mb-4">
            PolkaNova is the cyberpunk evolution of Polkadot network intelligence. We transform massive, 
            fragmented telemetry data into actionable insights through real-time monitoring, AI-powered 
            anomaly detection, and immersive 3D visualizations.
          </p>
          <p className="text-lg text-foreground">
            Our mission is to make Polkadot's network health understandable, accessible, and visually 
            compelling for developers, validators, and governance participants alike.
          </p>
        </GlassCard>

        <GlassCard className="mb-8">
          <h2 className="text-3xl font-bold mb-4 neon-text-lime font-mono-metrics">What We Offer</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Real-Time Monitoring</h3>
              <p className="text-foreground">
                Monitor relay chain and all active parachains with live updates and dynamic health indicators.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary mb-2">Anomaly Detection</h3>
              <p className="text-foreground">
                AI-powered statistical models detect network issues before they escalate into critical problems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-2">PulseBot AI Assistant</h3>
              <p className="text-foreground">
                Natural language explanations of complex network behavior, making data accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Immersive Visualizations</h3>
              <p className="text-foreground">
                Interactive 3D health indicators with stunning visual feedback and cyberpunk aesthetics.
              </p>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h2 className="text-3xl font-bold mb-6 neon-text-cyan font-mono-metrics text-center">Connect With Us</h2>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Github className="w-8 h-8" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
            >
              <Twitter className="w-8 h-8" />
              <span>Twitter</span>
            </a>
            <a 
              href="https://polkanova.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Globe className="w-8 h-8" />
              <span>Website</span>
            </a>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default About;
