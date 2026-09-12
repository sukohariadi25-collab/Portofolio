import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="bg-[#EBECEE] dark:bg-[#0B0F17] px-2 sm:px-4 py-2 transition-colors duration-300">
      <div className="bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 rounded-[32px] w-full max-w-[98%] mx-auto p-6 md:p-12 border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-colors duration-300">
        
        {/* HEADER SECTION */}
        <div className="text-center relative mb-12">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            / EDUCATION & JOURNEY
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tight -mt-2 select-none">
            EXPERIENCE
          </h2>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-4xl mx-auto pl-4 sm:pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8 my-4">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* TIMELINE DOT (Titik di Garis Kiri) */}
              <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-cyan-500 group-hover:scale-125 transition-transform duration-300 shadow-xs" />

              {/* CARD ITEM */}
              <div className="bg-white/80 dark:bg-slate-800/40 backdrop-blur-xs rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 shadow-xs hover:shadow-md">
                
                {/* Header Card: Type Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 rounded-full">
                    {exp.type}
                  </span>
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    {exp.period}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-4">
                  {exp.description}
                </p>

                {/* Skills Badges (Layout Horizontal Flex-Wrap) */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/40">
                  {exp.skillsUsed.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 rounded-md text-[10px] font-medium text-slate-600 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}