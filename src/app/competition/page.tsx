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
  Target,
} from 'lucide-react';

export default function CompetitionPage() {
  const [selectedComp, setSelectedComp] = useState(COMPETITION_PROGRAMS[0]);

  const handleBooking = (compName: string) => {
    const text = encodeURIComponent(`Halo NEXORANESIA Competition, kami ingin konsultasi bimbingan tim untuk kompetisi: ${compName}`);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Trophy className="w-4 h-4 text-amber-600" />
              <span>NEXORANESIA COMPETITION — Pusat Inkubasi Tim Kejuaraan Dunia</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Mentoring & Pendampingan Kompetisi Robotika
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Mempersiapkan tim sekolah, komunitas, dan universitas menembus podium olimpiade bergengsi: World Robot Olympiad (WRO), FIRST LEGO League (FLL), Robofest USA, dan Kontes Robot Indonesia (IRC).
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> Analisis Regelment Resmi
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> Rancang Bangun Robot Flagship
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" /> Simulasi Arena Berstandar Dunia
              </span>
            </div>
          </div>
        </section>

        {/* Detailed Program Selector & Breakdown */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Competition Tabs */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2">
                Pilih Ajang Turnamen:
              </div>

              {COMPETITION_PROGRAMS.map((comp) => {
                const isSelected = selectedComp.id === comp.id;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedComp(comp)}
                    className={`w-full text-left p-5 rounded-3xl border transition-all flex flex-col space-y-1.5 ${
                      isSelected
                        ? 'bg-white border-orange-500 shadow-md'
                        : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">
                        {comp.tier} Tier
                      </span>
                      <span className="text-[10px] text-emerald-700 font-bold">{comp.status}</span>
                    </div>

                    <div className="font-heading font-bold text-sm text-slate-900">
                      {comp.name}
                    </div>

                    <div className="text-[11px] text-slate-500">
                      Penyelenggara: {comp.organizer}
                    </div>
                  </button>
                );
              })}

              <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-200 text-xs text-slate-700 space-y-3 mt-4 shadow-xs">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span>Jalur Pembentukan Tim Sekolah</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Sekolah Anda belum memiliki tim robotika? NEXORANESIA memfasilitasi seleksi internal talenta, penyusunan struktur tim, hingga mentoring intensif dari nol.
                </p>
                <button
                  onClick={() => handleBooking('Pembentukan Tim Baru Sekolah')}
                  className="w-full py-2.5 rounded-xl bg-orange-500 text-white font-bold text-xs hover:bg-orange-600 transition-colors shadow-xs shadow-orange-500/20"
                >
                  Konsultasi Pembentukan Tim
                </button>
              </div>
            </div>

            {/* Right Competition Focus & Roadmap Detail */}
            <div className="lg:col-span-8 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="pb-6 border-b border-slate-100 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-700">
                    {selectedComp.tier} Championship
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-xs text-slate-500 font-medium">{selectedComp.organizer}</span>
                </div>

                <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                  {selectedComp.name}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedComp.description}
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Target Usia Peserta:</div>
                  <div className="text-xs font-bold text-slate-900">{selectedComp.targetAge}</div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                  <div className="text-[10px] font-bold text-amber-700 uppercase">Timeline & Jadwal:</div>
                  <div className="text-xs font-bold text-amber-800">{selectedComp.schedule}</div>
                </div>
              </div>

              {/* Categories Included */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-orange-500" />
                  <span>Kategori Misi yang Didampingi:</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedComp.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5-Phase Mentorship Roadmap */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Alur Pendampingan Teknis NEXORANESIA:</span>
                </h4>
                <div className="space-y-2.5">
                  {selectedComp.mentoringPhases.map((phase, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 border border-orange-200 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{phase}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-amber-600 shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-bold">Prestasi Tim Binaan:</strong>
                  {selectedComp.achievements}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleBooking(selectedComp.name)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105 shadow-md shadow-orange-500/25 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Jadwalkan Sesi Konsultasi & Bedah Aturan Turnamen</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
