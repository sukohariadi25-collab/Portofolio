import { Github, Linkedin, Instagram } from './Icons';
import { ArrowUpRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

type BrushPoint = {
  x: number;
  y: number;
  size: number;
  rotation: number;
  createdAt: number;
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pointsRef = useRef<BrushPoint[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = '/profile.png';
    img.onload = () => {
      imageRef.current = img;
    };
  }, []);

  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (canvas && container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const DURATION = 3500;

    const render = () => {
      const canvas = canvasRef.current;
      const img = imageRef.current;

      if (canvas && img) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const now = Date.now();

          pointsRef.current = pointsRef.current.filter(
            (p) => now - p.createdAt < DURATION
          );

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          if (pointsRef.current.length > 0) {
            ctx.save();
            ctx.globalCompositeOperation = 'source-over';

            pointsRef.current.forEach((p) => {
              const age = now - p.createdAt;
              const opacity = Math.max(0, 1 - age / DURATION);

              ctx.save();
              ctx.translate(p.x, p.y);
              ctx.rotate(p.rotation);
              ctx.globalAlpha = opacity;

              drawBrush(ctx, p.size);

              ctx.restore();
            });

            ctx.globalCompositeOperation = 'source-in';
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    addPoint(x, y);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    if (!touch) return;

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    addPoint(x, y);
  };

  const addPoint = (x: number, y: number) => {
    pointsRef.current.push({
      x,
      y,
      size: Math.random() * 20 + 60,
      rotation: (Math.random() - 0.5) * 1.5,
      createdAt: Date.now(),
    });
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    if (canvasRef.current) {
      canvasRef.current.width = target.clientWidth;
      canvasRef.current.height = target.clientHeight;
    }
  };

  return (
    <section className="bg-[#EAEBED] dark:bg-[#0B0F17] px-2 sm:px-6 pt-16 pb-3 sm:py-12 h-auto sm:min-h-screen flex items-center justify-center transition-colors duration-300">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(5px) rotate(-2deg); }
        }
        .animate-float {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }
      `}</style>
      
      {/* Container Card Utama - Proporsional Persegi Panjang di Mobile & Desktop */}
      <div className="bg-[#F8F9FA] dark:bg-slate-900/90 rounded-[20px] sm:rounded-[32px] w-full max-w-7xl p-3 sm:p-8 md:p-10 shadow-sm border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between h-[300px] xs:h-[360px] sm:h-[500px] md:h-[600px] relative overflow-hidden transition-colors duration-300">
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[120px] sm:w-[600px] sm:h-[300px] bg-gradient-to-tr from-slate-200/50 via-indigo-50/30 to-transparent dark:from-slate-800/40 dark:via-indigo-950/30 rounded-full blur-2xl sm:blur-3xl pointer-events-none z-0" />
        
        {/* TECH BADGES MELAYANG - Tampil Presisi di Mobile & Desktop */}
        <div className="absolute top-[40%] left-[8%] xs:left-[14%] sm:left-[28%] md:left-[32%] z-30 flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/50 text-[9px] xs:text-[10px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm animate-float pointer-events-none whitespace-nowrap">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400" /> React & Next.js
        </div>

        <div className="absolute top-[40%] right-[8%] xs:right-[14%] sm:right-[28%] md:right-[32%] z-30 flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/50 text-[9px] xs:text-[10px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm animate-float-delayed pointer-events-none whitespace-nowrap">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500" /> TypeScript
        </div>

        <div className="absolute top-[58%] left-[8%] xs:left-[14%] sm:left-[28%] md:left-[32%] z-30 flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/50 text-[9px] xs:text-[10px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm animate-float-delayed pointer-events-none whitespace-nowrap">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400" /> Laravel
        </div>

        <div className="absolute top-[58%] right-[8%] xs:right-[14%] sm:right-[28%] md:right-[32%] z-30 flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/50 text-[9px] xs:text-[10px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200 shadow-sm animate-float pointer-events-none whitespace-nowrap">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500" /> Mysql
        </div>

        {/* 1. HEADER / STATUS */}
        <header className="flex justify-between items-center z-30 w-full">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/60 text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-200 shadow-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for New Project
          </div>
        </header>

        {/* 2. TEKS BERJALAN (MARQUEE) */}
        <div className="w-full overflow-hidden select-none z-0 absolute top-8 xs:top-10 sm:top-20 left-0 pointer-events-none opacity-90">
          <div className="animate-marquee flex items-center whitespace-nowrap">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-8 mr-3 sm:mr-8">
                <h1 className="text-[15vw] xs:text-[18vw] sm:text-[130px] lg:text-[150px] font-black uppercase tracking-tight flex items-center gap-2 sm:gap-4">
                  <span 
                    className="text-slate-900 dark:text-white"
                    style={{ 
                      WebkitTextFillColor: 'transparent', 
                      WebkitTextStroke: '1.5px currentColor',
                    }}
                  >
                    SUKO
                  </span>
                  <span className="text-slate-900 dark:text-white">
                    HARIADI
                  </span>
                </h1>
                <span className="text-slate-300 dark:text-slate-700 text-2xl sm:text-6xl font-light">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. FOTO PORTRAIT */}
        <div 
          ref={containerRef}
          className="absolute bottom-0 left-1/2 -translate-x-[23%] z-20 w-[140px] xs:w-[180px] sm:w-[400px] md:w-[400px] lg:w-[450px] select-none touch-none pointer-events-auto"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          <div className="relative w-full h-auto">
            <img
              src="/profile.png"
              alt="Suko Hariadi"
              onLoad={handleImageLoad}
              className="w-full h-auto object-contain grayscale contrast-110 block pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] sm:drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]scale-115 sm:scale-100"
            />
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
            />
          </div>
        </div>

        {/* 4. FOOTER HERO */}
        <div className="w-full flex justify-between items-end z-30 mt-auto pt-2">
          
          {/* Teks Kiri */}
          <div className="max-w-[130px] xs:max-w-[170px] sm:max-w-xs text-left z-30 bg-white/30 dark:bg-slate-900/30 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none p-1 sm:p-0 rounded-lg">
            <h2 className="text-[11px] xs:text-xs sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Full Stack Developer
            </h2>
            <p className="text-[9px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1 leading-tight sm:leading-relaxed hidden xs:block">
              Siswa Rekayasa Perangkat Lunak yang berfokus membangun aplikasi web modern.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 px-2.5 py-1 sm:px-5 sm:py-2.5 rounded-full text-[9px] sm:text-xs font-medium mt-1.5 sm:mt-2 transition-all hover:scale-105 shadow-sm"
            >
              Let's collaborate <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>

          {/* Sosial Media Kanan */}
          <div className="flex flex-col items-end gap-1 sm:gap-2.5 z-30 bg-white/30 dark:bg-slate-900/30 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none p-1 sm:p-0 rounded-lg">
            <a 
              href="https://github.com/sukohariadi25-collab" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1 sm:gap-1.5 text-[9px] xs:text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
            >
              <Github className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white" /> 
              <span>Github</span> 
              <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1 sm:gap-1.5 text-[9px] xs:text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
            >
              <Linkedin className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white" /> 
              <span>LinkedIn</span> 
              <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="https://www.instagram.com/its.shuu31?stkn=eHVnOWRqYWVnb2tz" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1 sm:gap-1.5 text-[9px] xs:text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
            >
              <Instagram className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white" /> 
              <span>Instagram</span> 
              <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

function drawBrush(ctx: CanvasRenderingContext2D, size: number) {
  ctx.beginPath();
  const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
  gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.8)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = gradient;
  ctx.ellipse(0, 0, size * 0.55, size * 0.3, Math.PI / 6, 0, 2 * Math.PI);
  ctx.fill();
}