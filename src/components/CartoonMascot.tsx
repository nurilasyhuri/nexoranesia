'use client';

import React from 'react';

/**
 * Nexy - Maskot Robot Kartun NEXORANESIA
 * Karakter robot kartun 3D ramah anak dengan mata cyan bercahaya dan antena ceria
 */
export const NexyMascot: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  waving?: boolean;
}> = ({ size = 'md', className = '', waving = true }) => {
  const dimensions = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-28 h-28 sm:w-36 sm:h-36',
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${dimensions} ${className}`}>
      {/* Glow halo */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF7A3D]/30 via-[#FFD25D]/40 to-[#43A574]/30 blur-md animate-pulse" />
      
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full relative z-10 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Antena & Bola Cahaya Kuning */}
        <line x1="60" y1="26" x2="60" y2="12" stroke="#4A342F" strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="10" r="7" fill="#FFD25D" stroke="#D97706" strokeWidth="2.5" />
        <circle cx="58" cy="8" r="2.5" fill="#FFFBEB" />

        {/* Kuping Headphone Kiri & Kanan */}
        <rect x="18" y="42" width="8" height="24" rx="4" fill="#FF7A3D" stroke="#D9531E" strokeWidth="2" />
        <rect x="94" y="42" width="8" height="24" rx="4" fill="#FF7A3D" stroke="#D9531E" strokeWidth="2" />
        {/* Band Headphone */}
        <path d="M22 45 C 22 24, 98 24, 98 45" stroke="#FF7A3D" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Kepala Robot Kotak Membulat (Chunky 3D Pill) */}
        <rect x="24" y="30" width="72" height="52" rx="18" fill="#FFFFFF" stroke="#4A342F" strokeWidth="3.5" />
        {/* Shadow kepala bawah */}
        <path d="M 28 66 C 28 78, 92 78, 92 66" fill="#F4EFEA" />

        {/* Layar Visor Wajah Hitam Elegan */}
        <rect x="32" y="38" width="56" height="34" rx="12" fill="#1E1614" stroke="#4A342F" strokeWidth="2" />

        {/* Mata Cyan Kartun yang Tersenyum & Bersinar */}
        <g className="animate-pulse">
          {/* Mata Kiri */}
          <ellipse cx="46" cy="52" rx="6" ry="7.5" fill="#38BDF8" />
          <circle cx="48" cy="49" r="2.5" fill="#FFFFFF" />
          {/* Mata Kanan */}
          <ellipse cx="74" cy="52" rx="6" ry="7.5" fill="#38BDF8" />
          <circle cx="76" cy="49" r="2.5" fill="#FFFFFF" />
        </g>

        {/* Senyum Ramah Robot */}
        <path d="M53 62 Q 60 68 67 62" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Pipi Merona Kartun (Blush) */}
        <circle cx="39" cy="59" r="3" fill="#FB7185" opacity="0.8" />
        <circle cx="81" cy="59" r="3" fill="#FB7185" opacity="0.8" />

        {/* Leher Robot */}
        <rect x="52" y="82" width="16" height="8" rx="2" fill="#D1D5DB" stroke="#4A342F" strokeWidth="2.5" />

        {/* Tubuh Robot Chunky */}
        <rect x="34" y="90" width="52" height="26" rx="12" fill="#FF7A3D" stroke="#D9531E" strokeWidth="3" />
        {/* Panel Dada Putih dengan Tombol Mini */}
        <rect x="44" y="94" width="32" height="16" rx="6" fill="#FFFFFF" />
        <circle cx="52" cy="102" r="3" fill="#38BDF8" />
        <circle cx="60" cy="102" r="3" fill="#43A574" />
        <circle cx="68" cy="102" r="3" fill="#FFD25D" />

        {/* Tangan Melambai Kartun (Kanan) */}
        {waving && (
          <g className="origin-[90px_88px] animate-bounce">
            <path d="M86 92 Q 106 82 108 70" stroke="#FF7A3D" strokeWidth="7" strokeLinecap="round" />
            <circle cx="108" cy="68" r="7" fill="#FFFFFF" stroke="#4A342F" strokeWidth="2.5" />
            <circle cx="106" cy="64" r="3" fill="#FFFFFF" />
          </g>
        )}
      </svg>
    </div>
  );
};

/**
 * Ilustrasi Kartun Vektor Khusus per Program (Fallback & Visual Rich)
 */
export const CourseCartoonIllustration: React.FC<{
  type: string;
  className?: string;
}> = ({ type, className = '' }) => {
  if (type === 'Coding') {
    return (
      <div className={`relative w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden ${className}`}>
        {/* Pixel stars background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:16px_16px]" />
        
        {/* Floating game assets */}
        <div className="relative z-10 flex flex-col items-center">
          <svg viewBox="0 0 160 110" className="w-36 h-28 drop-shadow-xl" fill="none">
            {/* Monitor Layar Kartun */}
            <rect x="25" y="10" width="110" height="74" rx="14" fill="#1E1B4B" stroke="#A855F7" strokeWidth="4" />
            {/* Layar dalam */}
            <rect x="33" y="18" width="94" height="58" rx="8" fill="#0F172A" />
            {/* Kaki Monitor */}
            <path d="M 72 84 L 88 84 L 94 98 L 66 98 Z" fill="#6B21A8" stroke="#A855F7" strokeWidth="2" />

            {/* Block Code Visual (Gaya Scratch) */}
            <rect x="38" y="24" width="46" height="12" rx="4" fill="#3B82F6" />
            <text x="42" y="32" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">when clicked 🚩</text>
            
            <rect x="42" y="38" width="58" height="12" rx="4" fill="#38BDF8" />
            <text x="46" y="46" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">move 10 steps ➔</text>
            
            <rect x="42" y="52" width="50" height="12" rx="4" fill="#F59E0B" />
            <text x="46" y="60" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">play sound 🎵</text>

            {/* Karakter Kucing / Sprite Mini */}
            <g transform="translate(100, 36)">
              <circle cx="12" cy="14" r="10" fill="#F97316" stroke="#C2410C" strokeWidth="1.5" />
              <polygon points="4,7 8,2 11,8" fill="#F97316" />
              <polygon points="13,8 16,2 20,7" fill="#F97316" />
              <circle cx="9" cy="13" r="1.5" fill="#1E293B" />
              <circle cx="15" cy="13" r="1.5" fill="#1E293B" />
              <path d="M10 17 Q 12 19 14 17" stroke="#1E293B" strokeWidth="1" fill="none" />
            </g>
          </svg>

          {/* Game Controller Floating Badge */}
          <div className="absolute -bottom-2 -right-1 bg-amber-400 text-amber-950 font-black text-[10px] px-2.5 py-0.5 rounded-full border-2 border-white shadow-md flex items-center gap-1">
            🎮 Scratch 3.0
          </div>
        </div>
      </div>
    );
  }

  if (type === 'AI') {
    return (
      <div className={`relative w-full h-full bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 flex items-center justify-center overflow-hidden ${className}`}>
        {/* Circuit grid background */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative z-10 flex flex-col items-center">
          <svg viewBox="0 0 160 110" className="w-36 h-28 drop-shadow-xl" fill="none">
            {/* Robot AI Brain Kepala Kartun */}
            <ellipse cx="80" cy="50" rx="38" ry="34" fill="#F0FDF4" stroke="#0284C7" strokeWidth="4" />
            
            {/* Kacamata VR / AI Holographic Goggles */}
            <rect x="50" y="40" width="60" height="20" rx="10" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
            <ellipse cx="64" cy="50" rx="8" ry="6" fill="#38BDF8" />
            <circle cx="66" cy="48" r="2" fill="#FFFFFF" />
            <ellipse cx="96" cy="50" rx="8" ry="6" fill="#38BDF8" />
            <circle cx="98" cy="48" r="2" fill="#FFFFFF" />

            {/* Senyum Robot AI */}
            <path d="M72 68 Q 80 74 88 68" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Python Snake Doodles Lucu di Sekitar */}
            <path d="M30 30 Q 38 18 46 28" stroke="#FBBF24" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <circle cx="47" cy="29" r="2" fill="#3B82F6" />

            <path d="M116 28 Q 124 18 132 30" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <circle cx="115" cy="27" r="2" fill="#FBBF24" />

            {/* Sparkles / Bintang AI */}
            <polygon points="80,10 82,16 88,18 82,20 80,26 78,20 72,18 78,16" fill="#FBBF24" />
          </svg>

          {/* Badge Python AI */}
          <div className="absolute -bottom-2 -right-1 bg-cyan-300 text-cyan-950 font-black text-[10px] px-2.5 py-0.5 rounded-full border-2 border-white shadow-md flex items-center gap-1">
            🧠 Smart Python AI
          </div>
        </div>
      </div>
    );
  }

  // Default: Robotics for Kids
  return (
    <div className={`relative w-full h-full bg-gradient-to-br from-amber-400 via-orange-500 to-[#FF7A3D] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Gears & bubbles background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:14px_14px]" />

      <div className="relative z-10 flex flex-col items-center">
        <svg viewBox="0 0 160 110" className="w-36 h-28 drop-shadow-xl" fill="none">
          {/* Badan Robot Mobil Kartun */}
          <rect x="42" y="32" width="76" height="42" rx="14" fill="#FFFFFF" stroke="#C2410C" strokeWidth="3.5" />
          {/* Garis Warna Oranye */}
          <rect x="42" y="48" width="76" height="12" fill="#FF7A3D" />

          {/* Sensor Ultrasonik Mata Goggles Kartun */}
          <circle cx="62" cy="46" r="11" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.5" />
          <circle cx="62" cy="46" r="6" fill="#0369A1" />
          <circle cx="64" cy="44" r="2" fill="#FFFFFF" />

          <circle cx="98" cy="46" r="11" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2.5" />
          <circle cx="98" cy="46" r="6" fill="#0369A1" />
          <circle cx="100" cy="44" r="2" fill="#FFFFFF" />

          {/* Senyum Robot Mobil */}
          <path d="M72 63 Q 80 69 88 63" stroke="#C2410C" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Roda Kartun Hitam & Kuning */}
          <rect x="36" y="66" width="16" height="18" rx="5" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          <circle cx="44" cy="75" r="4" fill="#FFD25D" />

          <rect x="108" y="66" width="16" height="18" rx="5" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          <circle cx="116" cy="75" r="4" fill="#FFD25D" />

          {/* Antena Spiral Seru */}
          <path d="M80 32 L 80 18" stroke="#C2410C" strokeWidth="3" strokeLinecap="round" />
          <circle cx="80" cy="14" r="6" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
          <polygon points="124,18 126,22 130,24 126,26 124,30 122,26 118,24 122,22" fill="#FEF08A" />
        </svg>

        {/* Badge Robot Explorer */}
        <div className="absolute -bottom-2 -right-1 bg-yellow-300 text-amber-950 font-black text-[10px] px-2.5 py-0.5 rounded-full border-2 border-white shadow-md flex items-center gap-1">
          🤖 STEM Hands-On
        </div>
      </div>
    </div>
  );
};
