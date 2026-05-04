import { motion } from 'motion/react';
import FeatureCard from '../components/FeatureCard';
import { Layers, Zap, Shield, Globe, MessageSquare, Layout, BarChart, Database } from 'lucide-react';

const detailedFeatures = [
  { title: "Event Scheduling", desc: "Intelligent date selector that cross-references university calendars, exam schedules, and holiday breaks.", icon: "Calendar" },
  { title: "Budget Management", desc: "Detailed expense tracking with category breakdowns and receipt upload capabilities.", icon: "PieChart" },
  { title: "Registration System", desc: "Automated ticket generation, QR code check-ins, and waitlist management.", icon: "CheckCircle" },
  { title: "Collaboration Suite", desc: "Role-based access for committee members, task assignments, and internal chat.", icon: "Users" },
  { title: "AI Recommendations", desc: "Smart logic that suggests marketing channels based on your target student demographic.", icon: "BrainCircuit" },
  { title: "Vendor Marketplace", desc: "Connect with university-approved vendors for catering, equipment, and venues.", icon: "Layout" },
  { title: "Real-time Analytics", desc: "Live dashboard showing registration speed, revenue, and attendee demographics.", icon: "BarChart" },
  { title: "Security First", desc: "Enterprise-grade data protection and GDPR compliance for all member information.", icon: "Shield" },
];

export default function Features() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[64px] lg:text-[80px] font-black text-slate-900 mb-8 tracking-tightest uppercase leading-[0.9]"
          >
            Everything you need, <br /> all in one place.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            SmartEvent replaces dozens of disconnected spreadsheets and group chats with a single, unified workflow designed for campus life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {detailedFeatures.map((f, i) => (
            <FeatureCard 
              key={i}
              title={f.title}
              description={f.desc}
              // @ts-ignore
              iconName={f.icon}
              delay={i * 0.05}
            />
          ))}
        </div>

        {/* Technical highlight */}
        <div className="mt-32 p-12 lg:p-20 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight">Built for speed and scale.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-medium">
                <div className="flex items-center gap-4 text-slate-300">
                  <Zap className="text-yellow-400" />
                  <span>99.9% Platform Uptime</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <Globe className="text-blue-400" />
                  <span>Multi-campus Support</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <Shield className="text-emerald-400" />
                  <span>Encrypted Data Storage</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <Database className="text-purple-400" />
                  <span>Daily Backups</span>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 w-full">
              <h4 className="text-lg font-bold mb-6 text-blue-400">Enterprise Integrations</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Google Calendar</span>
                  <span className="text-emerald-400">Active</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Slack & Discord</span>
                  <span className="text-emerald-400">Active</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Stripe Payments</span>
                  <span className="text-emerald-400">Active</span>
                </li>
                <li className="flex justify-between">
                  <span>University API</span>
                  <span className="text-blue-400">Available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
