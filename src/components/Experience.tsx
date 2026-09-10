import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="bg-[#EBECEE] dark:bg-[#0B0F17] px-2 sm:px-4 py-2 transition-colors duration-300">
      <div className="bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 rounded-[32px] w-full max-w-[98%] mx-auto p-6 md:p-12 border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-colors duration-300">
        
        <div className="text-center relative mb-10">
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            / EDUCATION & JOURNEY
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tight -mt-2 select-none">
            EXPERIENCE
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              className="bg-white/80 dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/50 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:shadow-xs transition-shadow"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full">
                  {exp.type}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mt-2">
                  {exp.role}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 max-w-xl leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-1.5 min-w-[140px]">
                {exp.skillsUsed.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md text-[10px] font-medium text-slate-600 dark:text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}