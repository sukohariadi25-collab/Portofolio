import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 bg-black/80 dark:bg-white/80 hover:bg-black dark:hover:bg-white text-white dark:text-black p-3 rounded-full shadow-lg backdrop-blur-sm border border-slate-700/50 dark:border-slate-200/50 transition-all duration-300 hover:scale-110 active:scale-95"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}