'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Briefcase, Building, Send } from 'lucide-react';
import { ENTERPRISE_SOLUTIONS, COMPANY_INFO } from '@/data/ecosystem';

interface EnterpriseInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSolution?: string;
}

export const EnterpriseInquiryModal: React.FC<EnterpriseInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultSolution,
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: 'Manufaktur & Fabrikasi',
    picName: '',
    picRole: 'Direktur / Business Owner',
    whatsapp: '',
    email: '',
    city: '',
    solutionInterest: defaultSolution || ENTERPRISE_SOLUTIONS[0].title,
    userScale: '50 - 200 Pengguna',
    targetLaunch: '1 - 3 Bulan Mendatang',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `ENT-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryId(generatedId);
    setIsSuccess(true);

    const message =
      `*PERMINTAAN KONSULTASI IT ENTERPRISE & ERP NEXORANESIA*%0A` +
      `No Registrasi: ${generatedId}%0A%0A` +
      `*Profil Perusahaan:*%0A` +
      `Perusahaan: ${formData.companyName}%0A` +
      `Bidang Industri: ${formData.industry}%0A` +
      `Kota/Lokasi: ${formData.city}%0A` +
      `PIC: ${formData.picName} (${formData.picRole})%0A` +
      `WhatsApp: ${formData.whatsapp}%0A` +
      `Email Korporat: ${formData.email}%0A%0A` +
      `*Kebutuhan Sistem:*%0A` +
      `Modul/Solusi: ${formData.solutionInterest}%0A` +
      `Skala Pengguna: ${formData.userScale}%0A` +
      `Target Implementasi: ${formData.targetLaunch}%0A%0A` +
      `Catatan / Problem Operasional: ${formData.message || '-'}`;

    const waUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#EDE6DD] text-[#3A1E1A] my-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-[#3A1E1A] p-1.5 rounded-full hover:bg-[#F4EFEA] transition-colors cursor-pointer"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#FDEEE7] text-[#FF7A3D] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#FADCD3]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#3A1E1A]">
              Permintaan Konsultasi Terkirim
            </h3>
            <p className="text-sm text-[#63544F] max-w-md mx-auto">
              ID Registrasi Enterprise:{' '}
              <span className="font-mono font-bold text-[#FF7A3D]">{inquiryId}</span>.
              Sistem sedang menghubungkan Anda ke WhatsApp resmi Solutions Architect NEXORANESIA untuk penjadwalan sesi discovery call.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#251310] hover:bg-[#3A1E1A] text-white font-medium rounded-xl text-sm transition-all cursor-pointer"
              >
                Selesai & Tutup
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 border-b border-[#EDE6DD] pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDEEE7] text-[#FF7A3D] text-xs font-semibold mb-2 border border-[#FADCD3]">
                <Briefcase className="w-3.5 h-3.5" />
                <span>NEXORANESIA ENTERPRISE ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#3A1E1A] tracking-tight">
                Jadwalkan Konsultasi IT & Solusi ERP
              </h2>
              <p className="text-xs sm:text-sm text-[#7A6A65] mt-1">
                Diskusikan tantangan alur bisnis, integrasi WMS, lantai produksi, atau kebutuhan sistem ERP kustom bersama tim Enterprise Architect kami.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#562D29] mb-1">
                    Nama Perusahaan / Organisasi *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="PT Manufaktur Maju Bersama"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE6DD] text-sm focus:ring-2 focus:ring-[#FF7A3D] focus:border-[#FF7A3D] outline-none transition-all bg-[#FAF8F5]/50 focus:bg-white text-[#3A1E1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#562D29] mb-1">
                    Bidang Industri *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE6DD] text-sm focus:ring-2 focus:ring-[#FF7A3D] focus:border-[#FF7A3D] outline-none bg-white transition-all text-[#3A1E1A]"
                  >
                    <option value="Manufaktur & Fabrikasi">Manufaktur & Fabrikasi</option>
                    <option value="Distribusi, Logistik & WMS">Distribusi, Logistik & WMS</option>
                    <option value="Retail, FMCG & Wholesale">Retail, FMCG & Wholesale</option>
                    <option value="Holding Company / Jasa Korporat">Holding Company / Jasa Korporat</option>
                    <option value="Konstruksi, Real Estate & Properti">Konstruksi, Real Estate & Properti</option>
                    <option value="Institusi Pendidikan / Kesehatan">Institusi Pendidikan / Kesehatan</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#562D29] mb-1">
                    Nama PIC & Jabatan *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Bpk. Hendra (Head of IT)"
                    value={formData.picName}
                    onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE6DD] text-sm focus:ring-2 focus:ring-[#FF7A3D] focus:border-[#FF7A3D] outline-none transition-all bg-[#FAF8F5]/50 focus:bg-white text-[#3A1E1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#562D29] mb-1">
                    Peran / Posisi dalam Keputusan *
                  </label>
                  <select
                    value={formData.picRole}
                    onChange={(e) => setFormData({ ...formData, picRole: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE6DD] text-sm focus:ring-2 focus:ring-[#FF7A3D] focus:border-[#FF7A3D] outline-none bg-white transition-all text-[#3A1E1A]"
                  >
                    <option value="Direktur / Business Owner">Direktur / Business Owner</option>
                    <option value="Chief Information Officer (CIO) / CTO">Chief Information Officer (CIO) / CTO</option>
                    <option value="Manajer IT / Systems Lead">Manajer IT / Systems Lead</option>
                    <option value="General Manager / Head of Ops">General Manager / Head of Ops</option>
                    <option value="Procurement / Tim Evaluasi">Procurement / Tim Evaluasi</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#562D29] mb-1">
                    No. WhatsApp PIC *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="081234567890"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE6DD] text-sm focus:ring-2 focus:ring-[#FF7A3D] focus:border-[#FF7A3D] outline-none transition-all bg-[#FAF8F5]/50 focus:bg-white text-[#3A1E1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#562D29] mb-1">
                    Email Korporat *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="pic@perusahaan.co.id"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE6DD] text-sm focus:ring-2 focus:ring-[#FF7A3D] focus:border-[#FF7A3D] outline-none transition-all bg-[#FAF8F5]/50 focus:bg-white text-[#3A1E1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#562D29] mb-1">
                    Kota / Kantor Pusat *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Surabaya / Jakarta / Malang"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE6DD] text-sm focus:ring-2 focus:ring-[#FF7A3D] focus:border-[#FF7A3D] outline-none transition-all bg-[#FAF8F5]/50 focus:bg-white text-[#3A1E1A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#562D29] mb-1">
                    Kebutuhan Solusi / Modul Utama *
                  </label>
                  <select
                    value={formData.solutionInterest}
                    onChange={(e) => setFormData({ ...formData, solutionInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE6DD] text-sm focus:ring-2 focus:ring-[#FF7A3D] focus:border-[#FF7A3D] outline-none bg-white transition-all text-[#3A1E1A]"
                  >
                    {ENTERPRISE_SOLUTIONS.map((sol) => (
                      <option key={sol.id} value={sol.title}>
                        {sol.title} ({sol.category})
                      </option>
                    ))}
                    <option value="Paket Lengkap ERP Terintegrasi End-to-End">
                      Paket Lengkap ERP Terintegrasi End-to-End
                    </option>
                    <option value="Audit Arsitektur IT & Migrasi Cloud">
                      Audit Arsitektur IT & Migrasi Cloud
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#562D29] mb-1">
                    Skala Pengguna / User
                  </label>
                  <select
                    value={formData.userScale}
                    onChange={(e) => setFormData({ ...formData, userScale: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE6DD] text-sm focus:ring-2 focus:ring-[#FF7A3D] focus:border-[#FF7A3D] outline-none bg-white transition-all text-[#3A1E1A]"
                  >
                    <option value="10 - 50 Pengguna">10 - 50 Pengguna</option>
                    <option value="50 - 200 Pengguna">50 - 200 Pengguna</option>
                    <option value="200+ Pengguna">200+ Pengguna</option>
                    <option value="Multi-Cabang & Multi-Gudang">Multi-Cabang & Multi-Gudang</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#562D29] mb-1">
                  Kendala Operasional Saat Ini / Catatan Khusus
                </label>
                <textarea
                  rows={3}
                  placeholder="Ceritakan bottleneck sistem saat ini (misal: stok fisik gudang sering selisih, approval lambat, sistem lama belum terintegrasi akuntansi, dll)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE6DD] text-sm focus:ring-2 focus:ring-[#FF7A3D] focus:border-[#FF7A3D] outline-none transition-all resize-none bg-[#FAF8F5]/50 focus:bg-white text-[#3A1E1A]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#EDE6DD]">
                <span className="text-[11px] text-[#7A6A65] flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#FF7A3D]" />
                  Kerahasiaan data perusahaan (NDA) terjamin 100%.
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FF7A3D] hover:bg-[#F06543] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#FF7A3D]/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim & Hubungkan ke Konsultan</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
