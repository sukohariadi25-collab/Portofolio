import { useState } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {Github, Instagram, Linkedin} from './Icons';


export default function ContactCTA() {
  const [result, setResult] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('');
    
    const formData = new FormData(e.currentTarget);
    // Masukkan Web3Forms Access Key kamu di sini
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult('Pesan Anda berhasil terkirim! Saya akan segera merespons.');
        (e.target as HTMLFormElement).reset();
      } else {
        setResult('Gagal mengirim pesan. Silakan coba beberapa saat lagi.');
      }
    } catch {
      setResult('Terjadi gangguan koneksi. Periksa internet Anda.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#EBECEE] dark:bg-[#0B0F17] px-2 sm:px-4 pb-12 pt-4 transition-colors duration-300">
      <div className="w-full max-w-[98%] mx-auto">
        
        {/* Container Utama: Grid 2 Kolom di Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* KOLOM KIRI: Informasi Kontak & Media Sosial */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900/90 rounded-[32px] p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between transition-colors duration-300">
            <div>
              {/* Badge Status */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200 dark:border-slate-700 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Terbuka untuk Proyek Baru
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-3">
                Mari Mulai Diskusi Proyek Anda
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Punya ide menarik, penawaran kerja sama, atau butuh solusi pengembangan web? Jangan ragu untuk menghubungi saya.
              </p>

              {/* Detail Kontak Utama */}
              <div className="space-y-5 mb-8">
                {/* Email */}
                <a 
                  href="mailto:sukohariadi25@gmail.com"
                  className="group flex items-start gap-3.5 p-2 -mx-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Email Utama</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                      sukohariadi25@gmail.com
                    </span>
                  </div>
                </a>

                {/* Lokasi */}
                <div className="flex items-start gap-3.5 p-2 -mx-2">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-sky-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Lokasi Kerja</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      Indonesia <span className="text-slate-400 font-normal">• Sistem Remote</span>
                    </p>
                  </div>
                </div>

                {/* Estimasi Respon */}
                <div className="flex items-start gap-3.5 p-2 -mx-2">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-sky-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Estimasi Balasan</span>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      Cepat • Kurang dari 1 Jam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Sosial Grid */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <span className="block text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-3">
                Kanal Sosial
              </span>
              <div className="grid grid-cols-4 gap-2">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:-translate-y-0.5 transition-all group"
                >
                  <Github className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white" />
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-1">GitHub</span>
                </a>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:-translate-y-0.5 transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-sky-500" />
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-1">LinkedIn</span>
                </a>

                <a 
                  href="https://wa.me/" 
                  target="_blank" 
                  rel="noreferrer"
                  title="WhatsApp Contact"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:-translate-y-0.5 transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-emerald-500" />
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-1">WhatsApp</span>
                </a>

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  title="Instagram Profile"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 hover:-translate-y-0.5 transition-all group"
                >
                  <Instagram className="w-4 h-4 text-slate-700 dark:text-slate-300 group-hover:text-pink-500" />
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-1">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Form Kirim Pesan */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 rounded-[32px] p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col justify-between transition-colors duration-300">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Kirim Pesan Langsung
                </h3>
                <Send className="w-5 h-5 text-slate-400 dark:text-slate-500" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Isi formulir di bawah ini dan pesan akan langsung terikat ke email saya.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Misal: Budi Pratama"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-slate-900 dark:focus:border-white focus:ring-1 focus:ring-slate-900 dark:focus:ring-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="nama@perusahaan.com"
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-slate-900 dark:focus:border-white focus:ring-1 focus:ring-slate-900 dark:focus:ring-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subjek Proyek / Pesan
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Pengembangan Web, Konsultasi, dll."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-slate-900 dark:focus:border-white focus:ring-1 focus:ring-slate-900 dark:focus:ring-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Detail Pesan *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Jelaskan kebutuhan proyek atau pertanyaan Anda secara rinci..."
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-slate-900 dark:focus:border-white focus:ring-1 focus:ring-slate-900 dark:focus:ring-white resize-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3.5 rounded-2xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  {isSubmitting ? (
                    'Sedang Mengirim...'
                  ) : (
                    <>
                      Kirim Pesan Sekarang <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Notifikasi Status Kirim Pesan */}
                {result && (
                  <div className={`p-3.5 rounded-2xl text-xs flex items-center gap-2 font-medium mt-3 ${
                    result.includes('berhasil') 
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50' 
                      : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/50'
                  }`}>
                    {result.includes('berhasil') ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                    )}
                    <span>{result}</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}