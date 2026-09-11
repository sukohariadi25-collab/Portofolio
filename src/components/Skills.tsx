import { useState,} from 'react';
import type { ReactNode } from 'react';
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiHtml5,
  SiNodedotjs, SiExpress, SiLaravel, SiMysql, SiPostman,
  SiGit, SiFigma, SiVite 
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { Layout, Server, Wrench, Sparkles, ChevronDown, Layers, X } from 'lucide-react';

interface SkillDetail {
  name: string;
  icon: ReactNode;
  level: string;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: SkillDetail[];
}

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-indigo-500" />,
      skills: [
        { 
          name: "React.js", 
          icon: <span className="text-[#61DAFB]"><SiReact /></span>,
          level: "Advanced",
          description: "Membangun SPA (Single Page Application) responsif dengan React Hooks, State Management (Zustand/Context API), dan integrasi REST API."
        },
        { 
          name: "TypeScript", 
          icon: <span className="text-[#3178C6]"><SiTypescript /></span>,
          level: "Intermediate",
          description: "Penerapan Type Safety pada komponen React dan API response untuk meminimalisir bug saat runtime."
        },
        { 
          name: "Tailwind CSS", 
          icon: <span className="text-[#06B6D4]"><SiTailwindcss /></span>,
          level: "Advanced",
          description: "Membuat tampilan antarmuka (UI) modern, terstruktur, responsif, dan mendukung Dark Mode secara cepat."
        },
        { 
          name: "Next.js", 
          icon: <span className="dark:text-white text-black"><SiNextdotjs /></span>,
          level: "Intermediate",
          description: "Pengembangan web modern dengan App Router, Server-Side Rendering (SSR), dan optimasi performa."
        },
        { 
          name: "HTML5 & CSS3", 
          icon: <span className="text-[#E34F26]"><SiHtml5 /></span>,
          level: "Advanced",
          description: "Pemahaman mendalam tentang Semantic HTML, Flexbox, CSS Grid, animasi UI, dan aksesibilitas web."
        },
      ]
    },
    {
      title: "Backend & Database",
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      skills: [
        { 
          name: "Node.js", 
          icon: <span className="text-[#5FA04E]"><SiNodedotjs /></span>,
          level: "Intermediate",
          description: "Pengembangan arsitektur backend asynchronous menggunakan modul bawaan dan runtime Node.js."
        },
        { 
          name: "Express.js", 
          icon: <span className="dark:text-white text-black"><SiExpress /></span>,
          level: "Intermediate",
          description: "Pembuatan RESTful API terstruktur, autentikasi berbasis JWT, serta penanganan error middleware."
        },
        { 
          name: "Laravel", 
          icon: <span className="text-[#FF2D20]"><SiLaravel /></span>,
          level: "Intermediate",
          description: "Pengembangan aplikasi web MVC, migrasi database, Eloquent ORM, dan manajemen API endpoint."
        },
        { 
          name: "MySQL", 
          icon: <span className="text-[#4479A1]"><SiMysql /></span>,
          level: "Intermediate",
          description: "Perancangan skema database relasional, relasi tabel, penulisan query SQL, dan manajemen data."
        },
      ]
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
      skills: [
        { 
          name: "Git & GitHub", 
          icon: <span className="text-[#F05032]"><SiGit /></span>,
          level: "Advanced",
          description: "Manajemen versi kode terdistribusi, branching strategy, Pull Request, dan kolaborasi tim."
        },
        { 
          name: "VS Code", 
          icon: <span className="text-[#007ACC]"><VscCode /></span>,
          level: "Advanced",
          description: "Editor utama dengan optimasi ekstensi produktivitas, linting kode, dan integrasi terminal."
        },
        { 
          name: "Figma", 
          icon: <span className="text-[#F24E1E]"><SiFigma /></span>,
          level: "Intermediate",
          description: "Slicing UI dari desain ke dalam bentuk kode front-end serta pembuatan kustomisasi komponen."
        },
        { 
          name: "Postman", 
          icon: <span className="text-[#FF6C37]"><SiPostman /></span>,
          level: "Advanced",
          description: "Pengujian endpoint REST API, otomasi dokumentasi API, dan simulasi request/response."
        },
        { 
          name: "Vite", 
          icon: <span className="text-[#646CFF]"><SiVite /></span>,
          level: "Advanced",
          description: "Penggunaan bundler modern untuk percepatan Hot Module Replacement (HMR) saat development."
        },
      ]
    }
  ];

  const handleSkillClick = (skill: SkillDetail) => {
    if (selectedSkill?.name === skill.name) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  return (
    <section id="skills" className="p-3 sm:p-6 py-6 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto bg-[#F8F9FA] dark:bg-slate-900/90 rounded-[32px] p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            / Tech Stack & Tools
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
            SKILLS
          </h2>
        </div>

        {/* Skill Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {skillCategories.map((cat, idx) => {
            // Cek apakah ada skill yang dipilih dari kategori ini
            const activeSkillInCategory = cat.skills.find(
              (s) => s.name === selectedSkill?.name
            );

            return (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100 dark:border-slate-700/50">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Deretan Badge */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill, sIdx) => {
                      const isActive = selectedSkill?.name === skill.name;
                      return (
                        <button
                          key={sIdx}
                          onClick={() => handleSkillClick(skill)}
                          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all duration-200 cursor-pointer active:scale-95 ${
                            isActive
                              ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md scale-105'
                              : 'bg-slate-100/80 dark:bg-slate-800/80 border-slate-200/60 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 hover:-translate-y-0.5 hover:bg-white dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                          }`}
                        >
                          <span className="text-base flex items-center justify-center">{skill.icon}</span>
                          <span>{skill.name}</span>
                          <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isActive ? 'rotate-180 text-white dark:text-slate-900' : 'text-slate-400'}`} />
                        </button>
                      );
                    })}
                  </div>

                  {/* DETAIL PANEL - Tepat di dalam kartu tempat badge tersebut berada */}
                  {activeSkillInCategory && (
                    <div className="mt-5 bg-slate-50 dark:bg-slate-900/90 rounded-xl p-4 border border-slate-200/80 dark:border-slate-700/80 transition-all duration-300">
                      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-200/60 dark:border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="text-lg flex items-center">{activeSkillInCategory.icon}</span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            {activeSkillInCategory.name}
                          </h4>
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                            {activeSkillInCategory.level}
                          </span>
                        </div>
                        <button
                          onClick={() => setSelectedSkill(null)}
                          className="p-1 rounded-lg bg-slate-200/60 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                          title="Tutup"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="mt-2.5">
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <Layers className="w-3 h-3" /> Kapabilitas:
                        </span>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {activeSkillInCategory.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-6 pt-3 border-t border-slate-100 dark:border-slate-700/40 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-slate-400" /> Klik badge untuk info detail
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}