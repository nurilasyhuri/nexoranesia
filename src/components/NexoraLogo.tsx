'use client';

import React from 'react';
import Link from 'next/link';

interface NexoraIconProps {
  className?: string;
  size?: number;
}

export const NexoraIcon: React.FC<NexoraIconProps> = ({
  className = 'w-9 h-9',
  size = 512,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Background Rich Espresso Gradient */}
        <linearGradient id="nlBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D1512" />
          <stop offset="50%" stopColor="#23110E" />
          <stop offset="100%" stopColor="#140705" />
        </linearGradient>

        {/* Border Accent Gradient */}
        <linearGradient id="nlBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A3D" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#FFD25D" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#562D29" stopOpacity="0.5" />
        </linearGradient>

        {/* Coral to Terracotta Gradient */}
        <linearGradient id="nlPillar" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF9E6B" />
          <stop offset="40%" stopColor="#FF7A3D" />
          <stop offset="100%" stopColor="#EB521B" />
        </linearGradient>

        {/* Diagonal Power Slash Gradient with Gold Energy */}
        <linearGradient id="nlSlash" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA87A" />
          <stop offset="30%" stopColor="#FF7A3D" />
          <stop offset="75%" stopColor="#FFC132" />
          <stop offset="100%" stopColor="#FFE082" />
        </linearGradient>

        {/* Gold Accent Light */}
        <linearGradient id="nlGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEBA0" />
          <stop offset="100%" stopColor="#FFB300" />
        </linearGradient>

        {/* Soft Drop Shadow */}
        <filter id="nlShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Squircle Base */}
      <rect
        x="16"
        y="16"
        width="480"
        height="480"
        rx="116"
        fill="url(#nlBg)"
        stroke="url(#nlBorder)"
        strokeWidth="8"
      />

      {/* Circuit Corner Dots */}
      <circle cx="80" cy="80" r="4" fill="#FF7A3D" opacity="0.3" />
      <circle cx="432" cy="80" r="4" fill="#FF7A3D" opacity="0.3" />
      <circle cx="80" cy="432" r="4" fill="#FF7A3D" opacity="0.3" />
      <circle cx="432" cy="432" r="4" fill="#FF7A3D" opacity="0.3" />

      {/* Monogram Tech N */}
      <g filter="url(#nlShadow)">
        <path
          d="M 144 380 V 132 H 208 L 304 280 V 132 H 368 V 380 H 304 L 208 232 V 380 Z"
          fill="url(#nlPillar)"
        />
        <polygon points="208,132 304,280 304,380 208,232" fill="url(#nlSlash)" />
        <polygon points="304,132 368,132 368,212" fill="url(#nlGold)" />
        <polygon points="144,300 208,380 144,380" fill="url(#nlGold)" />
        <circle cx="256" cy="256" r="14" fill="#FFF9ED" />
        <circle cx="256" cy="256" r="7" fill="#FF7A3D" />
      </g>
    </svg>
  );
};

interface NexoraLogoProps {
  className?: string;
  iconSize?: string;
  theme?: 'dark' | 'light';
  showTagline?: boolean;
}

export const NexoraLogo: React.FC<NexoraLogoProps> = ({
  className = '',
  iconSize = 'w-9 h-9',
  theme = 'dark',
  showTagline = true,
}) => {
  const isDark = theme === 'dark';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}
      aria-label="NEXORANESIA Home"
    >
      <NexoraIcon className={`${iconSize} shrink-0 transition-transform duration-200 group-hover:scale-105`} />
      <div className="flex flex-col text-left">
        <span
          className={`font-heading font-extrabold text-xl sm:text-2xl tracking-tight leading-none transition-colors ${
            isDark
              ? 'text-white group-hover:text-[#FF7A3D]'
              : 'text-[#3A1E1A] group-hover:text-[#FF7A3D]'
          }`}
        >
          NEXORA<span className="text-[#FF7A3D]">NESIA</span>
        </span>
        {showTagline && (
          <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.18em] font-bold text-[#FF7A3D] mt-1">
            Indonesia's Next Era of Innovation
          </span>
        )}
      </div>
    </Link>
  );
};
