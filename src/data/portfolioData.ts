import type { Project, SkillCategory, ExperienceItem } from '../types'

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Web Portofolio Pribadi',
    category: 'Real Project',
    tags: ['Landing Page', 'React + TS'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com',
    githubUrl: 'https://github.com',
    longDescription: 'Aplikasi landing page kesehatan mental yang dirancang untuk membantu pengguna melacak suasana hati harian, menemukan artikel psikologi terverifikasi, dan menjadwalkan sesi konseling daring.',
  },
  {
    id: 2,
    title: 'FragWater - Luxury Fragrance E-Commerce',
    category: 'Exploration',
    tags: ['E-Commerce', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com',
    githubUrl: 'https://github.com',
    longDescription: 'Konsep toko online parfum mewah berbasis web modern dengan sistem filter aroma kustom, antarmuka minimalis, dan animasi katalog produk yang responsif.',
  },
  {
    id: 3,
    title: 'CryptoCalm - Crypto Dashboard App',
    category: 'Exploration',
    tags: ['Dashboard', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com',
    githubUrl: 'https://github.com',
    longDescription: 'Dashboard pemantauan aset kripto secara real-time yang menyajikan grafik tren harga, kalkulator konversi mata uang, serta manajemen portofolio digital.',
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend Development',
    skills: [{ name: 'React.js' }, { name: 'TypeScript' }, { name: 'Tailwind CSS' }, { name: 'Next.js' }, { name: 'HTML5 & CSS3' }],
  },
  {
    category: 'Backend & Database',
    skills: [{ name: 'Node.js' }, { name: 'Express.js' }, { name: 'Laravel' }, { name: 'MySQL' }, { name: 'RESTful API' }],
  },
  {
    category: 'Tools & Workflow',
    skills: [{ name: 'Git & GitHub' }, { name: 'VS Code' }, { name: 'Figma' }, { name: 'Postman' }, { name: 'Vite' }],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 1,
    role: 'Web Development Intern',
    company: 'PT. Nusatama Jaya Sakti (PKL)',
    period: 'Jul 2026 - Des 2026',
    type: 'Work',
    description: 'Mengembangkan dan memelihara dashboard pemantauan internal menggunakan ReactJS dan REST API.',
    skillsUsed: ['React', 'TypeScript', 'Tailwind', 'REST API'],
  },
  {
    id: 2,
    role: 'Rekayasa Perangkat Lunak (RPL)',
    company: 'SMK Negeri 1 Kertosono',
    period: '2024 - Sekarang',
    type: 'Education',
    description: 'Mempelajari pemrograman terstruktur, Pemrograman Berbasis Objek (PBO), basis data, serta pengembangan aplikasi web & mobile.',
    skillsUsed: ['OOP', 'Web Dev', 'Database', 'Git'],
  },
  {
    id: 3,
    role: 'Wakil Ketua OSIS',
    company: 'Pengurus OSIS SMKN 1 Kertosono',
    period: '2025 - 2026',
    type: 'Organization',
    description: 'Melatih kepemimpinan dan kemampuan berorganisasi dengan menjalankan beberapa program kerja OSIS SMKN 1 Kertosono',
    skillsUsed: ['Leadership', 'Public Speaking', 'Teamwork'],
  },
];