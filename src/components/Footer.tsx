import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    // Footer full-width dengan border atas
    <footer className="w-full bg-[#F8F9FA] dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300 mt-8">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-8 sm:py-12 flex flex-col gap-8">
        
        {/* Baris Atas: Brand & Navigasi Cepat + Scroll to Top */}
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
          
          {/* Brand / Name */}
          <div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
              SUKO HARIADI<span className="text-emerald-500">.</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Full Stack Web Developer & RPL 
            </p>
          </div>

          {/* Navigasi Footer & Tombol Scroll to Top */}
          <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
            <nav className="flex items-center gap-4 sm:gap-6 text-xs font-medium text-slate-600 dark:text-slate-300">
              <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">Skill</a>
              <a href="#work" className="hover:text-slate-900 dark:hover:text-white transition-colors">Work</a>
              <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
            </nav>

            {/* Tombol Back to Top */}
            <button
              onClick={scrollToTop}
              title="Kembali ke Atas"
              className="p-2.5 rounded-full bg-slate-200/70 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-all hover:scale-105 active:scale-95 shrink-0"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Baris Bawah: Copyright & Sosial Media */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          
          <p>© {currentYear} Suko Hariadi. All rights reserved.</p>

        </div>

      </div>
    </footer>
  );
}