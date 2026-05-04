import { motion } from 'motion/react';
import { Calendar, Users, PieChart, Bell, Search, PlusCircle } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div className="bg-slate-900 rounded-[2.5rem] p-4 lg:p-8 shadow-2xl relative overflow-hidden group">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="relative flex flex-col md:flex-row gap-6 h-full min-h-[500px]">
        {/* Sidebar */}
        <div className="w-full md:w-20 lg:w-64 bg-white/5 backdrop-blur-md rounded-3xl p-4 flex md:flex-col gap-4">
          <div className="hidden lg:block mb-8 px-4">
            <div className="h-6 w-32 bg-white/20 rounded"></div>
          </div>
          {[Calendar, Users, PieChart, Bell, Search].map((Icon, i) => (
            <div key={i} className={`flex items-center gap-4 p-3 rounded-xl ${i === 0 ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-white/5 transition-colors'}`}>
              <Icon size={20} />
              <span className="hidden lg:block font-medium">{['Dashboard', 'Team', 'Events', 'Notifications', 'Settings'][i]}</span>
            </div>
          ))}
          <div className="mt-auto hidden md:block">
             <div className="p-3 rounded-xl bg-white/5 text-slate-400">
               <PlusCircle size={20} />
             </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center bg-white/5 backdrop-blur-md p-6 rounded-3xl">
            <div>
              <h4 className="text-white font-bold text-xl">Quick Insights</h4>
              <p className="text-slate-400 text-xs">Welcome back, Event Lead</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-700 bg-[url('https://picsum.photos/seed/user/100/100')] bg-cover"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Active Events', val: '12', color: 'bg-blue-500' },
              { label: 'Attendees', val: '1,420', color: 'bg-indigo-500' },
              { label: 'Budget Used', val: '64%', color: 'bg-emerald-500' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-[32px] border border-white/10"
              >
                <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-3 font-black">{stat.label}</p>
                <h5 className="text-white text-4xl font-black tracking-tighter">{stat.val}</h5>
              </motion.div>
            ))}
          </div>

          {/* Main List */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-[40px] border border-white/10 flex-1 min-h-[200px]">
             <div className="flex justify-between items-center mb-8">
               <h5 className="text-white font-black uppercase tracking-tighter text-lg">Upcoming Milestones</h5>
               <button className="text-blue-400 text-[10px] font-black uppercase tracking-widest hover:underline">View All</button>
             </div>
             <div className="space-y-4">
               {[
                 { title: 'Budget Approval', date: 'Tomorrow, 10:00 AM', status: 'Pending' },
                 { title: 'Catering Finalized', date: 'May 12, 2:00 PM', status: 'Completed' },
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                   <div className="flex items-center gap-4">
                     <div className={`w-2 h-2 rounded-full ${item.status === 'Completed' ? 'bg-emerald-500' : 'bg-blue-500'}`}></div>
                     <div>
                       <p className="text-white text-sm font-black uppercase tracking-tighter">{item.title}</p>
                       <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">{item.date}</p>
                     </div>
                   </div>
                   <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">{item.status}</span>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
      
      {/* Visual Accent */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
}
