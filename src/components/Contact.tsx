import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';


export default function ContactCTA() {
  const [result, setResult] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult('Sending...');
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');

    const response = await fetch('https://sukohariadi25@gmail.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult('Pesan berhasil terkirim!');
      (e.target as HTMLFormElement).reset();
    } else {
      setResult('Gagal mengirim pesan, coba lagi.');
    }
  };

  return (
    <section id="contact" className="bg-[#EBECEE] dark:bg-[#0B0F17] px-2 sm:px-4 pb-6 pt-2 transition-colors duration-300">
      <div className="bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 rounded-[32px] w-full max-w-[98%] mx-auto p-6 md:p-12 border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center flex flex-col items-center justify-center transition-colors duration-300">
        
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase mb-2">
          LET'S WORK TOGETHER
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 max-w-md">Punya proyek atau penawaran kerja sama? Kirimkan pesan langsung melalui form di bawah ini.</p>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3 mb-8 text-left">
          <input
            type="text"
            name="name"
            placeholder="Nama Anda"
            required
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-black dark:focus:border-white transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Anda"
            required
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-black dark:focus:border-white transition-colors"
          />
          <textarea
            name="message"
            rows={3}
            placeholder="Pesan Anda"
            required
            className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-none focus:border-black dark:focus:border-white resize-none transition-colors"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-full text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            Kirim Pesan <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          {result && <p className="text-[11px] text-center font-medium text-slate-600 dark:text-slate-300 mt-2">{result}</p>}
        </form>
      </div>
    </section>
  );
}