'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/ecosystem';

export const WhatsAppWidget: React.FC = () => {
  return (
    <aside 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 select-none"
      aria-label="WhatsApp Hotline"
    >
      {/* Desktop Quick Label */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20NEXORANESIA,%20saya%20ingin%20konsultasi`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 hover:border-emerald-400 text-slate-800 hover:text-emerald-700 text-xs font-bold shadow-lg hover:shadow-xl transition-all"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>WhatsApp: <strong className="text-emerald-700">{COMPANY_INFO.phone}</strong></span>
      </a>

      {/* Main Floating Bubble */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20NEXORANESIA,%20saya%20ingin%20konsultasi`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-950/25 hover:scale-105 active:scale-95 transition-all"
        aria-label={`Buka WhatsApp Resmi NEXORANESIA ${COMPANY_INFO.phone}`}
        title={`Chat WhatsApp: ${COMPANY_INFO.phone}`}
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white" />
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-[2.2]" />
      </a>
    </aside>
  );
};
