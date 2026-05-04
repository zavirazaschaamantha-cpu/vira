import { Page } from '../types';
import { CalendarDays, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-8">
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-800 uppercase">
                Smart<span className="text-blue-500">Event</span>
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Our Mission</span>
              <p className="text-xs font-bold text-slate-500 leading-relaxed uppercase tracking-tighter">
                Empowering student leadership since 2024.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 text-[10px] font-black italic hover:border-blue-500 hover:text-blue-500 transition-colors cursor-pointer">IG</div>
              <div className="w-8 h-8 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 text-[10px] font-black italic hover:border-blue-500 hover:text-blue-500 transition-colors cursor-pointer">TW</div>
              <div className="w-8 h-8 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 text-[10px] font-black italic hover:border-blue-500 hover:text-blue-500 transition-colors cursor-pointer">LI</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Features', 'Events', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => onNavigate(item.toLowerCase() as Page)} 
                    className="text-xs font-black uppercase tracking-tighter text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">Contact</h3>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest">Office</span>
                <span className="text-xs font-bold text-slate-600">123 Innovation Square, Tech City</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest">Inquiries</span>
                <span className="text-xs font-bold text-slate-600 underline">hello@smartevent.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">Newsletter</h3>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-xs w-full focus:ring-2 focus:ring-blue-600 outline-none text-slate-900 font-bold"
              />
              <button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">&copy; {currentYear} SmartEvent University</p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
