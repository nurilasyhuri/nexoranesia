'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { INSIGHT_ARTICLES, InsightArticle } from '@/data/ecosystem';
import {
  BookOpen,
  Clock,
  ArrowRight,
  X,
} from 'lucide-react';

export default function InsightsPage() {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>NEXORANESIA INSIGHTS — Edukasi, Tutorial & Panduan Masa Depan</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Artikel & Wawasan Teknologi
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Panduan mendalam tentang coding anak, tutorial merakit robot pemula, machine learning, kiat juara olimpiade, hingga strategi mendirikan Lab STEM sekolah.
            </p>
          </div>
        </section>

        {/* Articles List */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHT_ARTICLES.map((art) => (
              <div
                key={art.id}
                id={art.slug}
                className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all flex flex-col justify-between shadow-sm hover:shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>

                  <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                    <div>
                      <span className="text-slate-800 font-bold block">{art.author}</span>
                      <span className="text-[10px] text-amber-600 font-medium">{art.authorRole}</span>
                    </div>
                    <span>{art.date}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-amber-500 hover:text-white text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                  >
                    <span>Baca Artikel Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Full Article Reader Modal in Clean White */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-800 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>

                <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-3 text-xs text-slate-500 pt-1 pb-4 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    {selectedArticle.author.charAt(0)}
                  </div>
                  <div>
                    <span className="text-slate-900 font-bold block">{selectedArticle.author}</span>
                    <span className="text-[10px] text-amber-600 font-semibold">{selectedArticle.authorRole} • {selectedArticle.date}</span>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed font-sans">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Callout Footer */}
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">
                    Ingin Mempelajari Lebih Lanjut?
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Ikuti kelas interaktifnya langsung di NEXORANESIA Academy atau dapatkan kit praktiknya di Store.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shrink-0 transition-all shadow-xs"
                >
                  Tutup Bacaan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
