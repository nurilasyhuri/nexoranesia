'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProposalModal } from '@/components/ProposalModal';
import { INSTITUTIONAL_SOLUTIONS } from '@/data/ecosystem';
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  FileSpreadsheet,
} from 'lucide-react';

export default function SolutionsPage() {
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<string | undefined>(undefined);

  const handleOpenProposal = (solutionTitle?: string) => {
    setSelectedSolution(solutionTitle);
    setProposalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Building2 className="w-4 h-4 text-amber-600" />
              <span>NEXORANESIA SOLUTIONS — Kemitraan Strategis Sekolah & Institusi</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Solusi Transformasi Laboratorium STEM & Robotika
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Membantu yayasan, sekolah (SD/SMP/SMA/SMK), pesantren modern, dan perguruan tinggi membangun ruang pembelajaran teknologi masa depan yang hidup, berprestasi, dan berkelanjutan.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleOpenProposal()}
                className="px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-amber-950/20 transition-all"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Minta Proposal & Studi Kelayakan</span>
              </button>
            </div>
          </div>
        </section>

        {/* 4 Pillars Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSTITUTIONAL_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-sky-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                      {sol.target}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-medium">{sol.investmentTier}</span>
                  </div>

                  <div>
                    <h3 className="font-heading font-black text-2xl text-slate-900">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-sky-700 font-bold mt-1">
                      {sol.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Ruang Lingkup Solusi:
                    </span>
                    {sol.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                      Deliverables Resmi:
                    </span>
                    {sol.deliverables.map((d, idx) => (
                      <div key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Garansi Layanan 1 Tahun</span>
                  <button
                    onClick={() => handleOpenProposal(sol.title)}
                    className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <span>Ajukan Proposal Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow 4 Steps */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                Alur Kerjasama Pembangunan Lab
              </h2>
              <p className="text-xs text-slate-500">
                Langkah terstruktur dari konsultasi awal hingga peresmian laboratorium sekolah Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Studi Kelayakan & Konsultasi', desc: 'Diskusi ruangan, target kurikulum sekolah, dan penyesuaian anggaran yang efisien.' },
                { step: '02', title: 'Penyusunan Proposal 3D CAD', desc: 'Desain layout ruangan 3D, daftar kit teknologi, dan rancangan kurikulum semester.' },
                { step: '03', title: 'Instalasi & Pengadaan Alat', desc: 'Pemasangan meja kerja lab, komputer, printer 3D, dan kit robotika terstandarisasi.' },
                { step: '04', title: 'Training Guru (ToT) & Launching', desc: 'Pelatihan guru hingga mandiri mengajar dan pendampingan ekskul berkelanjutan.' },
              ].map((s) => (
                <div key={s.step} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="font-mono font-black text-3xl text-sky-600">
                    {s.step}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">{s.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ProposalModal
        isOpen={proposalModalOpen}
        onClose={() => setProposalModalOpen(false)}
        defaultSolution={selectedSolution}
      />
    </div>
  );
}
