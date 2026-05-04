export type Page = 'home' | 'features' | 'events' | 'about' | 'contact';

export interface NavItem {
  label: string;
  id: Page;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  category: 'upcoming' | 'past';
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
