'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  ArrowRight
} from 'lucide-react';

export const Navbar: React.FC<{
  onOpenEnrollment?: () => void;
  onOpenMenu?: () => void;
}> = ({ onOpenEnrollment, onOpenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();

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
          {/* Left: Serba99ribu Style Menu Trigger (Pojok Sebelah Kiri) & Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={onOpenMenu}
              className="flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-extrabold text-white hover:text-[#FF7A3D] bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#FF7A3D]/40 rounded-full px-3.5 py-1.5 transition-all shadow-xs cursor-pointer focus:outline-none backdrop-blur-xs"
              aria-label="Buka Menu Navigasi"
            >
              <Menu className="w-4 h-4 text-white stroke-[2.4]" />
              <span className="font-extrabold">Menu</span>
            </button>

            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-2xl bg-[#FF7A3D] flex items-center justify-center text-white font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
                NX
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-[#FF7A3D] transition-colors leading-none">
                  NEXORANESIA
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.16em] text-stone-300 font-semibold mt-1">
                  INDONESIA'S NEXT ERA OF INNOVATION
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
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

          {/* Right Action: Cart + Daftar Sekarang Button */}
          <div className="flex items-center space-x-3">
            {/* Shopping Bag Trigger */}
            <button
              onClick={openCart}
              aria-label="Keranjang Belanja"
              className="relative p-2.5 rounded-full text-stone-200 hover:text-[#FF7A3D] hover:bg-white/10 transition-all cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF7A3D] text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {totalItems}
                </span>
              )}
            </button>

            {/* MS Scaffolding Style Solid Action Button */}
            <button
              onClick={onOpenEnrollment}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-xl bg-[#FF7A3D] hover:bg-[#F06543] text-white shadow-md shadow-[#FF7A3D]/25 transition-all active:scale-95 cursor-pointer"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

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
