'use client';

import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/ecosystem';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Award, 
  ArrowUpRight,
  GraduationCap,
  Bot,
  Cpu,
  Trophy,
  Building2
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EDE6DD] text-[#63544F] relative overflow-hidden">
      {/* Top Value Proposition Bar */}
      <div className="border-b border-[#EDE6DD] bg-[#F4EFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EDE6DD] shadow-2xs">
              <div className="p-3 rounded-xl bg-[#FFF5F0] text-[#FF7A3D] border border-[#FCD9C8]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#3A1E1A]">Standar Internasional</h4>
                <p className="text-xs text-[#7A6A65]">Kurikulum berbasis standar WRO & IEEE</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EDE6DD] shadow-2xs">
              <div className="p-3 rounded-xl bg-[#F0FAF4] text-[#43A574] border border-[#CCEEDB]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#3A1E1A]">48+ Prestasi Resmi</h4>
                <p className="text-xs text-[#7A6A65]">Terbukti membina juara olimpiade</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EDE6DD] shadow-2xs">
              <div className="p-3 rounded-xl bg-[#FFFBEB] text-[#D97706] border border-[#FDE68A]">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#3A1E1A]">Komponen Original</h4>
                <p className="text-xs text-[#7A6A65]">Garansi & datasheet teruji teknisi</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#EDE6DD] shadow-2xs">
              <div className="p-3 rounded-xl bg-[#F8F4F2] text-[#562D29] border border-[#E7DDD8]">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#3A1E1A]">Mitra Sekolah & Lab</h4>
                <p className="text-xs text-[#7A6A65]">120+ institusi mempercayai NEXORANESIA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FF7A3D] text-white flex items-center justify-center font-extrabold text-sm shadow-sm">
                NX
              </div>
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-tight text-[#3A1E1A]">
                  NEXORANESIA
                </span>
                <span className="block text-[10px] text-[#FF7A3D] font-bold tracking-widest uppercase">
                  Indonesia's Next Era of Innovation
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#63544F] leading-relaxed max-w-md">
              {COMPANY_INFO.description}
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-[#63544F]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7A3D] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                <span>{COMPANY_INFO.phone} (Hotline & WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                <span>{COMPANY_INFO.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Business Units */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3A1E1A] border-l-3 border-[#FF7A3D] pl-2">
              Ekosistem Bisnis
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/academy" className="hover:text-[#FF7A3D] flex items-center gap-2 transition-colors">
                  <GraduationCap className="w-3.5 h-3.5 text-[#FF7A3D]" />
                  <span>NEXORANESIA Academy</span>
                </Link>
              </li>
              <li>
                <Link href="/robotics" className="hover:text-[#FF7A3D] flex items-center gap-2 transition-colors">
                  <Bot className="w-3.5 h-3.5 text-[#43A574]" />
                  <span>NEXORANESIA Robotics</span>
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-[#FF7A3D] flex items-center gap-2 transition-colors">
                  <Cpu className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>NEXORANESIA Store</span>
                </Link>
              </li>
              <li>
                <Link href="/competition" className="hover:text-[#FF7A3D] flex items-center gap-2 transition-colors">
                  <Trophy className="w-3.5 h-3.5 text-[#FF7A3D]" />
                  <span>NEXORANESIA Competition</span>
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#FF7A3D] flex items-center gap-2 transition-colors">
                  <Building2 className="w-3.5 h-3.5 text-[#562D29]" />
                  <span>NEXORANESIA Solutions (B2B)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs & Hardware */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3A1E1A] border-l-3 border-[#FF7A3D] pl-2">
              Program & Hardware
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/academy" className="hover:text-[#FF7A3D] transition-colors">Robotics for Kids (7-12 thn)</Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-[#FF7A3D] transition-colors">Coding Scratch & Python AI</Link>
              </li>
              <li>
                <Link href="/robotics" className="hover:text-[#FF7A3D] transition-colors">Soccer Robot Striker V3</Link>
              </li>
              <li>
                <Link href="/robotics" className="hover:text-[#FF7A3D] transition-colors">Autonomous AMR Pathfinder</Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-[#FF7A3D] transition-colors">ESP32 & Arduino Starter Kits</Link>
              </li>
              <li>
                <Link href="/competition" className="hover:text-[#FF7A3D] transition-colors">Mentoring WRO & FLL 2025</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3A1E1A] border-l-3 border-[#FF7A3D] pl-2">
              Pusat Informasi
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/projects" className="hover:text-[#FF7A3D] transition-colors">Katalog Portofolio & Riset</Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#FF7A3D] transition-colors">Artikel & Panduan Teknologi</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF7A3D] transition-colors">Tentang Kami & Profil Tim</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF7A3D] transition-colors">Kontak & Alamat Kantor</Link>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20Admin%20NEXORANESIA,%20mohon%20info%20katalog%20dan%20proposal`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 text-[#43A574] hover:text-[#369567] font-bold"
                >
                  <span>Chat CS WhatsApp 24/7</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#EDE6DD] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7A6A65]">
          <div>
            &copy; 2025 <span className="text-[#3A1E1A] font-bold">NEXORANESIA</span> ({COMPANY_INFO.legalName}). All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#3A1E1A] cursor-pointer">Kebijakan Privasi</span>
            <span className="hover:text-[#3A1E1A] cursor-pointer">Syarat & Ketentuan</span>
            <span className="hover:text-[#3A1E1A] cursor-pointer">Garansi Produk</span>
            <span className="text-[#FF7A3D] font-bold">Made for Future Creators 🇮🇩</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
