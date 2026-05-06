import React from 'react';
import { Shield, Zap, Github, Cpu, Activity, Globe } from 'lucide-react';

const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-neonCyan rounded-full flex items-center justify-center">
        <Cpu className="text-dark" size={20} />
      </div>
      <span className="text-xl font-bold tracking-tighter">BRITTA</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
      <a href="#" className="hover:text-neonCyan transition-colors">Product</a>
      <a href="#" className="hover:text-neonCyan transition-colors">Features</a>
      <a href="#" className="hover:text-neonCyan transition-colors">Docs</a>
    </div>
    <button className="px-5 py-2 rounded-full border border-neonCyan text-neonCyan hover:bg-neonCyan hover:text-dark transition-all shadow-neon">
      Launch Agent
    </button>
  </nav>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-neonPurple/50 transition-all group">
    <div className="w-12 h-12 rounded-lg bg-neonPurple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-neonPurple" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-neonCyan">
            AUTONOMOUS INFRASTRUCTURE MANAGEMENT
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            Meet Britta: The <br />
            <span className="gradient-text">SRE Brain.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Britta is a smart SRE agent that discovers, heals, and scales your infrastructure while you sleep. Seamlessly integrated with your GitHub workflow.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-neonCyan text-dark font-bold rounded-lg hover:shadow-neon transition-all">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Github size={20} /> Connect GitHub
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Globe} 
              title="Autonomous Discovery" 
              description="Automatically maps your entire microservices architecture and cloud dependencies in real-time."
            />
            <FeatureCard 
              icon={Shield} 
              title="Self-Healing Systems" 
              description="Identifies bottlenecks and applies automated fixes for 90% of common infrastructure incidents."
            />
            <FeatureCard 
              icon={Zap} 
              title="GitHub Integration" 
              description="Synchronizes with your repositories to manage Infrastructure-as-Code through smart PRs."
            />
          </div>
        </div>
      </section>

      {/* Status Bar Mockup */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto bg-black border border-white/20 rounded-xl p-6 shadow-neon-purple">
          <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-xs font-mono text-gray-500 italic">britta-agent --status --verbose</div>
          </div>
          <div className="font-mono text-sm space-y-2">
            <div className="text-neonCyan">[SYSTEM] Initializing autonomous scan...</div>
            <div className="text-gray-400">[INFO] 14 nodes discovered in us-east-1</div>
            <div className="text-neonPurple">[ACTION] Detected latency spike in 'payment-service'. Escalating remediation.</div>
            <div className="text-neonGreen">[RESOLVED] Scaled replica set +2. Latency normalized.</div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-600 text-sm">
        &copy; 2023 Britta AI. Built for the future of SRE.
      </footer>
    </div>
  );
}