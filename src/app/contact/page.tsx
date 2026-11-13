'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPANY_INFO } from '@/data/ecosystem';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Pendaftaran Kursus (Academy)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*INQUIRY WEBSITE NEXORANESIA*%0A` +
      `Kategori: ${formData.category}%0A` +
      `Nama: ${formData.name}%0A` +
      `WhatsApp: ${formData.phone}%0A` +
      `Email: ${formData.email || '-'}%0A%0A` +
      `Pesan: ${formData.message}`;

    const waUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  const faqs = [
    {
      q: 'Apakah ada sesi Free Trial untuk kursus anak?',
      a: 'Ya! NEXORANESIA Academy menyediakan 1 sesi uji coba gratis (Free Trial Class) agar anak dan orang tua dapat merasakan langsung metode pembelajaran dan fasilitas lab kami.',
    },
    {
      q: 'Apakah pengiriman kit robotika aman ke luar Pulau Jawa?',
      a: 'Sangat aman. Seluruh kit dan mikrokontroler dibungkus dengan kardus tebal dan bubble wrap berlapis untuk mencegah kerusakan selama perjalanan ekspedisi.',
    },
    {
      q: 'Berapa lama waktu yang dibutuhkan untuk membangun Lab STEM Sekolah?',
      a: 'Rata-rata 2 hingga 4 minggu setelah penandatanganan kesepakatan kerjasama, mencakup layouting interior, pengadaan perangkat, hingga pelatihan guru (ToT).',
    },
    {
      q: 'Bagaimana cara mendaftarkan tim sekolah ke program mentoring olimpiade?',
      a: 'Hubungi tim NEXORANESIA Competition melalui form kontak atau WhatsApp untuk menjadwalkan review regelment dan asesmen kesiapan awal tim Anda.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Phone className="w-4 h-4 text-amber-600" />
              <span>NEXORANESIA CONTACT — Hubungi Tim Konsultan & Spesialis Kami</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Pusat Komunikasi & Konsultasi
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Diskusikan rencana masa depan putra-putri Anda, pengadaan laboratorium sekolah, atau riset robotika bersama para pakar di Kantor & Workshop NEXORANESIA Malang.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Cards */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Contact Form */}
            <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-100 border border-amber-200">
                  Formulir Terpadu
                </span>
                <h3 className="font-heading font-black text-2xl text-slate-900 mt-2">
                  Kirim Pesan atau Pertanyaan
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Pesan Anda akan langsung diteruskan ke divisi terkait dan terhubung otomatis dengan WhatsApp resmi kami.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Dimas Prakoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="085183003060"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email (Opsional)
                      </label>
                      <input
                        type="email"
                        placeholder="dimas@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Topik Kebutuhan
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                      >
                        <option value="Pendaftaran Kursus (Academy)">Pendaftaran Kursus (Academy)</option>
                        <option value="Konsultasi Kit Robot & Komponen (Store)">Konsultasi Kit & Komponen (Store)</option>
                        <option value="Pendampingan Turnamen Robot (Competition)">Pendampingan Tim Lomba (Competition)</option>
                        <option value="Kerjasama Lab STEM Sekolah (Solutions)">Kerjasama Lab STEM Sekolah (Solutions)</option>
                        <option value="R&D Robot Custom (Robotics)">Riset & Robot Kustom (Robotics)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Pesan atau Keterangan Tambahan *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Jelaskan kebutuhan, usia anak, atau rencana proyek yang ingin dikonsultasikan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 shadow-md shadow-amber-500/25 transition-all mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan & Terhubung ke WhatsApp</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-heading font-black text-xl text-slate-900">
                    Pesan Berhasil Terkirim!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Terima kasih telah menghubungi NEXORANESIA. Kami membuka obrolan WhatsApp otomatis untuk melanjutkan percakapan dengan tim spesialis kami.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              )}
            </div>

            {/* Right Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                <h4 className="font-heading font-bold text-lg text-slate-900">
                  Informasi Kantor & Hub
                </h4>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">Kantor & Workshop NEXORANESIA</strong>
                      <span>{COMPANY_INFO.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">Hotline & WhatsApp</strong>
                      <span>{COMPANY_INFO.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">Email Resmi</strong>
                      <span>{COMPANY_INFO.email}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-slate-900 block font-bold">Jam Operasional</strong>
                      <span>{COMPANY_INFO.operatingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20NEXORANESIA,%20saya%20ingin%20chat%20langsung`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-2xs"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Mulai Chat WhatsApp Langsung</span>
                  </a>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4">
                <h4 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-500" />
                  <span>Pertanyaan Sering Diajukan (FAQ)</span>
                </h4>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="text-xs font-bold text-slate-900">{faq.q}</div>
                      <div className="text-[11px] text-slate-600 leading-relaxed">{faq.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
