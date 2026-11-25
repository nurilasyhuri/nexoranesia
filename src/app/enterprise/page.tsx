'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MenuDrawer } from '@/components/MenuDrawer';
import { EnterpriseInquiryModal } from '@/components/EnterpriseInquiryModal';
import { ENTERPRISE_SOLUTIONS, COMPANY_INFO } from '@/data/ecosystem';
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Server,
  Database,
  Cpu,
  Layers,
  BarChart3,
  Factory,
  Boxes,
  Calculator,
  Users,
  ShoppingBag,
  FileSpreadsheet,
  Lock,
  Zap,
  TrendingUp,
  Workflow,
  Radio,
  MessageCircle,
} from 'lucide-react';

export default function EnterprisePage() {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (solutionTitle?: string) => {
    setSelectedSolution(solutionTitle);
    setInquiryModalOpen(true);
  };

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-[#FF7A3D]" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-[#FF7A3D]" />;
      case 'Factory':
        return <Factory className="w-6 h-6 text-[#FF7A3D]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#FF7A3D]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#FF7A3D]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#FF7A3D]" />;
      default:
        return <Layers className="w-6 h-6 text-[#FF7A3D]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col selection:bg-[#FF7A3D] selection:text-white">
      <Navbar onOpenMenu={() => setIsMenuDrawerOpen(true)} />

      <main className="flex-1">
        {/* Hero Section — Nexora Warm Mahogany & Espresso */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#251310] via-[#2B1714] to-[#1E0F0C] text-white overflow-hidden border-b border-[#3A1E1A]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,61,0.12),transparent_50%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A3D]/15 border border-[#FF7A3D]/30 text-[#FF7A3D] text-xs font-semibold tracking-wider uppercase">
              <Briefcase className="w-3.5 h-3.5 text-[#FF7A3D]" />
              <span>NEXORANESIA ENTERPRISE — Digital Transformation & ERP Systems</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-4xl mx-auto leading-tight">
              Arsitektur Sistem IT & Solusi ERP Kustom Skala Enterprise
            </h1>

            <p className="text-base sm:text-lg text-[#EDE6DD] max-w-3xl mx-auto leading-relaxed">
              Membantu korporasi, pabrik manufaktur, distributor nasional, dan holding company mengotomasi operasional bisnis end-to-end. Dirancang presisi mengikuti alur kerja nyata perusahaan Anda tanpa batasan lisensi per-user yang kaku.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenInquiry()}
                className="px-8 py-3.5 rounded-full bg-[#FF7A3D] hover:bg-[#F06543] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#FF7A3D]/25 transition-all cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Jadwalkan Konsultasi IT Enterprise</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20Tim%20NEXORANESIA%20Enterprise,%20kami%20ingin%20konsultasi%20kebutuhan%20sistem%20ERP%20dan%20IT%20arsitektur%20perusahaan.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-stone-200 border border-white/20 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#43A574]" />
                <span>Diskusi Cepat via WhatsApp</span>
              </a>
            </div>

            {/* Key Enterprise Differentiator Badges */}
            <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
              <div className="p-4 rounded-xl bg-[#3A1E1A]/60 border border-white/10 backdrop-blur-xs">
                <div className="text-[#FF7A3D] font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Workflow className="w-4 h-4" />
                  <span>100% Custom Tailored</span>
                </div>
                <p className="text-xs text-stone-300">
                  Disesuaikan dengan SOP riil bisnis Anda, bukan memaksakan alur template software.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#3A1E1A]/60 border border-white/10 backdrop-blur-xs">
                <div className="text-[#43A574] font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>Nol Biaya Per-User</span>
                </div>
                <p className="text-xs text-stone-300">
                  Ekspansi ratusan pengguna tanpa biaya lisensi berulang bulanan yang mencekik.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#3A1E1A]/60 border border-white/10 backdrop-blur-xs">
                <div className="text-[#FFD25D] font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Radio className="w-4 h-4" />
                  <span>Bridge IT & IoT Mesin</span>
                </div>
                <p className="text-xs text-stone-300">
                  Dukungan integrasi hardware sensor pabrik, timbangan digital, RFID & barcode.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#3A1E1A]/60 border border-white/10 backdrop-blur-xs">
                <div className="text-[#FF7A3D] font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enterprise Security</span>
                </div>
                <p className="text-xs text-stone-300">
                  Role-Based Access Control (RBAC), audit trail komprehensif, dan enkripsi data penuh.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Comparison Section */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#EDE6DD]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#FF7A3D]">
                Strategic Cost & Operational Benefit
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3A1E1A] tracking-tight">
                Mengapa Korporasi Memilih Sistem Kustom Nexora vs ERP Kaku
              </h2>
              <p className="text-sm sm:text-base text-[#63544F] max-w-2xl mx-auto">
                Implementasi ERP seringkali gagal karena sistem off-the-shelf terlalu kaku dan membebani operasional. Inilah alasan mengapa pendekatan arsitektur kustom memberikan ROI tertinggi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Conventional ERP Pitfalls */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFF5F3] border border-[#FADCD3] space-y-4">
                <div className="flex items-center gap-2 text-[#C53030] font-bold text-sm uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E53E3E]" />
                  <span>ERP Off-the-Shelf Konvensional</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#4A3B37]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E53E3E] font-bold">✕</span>
                    <span><strong>Biaya Lisensi Mencekik:</strong> Menagih biaya langganan bulanan mahal per-user (seat license) yang membengkak seiring pertumbuhan staf.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E53E3E] font-bold">✕</span>
                    <span><strong>SOP Kaku:</strong> Perusahaan dipaksa mengubah alur kerja internal agar sesuai dengan keterbatasan template software bawaan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E53E3E] font-bold">✕</span>
                    <span><strong>Kustomisasi Sangat Mahal:</strong> Setiap perubahan kecil memerlukan konsultan vendor pihak ketiga dengan tarif jam kerja luar biasa tinggi.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E53E3E] font-bold">✕</span>
                    <span><strong>Isolasi Hardware:</strong> Sangat sulit diintegrasikan langsung dengan mesin pabrik lokal, timbangan, atau alat IoT operasional.</span>
                  </li>
                </ul>
              </div>

              {/* Nexora Enterprise Advantage */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FFF9F5] border border-[#FF7A3D]/40 space-y-4 shadow-xs">
                <div className="flex items-center gap-2 text-[#562D29] font-bold text-sm uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF7A3D]" />
                  <span>Nexora Enterprise Custom Architecture</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#3A1E1A]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A3D] shrink-0 mt-0.5" />
                    <span><strong>Milik Perusahaan 100%:</strong> Sistem menjadi aset intelektual digital perusahaan Anda tanpa royalti seat license bulanan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A3D] shrink-0 mt-0.5" />
                    <span><strong>SOP Presisi:</strong> Kami memetakan alur kerja aktual divisi Anda dan merancang sistem yang mempermudah kerja tim lapangan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A3D] shrink-0 mt-0.5" />
                    <span><strong>Fleksibilitas Skala Penuh:</strong> Database dan API modern siap disambungkan ke cabang baru, marketplace, dan perbankan kapan pun dibutuhkan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A3D] shrink-0 mt-0.5" />
                    <span><strong>Native Hardware & IoT:</strong> Didukung keahlian hardware engineering Nexora Lab untuk koneksi otomatis sensor mesin dan logistik.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Core Enterprise Solution Modules */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#FF7A3D]">
              Modul Solusi Enterprise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3A1E1A] tracking-tight">
              Ekosistem ERP Komprehensif Skala Industri
            </h2>
            <p className="text-sm sm:text-base text-[#63544F] max-w-2xl mx-auto">
              Setiap modul dapat diimplementasikan secara modular bertahap (agile roll-out) maupun sebagai satu kesatuan sistem terintegrasi penuh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ENTERPRISE_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="bg-white rounded-2xl border border-[#EDE6DD] shadow-xs hover:border-[#FF7A3D]/40 hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Top Category & Implementation Time */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-[#FDEEE7] border border-[#FADCD3] group-hover:scale-105 transition-transform">
                        {getSolutionIcon(sol.icon)}
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FDEEE7] text-[#FF7A3D] border border-[#FADCD3]">
                          {sol.category}
                        </span>
                        <h3 className="text-xl font-bold text-[#3A1E1A] mt-1">
                          {sol.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium text-[#7A6A65] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#EDE6DD]">
                      Durasi: {sol.implementationTime}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-[#FF7A3D]">
                    {sol.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#63544F] leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Modules Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-[#EDE6DD]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3A1E1A] block">
                      Fitur & Sub-Modul Utama:
                    </span>
                    <ul className="space-y-1.5">
                      {sol.modules.map((mod, idx) => (
                        <li key={idx} className="text-xs text-[#4A3B37] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A3D] shrink-0 mt-0.5" />
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Business Impact ROI */}
                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EDE6DD] space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#562D29] flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#FF7A3D]" />
                      <span>Dampak Bisnis & Efisiensi:</span>
                    </span>
                    <ul className="space-y-1">
                      {sol.businessImpact.map((imp, idx) => (
                        <li key={idx} className="text-xs text-[#63544F] flex items-start gap-1.5">
                          <span className="text-[#FF7A3D] font-bold">•</span>
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Industry */}
                  <div className="text-xs text-[#7A6A65] pt-1">
                    <span className="font-semibold text-[#3A1E1A]">Cocok Untuk: </span>
                    <span>{sol.targetIndustry}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EDE6DD] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleOpenInquiry(sol.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#251310] hover:bg-[#FF7A3D] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Konsultasikan Modul Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bridge: IT & OT (Hardware / IoT) Section — Signature Nexora Deep Tone */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-[#251310] to-[#1E0F0C] text-white border-y border-[#3A1E1A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A3D]/15 border border-[#FF7A3D]/30 text-[#FF7A3D] text-xs font-semibold uppercase">
                  <Cpu className="w-3.5 h-3.5 text-[#FF7A3D]" />
                  <span>Keunggulan Unik NEXORANESIA</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Jembatan Presisi Antara Sistem Software IT & Hardware Operasional (OT)
                </h2>

                <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  Software house biasa hanya membangun kode di layar monitor. Melalui divisi <strong>NEXORANESIA Lab</strong>, kami memiliki kapabilitas rekayasa perangkat keras untuk menghubungkan sistem ERP Anda langsung dengan perangkat fisik di lapangan:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-[#3A1E1A]/60 border border-white/10">
                    <h4 className="font-bold text-sm text-[#FFD25D] mb-1 flex items-center gap-2">
                      <Radio className="w-4 h-4" />
                      RFID Gate & Smart Warehouse
                    </h4>
                    <p className="text-xs text-stone-300">
                      Pencatatan barang masuk/keluar gudang otomatis saat forklift melintasi gerbang sensor RFID.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#3A1E1A]/60 border border-white/10">
                    <h4 className="font-bold text-sm text-[#43A574] mb-1 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      IoT Telemetri Mesin Pabrik
                    </h4>
                    <p className="text-xs text-stone-300">
                      Monitoring runtime mesin, penghitung output produksi riil, dan sensor suhu/getaran langsung ke modul MRP.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#3A1E1A]/60 border border-white/10">
                    <h4 className="font-bold text-sm text-[#FF7A3D] mb-1 flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      Timbangan Digital Terkoneksi
                    </h4>
                    <p className="text-xs text-stone-300">
                      Berat kargo/material langsung masuk ke sistem surat jalan (Delivery Order) tanpa manipulasi input manual.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#3A1E1A]/60 border border-white/10">
                    <h4 className="font-bold text-sm text-[#FFD25D] mb-1 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Turnstile & Smart Attendance
                    </h4>
                    <p className="text-xs text-stone-300">
                      Integrasi barrier gate dan absensi biometric/face-recognition langsung terhubung ke sistem penggajian HRMS.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#3A1E1A]/80 border border-white/15 space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#FF7A3D]" />
                  <span>Standar Arsitektur Enterprise</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-stone-300">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#FF7A3D]/20 text-[#FF7A3D]">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block">High-Availability Cloud:</strong>
                      Infrastruktur terdistribusi dengan auto-scaling, load balancing, dan uptime target 99.9%.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#43A574]/20 text-[#43A574]">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block">ACID Compliant Database:</strong>
                      Integritas data transaksi keuangan terjamin tanpa risiko double-entry atau inkonsistensi saldo.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#FFD25D]/20 text-[#FFD25D]">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block">Audit Trail & Enkripsi:</strong>
                      Setiap perubahan data tercatat dengan stempel waktu, user ID, IP address, dan enkripsi data diam (at-rest).
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenInquiry('Integrasi Hardware IoT & Sistem Enterprise')}
                    className="w-full py-3 rounded-xl bg-[#FF7A3D] hover:bg-[#F06543] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-[#FF7A3D]/20"
                  >
                    <span>Konsultasi Integrasi IT & OT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Stage Implementation Framework */}
        <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#FF7A3D]">
              Metodologi Delivery
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3A1E1A] tracking-tight">
              Proses Implementasi Terstruktur & Terukur
            </h2>
            <p className="text-sm sm:text-base text-[#63544F] max-w-2xl mx-auto">
              Meminimalisir risiko kegagalan adopsi sistem baru dengan tahapan discovery terarah dan pendampingan transfer ilmu langsung kepada staf Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#EDE6DD] shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#FF7A3D] px-2 py-1 rounded bg-[#FDEEE7] border border-[#FADCD3]">
                TAHAP 01
              </span>
              <h4 className="font-bold text-sm text-[#3A1E1A]">
                Discovery & SOP Mapping
              </h4>
              <p className="text-xs text-[#63544F] leading-relaxed">
                Wawancara mendalam dengan C-Level & kepala divisi untuk mengidentifikasi bottleneck dan menyusun Business Blueprint.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#EDE6DD] shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#FF7A3D] px-2 py-1 rounded bg-[#FDEEE7] border border-[#FADCD3]">
                TAHAP 02
              </span>
              <h4 className="font-bold text-sm text-[#3A1E1A]">
                Architecture & DB Design
              </h4>
              <p className="text-xs text-[#63544F] leading-relaxed">
                Pemodelan basis data relasional, spesifikasi API integrasi, desain antarmuka responsif, dan approval workflow.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#EDE6DD] shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#FF7A3D] px-2 py-1 rounded bg-[#FDEEE7] border border-[#FADCD3]">
                TAHAP 03
              </span>
              <h4 className="font-bold text-sm text-[#3A1E1A]">
                Agile Development
              </h4>
              <p className="text-xs text-[#63544F] leading-relaxed">
                Pengerjaan modul dalam sprint 2 mingguan dengan demo berkala sehingga manajemen dapat memvalidasi fungsi secara bertahap.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#EDE6DD] shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#FF7A3D] px-2 py-1 rounded bg-[#FDEEE7] border border-[#FADCD3]">
                TAHAP 04
              </span>
              <h4 className="font-bold text-sm text-[#3A1E1A]">
                UAT & Data Migration
              </h4>
              <p className="text-xs text-[#63544F] leading-relaxed">
                Uji terima sistem (User Acceptance Testing), migrasi data historis saldo/stok, dan pelatihan intensif untuk seluruh staf.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#EDE6DD] shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#FF7A3D] px-2 py-1 rounded bg-[#FDEEE7] border border-[#FADCD3]">
                TAHAP 05
              </span>
              <h4 className="font-bold text-sm text-[#3A1E1A]">
                Go-Live & SLA Support
              </h4>
              <p className="text-xs text-[#63544F] leading-relaxed">
                Peluncuran resmi dengan pendampingan tim standby di lokasi serta jaminan Service Level Agreement (SLA) respons cepat.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Banner — Nexora Deep Espresso */}
        <section className="py-16 sm:py-20 bg-[#251310] text-white border-t border-[#3A1E1A]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Siap Mengeliminasi Bottleneck Operasional Bisnis Anda?
            </h2>
            <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed">
              Jadwalkan sesi discovery call tanpa komitmen bersama Principal Architect NEXORANESIA Enterprise untuk mengaudit kesiapan transformasi digital perusahaan Anda.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenInquiry()}
                className="px-8 py-3.5 rounded-full bg-[#FF7A3D] hover:bg-[#F06543] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#FF7A3D]/25 transition-all cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>Konsultasikan Kebutuhan Perusahaan</span>
              </button>

              <Link
                href="/solutions"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-stone-200 border border-white/20 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                <Building2 className="w-4 h-4 text-[#FFD25D]" />
                <span>Lihat Solusi Lab Sekolah (B2B Edukasi)</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <MenuDrawer
        isOpen={isMenuDrawerOpen}
        onClose={() => setIsMenuDrawerOpen(false)}
      />

      <EnterpriseInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultSolution={selectedSolution}
      />
    </div>
  );
}
