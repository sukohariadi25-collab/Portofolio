import React, { useRef, useEffect } from 'react';

// Komponen Ikon Panah Ke Atas Kanan
const ArrowIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = '/profile.png';
    img.crossOrigin = 'anonymous';

    // Fungsi untuk me-draw/reset layer Hitam-Putih ke Canvas
    const initGrayscaleCanvas = () => {
      if (!canvas || !ctx) return;
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        data[i] = avg;     // Red
        data[i + 1] = avg; // Green
        data[i + 2] = avg; // Blue
      }
      ctx.putImageData(imageData, 0, 0);
    };

    img.onload = () => {
      initGrayscaleCanvas();
    };

    // Fungsi untuk mengusap (scratch/reveal)
    const handleScratch = (e: MouseEvent | TouchEvent) => {
      if (!canvas || !ctx) return;

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const x = (clientX - rect.left) * scaleX;
      const y = (clientY - rect.top) * scaleY;

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 45, 0, Math.PI * 2);
      ctx.fill();
    };

    const handleScroll = () => {
      if (window.scrollY > 150) {
        initGrayscaleCanvas();
      }
    };

    canvas.addEventListener('mousemove', handleScratch);
    canvas.addEventListener('mouseenter', handleScratch);
    canvas.addEventListener('touchmove', handleScratch);
    canvas.addEventListener('touchstart', handleScratch);
    window.addEventListener('scroll', handleScroll);

    return () => {
      canvas.removeEventListener('mousemove', handleScratch);
      canvas.removeEventListener('mouseenter', handleScratch);
      canvas.removeEventListener('touchmove', handleScratch);
      canvas.removeEventListener('touchstart', handleScratch);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="px-2 sm:px-4 py-4 md:px-8 max-w-7xl mx-auto">
      {/* 0. CSS Injected (Font Arial & Dynamic Stroke) */}
      <style>{`
        .font-arial {
          font-family: Arial, Helvetica, sans-serif;
        }

        /* Stroke Style Light & Dark */
        .text-stroke {
          -webkit-text-stroke: 1.5px #1e293b;
          color: transparent;
        }
        .dark .text-stroke {
          -webkit-text-stroke: 1.5px #f8fafc;
          color: transparent;
        }

        @media (min-width: 768px) {
          .text-stroke {
            -webkit-text-stroke: 2px #1e293b;
          }
          .dark .text-stroke {
            -webkit-text-stroke: 2px #f8fafc;
          }
        }

        /* Shadow Effect pada Teks Background */
        .text-shadow-hero {
          text-shadow: 
            0 10px 20px rgba(0, 0, 0, 0.08),
            0 2px 4px rgba(0, 0, 0, 0.04);
        }

        /* Texture Noise/Grain Overlay */
        .grain-bg {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
        }

        /* Animasi Marquee Running */
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-left {
          display: flex;
          white-space: nowrap;
          animation: marquee-left 25s linear infinite;
        }

        /* Animasi Floating Badges */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-float-slow {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 4.5s ease-in-out 1.5s infinite;
        }
      `}</style>

      {/* Outer Card (Light / Dark Mode Support) */}
      <div className="relative bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-4 sm:p-6 md:p-8 min-h-[380px] xs:min-h-[420px] sm:min-h-[500px] md:min-h-[580px] flex flex-col justify-between overflow-hidden shadow-sm select-none transition-colors duration-300">
        
        {/* Grain Noise Overlay Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 grain-bg opacity-70 dark:opacity-30"></div>

        {/* 1. Status Badge (Atas Kiri) */}
        <div className="z-30 flex justify-between items-start">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-slate-200/80 dark:border-slate-700 text-[10px] sm:text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm transition-colors">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for New Project
          </div>
        </div>

        {/* 2. Text Background Raksasa */}
        <div className="absolute inset-0 flex items-center pointer-events-none z-0 overflow-hidden -translate-y-8 xs:-translate-y-10 sm:-translate-y-12 md:-translate-y-16">
          <div className="animate-marquee-left flex gap-6 sm:gap-12 items-center">
            <h1 className="font-arial text-[13vw] sm:text-[11vw] md:text-[9.5vw] font-black tracking-wider text-slate-800 dark:text-slate-100 uppercase leading-none whitespace-nowrap text-shadow-hero transition-colors">
              SUKO<span className="text-stroke">HARIADI</span>
            </h1>
            <h1 className="font-arial text-[13vw] sm:text-[11vw] md:text-[9.5vw] font-black tracking-wider text-slate-800 dark:text-slate-100 uppercase leading-none whitespace-nowrap text-shadow-hero transition-colors">
              SUKO<span className="text-stroke">HARIADI</span>
            </h1>
          </div>
        </div>

        {/* 3. Center Area: Foto Color + Canvas Brush Masking & Badges */}
        <div 
          style={{ left: '50%', transform: 'translateX(-50%)' }}
          className="absolute bottom-0 z-10 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[420px] md:max-w-[500px] pointer-events-none"
        >
          <div className="relative w-full">
            
            {/* Layer Bawah: Gambar Asli Berwarna */}
            <img
              src="/profile.png"
              alt="Profile Color"
              className="w-full h-auto object-cover object-bottom drop-shadow-2xl mx-auto block pointer-events-none"
            />

            {/* Layer Atas: Canvas Grayscale interaktif */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full object-cover object-bottom cursor-pointer pointer-events-auto"
            />

            {/* Tech Badges */}
            <div className="flex absolute top-[40%] -left-3 sm:-left-6 md:-left-12 z-20 items-center gap-1.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-md border border-slate-100 dark:border-slate-700 text-[9px] sm:text-xs font-semibold text-slate-800 dark:text-slate-100 pointer-events-auto animate-float-slow whitespace-nowrap transition-colors">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-500"></span>
              React & Next.js
            </div>

            <div className="flex absolute top-[41%] -right-3 sm:-right-6 md:-right-12 z-20 items-center gap-1.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-md border border-slate-100 dark:border-slate-700 text-[9px] sm:text-xs font-semibold text-slate-800 dark:text-slate-100 pointer-events-auto animate-float-delayed whitespace-nowrap transition-colors">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600"></span>
              TypeScript
            </div>

            <div className="flex absolute top-[60%] -left-1 sm:-left-2 md:-left-6 z-20 items-center gap-1.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-md border border-slate-100 dark:border-slate-700 text-[9px] sm:text-xs font-semibold text-slate-800 dark:text-slate-100 pointer-events-auto animate-float-delayed whitespace-nowrap transition-colors">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></span>
              Laravel
            </div>

            <div className="flex absolute top-[61%] -right-1 sm:-right-2 md:-right-6 z-20 items-center gap-1.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-md border border-slate-100 dark:border-slate-700 text-[9px] sm:text-xs font-semibold text-slate-800 dark:text-slate-100 pointer-events-auto animate-float-slow whitespace-nowrap transition-colors">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-600"></span>
              MySQL
            </div>

          </div>
        </div>

        {/* 4. Bottom Bar */}
        <div className="z-30 flex flex-row items-end justify-between gap-2 pt-2 sm:pt-4 mt-auto">
          
          {/* Peran & Tombol (Sisi Kiri) */}
          <div className="space-y-1 sm:space-y-2.5">
            <h2 className="text-xs sm:text-lg md:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight transition-colors">
              Full Stack<br className="block sm:hidden" /> Developer
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 text-[9px] sm:text-xs md:text-sm font-semibold px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full transition-all shadow-md whitespace-nowrap group"
            >
              <span>Let's collaborate</span>
              <ArrowIcon className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-white dark:text-slate-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Social Links (Sisi Kanan Vertikal) */}
          <div className="flex flex-col items-end gap-0.5 sm:gap-1.5 text-[11px] sm:text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors group"
            >
              <span>Github</span> 
              <ArrowIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-800 dark:text-slate-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors group"
            >
              <span>LinkedIn</span> 
              <ArrowIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-800 dark:text-slate-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-black dark:hover:text-white flex items-center gap-1 transition-colors group"
            >
              <span>Instagram</span> 
              <ArrowIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-800 dark:text-slate-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;