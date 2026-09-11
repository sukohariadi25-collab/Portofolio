import React, { type Dispatch, type SetStateAction } from 'react';

// Interface untuk menerima props dari App.tsx
export interface NavbarProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

// Ikon Bulan (Dark Mode)
const MoonIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

// Ikon Matahari (Light Mode)
const SunIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  // Fungsi toggle Dark/Light Mode menggunakan state dari App.tsx
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-3 md:px-8 max-w-7xl mx-auto">
      <nav className="flex items-center justify-between px-4 py-2.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-full transition-colors duration-300 shadow-sm">
        
        {/* Brand / Logo */}
        <a href="#" className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight">
          Suko<span className="text-slate-500 dark:text-slate-400">Hariadi</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#work" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
        </div>

        {/* Actions (Toggle Theme Button) */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5 text-amber-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-slate-700" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex text-xs font-semibold px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm"
          >
            Let's Talk
          </a>
        </div>

      </nav>
    </header>
  );
}