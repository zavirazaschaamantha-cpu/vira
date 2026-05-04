import { NavItem, Page } from '../types';
import { Menu, X, CalendarDays } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Features', id: 'features' },
  { label: 'Events', id: 'events' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-800 uppercase">
              Smart<span className="text-blue-600">Event</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-slate-900 ${
                  currentPage === item.id ? 'text-blue-600' : 'text-slate-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-6 ml-4">
              <button className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-slate-800 transition-colors">
                Login
              </button>
              <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-slate-300 hover:bg-slate-800 transition-all">
                Get Started
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-4 text-base font-medium transition-colors ${
                    currentPage === item.id ? 'text-blue-600 bg-blue-50/50 rounded-lg' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button className="w-full text-left px-3 py-3 text-base font-medium text-slate-600">
                  Log in
                </button>
                <button className="w-full bg-blue-600 text-white px-3 py-3 rounded-xl text-base font-semibold text-center">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
