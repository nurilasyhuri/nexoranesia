'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EnrollmentModal } from '@/components/EnrollmentModal';
import { MenuDrawer } from '@/components/MenuDrawer';
import { NexyMascot } from '@/components/CartoonMascot';
import {
  COMPANY_INFO,
  ACADEMY_COURSES,
  CLIENT_PARTNERS,
} from '@/data/ecosystem';
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const heroSlides = [
  {
    tag: 'STEM & ROBOTICS ECOSYSTEM',
    title: 'NEXORANESIA ROBOTICS',
    subhead: 'TAKING INNOVATION TO NEW HEIGHTS',
    description:
      'Turn Your Ideas Into Future Innovations. Membangun generasi inovator masa depan melalui Coding, Robotika, dan Kecerdasan Buatan.',
    image: '/images/hero/slide-1.jpg',
    alt: 'Laboratorium Perakitan Robotika dan STEM NEXORANESIA',
  },
  {
    tag: 'KURSUS KREATIF ANAK & REMAJA',
    title: 'KURSUS CODING & ROBOTIKA',
    subhead: 'INTERACTIVE LEARNING FOR FUTURE INNOVATORS',
    description:
      'Dari Scratch visual programming hingga mikrokontroler fisik. Kurikulum ramah anak yang terstruktur, menyenangkan, dan aplikatif.',
    image: '/images/hero/slide-2.jpg',
    alt: 'Inovasi Robot Otonom dan AI NEXORANESIA',
  },
  {
    tag: 'PRESTASI JUARA INTERNASIONAL',
    title: 'MENTORING KOMPETISI DUNIA',
    subhead: 'JALUR PRESTASI JUARA WRO, FLL, & RCJ ROBOTICS',
    description:
      'Bimbingan intensif persiapan kejuaraan robotika nasional hingga tingkat internasional bersama tim mentor berpengalaman.',
    image: '/images/hero/slide-3.jpg',
    alt: 'Mentoring Olimpiade Robotika NEXORANESIA',
  },
];

const SLIDE_TESTIMONIALS = [
  {
    name: 'Ahnaf Zhafran Khairy',
    content:
      'Alhamdulillah Zhafran terbantu sekali dengan belajar di sini, sejak masuk ke sekolah internasional Zhafran tidak terlalu mengalami kesulitan beradaptasi karena sudah terbiasa belajar di sini dan pembiasaan percakapan bahasa inggris.',
  },
  {
    name: 'Nadia Safira & Bpk. Hendarto',
    content:
      'Putra kami (10 tahun) dulunya kecanduan game online berjam-jam. Setelah ikut kelas Robotics di Nexoranesia, energinya beralih merakit robot dan mengotak-atik Scratch. Sekarang dia bangga bisa memprogram permainannya sendiri.',
  },
  {
    name: 'Dr. Ir. Bambang Sujarwo, M.T.',
    content:
      'Kerjasama pendirian STEM & Robotics Lab bersama NEXORANESIA mengubah iklim riset di sekolah kami secara drastis. Siswa yang awalnya pasif kini mampu membuat inovasi IoT yang menjuarai kompetisi tingkat provinsi. Pendampingan mentor mereka sangat tuntas!',
  },
  {
    name: 'Rifqi Pratama',
    content:
      'Mentor di NEXORANESIA Competition benar-benar detail mengajarkan algoritma PID dan strategi arena. Kami tidak cuma diajari cara menang, tapi juga bagaimana mendiagnosa error saat robot macet di arena bertekanan tinggi.',
  },
  {
    name: 'Kevin Santoso',
    content:
      'Materi terstruktur rapi dari pengenalan sirkuit dasar sampai algoritma tingkat lanjut. Sangat jarang ada pusat edukasi robotika di Indonesia yang memberikan perangkat hands-on langsung dengan pendampingan mentor yang ramah dan solutif.',
  },
];

export default function HomePage() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string | undefined>(undefined);
  const [activeCourseCategory, setActiveCourseCategory] = useState<string>('All');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Mobile Touch Swipe Handling for Hero Slideshow
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % SLIDE_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + SLIDE_TESTIMONIALS.length) % SLIDE_TESTIMONIALS.length);
  };

  const handleEnrollClick = (courseTitle?: string) => {
    setSelectedCourseSlug(courseTitle);
    setEnrollModalOpen(true);
  };

  const filteredCourses =
    activeCourseCategory === 'All'
      ? ACADEMY_COURSES.slice(0, 4)
      : ACADEMY_COURSES.filter((c) => c.category === activeCourseCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar
        onOpenEnrollment={() => handleEnrollClick()}
        onOpenMenu={() => setIsMenuDrawerOpen(true)}
      />

      <main className="flex-1">
        {/* ======================================================== */}
        {/* 1. HERO SLIDESHOW (HOME) - FULLY MOBILE FRIENDLY         */}
        {/* ======================================================== */}
        <section
          id="home"
          className="relative w-full min-h-[520px] sm:min-h-[580px] lg:min-h-[660px] bg-[#251310] text-white overflow-hidden flex flex-col justify-between select-none"
          aria-label="NEXORANESIA Hero Slideshow"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Background Image Slideshow Container */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {heroSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center filter brightness-[0.40] contrast-[1.12]"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                {/* Rich Mahogany Contrast Gradients for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#251310]/95 via-[#251310]/75 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#251310] via-transparent to-[#251310]/60" />
              </div>
            ))}
          </div>

          {/* Main Hero Content - Responsive for Mobile & Desktop */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center py-16 sm:py-24 lg:py-32 my-auto">
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-[10px] sm:text-xs font-bold text-stone-200 tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A3D]" />
                <span>{heroSlides[activeSlide].tag}</span>
              </div>

              {/* Dynamic Slideshow Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] uppercase transition-all duration-300">
                {heroSlides[activeSlide].title}
              </h1>

              {/* Subhead */}
              <h2 className="text-xs sm:text-sm lg:text-base font-bold text-[#FF7A3D] tracking-wider uppercase leading-snug">
                {heroSlides[activeSlide].subhead}
              </h2>

              {/* Clean Supporting Copy */}
              <p className="text-xs sm:text-sm lg:text-base text-stone-300 font-normal leading-relaxed max-w-2xl">
                {heroSlides[activeSlide].description}
              </p>

              {/* Single Primary Action Button */}
              <div className="pt-2 sm:pt-4 flex items-center">
                <a
                  href="#programs"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-[#FF7A3D] hover:bg-[#F06543] active:scale-95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-[#FF7A3D]/30 transition-all cursor-pointer"
                >
                  EXPLORE THE PROGRAM
                </a>
              </div>
            </div>

            {/* Slide Indicator Dots & Navigation */}
            <div className="flex items-center justify-between pt-8 sm:pt-12 pb-2">
              <div className="flex items-center gap-1.5 sm:gap-2" aria-label="Slideshow Controls">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveSlide(i)}
                    className="p-2 focus:outline-none cursor-pointer"
                    aria-label={`Slide ${i + 1}`}
                  >
                    <span
                      className={`h-1.5 rounded-full block transition-all duration-300 ${
                        activeSlide === i ? 'w-8 bg-[#FF7A3D]' : 'w-2 bg-stone-600 hover:bg-stone-400'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Arrow controls for desktop/tablet */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Slide Sebelumnya"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Slide Selanjutnya"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. JELAJAHI KELAS FAVORITMU (PROGRAMS) - MODEL KARTUN   */}
        {/* ======================================================== */}
        <section id="programs" className="relative py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF8F5] to-[#F7F2EC] border-t border-[#EDE6DD]/80 overflow-hidden">
          {/* Subtle Cartoon Dot Grid Background */}
          <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(#FF7A3D_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
          
          {/* Floating Playful Cartoon Stickers */}
          <div className="absolute top-10 left-8 text-2xl select-none animate-bounce hidden md:block">⭐</div>
          <div className="absolute top-16 right-12 text-3xl select-none animate-pulse hidden md:block">🚀</div>
          <div className="absolute bottom-12 left-10 text-2xl select-none opacity-70 hidden md:block">🤖</div>
          <div className="absolute bottom-8 right-8 text-2xl select-none opacity-70 hidden md:block">✨</div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Playful Header Banner with Mascot Nexy */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6 bg-gradient-to-r from-orange-50 via-amber-50/70 to-white p-6 sm:p-8 rounded-[32px] border-2 border-orange-200/90 shadow-[0_8px_0_#FADCD3]">
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Maskot Robot Kartun Nexy yang Melambai */}
                <NexyMascot size="lg" className="shrink-0" />
                
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-[#FF7A3D] text-white text-[11px] font-black uppercase tracking-wider shadow-sm">
                    <span>🌟 KELAS SERU &amp; KREATIF</span>
                  </div>
                  
                  <h2 className="font-editorial font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#3A1E1A] tracking-tight leading-tight">
                    Jelajahi <span className="text-[#FF7A3D] relative inline-block">Kelas Favoritmu!
                      <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD25D]" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
                        <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </h2>
                  
                  <p className="text-xs sm:text-sm text-[#63544F] font-medium max-w-xl">
                    Belajar coding &amp; rakit robot fisik impianmu dengan cara super seru, interaktif, dan ramah anak!
                  </p>
                </div>
              </div>

              {/* Chunky 3D Cartoon Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                {[
                  { id: 'All', label: 'Semua Kelas', icon: '🎒' },
                  { id: 'Coding', label: 'Coding & Game', icon: '💻' },
                  { id: 'Robotics', label: 'Robotika Seru', icon: '🤖' },
                  { id: 'AI', label: 'Smart AI', icon: '🧠' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCourseCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 active:translate-y-1 ${
                      activeCourseCategory === cat.id
                        ? 'bg-gradient-to-r from-[#FF7A3D] to-[#FF9059] text-white shadow-[0_4px_0_#D9531E] -translate-y-0.5'
                        : 'bg-white text-[#562D29] border-2 border-[#EDE6DD] hover:border-[#FF7A3D] shadow-[0_3px_0_#EDE6DD] hover:shadow-[0_3px_0_#FF7A3D]/40'
                    }`}
                  >
                    <span className="text-sm">{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Chunky 3D Cartoon Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCourses.map((course) => {
                // Ilustrasi 3D kartun cerah untuk setiap kelas
                const cartoonImg = course.id === 'acad-02' 
                  ? '/images/academy/scratch-coding.jpg'
                  : course.id === 'acad-03'
                  ? '/images/academy/python-ai.jpg'
                  : course.id === 'acad-04'
                  ? '/images/academy/amr-rover.jpg'
                  : '/images/academy/robotics-kids.jpg';

                const cartoonTheme = course.category === 'Coding'
                  ? { icon: '💻', badgeBg: 'bg-purple-100 text-purple-800 border-purple-200' }
                  : course.category === 'AI'
                  ? { icon: '🧠', badgeBg: 'bg-sky-100 text-sky-800 border-sky-200' }
                  : { icon: '🤖', badgeBg: 'bg-orange-100 text-orange-800 border-orange-200' };

                return (
                  <div
                    key={course.id}
                    className="rounded-[28px] bg-white border-2 border-[#EDE6DD] hover:border-[#FF7A3D] transition-all duration-300 flex flex-col justify-between group shadow-[0_6px_0_#EDE6DD,0_12px_24px_-4px_rgba(255,122,61,0.08)] hover:shadow-[0_8px_0_#FF7A3D,0_20px_32px_-4px_rgba(255,122,61,0.2)] hover:-translate-y-1.5 overflow-hidden"
                  >
                    {/* Kartun 3D Banner Header */}
                    <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200">
                      <Image
                        src={cartoonImg}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                      
                      {/* Badge Kategori Kartun */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-[#3A1E1A] shadow-md border border-stone-200">
                          <span>{cartoonTheme.icon}</span>
                          <span>{course.category}</span>
                        </span>
                      </div>

                      {/* Badge Prestasi / Populer */}
                      {course.badge && (
                        <div className="absolute top-3 right-3 z-10">
                          <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFD25D] text-amber-950 shadow-md border border-amber-300">
                            ⭐ {course.badge}
                          </span>
                        </div>
                      )}

                      {/* Pill Aksen di Bawah Banner */}
                      <div className="absolute bottom-2.5 left-3 right-3 z-10">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                          <span>🎯 Praktik Rakit Langsung</span>
                        </div>
                      </div>
                    </div>

                    {/* Konten Kartu */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <h3 className="font-editorial font-extrabold text-xl text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors line-clamp-2 leading-tight">
                          {course.title}
                        </h3>

                        <p className="text-xs text-[#63544F] line-clamp-2 leading-relaxed">
                          {course.shortDesc}
                        </p>

                        {/* Specs Mini Chips (Usia & Durasi) */}
                        <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                          <div className="flex items-center gap-2 bg-[#FAF8F5] border border-[#EDE6DD] rounded-xl px-2.5 py-2">
                            <span className="text-base">👦</span>
                            <div className="flex flex-col">
                              <span className="text-[10px] text-[#8C7A75] font-semibold uppercase leading-none">Usia</span>
                              <strong className="text-[#3A1E1A] font-extrabold text-[11px] leading-tight mt-0.5">{course.ageGroup}</strong>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-[#FAF8F5] border border-[#EDE6DD] rounded-xl px-2.5 py-2">
                            <span className="text-base">⏱️</span>
                            <div className="flex flex-col">
                              <span className="text-[10px] text-[#8C7A75] font-semibold uppercase leading-none">Sesi</span>
                              <strong className="text-[#3A1E1A] font-extrabold text-[11px] leading-tight mt-0.5">{course.duration}</strong>
                            </div>
                          </div>
                        </div>

                        {/* Highlight Belajar Kartun */}
                        <div className="bg-[#FFF9E6]/70 rounded-xl p-2.5 border border-[#FDE68A]/60 text-[11px] space-y-1">
                          <div className="font-bold text-[#B45309] flex items-center gap-1">
                            <span>🚀 Materi Utama:</span>
                          </div>
                          <div className="text-[#562D29] line-clamp-1 font-medium">
                            • {course.skillsLearned?.[0] || '1 Siswa 1 Kit Eksklusif'}
                          </div>
                          <div className="text-[#562D29] line-clamp-1 font-medium">
                            • {course.skillsLearned?.[1] || 'Sertifikat & Portofolio Siswa'}
                          </div>
                        </div>
                      </div>

                      {/* Tombol 3D Kartun Chunky */}
                      <div className="pt-2">
                        <button
                          onClick={() => handleEnrollClick(course.title)}
                          className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#FF7A3D] to-[#FF9059] hover:from-[#F06543] hover:to-[#FF7A3D] text-white font-black text-xs uppercase tracking-wider shadow-[0_4px_0_#D9531E] hover:shadow-[0_2px_0_#D9531E] hover:translate-y-0.5 active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                          <span>Daftar Kelas Seru</span>
                          <span className="text-sm">🚀</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. TESTIMONI ORANG TUA & SISWA                           */}
        {/* ======================================================== */}
        <section id="testimoni" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Kolom Kiri: Heading & CTA */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black text-[#111827] leading-[1.15] tracking-tight">
                Bagaimana <br />
                <span className="text-[#41a275]">Pengalaman</span> <br />
                <span className="whitespace-nowrap">Mereka Belajar di</span> <br />
                <span className="text-[#41a275]">NEXORANESIA</span>?
              </h2>

              <p className="text-[#374151] text-base sm:text-lg leading-relaxed pt-2">
                9 dari 10 orang tua siswa puas belajar bersama NEXORANESIA
              </p>

              <div className="pt-3">
                <a
                  href="https://wa.me/6285183003060?text=Halo%20NEXORANESIA%2C%20saya%20tertarik%20untuk%20mendaftar%20program%20belajar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#41a275] hover:bg-[#358a62] text-white font-bold text-base transition-colors shadow-sm cursor-pointer"
                >
                  Daftar Sekarang
                </a>
              </div>
            </div>

            {/* Kolom Kanan: Card Slideshow */}
            <div className="lg:col-span-7">
              <div className="relative bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl border border-stone-100 flex flex-col items-center justify-center min-h-[360px] text-center">
                {/* Tombol Panah Kiri */}
                <button
                  type="button"
                  onClick={prevTestimonial}
                  aria-label="Previous Testimonial"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 text-[#4B5563] hover:text-[#111827] hover:bg-stone-50 rounded-full transition-colors cursor-pointer focus:outline-none"
                >
                  <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2.5} />
                </button>

                {/* Tombol Panah Kanan */}
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next Testimonial"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 text-[#9CA3AF] hover:text-[#111827] hover:bg-stone-50 rounded-full transition-colors cursor-pointer focus:outline-none"
                >
                  <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2.5} />
                </button>

                {/* Konten Testimoni */}
                <div
                  key={testimonialIndex}
                  className="flex flex-col items-center max-w-xl mx-auto px-6 sm:px-10 transition-opacity duration-300"
                >
                  {/* Ikon Petik Dua Hijau */}
                  <svg
                    className="w-14 h-14 text-[#58c490] fill-current mx-auto"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>

                  {/* Nama Siswa / Wali */}
                  <h3 className="font-bold text-xl sm:text-2xl text-[#111827] mt-5 mb-4 text-center tracking-tight">
                    {SLIDE_TESTIMONIALS[testimonialIndex].name}
                  </h3>

                  {/* Ulasan */}
                  <p className="text-base sm:text-lg text-[#374151] leading-relaxed text-center">
                    {SLIDE_TESTIMONIALS[testimonialIndex].content}
                  </p>
                </div>

                {/* Dot Pagination */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {SLIDE_TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setTestimonialIndex(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === testimonialIndex ? 'w-8 bg-[#41a275]' : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mitra Strip */}
          <div className="mt-14 pt-8 border-t border-[#EDE6DD] text-center">
            <span className="text-xs font-bold text-[#7A6A65] uppercase tracking-wider block mb-5">
              Dipercaya Oleh Berbagai Sekolah & Komunitas
            </span>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
              {CLIENT_PARTNERS.map((partner, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white border border-[#EDE6DD] text-xs font-bold text-[#562D29] shadow-2xs"
                >
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. CALL TO ACTION & KONTAK                               */}
        {/* ======================================================== */}
        <section id="contact" className="py-20 bg-[#251310] text-white border-t border-[#3A1E1A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FF7A3D]/20 border border-[#FF7A3D]/40 text-xs uppercase tracking-[0.2em] text-[#FF9E6D] font-bold">
                MULAI LANGKAH INOVASI ANDA
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Siap Mengembangkan Potensi Putra-Putri Anda?
            </h2>

            <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto leading-relaxed">
              Bergabunglah bersama ribuan siswa lainnya. Dapatkan sesi Free Trial Class dan konsultasi kurikulum gratis dengan tim mentor kami.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => handleEnrollClick()}
                className="px-8 py-3.5 rounded-full bg-[#FF7A3D] text-white font-bold text-sm hover:bg-[#F06543] shadow-xl shadow-[#FF7A3D]/30 transition-all active:scale-95 cursor-pointer"
              >
                Daftar Sekarang!
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20NEXORANESIA,%20saya%20ingin%20konsultasi%20kelas%20anak`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white/10 border border-white/25 text-white font-bold text-sm hover:bg-white/20 backdrop-blur-xs transition-all cursor-pointer"
              >
                Konsultasi via WhatsApp
              </a>

              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white/5 border border-white/15 text-stone-300 hover:text-white font-bold text-sm hover:bg-white/10 transition-all"
              >
                Halaman Kontak & Lokasi &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <EnrollmentModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        defaultCourseSlug={selectedCourseSlug}
      />

      <MenuDrawer
        isOpen={isMenuDrawerOpen}
        onClose={() => setIsMenuDrawerOpen(false)}
      />
    </div>
  );
}
