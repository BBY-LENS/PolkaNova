import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GlassCard } from '@/components/GlassCard';
import { Heart3DCanvas } from '@/components/Heart3DCanvas';
import { NetworkChart } from '@/components/NetworkChart';
import { ScanLineOverlay } from '@/components/ScanLineOverlay';
import { useMockNetworkData } from '@/hooks/useMockData';
import { Activity, Box, AlertTriangle, Vote, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

const Dashboard = () => {
  const {
    relayStatus,
    finality,
    blockProduction,
    validatorRotation,
    blockData,
    finalityData,
    parachains
  } = useMockNetworkData();

  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m PulseBot 🤖. Ask me about network anomalies or parachain health!' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, { role: 'user', text: chatInput }]);
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        'Parachain #7 (Parallel) shows elevated HRMP queue at 267 messages. This may impact cross-chain message latency.',
        'Current network health is optimal. All validators are performing within expected parameters.',
        'Anomaly detected: Finality delay increased to 12 seconds. Investigating validator performance.',
        'Centrifuge parachain shows 54% congestion. Recommend monitoring collator liveness.'
      ];
      setChatMessages(prev => [...prev, { 
        role: 'bot', 
        text: responses[Math.floor(Math.random() * responses.length)] 
      }]);
    }, 1000);
    
    setChatInput('');
  };

  return (
    <div className="min-h-screen pt-20 pb-8">
      <ScanLineOverlay />
      
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold neon-text-cyan mb-2">Network Intelligence</h1>
          <p className="text-muted-foreground font-mono-metrics">Real-time Polkadot ecosystem monitoring</p>
        </div>

        <Tabs defaultValue="relay" className="space-y-6">
          <TabsList className="glass-card neon-border-cyan p-1">
            <TabsTrigger value="relay" className="font-mono-metrics">
              <Activity className="w-4 h-4 mr-2" />
              Relay Chain
            </TabsTrigger>
            <TabsTrigger value="parachains" className="font-mono-metrics">
              <Box className="w-4 h-4 mr-2" />
              Parachains
            </TabsTrigger>
            <TabsTrigger value="anomalies" className="font-mono-metrics">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Anomalies
            </TabsTrigger>
            <TabsTrigger value="governance" className="font-mono-metrics">
              <Vote className="w-4 h-4 mr-2" />
              Governance
            </TabsTrigger>
            <TabsTrigger value="pulsebot" className="font-mono-metrics">
              <MessageSquare className="w-4 h-4 mr-2" />
              PulseBot
            </TabsTrigger>
          </TabsList>

          {/* Relay Chain Tab */}
          <TabsContent value="relay" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <GlassCard className="lg:col-span-1">
                <h3 className="text-lg font-bold mb-4 neon-text-cyan font-mono-metrics">Heartbeat Status</h3>
                <Heart3DCanvas status={relayStatus} className="h-64" scale={1.2} />
                <div className="mt-4 text-center">
                  <span className={`text-2xl font-bold ${
                    relayStatus === 'healthy' ? 'text-healthy' :
                    relayStatus === 'warning' ? 'text-warning' :
                    'text-destructive'
                  }`}>
                    {relayStatus.toUpperCase()}
                  </span>
                </div>
              </GlassCard>

              <GlassCard className="lg:col-span-2">
                <h3 className="text-lg font-bold mb-4 neon-text-cyan font-mono-metrics">Vital Metrics</h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="glass-card neon-border-cyan p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground font-mono-metrics">Finality</div>
                    <div className="text-3xl font-bold text-primary">{finality}s</div>
                  </div>
                  <div className="glass-card neon-border-cyan p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground font-mono-metrics">Block Time</div>
                    <div className="text-3xl font-bold text-primary">{blockProduction}s</div>
                  </div>
                  <div className="glass-card neon-border-cyan p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground font-mono-metrics">Validators</div>
                    <div className="text-3xl font-bold text-primary">{validatorRotation}%</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-mono-metrics text-muted-foreground mb-2">Block Production Rate</h4>
                    <NetworkChart data={blockData} color="#00f3ff" label="Blocks/min" />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono-metrics text-muted-foreground mb-2">Finality Delay</h4>
                    <NetworkChart data={finalityData} color="#ff00ff" label="Seconds" />
                  </div>
                </div>
              </GlassCard>
            </div>
          </TabsContent>

          {/* Parachains Tab */}
          <TabsContent value="parachains" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {parachains.map((parachain) => (
                <GlassCard key={parachain.id} neonColor={
                  parachain.status === 'healthy' ? 'lime' :
                  parachain.status === 'warning' ? 'cyan' :
                  'magenta'
                }>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold font-mono-metrics">{parachain.name}</h3>
                      <div className="text-xs text-muted-foreground">Chain #{parachain.id}</div>
                    </div>
                    <div className="w-12 h-12">
                      <Heart3DCanvas status={parachain.status} className="w-full h-full" scale={0.8} autoRotate={false} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-mono-metrics">Congestion</span>
                      <span className={`font-bold ${
                        parachain.congestion < 30 ? 'text-healthy' :
                        parachain.congestion < 60 ? 'text-warning' :
                        'text-destructive'
                      }`}>{parachain.congestion}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-mono-metrics">HRMP Queue</span>
                      <span className="text-primary font-bold">{parachain.hrmpQueue}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground font-mono-metrics">Collators</span>
                      <span className="text-primary font-bold">{parachain.collatorLiveness}%</span>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </TabsContent>

          {/* Anomalies Tab */}
          <TabsContent value="anomalies" className="space-y-6">
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 neon-text-cyan">Active Anomalies</h3>
              <div className="space-y-4">
                {[
                  { severity: 'critical', title: 'HRMP Congestion Spike', parachain: 'Parallel (#7)', value: '267 messages (+200%)' },
                  { severity: 'warning', title: 'Elevated Congestion', parachain: 'Centrifuge (#6)', value: '54% load' },
                  { severity: 'warning', title: 'Collator Performance', parachain: 'Astar (#3)', value: '95% liveness' },
                ].map((anomaly, index) => (
                  <div key={index} className={`glass-card p-4 rounded-lg ${
                    anomaly.severity === 'critical' ? 'neon-border-magenta' : 'border-warning/50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className={`w-5 h-5 ${
                            anomaly.severity === 'critical' ? 'text-destructive' : 'text-warning'
                          }`} />
                          <h4 className="font-bold font-mono-metrics">{anomaly.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">{anomaly.parachain}</p>
                        <p className="text-sm text-primary font-mono-metrics mt-1">{anomaly.value}</p>
                      </div>
                      <Button size="sm" variant="outline" className="neon-border-cyan">
                        Investigate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </TabsContent>

          {/* Governance Tab */}
          <TabsContent value="governance" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <h3 className="text-xl font-bold mb-4 neon-text-lime font-mono-metrics">Staking Signals</h3>
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-lg neon-border-cyan">
                    <div className="text-sm text-muted-foreground">Delegation Spike</div>
                    <div className="text-2xl font-bold text-primary">+12.5%</div>
                    <div className="text-xs text-muted-foreground mt-1">Last 24h</div>
                  </div>
                  <div className="glass-card p-4 rounded-lg neon-border-cyan">
                    <div className="text-sm text-muted-foreground">Nomination Churn</div>
                    <div className="text-2xl font-bold text-primary">8.3%</div>
                    <div className="text-xs text-muted-foreground mt-1">Weekly average</div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="text-xl font-bold mb-4 neon-text-lime font-mono-metrics">Active Referenda</h3>
                <div className="space-y-3">
                  {['Treasury Spend #142', 'Runtime Upgrade #89', 'Validator Set #203'].map((ref, index) => (
                    <div key={index} className="glass-card p-3 rounded-lg border border-accent/30">
                      <div className="text-sm font-mono-metrics">{ref}</div>
                      <div className="mt-2 flex gap-2">
                        <div className="flex-1 bg-healthy/20 rounded-full h-2" style={{ width: '60%' }} />
                        <div className="flex-1 bg-destructive/20 rounded-full h-2" style={{ width: '40%' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </TabsContent>

          {/* PulseBot Tab */}
          <TabsContent value="pulsebot" className="space-y-6">
            <GlassCard className="h-[600px] flex flex-col">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-primary/30">
                <div className="w-10 h-10 rounded-full bg-primary/20 neon-glow-cyan flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold neon-text-cyan font-mono-metrics">PulseBot AI</h3>
                  <p className="text-xs text-muted-foreground">Your network intelligence assistant</p>
                </div>
              </div>

              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-lg ${
                        msg.role === 'user' 
                          ? 'glass-card neon-border-magenta' 
                          : 'glass-card neon-border-cyan'
                      }`}>
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="flex gap-2 mt-4 pt-4 border-t border-primary/30">
                <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about anomalies, parachains, or network health..."
                  className="flex-1 glass-card neon-border-cyan font-mono-metrics"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="neon-border-cyan neon-glow-cyan bg-primary/10 hover:bg-primary/20"
                >
                  Send
                </Button>
              </div>
            </GlassCard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
