import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData'; // Sesuaikan path impor data milikmu

export const Stats: React.FC = () => {
  // Mengambil total jumlah proyek langsung dari data milikmu
  const totalProjects = PROJECTS_DATA.length;

  const stats = [
    { 
      value: '3+', 
      label: 'Years Experience',
      description: 'Pengalaman mengembangkan berbagai aplikasi web modern dan responsif.' 
    },
    { 
      // Menggunakan jumlah dari PROJECTS_DATA (misal: 3 Proyek)
      value: `${totalProjects} Proyek`, 
      label: 'Portfolio Completed',
      description: 'Berhasil menyelesaikan proyek nyata dan eksplorasi antarmuka modern.' 
    },
    { 
      value: '100%', 
      label: 'Client Satisfaction',
      description: 'Berkomitmen pada kualitas kode terbaik dan komunikasi yang lancar.' 
    },
    { 
      value: '24/7', 
      label: 'Support & Collaboration',
      description: 'Siap berdiskusi dan membantu kebutuhan proyek secara fleksibel.' 
    },
  ];

  return (
    <section className="w-full">
      {/* Container Card Memanjang */}
      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm transition-colors duration-300">
        
        {/* Header Dalam Card */}
        <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
          <h3 className="text-xs uppercase tracking-widest font-semibold text-slate-500 dark:text-slate-400">
            Highlights & Statistics
          </h3>
        </div>

        {/* Grid Isi Data Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="flex flex-col justify-between space-y-2 border-l-2 border-slate-300 dark:border-slate-700 pl-4 sm:pl-6"
            >
              <div>
                <h4 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </h4>
                <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mt-1">
                  {stat.label}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Stats;