import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Event } from '../types';
import { motion } from 'motion/react';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
            event.category === 'upcoming' 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
              : 'bg-slate-200 text-slate-600'
          }`}>
            {event.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-black tracking-tighter uppercase text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-none">
          {event.title}
        </h3>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
            <Calendar size={14} className="text-blue-500" />
            <span>{event.date.split(' • ')[0] || event.date.split('•')[0]}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
            <MapPin size={14} className="text-blue-500" />
            <span>In-Person</span>
          </div>
        </div>
        
        <p className="text-slate-500 text-xs font-medium line-clamp-2 mb-8 leading-relaxed">
          {event.description}
        </p>
        
        <button className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest hover:gap-3 transition-all">
          Register Now <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}
