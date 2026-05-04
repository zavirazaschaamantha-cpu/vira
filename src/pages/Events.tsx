import { motion } from 'motion/react';
import EventCard from '../components/EventCard';
import { Event } from '../types';
import { Search, Filter, CalendarCheck } from 'lucide-react';

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Global Tech Summit 2024',
    date: 'May 24, 2024 • 10:00 AM',
    location: 'Innovation Hall, Wing B',
    description: 'A deep dive into the future of campus technology, featuring keynote speakers from top tech firms.',
    image: 'https://picsum.photos/seed/summit/800/600',
    category: 'upcoming'
  },
  {
    id: '2',
    title: 'Spring Charity Gala',
    date: 'June 05, 2024 • 7:00 PM',
    location: 'Grand Ballroom',
    description: 'Join us for an evening of elegance and philanthropy as we raise funds for local student scholarships.',
    image: 'https://picsum.photos/seed/gala/800/600',
    category: 'upcoming'
  },
  {
    id: '3',
    title: 'University Hackathon',
    date: 'June 15, 2024 • 48 Hours',
    location: 'Engineering Lab 4',
    description: 'Build, innovate, and compete for $10,000 in prizes. No sleep, all code, great memories.',
    image: 'https://picsum.photos/seed/hack/800/600',
    category: 'upcoming'
  },
  {
    id: '4',
    title: 'Annual Sports Day',
    date: 'April 20, 2024 • Full Day',
    location: 'Campus Stadium',
    description: 'A day of athletic competition and community building. Relive the highlights in our gallery.',
    image: 'https://picsum.photos/seed/sports/800/600',
    category: 'past'
  },
  {
    id: '5',
    title: 'Winter Concert Series',
    date: 'Dec 12, 2023 • 8:00 PM',
    location: 'Performance Arts Center',
    description: 'A night of music and celebration to mark the end of the year.',
    image: 'https://picsum.photos/seed/concert/800/600',
    category: 'past'
  },
  {
    id: '6',
    title: 'Career Fair 2023',
    date: 'Oct 05, 2023 • 10:00 AM',
    location: 'Student Union',
    description: 'Connecting over 200 employers with our talented graduating class.',
    image: 'https://picsum.photos/seed/career/800/600',
    category: 'past'
  }
];

export default function Events() {
  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[64px] lg:text-[80px] font-black text-slate-900 mb-8 tracking-tightest uppercase leading-[0.9]"
            >
              Discover <br/><span className="text-blue-600">Campus Events</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 font-medium leading-relaxed"
            >
              Stay connected with what's happening on your campus. From professional workshops to social mixers, use SmartEvent to never miss a beat.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
             <div className="relative group">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={18} />
               <input 
                 type="text" 
                 placeholder="Search events..." 
                 className="pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all w-full sm:w-64"
               />
             </div>
             <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all">
                <Filter size={18} /> Filters
             </button>
             <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-2xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-100">
                <CalendarCheck size={18} /> My Events
             </button>
          </div>
        </div>

        {/* Upcoming Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Upcoming</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockEvents.filter(e => e.category === 'upcoming').map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Past Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Past Events</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockEvents.filter(e => e.category === 'past').map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Pagination/Load More */}
        <div className="mt-20 text-center">
           <button className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-3 rounded-2xl text-sm font-bold hover:border-blue-600 hover:text-blue-600 transition-all">
             Load More Events
           </button>
        </div>
      </div>
    </div>
  );
}
