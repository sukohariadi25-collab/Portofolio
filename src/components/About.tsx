'use client';

import { User, Code2, Sparkles, MapPin, GraduationCap, Cpu, Rocket } from 'lucide-react';

export default function About() {
  const highlightCards = [
    {
      icon: <Code2 className="w-5 h-5 text-indigo-500" />,
      title: 'Clean Code',
      desc: 'Menulis kode yang rapi, terstruktur, modular, dan mudah dipelihara serta dikembangkan kembali.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-500" />,
      title: 'Modern Tech Stack',
      desc: 'Memanfaatkan teknologi web terkini seperti React, TypeScript, Tailwind CSS, dan RESTful API.'
    },
    {
      icon: <Rocket className="w-5 h-5 text-amber-500" />,
      title: 'Fast Learner',
      desc: 'Cepat beradaptasi dengan alur kerja, alat baru, serta pustaka pemrograman sesuai kebutuhan proyek.'
    }
  ];

  return (
    <section id="about" className="bg-[#EAEBED] dark:bg-[#0B0F17] p-3 sm:p-6 py-6 transition-colors duration-300">
      
      {/* Animasi Ayunan Halus */}
      <style>{`
        @keyframes lanyardSwing {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-lanyard-idle {
          animation: lanyardSwing 4s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto bg-[#F8F9FA] dark:bg-slate-900/90 rounded-[32px] p-6 sm:p-8 md:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-colors duration-300">
        
        {/* Section Badge Header */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-5">
          <span className="p-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-900 dark:text-white">
            <User className="w-3.5 h-3.5" />
          </span>
          <span>/ About Me</span>
        </div>

        {/* Grid Utama 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* KOLOM KIRI: Deskripsi & Badges Informasi */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Membangun Solusi Digital dengan Perhatian pada Detail & Performa
            </h2>

            <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              <p>
                Saya adalah siswa Rekayasa Perangkat Lunak (RPL) yang berfokus pada Full Stack Web Development dan UI/UX Design. Berawal dari rasa penasaran tentang bagaimana sebuah situs web bekerja di balik layar, kini saya aktif membangun aplikasi web modern yang tidak hanya estetik secara tampilan, tetapi juga responsif, cepat, dan mudah digunakan.
              </p>
              <p>
                Fokus utama saya adalah menciptakan antarmuka pengguna (Frontend) yang halus serta arsitektur server (Backend) yang tangguh. Saya percaya bahwa kode yang bersih (clean code) dan pengalaman pengguna (user experience) yang baik adalah kunci dari produk digital yang sukses.
              </p>
            </div>

            {/* Badges Informasi */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200/80 dark:border-slate-800">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Nganjuk, Jawa Timur, Indonesia
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-blue-500" /> Siswa RPL (SMK)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> Open for Internship / Freelance
              </span>
            </div>
          </div>

          {/* KOLOM KANAN: Lanyard Foto (Ukurannya Lebih Kecil & Tanpa Drag) */}
          <div className="lg:col-span-5 flex justify-center items-center py-2">
            <div className="relative flex flex-col items-center animate-lanyard-idle select-none">
              
              {/* Paku Gantung Atas */}
              <div className="w-5 h-5 bg-slate-300 dark:bg-slate-700 border-2 border-slate-400 dark:border-slate-600 rounded-full z-30 flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 bg-slate-600 dark:bg-slate-300 rounded-full" />
              </div>

              {/* Tali Atas */}
              <div className="w-8 h-12 border-b-2 border-x-2 border-slate-400 dark:border-slate-600 rounded-b-xl opacity-75 -mt-2" />
              
              {/* Pengait Metal */}
              <div className="w-4 h-3 bg-slate-400 dark:bg-slate-600 rounded-sm z-10 -mt-0.5 shadow-sm" />

              {/* Lanyard Frame Foto (Diperkecil ke w-56/sm:w-64) */}
              <div className="w-56 sm:w-64 bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700 rounded-2xl p-3 shadow-lg backdrop-blur-md relative overflow-hidden -mt-0.5">
                
                {/* Lubang Tali Card */}
                <div className="w-8 h-2 bg-slate-200 dark:bg-slate-900 rounded-full mx-auto mb-2.5" />

                {/* Container Foto Profil */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-slate-200/60 dark:border-slate-700/60 bg-slate-100 dark:bg-slate-900">
                  <img 
                    src="/foto.jpeg" 
                    alt="Foto Profil" 
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* HIGHLIGHT CARDS: 3 Poin Keunggulan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800">
          {highlightCards.map((card, idx) => (
            <div 
              key={idx}
              className="p-4 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm transition-all hover:border-slate-300 dark:hover:border-slate-600 flex items-start gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/50 shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}