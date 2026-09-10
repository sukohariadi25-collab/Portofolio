import { 
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiHtml5,
  SiNodedotjs, SiExpress, SiLaravel, SiMysql, SiPostman,
  SiGit, SiGithub, SiFigma, SiVite 
} from 'react-icons/si';
import { Layout, Server, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-5 h-5 text-indigo-500" />,
      skills: [
        { name: "React.js", icon: <span className="text-[#61DAFB]"><SiReact /></span> },
        { name: "TypeScript", icon: <span className="text-[#3178C6]"><SiTypescript /></span> },
        { name: "Tailwind CSS", icon: <span className="text-[#06B6D4]"><SiTailwindcss /></span> },
        { name: "Next.js", icon: <span className="dark:text-white text-black"><SiNextdotjs /></span> },
        { name: "HTML5 & CSS3", icon: <span className="text-[#E34F26]"><SiHtml5 /></span> },
      ]
    },
    {
      title: "Backend & Database",
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      skills: [
        { name: "Node.js", icon: <span className="text-[#5FA04E]"><SiNodedotjs /></span> },
        { name: "Express.js", icon: <span className="dark:text-white text-black"><SiExpress /></span> },
        { name: "Laravel", icon: <span className="text-[#FF2D20]"><SiLaravel /></span> },
        { name: "MySQL", icon: <span className="text-[#4479A1]"><SiMysql /></span> },
      ]
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
      skills: [
        { name: "Git & GitHub", icon: <span className="text-[#F05032]"><SiGit /></span> },
        { name: "VS Code", icon: <span className="dark:text-white text-black"><SiGithub /></span> },
        { name: "Figma", icon: <span className="text-[#F24E1E]"><SiFigma /></span> },
        { name: "Postman", icon: <span className="text-[#FF6C37]"><SiPostman /></span> },
        { name: "Vite", icon: <span className="text-[#646CFF]"><SiVite /></span> },
      ]
    }
  ];

  return (
    <section id="skills" className="p-3 sm:p-6 py-6 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto bg-[#F8F9FA] dark:bg-slate-900/90 rounded-[32px] p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
        
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            / Tech Stack & Tools
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
            SKILLS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm flex flex-col justify-between"
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

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/50 text-xs font-medium text-slate-700 dark:text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-white dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md cursor-default"
                    >
                      <span className="text-base flex items-center justify-center">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
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