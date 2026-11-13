'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPANY_INFO } from '@/data/ecosystem';
import {
  Sparkles,
  Building2,
  MapPin,
  Clock,
  Mail,
  Phone,
  ArrowRight,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Tentang NEXORANESIA — Ekosistem Teknologi & Pendidikan Masa Depan</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Membangun Generasi Kreator & <br />
              Rekayasa Teknologi Indonesia
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              NEXORANESIA adalah payung ekosistem teknologi yang menyatukan pendidikan komputer, rekayasa robotika, perdagangan komponen elektronik, pembinaan olimpiade, dan solusi laboratorium sekolah.
            </p>
          </div>
        </section>

        {/* Brand Mission & Story */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-100 border border-amber-200">
                Filosofi Brand
              </span>
              <h2 className="font-heading font-black text-3xl text-slate-900">
                Indonesia's Next Era of Innovation
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kami percaya bahwa anak-anak dan generasi muda Indonesia tidak boleh hanya menjadi pasar atau konsumen pasif teknologi asing. Melalui pendekatan tangan-pertama (hands-on tinkering), pemahaman algoritma mendalam, dan keberanian bereksperimen, kami membina ribuan siswa untuk menjadi pencipta inovasi masa depan.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nama <strong className="text-amber-600">NEXORANESIA</strong> merepresentasikan “Next Era of Innovation for Indonesia” — sebuah identitas payung modern yang merangkul software, hardware mekanik, elektronika, hingga kecerdasan buatan.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs">
                  <h4 className="font-heading font-black text-2xl text-amber-500">100%</h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">Praktik Nyata Berbasis Proyek</p>
                </div>
                <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-xs">
                  <h4 className="font-heading font-black text-2xl text-emerald-600">48+ Trofi</h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">Kompetisi Resmi Tingkat Nasional & Dunia</p>
                </div>
              </div>
            </div>

            {/* Right Card: Innovation Hub Malang */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-xl text-slate-900">
                      Kantor & Workshop NEXORANESIA Malang
                    </h3>
                    <p className="text-xs text-amber-700 font-bold">Pusat R&D dan Laboratorium Terpadu</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Berlokasi di Kota Malang — kota pendidikan dan teknologi Jawa Timur. Laboratorium kami dilengkapi dengan arena resmi simulasi WRO & FLL, workstation perakitan antistatik, 3D printer cluster, dan gudang distribusi komponen.
                </p>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{COMPANY_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{COMPANY_INFO.email}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
                >
                  <span>Kunjungi atau Kontak Kami</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Integrated Business Pillars */}
        <section className="py-20 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-100 border border-amber-200">
                Arsitektur Ekosistem
              </span>
              <h2 className="font-heading font-black text-3xl text-slate-900">
                5 Pilar Bisnis di Bawah NEXORANESIA
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {COMPANY_INFO.units.map((unit) => (
                <Link
                  key={unit.id}
                  href={unit.href}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all flex flex-col justify-between group shadow-2xs"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-amber-700 uppercase">
                      {unit.badge}
                    </span>
                    <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-amber-600 transition-colors">
                      {unit.name}
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {unit.tagline}
                    </p>
                  </div>
                  <div className="pt-4 text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Lihat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
