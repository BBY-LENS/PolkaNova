import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { useAIChat } from '@/hooks/useAIChat';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';

export const PulseBotChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, sendMessage, isLoading } = useAIChat();
  const { theme } = useTheme();

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg",
          theme === 'dark' 
            ? "bg-primary/20 neon-border-cyan neon-glow-cyan hover:bg-primary/30" 
            : "bg-primary/80 border-2 border-primary hover:bg-primary"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageSquare className="w-6 h-6 text-primary-foreground" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={cn(
              "fixed bottom-28 right-8 z-50 w-96 h-[500px] rounded-2xl shadow-2xl overflow-hidden",
              theme === 'dark' 
                ? "glass-card neon-border-cyan" 
                : "bg-card border-2 border-primary/30"
            )}
          >
            {/* Header */}
            <div className={cn(
              "p-4 border-b",
              theme === 'dark' 
                ? "border-primary/30 bg-primary/10" 
                : "border-primary/20 bg-primary/5"
            )}>
              <div className="flex items-center gap-3">
                <motion.div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    theme === 'dark' 
                      ? "bg-primary/20 neon-glow-cyan" 
                      : "bg-primary/80"
                  )}
                  animate={{ 
                    boxShadow: theme === 'dark'
                      ? [
                          "0 0 20px rgba(0,243,255,0.4)",
                          "0 0 30px rgba(0,243,255,0.6)",
                          "0 0 20px rgba(0,243,255,0.4)"
                        ]
                      : [
                          "0 0 10px rgba(340,75,55,0.3)",
                          "0 0 20px rgba(340,75,55,0.5)",
                          "0 0 10px rgba(340,75,55,0.3)"
                        ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MessageSquare className={cn(
                    "w-5 h-5",
                    theme === 'dark' ? "text-primary" : "text-white"
                  )} />
                </motion.div>
                <div>
                  <h3 className={cn(
                    "font-bold font-mono-metrics",
                    theme === 'dark' ? "neon-text-cyan" : "text-primary"
                  )}>
                    PulseBot
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {theme === 'dark' 
                      ? "Neon systems online" 
                      : "Garden mode active"}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="h-[340px] p-4">
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "p-3 rounded-lg max-w-[85%]",
                      msg.role === 'user'
                        ? theme === 'dark'
                          ? "ml-auto bg-primary/20 neon-border-cyan text-foreground"
                          : "ml-auto bg-primary/80 text-white"
                        : theme === 'dark'
                          ? "bg-secondary/10 neon-border-magenta text-foreground"
                          : "bg-secondary/20 text-foreground"
                    )}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={cn(
                      "p-3 rounded-lg max-w-[85%]",
                      theme === 'dark'
                        ? "bg-secondary/10 neon-border-magenta"
                        : "bg-secondary/20"
                    )}
                  >
                    <div className="flex gap-1">
                      <motion.div
                        className={cn("w-2 h-2 rounded-full", theme === 'dark' ? "bg-primary" : "bg-secondary")}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className={cn("w-2 h-2 rounded-full", theme === 'dark' ? "bg-primary" : "bg-secondary")}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className={cn("w-2 h-2 rounded-full", theme === 'dark' ? "bg-primary" : "bg-secondary")}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className={cn(
              "p-4 border-t",
              theme === 'dark' 
                ? "border-primary/30 bg-background/50" 
                : "border-primary/20 bg-card"
            )}>
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about Polkadot..."
                  className={cn(
                    "flex-1",
                    theme === 'dark' 
                      ? "neon-border-cyan bg-background/50" 
                      : "border-primary/30"
                  )}
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  size="icon"
                  className={cn(
                    theme === 'dark'
                      ? "neon-border-cyan neon-glow-cyan bg-primary/20 hover:bg-primary/30"
                      : "bg-primary hover:bg-primary/90"
                  )}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
