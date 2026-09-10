'use client';

import { User, Code2, Sparkles, MapPin, GraduationCap, Cpu, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-[#EAEBED] dark:bg-[#0B0F17] p-3 sm:p-6 py-6 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto bg-[#F8F9FA] dark:bg-slate-900/90 rounded-[32px] p-6 sm:p-10 md:p-12 border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-colors duration-300">
        
        {/* Section Badge */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6">
          <span className="p-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-slate-900 dark:text-white">
            <User className="w-4 h-4" />
          </span>
          <span>/ About Me</span>
        </div>

        {/* Grid Utama */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* KOLOM KIRI: Deskripsi & Badges Informasi */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                Membangun Solusi Digital dengan Perhatian pada Detail & Performa
              </h2>

              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                Saya adalah siswa Rekayasa Perangkat Lunak (RPL) yang berfokus pada Full Stack Web Development dan UI/UX Design. Berawal dari rasa penasaran tentang bagaimana sebuah situs web bekerja di balik layar, kini saya aktif membangun aplikasi web modern yang tidak hanya estetik secara tampilan, tetapi juga responsif, cepat, dan mudah digunakan.
              </p>

              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Fokus utama saya adalah menciptakan antarmuka pengguna (Frontend) yang halus serta arsitektur server (Backend) yang tangguh. Saya percaya bahwa kode yang bersih (clean code) dan pengalaman pengguna (user experience) yang baik adalah kunci dari produk digital yang sukses.
              </p>
            </div>

            {/* Badges Informasi */}
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Indonesia
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-blue-500" /> Siswa RPL (SMK)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> Open for Internship / Freelance
              </span>
            </div>
          </div>

          {/* KOLOM KANAN: Card Keunggulan (Tanpa Gambar) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-5 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm transition-all hover:border-slate-300 dark:hover:border-slate-600">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200">
                  <Code2 className="w-5 h-5" />
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Clean Code</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Menulis kode yang rapi, terstruktur, modular, dan mudah dipelihara serta dikembangkan kembali.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm transition-all hover:border-slate-300 dark:hover:border-slate-600">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200">
                  <Cpu className="w-5 h-5" />
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Modern Tech Stack</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Memanfaatkan teknologi web terkini seperti React, TypeScript, Tailwind CSS, dan RESTful API.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm transition-all hover:border-slate-300 dark:hover:border-slate-600">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200">
                  <Rocket className="w-5 h-5" />
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Fast Learner</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Cepat beradaptasi dengan alur kerja, alat baru, serta pustaka pemrograman sesuai kebutuhan proyek.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}