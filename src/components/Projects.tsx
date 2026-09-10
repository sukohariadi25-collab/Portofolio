import { useState, useEffect } from 'react';
import { ExternalLink, Code2, Layout, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Github } from './Icons';

type Category = 'all' | 'web' | 'uiux';

type Project = {
  id: number;
  title: string;
  category: 'web' | 'uiux';
  categoryLabel: string;
  description: string;
  images: string[]; // 🖼️ Array multi-gambar
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const projects: Project[] = [
    {
      id: 1,
      title: 'DemoCare - Mental Health App',
      category: 'web',
      categoryLabel: 'Web Development',
      description: 'Aplikasi kesehatan mental interaktif dengan fitur jurnal harian, konsultasi online, serta analisis mood berbasis grafik harian.',
      images: [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
      ],
      tags: ['React.js', 'Tailwind CSS', 'Express.js'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'FungWater - Luxury Fragrance Store',
      category: 'web',
      categoryLabel: 'Web Development',
      description: 'Platform e-commerce parfum mewah dengan katalog produk interaktif, fitur filtering cepat, dan integrasi payment gateway.',
      images: [
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop',
      ],
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'CryptoCalm - Crypto Dashboard App',
      category: 'web',
      categoryLabel: 'Web Development',
      description: 'Dashboard pemantauan aset kripto secara real-time dilengkapi visualisasi grafik data pasar dan manajemen portofolio.',
      images: [
        'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      ],
      tags: ['React.js', 'Chart.js', 'REST API'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'FinFlow - E-Wallet & Mobile Banking Concept',
      category: 'uiux',
      categoryLabel: 'UI/UX Design',
      description: 'Desain antarmuka aplikasi dompet digital modern dengan fokus pada kemudahan transaksi harian dan sistem keamanan biometric.',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      ],
      tags: ['Figma', 'Mobile App', 'Design System'],
      figmaUrl: 'https://figma.com',
      demoUrl: 'https://example.com',
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter((p) => p.category === activeTab);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  // Keyboard shortcut untuk navigasi modal (Esc & Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="work" className="p-3 sm:p-6 py-6 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto bg-[#F8F9FA] dark:bg-slate-900/90 rounded-[32px] p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              / Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              PORTFOLIO
            </h2>
          </div>

          {/* Tab Filtering Buttons */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/70 dark:bg-slate-800/80 border border-slate-300/50 dark:border-slate-700/50 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Semua ({projects.length})
            </button>

            <button
              onClick={() => setActiveTab('web')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeTab === 'web'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Web Dev</span>
            </button>

            <button
              onClick={() => setActiveTab('uiux')}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeTab === 'uiux'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>UI/UX Design</span>
            </button>
          </div>
        </div>

        {/* Grid List Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group cursor-pointer bg-white dark:bg-slate-800/50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 mb-4">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-semibold bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                      {project.category === 'web' ? (
                        <Code2 className="w-3 h-3 text-indigo-500" />
                      ) : (
                        <Layout className="w-3 h-3 text-pink-500" />
                      )}
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Multi-Image Counter Indicator */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-medium bg-slate-900/80 text-white backdrop-blur-md shadow-sm">
                        <ImageIcon className="w-3 h-3" />
                        <span>+{project.images.length - 1} foto</span>
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Footer Card */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/50 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 group-hover:underline">
                  Lihat Detail →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 🖼️ PROJECT MODAL DIALOG */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          
          <div 
            className="bg-white dark:bg-slate-900 rounded-[28px] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Gallery Display */}
            <div className="p-6 pb-0">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center group">
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />

                {/* Arrow Navigation (Jika foto > 1) */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-sm transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-3 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-sm transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip Selector */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-2.5 mt-3 overflow-x-auto pb-2">
                  {selectedProject.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        activeImageIndex === idx
                          ? 'border-indigo-500 scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Details Info */}
            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Modal Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium transition-all shadow-sm"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-medium transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}

                {selectedProject.figmaUrl && (
                  <a
                    href={selectedProject.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-medium transition-all"
                  >
                    <span className="text-sm"></span>
                    <span>Figma Prototype</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}