import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleNavigation = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = -40; // Offset if you have a fixed header
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
