'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, FileSpreadsheet } from 'lucide-react';
import { INSTITUTIONAL_SOLUTIONS, COMPANY_INFO } from '@/data/ecosystem';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSolution?: string;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  defaultSolution,
}) => {
  const [formData, setFormData] = useState({
    institutionName: '',
    institutionType: 'Sekolah Menengah (SMA/SMK)',
    picName: '',
    picRole: 'Kepala Sekolah / Wakil Kurikulum',
    whatsapp: '',
    email: '',
    city: '',
    solutionInterest: defaultSolution || INSTITUTIONAL_SOLUTIONS[0].title,
    estimatedStudents: '100 - 300 Siswa',
    targetLaunch: 'Semester Baru Mendatang',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [propId, setPropId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `PROP-${Math.floor(1000 + Math.random() * 9000)}`;
    setPropId(generatedId);
    setIsSuccess(true);

    const message = `*PERMINTAAN PROPOSAL & SOLUSI INSTITUSI NEXORANESIA*%0A` +
      `No Registrasi: ${generatedId}%0A%0A` +
      `*Data Lembaga:*%0A` +
      `Institusi: ${formData.institutionName}%0A` +
      `Tipe: ${formData.institutionType}%0A` +
      `PIC: ${formData.picName} (${formData.picRole})%0A` +
      `WhatsApp: ${formData.whatsapp}%0A` +
      `Email: ${formData.email}%0A` +
      `Kota: ${formData.city}%0A%0A` +
      `*Kebutuhan Solusi:*%0A` +
      `Paket: ${formData.solutionInterest}%0A` +
      `Estimasi Siswa: ${formData.estimatedStudents}%0A` +
      `Target Implementasi: ${formData.targetLaunch}%0A%0A` +
      `Catatan Khusus: ${formData.message || '-'}`;

    const waUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${message}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold text-sky-800 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-100 border border-sky-200">
                Solusi Institusi & Sekolah
              </span>
              <h3 className="font-heading font-black text-2xl text-slate-900 mt-2">
                Minta Proposal & Studi Kelayakan
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Dapatkan blueprint pembangunan Lab STEM, lisensi kurikulum terakreditasi, atau pengadaan kit teknologi sekolah Anda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Institusi / Sekolah *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: SMA Unggulan 1 Mandiri"
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tipe Lembaga
                  </label>
                  <select
                    value={formData.institutionType}
                    onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                  >
                    <option value="Sekolah Dasar (SD / MI)">Sekolah Dasar (SD / MI)</option>
                    <option value="Sekolah Menengah Pertama (SMP / MTs)">Sekolah Menengah Pertama (SMP / MTs)</option>
                    <option value="Sekolah Menengah Atas/Kejuruan (SMA/SMK)">Sekolah Menengah Atas / Kejuruan (SMA / SMK)</option>
                    <option value="Pondok Pesantren Modern">Pondok Pesantren Modern</option>
                    <option value="Universitas / Politeknik">Universitas / Politeknik</option>
                    <option value="Lembaga Kursus / Bimbingan Belajar">Lembaga Kursus / Bimbel</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Penanggung Jawab (PIC) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Ahmad Yani, M.Pd."
                    value={formData.picName}
                    onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Jabatan PIC
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Wakil Kepala Sekolah Bidang Sarpras"
                    value={formData.picRole}
                    onChange={(e) => setFormData({ ...formData, picRole: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nomor WhatsApp PIC *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="085183003060"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kota & Provinsi Lembaga *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Surabaya, Jawa Timur"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kebutuhan Solusi Utama *
                </label>
                <select
                  value={formData.solutionInterest}
                  onChange={(e) => setFormData({ ...formData, solutionInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                >
                  {INSTITUTIONAL_SOLUTIONS.map((sol) => (
                    <option key={sol.id} value={sol.title}>
                      {sol.title} ({sol.target})
                    </option>
                  ))}
                  <option value="Konsultasi Tim Kompetisi Sekolah">Pendampingan Tim Lomba Robotika Sekolah</option>
                  <option value="Pengadaan Perangkat & Kit Robotika Massal">Pengadaan Perangkat Robotika / Komponen Grosir</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Deskripsi Kebutuhan & Luas Ruangan (Bila Ada)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ceritakan rencana ruang kelas, target jumlah siswa yang diajar, atau spesifikasi pengadaan..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-sky-500 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:brightness-105 shadow-md shadow-sky-600/25 transition-all mt-4"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Kirim Permintaan Proposal Resmi</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-600 border border-sky-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-heading font-black text-2xl text-slate-900">
              Permintaan Proposal Terkirim!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto">
              ID Permintaan: <span className="text-sky-700 font-mono font-bold">{propId}</span>. Tim Institutional Consultant NEXORANESIA akan menyusun draft penawaran dan menghubungi PIC dalam waktu maksimal 1x24 jam kerja.
            </p>

            <div className="pt-4 flex gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors"
              >
                Tutup
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20Tim%20NEXORANESIA%20Solutions,%20kami%20telah%20mengirimkan%20inquiry%20proposal%20dengan%20ID%20${propId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-all shadow-md shadow-sky-600/20"
              >
                Konfirmasi Cepat via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
