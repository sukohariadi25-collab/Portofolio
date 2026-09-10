import { Sun, Moon, } from './Icons';
import { ArrowUpRight } from 'lucide-react'

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-[25%] z-50 w-[92%] max-w-[1300px]">
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-full px-5 py-3 shadow-sm flex items-center justify-between transition-colors duration-300">
        
        {/* Logo */}
        <a href="#" className="font-black text-slate-900 dark:text-white tracking-tighter text-base">
          SH<span className="text-blue-600">.</span>
        </a>

        {/* Menu Navigasi Tengah */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </div>

        {/* Tombol Kanan */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            {darkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-slate-600" />}
          </button>

          <a
            href="/cv-suko.pdf"
            download="CV_Suko_Hariadi.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            CV
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full text-xs font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
          >
            Let's Talk <ArrowUpRight size={14} />
          </a>
        </div>

      </nav>
    </header>
  );
}