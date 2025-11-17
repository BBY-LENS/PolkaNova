import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Github, Twitter } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setName('');
    setEmail('');
    setMessage('');
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
            <h1 className="text-5xl font-bold mb-4 neon-text-cyan">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions or feedback? We'd love to hear from you
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard neonColor="cyan">
                <h2 className="text-2xl font-bold mb-6 font-mono-metrics neon-text-cyan">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="neon-border-cyan"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="neon-border-cyan"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what's on your mind..."
                      required
                      className="neon-border-cyan min-h-[150px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full neon-border-cyan neon-glow-cyan bg-primary/20 hover:bg-primary/30 text-primary"
                  >
                    Send Message
                  </Button>
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <GlassCard neonColor="magenta">
                <Mail className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-bold mb-2 font-mono-metrics">Email</h3>
                <p className="text-muted-foreground">hello@polkanova.io</p>
                <p className="text-muted-foreground">support@polkanova.io</p>
              </GlassCard>

              <GlassCard neonColor="lime">
                <MessageSquare className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2 font-mono-metrics">Discord</h3>
                <p className="text-muted-foreground">Join our community</p>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  discord.gg/polkanova
                </a>
              </GlassCard>

              <GlassCard neonColor="cyan">
                <div className="flex gap-4">
                  <Github className="w-12 h-12 text-primary" />
                  <Twitter className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 mt-4 font-mono-metrics">Social</h3>
                <div className="space-y-1">
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                    github.com/polkanova
                  </a>
                  <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                    twitter.com/polkanova
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
