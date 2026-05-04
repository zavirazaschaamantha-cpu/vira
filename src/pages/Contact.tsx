import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send, MessageSquareText, Linkedin, Twitter, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Info Side */}
          <div className="flex-1">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-black uppercase text-blue-600 tracking-widest mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[64px] lg:text-[80px] font-black text-slate-900 mb-8 tracking-tightest uppercase leading-[0.9]"
            >
              We're here to <br />
              <span className="text-blue-600">help you grow.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 font-medium leading-relaxed mb-12"
            >
              Have questions about features, pricing for large organizations, or university-wide deployments? Our team is ready to scale with you.
            </motion.p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center transition-all">
                  <Mail size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 text-lg mb-1">Email Support</h4>
                   <p className="text-slate-500">Fast response within 24 hours</p>
                   <p className="text-blue-600 font-bold mt-1">support@smartevent.edu</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center transition-all">
                  <MessageSquareText size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 text-lg mb-1">Community Slack</h4>
                   <p className="text-slate-500">Join our network of student leaders</p>
                   <p className="text-blue-600 font-bold mt-1">slack.smartevent.edu</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white rounded-2xl flex items-center justify-center transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 text-lg mb-1">Global HQ</h4>
                   <p className="text-slate-500">Innovation Square, Tech City</p>
                   <p className="text-blue-600 font-bold mt-1">123 University Ave</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-slate-100">
               <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Follow our journey</h4>
               <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"><Linkedin size={20} /></a>
                  <a href="#" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"><Twitter size={20} /></a>
                  <a href="#" className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"><Github size={20} /></a>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 bg-slate-50 p-8 lg:p-12 rounded-[3.5rem] border border-slate-100 shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                   <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="John" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                   <input type="text" className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="Doe" />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                 <input type="email" className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600 transition-all" placeholder="john@university.edu" />
               </div>

               <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                 <select className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600 transition-all appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>University Partnership</option>
                    <option>Press & Media</option>
                 </select>
               </div>

               <div>
                 <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                 <textarea rows={5} className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none" placeholder="How can we help?"></textarea>
               </div>

               <button className="w-full bg-blue-600 text-white font-black py-5 rounded-3xl shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3">
                 Send Message <Send size={20} />
               </button>
               
               <p className="text-center text-slate-400 text-xs">
                 By sending this message, you agree to our <a href="#" className="underline">Privacy Policy</a>.
               </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
