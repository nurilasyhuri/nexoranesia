'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

export const Navbar: React.FC<{
  onOpenEnrollment?: () => void;
  onOpenMenu?: () => void;
}> = ({ onOpenEnrollment, onOpenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 6 Primary Navigation Links: HOME | ABOUT | PROGRAMS | ACTIVITIES | PROJECTS | CONTACT
  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PROGRAMS', href: '/programs' },
    { name: 'ACTIVITIES', href: '/activities' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#251310]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-[#251310] border-b border-white/10 py-3.5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between">
          {/* Left: Menu Trigger (Paling Pojok Sebelah Kiri) */}
          <div className="flex items-center min-w-[100px]">
            <button
              type="button"
              onClick={onOpenMenu}
              className="flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-extrabold text-white hover:text-[#FF7A3D] bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#FF7A3D]/40 rounded-full px-3.5 py-1.5 transition-all shadow-xs cursor-pointer focus:outline-none backdrop-blur-xs"
              aria-label="Buka Menu Navigasi"
            >
              <Menu className="w-4 h-4 text-white stroke-[2.4]" />
              <span className="font-extrabold">Menu</span>
            </button>
          </div>

          {/* Center: Desktop Navigation HOME | ABOUT | PROGRAMS | ACTIVITIES | PROJECTS | CONTACT */}
          <nav className="hidden lg:flex items-center space-x-4 text-xs font-semibold tracking-[0.14em]">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className={`transition-colors py-1 ${
                      isActive
                        ? 'text-[#FF7A3D] font-bold'
                        : 'text-stone-300 hover:text-[#FF7A3D]'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <span className="text-white/25 font-light select-none px-0.5">|</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Right: Balanced Spacer for desktop, Mobile Menu Button for mobile */}
          <div className="flex items-center justify-end min-w-[100px]">
            {/* Mobile Menu Button */}
            <button
              onClick={onOpenMenu}
              className="lg:hidden p-2 rounded-xl text-stone-200 hover:text-[#FF7A3D] transition-colors cursor-pointer"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#251310] border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium rounded-xl ${
                pathname === link.href
                  ? 'text-[#FF7A3D] bg-white/10 font-semibold'
                  : 'text-stone-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnrollment) onOpenEnrollment();
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider rounded-full bg-[#FF7A3D] text-white shadow-sm"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
