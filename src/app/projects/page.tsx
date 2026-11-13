'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PORTFOLIO_PROJECTS, COMPANY_INFO } from '@/data/ecosystem';
import {
  Layers,
  Trophy,
  ArrowRight,
} from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = [
    'All',
    'Student Project',
    'Robotics Innovation',
    'Institutional Lab',
  ];

  const filteredProjects =
    selectedCat === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCat);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Layers className="w-4 h-4 text-amber-600" />
              <span>NEXORANESIA SHOWCASE — Rekam Jejak Portofolio & Riset</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Karya Siswa, Riset Robotika & Implementasi Lab
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Inovasi nyata yang lahir dari ekosistem NEXORANESIA: proyek riset siswa berprestasi, prototipe mekatronika otonom, dan transformasi laboratorium sekolah mitra.
            </p>

            {/* Filter Tabs */}
            <div className="pt-6 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCat === cat
                      ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {cat === 'All' ? 'Semua Proyek' : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {proj.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-medium">{proj.year}</span>
                  </div>

                  <div>
                    <h3 className="font-heading font-black text-xl text-slate-900 group-hover:text-amber-600 transition-colors">
                      {proj.title}
                    </h3>
                    <div className="text-xs text-slate-500 mt-1">
                      Klien / Pelaksana: <span className="text-slate-800 font-bold">{proj.client}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Impact Metric */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-800 font-mono font-bold flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{proj.metrics}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20NEXORANESIA,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(proj.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Tanya Proyek Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
