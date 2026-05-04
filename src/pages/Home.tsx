import { Page } from '../types';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import DashboardPreview from '../components/DashboardPreview';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-40">
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="mb-6 inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                For University Excellence
              </div>
              <h1 className="text-[72px] lg:text-[100px] leading-[0.85] font-black tracking-tightest text-slate-900 mb-10 uppercase">
                Plan<br/><span className="text-blue-600">Smarter</span><br/>Create<br/>Better.
              </h1>
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0 mb-12">
                The all-in-one digital command center for student organizers. Scale your campus impact with AI-driven logistics.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-tighter text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center gap-3 group"
                >
                  Get Started <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('events')}
                  className="border-2 border-slate-200 bg-white text-slate-800 px-10 py-5 rounded-2xl font-black uppercase tracking-tighter text-lg hover:border-slate-400 transition-all"
                >
                  Explore Events
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 grid grid-cols-2 gap-6"
            >
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-slate-100 rounded-xl mb-6 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Smart Tools</h3>
                <p className="text-sm text-slate-400 leading-normal">Automated reminders & team sync across all student calendars.</p>
              </div>
              
              <div className="bg-blue-600 p-8 rounded-[32px] shadow-xl shadow-blue-100 text-white">
                <div className="w-12 h-12 bg-blue-500 rounded-xl mb-6 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-3">Budget Pro</h3>
                <p className="text-sm text-blue-100 leading-normal">Manage student union funds with real-time expense tracking.</p>
              </div>

              <div className="col-span-2 bg-slate-900 p-10 rounded-[40px] text-white flex flex-col justify-between min-h-[220px]">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Upcoming High Impact Event</h4>
                    <p className="text-4xl font-black tracking-tighter leading-none uppercase">Global Tech Summit</p>
                  </div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Oct 24 • Hall B</span>
                </div>
                <div className="flex justify-between items-center mt-auto pt-8 border-t border-slate-800">
                  <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-400"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-500"></div>
                    <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-500 flex items-center justify-center text-xs font-bold">+42</div>
                  </div>
                  <button className="text-[10px] font-black uppercase tracking-widest py-3 px-6 bg-white text-slate-900 rounded-full hover:bg-slate-100 transition-colors">Register Now</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features-summary" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="block text-[10px] font-black uppercase text-blue-600 tracking-widest mb-4">The Toolkit</span>
            <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none">Execute <span className="text-blue-600">Flawlessly.</span></h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Designed by students for students. SmartEvent provides the specialized tools required for the unique challenges of campus organizing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <FeatureCard 
              title="Smart Scheduling" 
              description="Coordinate with classes, midterms, and other campus events automatically to find the perfect time." 
              iconName="Calendar" 
              delay={0.1}
            />
            <FeatureCard 
              title="Team Collaboration" 
              description="Assign tasks, set permissions, and keep your organizing committee in sync with real-time updates." 
              iconName="Users" 
              delay={0.2}
            />
            <FeatureCard 
              title="AI Recommendations" 
              description="Our AI suggests vendors, venues, and marketing strategies based on your event type and historical data." 
              iconName="BrainCircuit" 
              delay={0.3}
            />
          </div>
          
          <button 
            onClick={() => onNavigate('features')}
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all"
          >
            See All Features <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                Powerful backend for <br />
                <span className="text-blue-600">effortless management.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { t: 'Live Tracking', d: 'Monitor registrations and budget usage in real-time.' },
                  { t: 'Automated Reminders', d: 'Send push notifications to attendees and volunteers.' },
                  { t: 'Advanced Analytics', d: 'Post-event reports to help you improve your next activity.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.t}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-[1.5] w-full">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">Ready to launch your <br /> next big idea?</h2>
              <p className="text-lg lg:text-xl text-blue-100 mb-12 max-w-2xl mx-auto opacity-90">
                Join 50,000+ student leaders using SmartEvent to transform their campus communities.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-black hover:bg-blue-50 transition-all shadow-xl"
                >
                  Get Started for Free
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-white font-bold text-lg hover:underline underline-offset-8 transition-all"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
