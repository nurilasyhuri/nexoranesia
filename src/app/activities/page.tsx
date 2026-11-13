'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPETITION_PROGRAMS, COMPANY_INFO } from '@/data/ecosystem';
import {
  Trophy,
  Award,
  CheckCircle2,
  Send,
  Calendar,
  Users,
  Sparkles,
  Bot,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Flame,
} from 'lucide-react';

const WORKSHOPS = [
  {
    id: 'ws-1',
    title: 'Weekend Robotic Tinkering: Merakit Robot Line Follower Analog & Digital',
    category: 'Hands-on Workshop',
    date: 'Setiap Sabtu & Minggu',
    duration: '1 Hari (4 Jam Intensif)',
    target: 'Siswa SD - SMP (8-14 thn)',
    desc: 'Peserta merakit sendiri robot pembaca garis dari nol: menyolder sensor optik, memahami logika komparator, dan balapan di arena uji.',
    perks: ['Robot Boleh Dibawa Pulang', 'Sertifikat Workshop', 'Snack & Alat Solder Lengkap'],
    badge: 'Terpopuler',
  },
  {
    id: 'ws-2',
    title: 'AI Vision & Object Detection Camp: Robot Cerdas Pengenal Objek',
    category: 'STEM Bootcamp',
    date: 'Batch Liburan Semester',
    duration: '3 Hari Bootcamp (12 Jam)',
    target: 'Siswa SMP - SMA (12-18 thn)',
    desc: 'Eksperimen menggunakan ESP32-CAM dan OpenCV Python sederhana untuk memprogram robot yang bisa membedakan warna bola dan wajah manusia.',
    perks: ['Module ESP32-CAM Kit', 'Source Code Eksklusif', 'Mentoring 1-on-1 Mentor Ahli'],
    badge: 'Trending AI',
  },
  {
    id: 'ws-3',
    title: 'School STEM Day & Robotic Exhibition: Edukasi Interaktif ke Sekolah',
    category: 'School Visitation',
    date: 'Jadwal Fleksibel (Sesuai Undangan)',
    duration: 'Half Day / Full Day',
    target: 'Institusi Sekolah (SD, SMP, SMA)',
    desc: 'Tim NEXORANESIA datang langsung ke sekolah mitra membawa 15+ unit robot interaktif, demo soccer bot, dan arena simulasi STEM gratis bagi siswa.',
    perks: ['Demo Live Arena', 'Bimbingan Guru Pembina', 'Proposal Lab Sekolah'],
    badge: 'B2B School',
  },
];

export default function ActivitiesPage() {
  const [selectedComp, setSelectedComp] = useState(COMPETITION_PROGRAMS[0]);

  const handleBooking = (compName: string) => {
    const text = encodeURIComponent(`Halo NEXORANESIA, kami ingin konsultasi bimbingan tim untuk kompetisi/kegiatan: ${compName}`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-16 md:py-24 bg-white border-b border-[#EDE6DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F7F0] text-[#43A574] text-xs font-bold border border-[#CCEEDB]">
              <Trophy className="w-4 h-4" />
              <span>NEXORANESIA ACTIVITIES — Ajang Kompetisi, Workshop & Riset Lab</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl text-[#3A1E1A] tracking-tight leading-tight">
              Aktivitas Eksplorasi: Menguji Keterampilan di Panggung Nyata
            </h1>

            <p className="text-sm sm:text-base text-[#63544F] max-w-2xl mx-auto leading-relaxed">
              Teknologi tidak hanya dipelajari di ruang kelas, tetapi diuji melalui turnamen olimpiade dunia, workshop merakit robot fisik, dan eksplorasi laboratorium langsung.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold text-[#63544F]">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EDE6DD]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A3D]" /> World Robot Olympiad (WRO)
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EDE6DD]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A3D]" /> FIRST LEGO League (FLL)
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#EDE6DD]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A3D]" /> Weekend Tinkering Workshops
              </span>
            </div>
          </div>
        </section>

        {/* Section 1: Mentoring Kompetisi Dunia */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-[#FF7A3D] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FDEEE7] border border-[#FADCD3] inline-block mb-3">
              CHAMPIONSHIP MENTORING
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3A1E1A] tracking-tight">
              Bimbingan Intensif Olimpiade Robotika Nasional & Internasional
            </h2>
            <p className="text-xs sm:text-sm text-[#63544F] mt-2">
              Pendampingan strategi regelment, perakitan robot presisi tinggi, dan simulasi tanding berstandar global.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Competition Tabs */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-bold text-[#7A6A65] uppercase tracking-wider px-2">
                Pilih Ajang Turnamen:
              </div>

              {COMPETITION_PROGRAMS.map((comp) => {
                const isSelected = selectedComp.id === comp.id;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComp(comp)}
                    className={`w-full text-left p-5 rounded-3xl border transition-all flex flex-col space-y-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#FF7A3D] shadow-md'
                        : 'bg-white/70 border-[#EDE6DD] hover:border-[#FF7A3D]/50 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FDEEE7] text-[#FF7A3D]">
                        {comp.tier} Tier
                      </span>
                      <span className="text-[10px] text-[#43A574] font-bold">{comp.status}</span>
                    </div>

                    <div className="font-extrabold text-sm text-[#3A1E1A]">
                      {comp.name}
                    </div>

                    <div className="text-[11px] text-[#7A6A65]">
                      Penyelenggara: {comp.organizer}
                    </div>
                  </button>
                );
              })}

              <div className="p-5 rounded-3xl bg-gradient-to-br from-[#FFF5F0] to-[#FAF8F5] border border-[#FADCD3] text-xs text-[#63544F] space-y-3 mt-4">
                <div className="font-bold text-[#3A1E1A] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#FF7A3D]" />
                  <span>Jalur Pembentukan Tim Sekolah</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Sekolah Anda ingin mendelegasikan tim olimpiade resmi? Kami menyediakan kurikulum karantina, pelatih berlisensi, dan arena mock-up resmi.
                </p>
                <button
                  onClick={() => handleBooking('Jalur Delegasi Tim Sekolah')}
                  className="w-full py-2 rounded-xl bg-white hover:bg-[#FF7A3D] hover:text-white border border-[#EDE6DD] text-[#3A1E1A] font-bold text-xs transition-colors cursor-pointer"
                >
                  Konsultasi Kerjasama Sekolah &rarr;
                </button>
              </div>
            </div>

            {/* Right Competition Detail Panel */}
            <div className="lg:col-span-8 bg-white border border-[#EDE6DD] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EDE6DD] pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF7A3D] text-white">
                      {selectedComp.tier} Official Track
                    </span>
                    <span className="text-xs text-[#7A6A65]">{selectedComp.organizer}</span>
                  </div>
                  <h3 className="font-extrabold text-2xl sm:text-3xl text-[#3A1E1A] mt-2">
                    {selectedComp.name}
                  </h3>
                </div>

                <button
                  onClick={() => handleBooking(selectedComp.name)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#FF7A3D] hover:bg-[#F06543] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FF7A3D]/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Daftar Bimbingan Tim</span>
                </button>
              </div>

              <p className="text-sm text-[#63544F] leading-relaxed">
                {selectedComp.description}
              </p>

              {/* Target Age & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EDE6DD]">
                  <span className="text-[#8A7974] block mb-1">Target Peserta:</span>
                  <span className="font-bold text-[#3A1E1A] text-sm">{selectedComp.targetAge}</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EDE6DD]">
                  <span className="text-[#8A7974] block mb-1">Jadwal & Kategori:</span>
                  <span className="font-bold text-[#3A1E1A] text-sm">{selectedComp.categories.join(' • ')}</span>
                </div>
              </div>

              {/* Key Topics / Mentoring Phases */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#3A1E1A]">
                  Tahapan Mentoring & Strategi Arena:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedComp.mentoringPhases.map((phase: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#3A1E1A]">
                      <CheckCircle2 className="w-4 h-4 text-[#43A574] shrink-0" />
                      <span>{phase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements Track Record */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EDE6DD] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A3D] block">
                  Rekam Jejak Prestasi & Target Capaian:
                </span>
                <p className="text-xs text-[#63544F] leading-relaxed">
                  {selectedComp.achievements} (Jadwal Kegiatan: {selectedComp.schedule})
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Workshops & STEM Camps */}
        <section className="py-16 bg-white border-y border-[#EDE6DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold text-[#43A574] uppercase tracking-widest px-3 py-1 rounded-full bg-[#E8F7F0] border border-[#CCEEDB] inline-block mb-3">
                WORKSHOPS & BOOTCAMPS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3A1E1A] tracking-tight">
                Kegiatan Praktek Langsung & Workshop Akhir Pekan
              </h2>
              <p className="text-xs sm:text-sm text-[#63544F] mt-2">
                Pengalaman intensif merakit robot dan coding mandiri untuk menumbuhkan rasa percaya diri anak dalam bidang STEM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {WORKSHOPS.map((ws) => (
                <div
                  key={ws.id}
                  className="rounded-3xl bg-[#FAF8F5] border border-[#EDE6DD] p-7 flex flex-col justify-between hover:border-[#FF7A3D] transition-all shadow-xs hover:shadow-md group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A3D]">
                        {ws.category}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E8F7F0] text-[#43A574] border border-[#CCEEDB]">
                        {ws.badge}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-xl text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors leading-snug">
                      {ws.title}
                    </h3>

                    <div className="space-y-1.5 text-xs text-[#7A6A65] border-y border-[#EDE6DD] py-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#FF7A3D]" />
                        <span>{ws.date} • {ws.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#43A574]" />
                        <span>{ws.target}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#63544F] leading-relaxed">
                      {ws.desc}
                    </p>

                    <div className="space-y-1 pt-1">
                      {ws.perks.map((p, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#3A1E1A]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#43A574] shrink-0" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => handleBooking(ws.title)}
                      className="w-full py-3 rounded-xl bg-white hover:bg-[#FF7A3D] hover:text-white border border-[#EDE6DD] text-[#3A1E1A] font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs group-hover:bg-[#FF7A3D] group-hover:text-white"
                    >
                      <span>Booking Kursi Workshop</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
