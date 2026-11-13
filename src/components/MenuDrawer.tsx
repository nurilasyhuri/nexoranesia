'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Phone, MapPin } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const drawerMenuItems = [
  {
    title: 'HOME',
    slug: '/',
    subtitle: 'Beranda & Pusat Ekosistem Inovasi',
    tag: 'Main',
  },
  {
    title: 'ABOUT',
    slug: '/about',
    subtitle: 'Visi, Misi & Mengapa Memilih Nexoranesia',
    tag: 'Company',
  },
  {
    title: 'PROGRAMS',
    slug: '/programs',
    subtitle: 'Katalog Kursus Coding, Robotika, AI & STEM',
    tag: 'Curriculum',
  },
  {
    title: 'ACTIVITIES',
    slug: '/activities',
    subtitle: 'Kompetisi WRO/FLL, Workshop & Riset Lab',
    tag: 'Events',
  },
  {
    title: 'PROJECTS',
    slug: '/projects',
    subtitle: 'Showcase Portofolio & Karya Inovasi Siswa',
    tag: 'Showcase',
  },
  {
    title: 'CONTACT',
    slug: '/contact',
    subtitle: 'Konsultasi Belajar, Kerjasama Lab & Lokasi',
    tag: 'Connect',
  },
];

export function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop (Serba99ribu Louis Vuitton Style) */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-[6px] transition-opacity duration-200 cursor-pointer animate-in fade-in"
        aria-hidden="true"
      />

      {/* Slide-Over Drawer */}
      <aside
        id="menu-drawer"
        className="fixed top-0 left-0 h-full w-full sm:w-[440px] bg-[#FAF8F5] text-[#3A1E1A] z-[110] shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-250 border-r border-[#EDE6DD]"
        aria-label="Navigation Menu Drawer"
      >
        <div className="p-6 sm:p-8">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#EDE6DD]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF7A3D]" />
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#7A6A65]">
                NEXORANESIA MENU
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#EFE8DF] transition-colors text-[#3A1E1A] focus:outline-none cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 5 Main Menu Items in Serba99ribu Large Editorial Style */}
          <nav className="mt-8 space-y-6 sm:space-y-7">
            {drawerMenuItems.map((item, idx) => (
              <div key={item.title} className="border-b border-[#EDE6DD]/60 pb-5 last:border-b-0">
                <Link
                  href={item.slug}
                  onClick={onClose}
                  className="drawer-link group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="block text-xl sm:text-2xl font-extrabold tracking-tight text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#8A7974] px-2 py-0.5 rounded bg-[#EFE8DF] group-hover:bg-[#FF7A3D] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#7A6A65] tracking-wide mt-1.5 group-hover:text-[#3A1E1A] transition-colors flex items-center gap-1.5">
                    <span>{item.subtitle}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </span>
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Drawer Footer */}
        <div className="p-6 sm:p-8 bg-[#F3ECE4]/80 border-t border-[#EDE6DD] space-y-3">
          <div className="text-xs text-[#63544F] leading-relaxed space-y-2">
            <p className="font-bold text-[#3A1E1A] uppercase tracking-wider text-[11px]">
              Technology Beyond Imagination
            </p>
            <p className="text-[11px]">
              Ekosistem pendidikan robotika, coding praktis, AI terapan, dan laboratorium inovasi masa depan di Indonesia.
            </p>
          </div>

          <div className="pt-2 border-t border-[#EDE6DD]/80 flex flex-col gap-1.5 text-[11px] text-[#7A6A65]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#FF7A3D] shrink-0" />
              <span>Jl. KH. Malik Dalam Buring, Kedungkandang, Malang</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#FF7A3D] shrink-0" />
              <span>Hotline WhatsApp: 085183003060</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
