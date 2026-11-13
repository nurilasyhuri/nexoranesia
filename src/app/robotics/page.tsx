'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ROBOTICS_SHOWCASE, COMPANY_INFO } from '@/data/ecosystem';
import {
  Bot,
  Sparkles,
  CheckCircle2,
  Send,
  Zap,
  ShieldCheck,
  ArrowRight,
  Cpu,
} from 'lucide-react';

export default function RoboticsPage() {
  const [selectedRobot, setSelectedRobot] = useState(ROBOTICS_SHOWCASE[0]);

  const handleInquiry = (robotTitle: string) => {
    const text = encodeURIComponent(`Halo NEXORANESIA Robotics, saya ingin konsultasi spesifikasi & penawaran robot: ${robotTitle}`);
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
              <Bot className="w-4 h-4 text-amber-600" />
              <span>NEXORANESIA ROBOTICS — Divisi Riset Perangkat Keras & Mekatronika</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Inovasi Robotika & R&D Rekayasa
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Pengembangan robot edukasi, robot kompetisi kecepatan tinggi berstandar dunia, lengan robotik industri, hingga Autonomous Mobile Robot (AMR) navigasi LiDAR.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> STM32 & ESP32 Embedded
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Discrete PID Tuning
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> ROS 2 & LiDAR SLAM
              </span>
            </div>
          </div>
        </section>

        {/* Interactive Robot Specs Inspector Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Robot Selector Menu */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2">
                Pilih Model Robotika:
              </div>

              {ROBOTICS_SHOWCASE.map((robot) => {
                const isSelected = selectedRobot.id === robot.id;
                return (
                  <button
                    key={robot.id}
                    onClick={() => setSelectedRobot(robot)}
                    className={`w-full text-left p-5 rounded-3xl border transition-all flex flex-col space-y-1 ${
                      isSelected
                        ? 'bg-white border-amber-500 shadow-md'
                        : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                        {robot.category}
                      </span>
                      {robot.badge && (
                        <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                          {robot.badge}
                        </span>
                      )}
                    </div>
                    <div className="font-heading font-bold text-sm text-slate-900">
                      {robot.title}
                    </div>
                    <div className="text-[11px] text-amber-600 font-medium">
                      {robot.category}
                    </div>
                  </button>
                );
              })}

              <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 text-xs text-slate-700 space-y-2 mt-4 shadow-xs">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Butuh Desain Robot Kustom?</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Kami melayani perancangan mekanik 3D CAD, layout PCB cetak, hingga pemrograman algoritma tugas akhir atau industri.
                </p>
                <button
                  onClick={() => handleInquiry('Layanan Custom Robot R&D')}
                  className="w-full py-2.5 px-3 rounded-xl bg-amber-500 text-white font-bold text-xs hover:bg-amber-600 transition-all flex items-center justify-center gap-1 shadow-xs shadow-amber-500/20"
                >
                  <span>Konsultasi Proyek Kustom</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Robot Detail Viewer */}
            <div className="lg:col-span-8 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    {selectedRobot.category}
                  </span>
                  <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 mt-1">
                    {selectedRobot.title}
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 max-w-xl">
                    {selectedRobot.description}
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="text-[11px] text-slate-400 font-medium">Kategori Sistem:</div>
                  <div className="font-extrabold text-xl text-amber-600">
                    {selectedRobot.category}
                  </div>
                </div>
              </div>

              {/* Robot Real Hardware Photography */}
              {selectedRobot.image && (
                <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src={selectedRobot.image}
                    alt={selectedRobot.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}

              {/* Hardware Highlights Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Keunggulan Utama Rekayasa:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedRobot.highlights.map((h, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-amber-600" />
                  <span>Spesifikasi Teknis & Komponen Inti:</span>
                </h4>
                <div className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden divide-y divide-slate-200/80 text-xs">
                  {Object.entries(selectedRobot.specs).map(([key, val], idx) => (
                    <div key={idx} className="grid grid-cols-3 p-3">
                      <span className="text-slate-500 font-bold">{key}</span>
                      <span className="col-span-2 text-slate-800 font-semibold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Banner */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
                  <span>
                    Dilengkapi garansi servis pabrik 6 bulan, manual book skematik lengkap, dan sesi training pengoperasian.
                  </span>
                </div>

                <button
                  onClick={() => handleInquiry(selectedRobot.title)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-950/20 transition-all shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Pesan / Minta Penawaran Resmi</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
