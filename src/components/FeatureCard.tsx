import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  iconName: keyof typeof LucideIcons;
  delay?: number;
}

export default function FeatureCard({ title, description, iconName, delay = 0 }: FeatureCardProps) {
  const Icon = LucideIcons[iconName] as LucideIcons.LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
    >
      <div className="w-12 h-12 bg-slate-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-black uppercase tracking-tighter text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-400 font-medium leading-normal text-xs">
        {description}
      </p>
    </motion.div>
  );
}
