import { motion } from 'motion/react';
import { Target, Heart, ShieldCheck, Users2, Sparkles, Trophy } from 'lucide-react';

export default function About() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-4"
            >
              Our Mission
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[64px] lg:text-[80px] font-black text-slate-900 mb-8 tracking-tightest uppercase leading-[0.9]"
            >
              Helping student leaders <br />
              <span className="text-blue-600">do more with less.</span>
            </motion.h1>
            <div className="space-y-6 text-lg text-slate-400 font-medium leading-relaxed">
              <p>
                Founded in 2024 by a group of university organizers, SmartEvent was born out of a simple frustration: managing campus events was unnecessarily complicated. Between fragmented tools, outdated approval processes, and messy communications, great ideas were being lost in the noise.
              </p>
              <p>
                We built SmartEvent to be the digital backbone for student organizations. Our mission is to democratize professional-grade event management tools, making them accessible to any student with a vision.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-100 pt-12">
               <div>
                  <p className="text-4xl font-black text-blue-600">12k+</p>
                  <p className="text-slate-500 font-medium">Universities Joined</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-blue-600">850k+</p>
                  <p className="text-slate-500 font-medium">Events Planned</p>
               </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100"
            >
              <img 
                src="https://picsum.photos/seed/team-photo/800/1000" 
                alt="SmartEvent Team" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Floating accent */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
               <Sparkles size={48} />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-50 rounded-[4rem] p-12 lg:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]"></div>
          
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <h2 className="text-4xl font-black text-slate-900 mb-6">Values that drive us</h2>
            <p className="text-lg text-slate-600">We believe that successful events are built on trust, coordination, and a passion for community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
            {[
              { title: 'Student-First', desc: 'Every feature we build is validated by student leaders to ensure it solves real problems.', icon: Target },
              { title: 'Inclusivity', desc: 'We build tools that help foster diverse, inclusive campus environments for everyone.', icon: Heart },
              { title: 'Simplicity', desc: 'Powerful logic hidden behind intuitive interfaces. No complex training required.', icon: ShieldCheck },
              { title: 'Community', desc: 'We are more than just software; we are a network of student leaders sharing knowledge.', icon: Users2 },
              { title: 'Innovation', desc: 'Constantly pushing the boundaries of what AI can do for event organizers.', icon: Sparkles },
              { title: 'Excellence', desc: 'We settle for nothing less than the best performance, security, and support.', icon: Trophy }
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
