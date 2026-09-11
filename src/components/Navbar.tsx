import React, { useState, type Dispatch, type SetStateAction } from 'react';

export interface NavbarProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

// Ikon Bulan
const MoonIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

// Ikon Matahari
const SunIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" /><path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" /><path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

// Ikon Hamburger / Silang
const MenuIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-3 md:px-8 max-w-7xl mx-auto">
      <nav className="relative flex items-center justify-between px-4 py-2.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-full transition-colors duration-300 shadow-sm">
        
        {/* Brand / Logo */}
        <a href="#" className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight">
          Suko<span className="text-slate-500 dark:text-slate-400">Hariadi</span>
        </a>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions (Toggle Theme + Hamburger Button) */}
        <div className="flex items-center gap-2">
          {/* Button Toggle Theme */}
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

          {/* Tombol Hamburger Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors focus:outline-none"
          >
            {isOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>

      </nav>

      {/* Menu Dropdown Mobile */}
      {isOpen && (
        <div className="md:hidden mt-2 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-xl flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="sm:hidden text-center text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-sm mt-1"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}