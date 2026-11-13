'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, GraduationCap, Send } from 'lucide-react';
import { ACADEMY_COURSES, COMPANY_INFO } from '@/data/ecosystem';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseSlug?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  defaultCourseSlug,
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentAge: '',
    parentName: '',
    whatsapp: '',
    selectedCourse: defaultCourseSlug || ACADEMY_COURSES[0].title,
    preferredSchedule: 'Weekend (Sabtu / Minggu Pagi)',
    learningMode: 'Tatap Muka di Lab Malang',
    priorExperience: 'Pemula (Belum Pernah Belajar)',
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [regId, setRegId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `REG-${Math.floor(1000 + Math.random() * 9000)}`;
    setRegId(generatedId);
    setIsSuccess(true);

    const message = `*PENDAFTARAN KURSUS NEXORANESIA ACADEMY*%0A` +
      `No Registrasi: ${generatedId}%0A%0A` +
      `*Data Siswa & Wali:*%0A` +
      `Nama Siswa: ${formData.studentName}%0A` +
      `Usia: ${formData.studentAge} Tahun%0A` +
      `Nama Wali/Ortu: ${formData.parentName}%0A` +
      `WhatsApp: ${formData.whatsapp}%0A%0A` +
      `*Pilihan Program:*%0A` +
      `Kelas: ${formData.selectedCourse}%0A` +
      `Jadwal: ${formData.preferredSchedule}%0A` +
      `Metode: ${formData.learningMode}%0A` +
      `Pengalaman: ${formData.priorExperience}%0A%0A` +
      `Catatan: ${formData.notes || '-'}`;

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
              <span className="text-[11px] font-bold text-[#FF7A3D] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FDEEE7] border border-[#FADCD3]">
                Pendaftaran Kelas
              </span>
              <h3 className="font-heading font-black text-2xl text-slate-900 mt-2">
                Daftar Program NEXORANESIA Academy
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Investasi terbaik untuk mengasah kecerdasan logika, robotika, dan teknologi masa depan anak Anda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Calon Siswa *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Muhammad Rayyan"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Usia Siswa (Tahun) *
                  </label>
                  <input
                    type="number"
                    required
                    min={6}
                    max={30}
                    placeholder="Contoh: 10"
                    value={formData.studentAge}
                    onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nama Orang Tua / Wali *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Ir. Hendra Prasetyo"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="085183003060"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Pilih Program Kursus *
                </label>
                <select
                  value={formData.selectedCourse}
                  onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                >
                  {ACADEMY_COURSES.map((course) => (
                    <option key={course.id} value={course.title}>
                      {course.title} — {course.ageGroup}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pilihan Jadwal Kelas
                  </label>
                  <select
                    value={formData.preferredSchedule}
                    onChange={(e) => setFormData({ ...formData, preferredSchedule: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  >
                    <option value="Weekend (Sabtu / Minggu Pagi)">Weekend (Sabtu / Minggu Pagi 09:00)</option>
                    <option value="Weekend (Sabtu / Minggu Siang)">Weekend (Sabtu / Minggu Siang 13:30)</option>
                    <option value="Weekday Sore (Selasa & Kamis)">Weekday Sore (Selasa & Kamis 16:00)</option>
                    <option value="Weekday Sore (Rabu & Jumat)">Weekday Sore (Rabu & Jumat 16:00)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Metode Belajar
                  </label>
                  <select
                    value={formData.learningMode}
                    onChange={(e) => setFormData({ ...formData, learningMode: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                  >
                    <option value="Tatap Muka di Lab Malang">Tatap Muka Offline (Jl. KH. Malik Dalam Buring, Kedungkandang, Malang)</option>
                    <option value="Live Interactive Online (Zoom)">Live Interactive Online (Zoom + Kit Dikirim)</option>
                    <option value="Private 1-on-1 Mentoring">Private 1-on-1 (Eksklusif)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Catatan Khusus / Pertanyaan (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Tertarik konsultasi tes minat bakat anak terlebih dahulu"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-[#FF7A3D] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#FF7A3D] hover:bg-[#F06543] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-md shadow-[#FF7A3D]/25 transition-all mt-4 cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pendaftaran & Jadwalkan Free Trial</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-heading font-black text-2xl text-slate-900">
              Pendaftaran Diterima!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto">
              No Registrasi: <span className="text-emerald-700 font-mono font-bold">{regId}</span>. Konsultan akademik NEXORANESIA akan segera menghubungi Anda via WhatsApp untuk konfirmasi ketersediaan bangku dan jadwal sesi trial.
            </p>

            <div className="pt-4 flex gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors"
              >
                Selesai
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20Admin%20NEXORANESIA,%20saya%20sudah%20mendaftar%20kursus%20dengan%20ID%20${regId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20"
              >
                Chat Admin Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
