'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EnrollmentModal } from '@/components/EnrollmentModal';
import { MenuDrawer } from '@/components/MenuDrawer';
import { useCart } from '@/context/CartContext';
import {
  COMPANY_INFO,
  ACADEMY_COURSES,
  STORE_ITEMS,
  TESTIMONIALS,
  CLIENT_PARTNERS,
} from '@/data/ecosystem';
import {
  GraduationCap,
  Bot,
  Cpu,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Star,
  ShoppingBag,
  Sparkles,
  Users,
  Award,
  Layers,
  HeartHandshake,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Quote,
  Lightbulb,
  Rocket,
  Globe,
  Menu,
} from 'lucide-react';

const heroSlides = [
  {
    image: '/images/hero/slide-1.jpg',
    alt: 'Laboratorium Perakitan Robotika & STEM NEXORANESIA',
    tag: 'Laboratorium & Perakitan Robot Fisik',
  },
  {
    image: '/images/hero/slide-2.jpg',
    alt: 'Inovasi Robot Otonom & AI NEXORANESIA',
    tag: 'Teknologi Robotika & AI Mandiri',
  },
  {
    image: '/images/hero/slide-3.jpg',
    alt: 'Siswa Aktif Belajar Coding & Problem Solving',
    tag: 'Kelas Interaktif & Menyenangkan',
  },
];

const SLIDE_TESTIMONIALS = [
  {
    name: 'Ahnaf Zhafran Khairy',
    content:
      'Alhamdulillah Zhafran terbantu sekali dengan belajar di sini, sejak masuk ke sekolah internasional Zhafran tidak terlalu mengalami kesulitan beradaptasi karena sudah terbiasa belajar di sini dan pembiasaan percakapan bahasa inggris',
  },
  {
    name: 'Nadia Safira & Bpk. Hendarto',
    content:
      'Putra kami (10 tahun) dulunya kecanduan game online berjam-jam. Setelah ikut kelas Robotics di Nexoranesia, energinya beralih merakit robot dan mengotak-atik Scratch. Sekarang dia bangga bisa pamer game buatannya sendiri ke teman-temannya.',
  },
  {
    name: 'Dr. Ir. Bambang Sujarwo, M.T.',
    content:
      'Kerjasama pendirian STEM & Robotics Lab bersama NEXORANESIA mengubah iklim riset di sekolah kami secara drastis. Siswa yang awalnya pasif kini mampu membuat inovasi IoT yang menjuarai kompetisi tingkat provinsi. Pendampingan guru mereka sangat tuntas!',
  },
  {
    name: 'Rifqi Pratama',
    content:
      'Mentor di NEXORANESIA Competition benar-benar detail mengajarkan algoritma PID dan strategi arena. Kami tidak cuma diajari cara menang, tapi juga bagaimana mendiagnosa error saat robot macet di arena bertekanan tinggi.',
  },
  {
    name: 'Kevin Santoso',
    content:
      'Pengiriman komponen dari NEXORANESIA Store super cepat dan barangnya dijamin original. Sangat jarang ada toko robotika di Indonesia yang memberikan datasheet jelas dan tim teknis yang ramah saat diajak diskusi troubleshooting.',
  },
];

export default function HomePage() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string | undefined>(undefined);
  const [activeCourseCategory, setActiveCourseCategory] = useState<string>('All');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const { addToCart } = useCart();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

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
        {/* 1. HERO SHOWCASE (HOME)                                  */}
        {/* ======================================================== */}
        <section
          id="home"
          className="relative w-full min-h-[580px] lg:min-h-[660px] bg-[#251310] text-white overflow-hidden flex flex-col justify-between select-none"
          aria-label="NEXORANESIA Hero Showcase"
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
                  className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12]"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                {/* Rich Mahogany Contrast Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#251310]/95 via-[#251310]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#251310]/95 via-transparent to-[#251310]/45" />
              </div>
            ))}
          </div>

          {/* Main Hero Content - Model Standar MS Scaffolding */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center py-20 sm:py-28 lg:py-36 my-auto">
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              {/* Bold All-Caps Brand Headline (MS Scaffolding Standard) */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.06] uppercase">
                NEXORANESIA<br />
                <span className="text-[#FF7A3D]">ROBOTICS</span>
              </h1>

              {/* High-Impact Subhead */}
              <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-white tracking-wide uppercase leading-snug">
                TAKING INNOVATION TO NEW HEIGHTS — Complete Robotics &amp; STEM Ecosystem
              </h2>

              {/* Clean Supporting Copy */}
              <p className="text-sm sm:text-base lg:text-lg text-stone-200 font-medium leading-relaxed max-w-2xl">
                Turn Your Ideas Into Future Innovations. Membangun generasi inovator masa depan melalui Coding, Robotika, dan Kecerdasan Buatan.
              </p>

              {/* High-Contrast Action Buttons (MS Scaffolding Style) */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-[#FF7A3D] hover:bg-[#F06543] active:scale-95 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-[#FF7A3D]/30 transition-all cursor-pointer"
                >
                  Jelajahi Program
                </a>

                <button
                  onClick={() => handleEnrollClick()}
                  className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-transparent hover:bg-white/10 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border-2 border-white/80 hover:border-white transition-all cursor-pointer"
                >
                  Konsultasi Sekarang
                </button>
              </div>
            </div>

            {/* Slide Indicator Dots */}
            <div className="flex items-center justify-center gap-2 pt-6 pb-2" aria-label="Slideshow Controls">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveSlide(i)}
                  className="p-1.5 focus:outline-none rounded-full cursor-pointer"
                  aria-label={`Pindah ke Slide ${i + 1}`}
                >
                  <span
                    className={`h-1.5 rounded-full block transition-all duration-300 ${
                      activeSlide === i ? 'w-8 bg-[#FF7A3D]' : 'w-2 bg-stone-600 hover:bg-stone-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 2. WHY CHOOSE NEXORANESIA? (ABOUT)                      */}
        {/* ======================================================== */}
        <section id="about" className="py-16 sm:py-24 bg-white border-y border-[#EDE6DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs font-bold text-[#FF7A3D] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#FDEEE7] border border-[#FADCD3] inline-block mb-3.5">
                WHY CHOOSE NEXORANESIA?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3A1E1A] tracking-tight leading-[1.15]">
                Bukan Sekadar Belajar Teknologi, <span className="text-[#FF7A3D]">Tetapi Menciptakan Masa Depan.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#63544F] mt-4 leading-relaxed">
                NEXORANESIA menghadirkan pengalaman belajar teknologi yang menggabungkan kreativitas, eksplorasi, praktik langsung, dan inovasi. Kami membantu generasi muda mengembangkan kemampuan untuk memahami teknologi, membangun karya, dan menghadirkan solusi nyata bagi masa depan.
              </p>
            </div>

            {/* 6 Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {/* 1. Future-Ready Learning */}
              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#EDE6DD] hover:border-[#FF7A3D] hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FF7A3D] text-white flex items-center justify-center shadow-md shadow-[#FF7A3D]/20">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#FF7A3D] px-2.5 py-1 rounded-full bg-[#FDEEE7]">
                      01
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors leading-snug">
                    Future-Ready Learning
                  </h3>
                  <p className="text-xs sm:text-sm text-[#63544F] mt-2.5 leading-relaxed">
                    Pembelajaran Coding, Robotics, AI, dan STEM yang dirancang untuk membangun keterampilan relevan dengan perkembangan teknologi masa depan.
                  </p>
                </div>
              </div>

              {/* 2. Hands-On Experience */}
              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#EDE6DD] hover:border-[#FF7A3D] hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#43A574] text-white flex items-center justify-center shadow-md shadow-[#43A574]/20">
                      <Bot className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#43A574] px-2.5 py-1 rounded-full bg-[#E8F7F0]">
                      02
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#3A1E1A] group-hover:text-[#43A574] transition-colors leading-snug">
                    Hands-On Experience
                  </h3>
                  <p className="text-xs sm:text-sm text-[#63544F] mt-2.5 leading-relaxed">
                    Belajar melalui praktik langsung, eksperimen, merakit robot, membuat program, dan mengembangkan proyek teknologi sendiri.
                  </p>
                </div>
              </div>

              {/* 3. Creativity & Innovation */}
              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#EDE6DD] hover:border-[#FF7A3D] hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4B740] text-white flex items-center justify-center shadow-md shadow-[#F4B740]/20">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#D97706] px-2.5 py-1 rounded-full bg-[#FEF3C7]">
                      03
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#3A1E1A] group-hover:text-[#D97706] transition-colors leading-snug">
                    Creativity &amp; Innovation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#63544F] mt-2.5 leading-relaxed">
                    Mendorong peserta untuk berpikir kritis, memecahkan masalah, mengembangkan ide, dan menciptakan solusi inovatif.
                  </p>
                </div>
              </div>

              {/* 4. Competition & Achievement */}
              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#EDE6DD] hover:border-[#FF7A3D] hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#3B82F6] text-white flex items-center justify-center shadow-md shadow-[#3B82F6]/20">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#2563EB] px-2.5 py-1 rounded-full bg-[#EFF6FF]">
                      04
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#3A1E1A] group-hover:text-[#2563EB] transition-colors leading-snug">
                    Competition &amp; Achievement
                  </h3>
                  <p className="text-xs sm:text-sm text-[#63544F] mt-2.5 leading-relaxed">
                    Membuka kesempatan untuk mengembangkan kemampuan, mempersiapkan diri, dan mengikuti kompetisi teknologi dari tingkat lokal hingga internasional.
                  </p>
                </div>
              </div>

              {/* 5. Innovation & Product Development */}
              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#EDE6DD] hover:border-[#FF7A3D] hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6] text-white flex items-center justify-center shadow-md shadow-[#8B5CF6]/20">
                      <Rocket className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#7C3AED] px-2.5 py-1 rounded-full bg-[#F5F3FF]">
                      05
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#3A1E1A] group-hover:text-[#7C3AED] transition-colors leading-snug">
                    Innovation &amp; Product Development
                  </h3>
                  <p className="text-xs sm:text-sm text-[#63544F] mt-2.5 leading-relaxed">
                    Tidak berhenti pada pembelajaran. Peserta didorong untuk melakukan eksperimen, membuat prototipe, dan mengembangkan produk teknologi.
                  </p>
                </div>
              </div>

              {/* 6. Integrated Technology Ecosystem */}
              <div className="p-7 rounded-3xl bg-[#FAF8F5] border border-[#EDE6DD] hover:border-[#FF7A3D] hover:shadow-md transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#562D29] text-white flex items-center justify-center shadow-md shadow-[#562D29]/20">
                      <Globe className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#562D29] px-2.5 py-1 rounded-full bg-[#EDE6DD]">
                      06
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#3A1E1A] group-hover:text-[#562D29] transition-colors leading-snug">
                    Integrated Technology Ecosystem
                  </h3>
                  <p className="text-xs sm:text-sm text-[#63544F] mt-2.5 leading-relaxed">
                    Terhubung dengan ekosistem pendidikan, kompetisi, laboratorium inovasi, pengembangan produk, dan jaringan kolaborasi teknologi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 3. JELAJAHI KELAS FAVORITMU (PROGRAMS)                  */}
        {/* ======================================================== */}
        <section id="programs" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-[#FF7A3D] uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FDEEE7] border border-[#FADCD3] inline-block mb-2">
                Pilihan Program
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#3A1E1A]">
                Jelajahi <span className="text-[#FF7A3D] font-editorial">Kelas Favoritmu!</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#63544F] mt-1.5">
                Pilih jenjang dan minat teknologi yang paling cocok untuk putra-putri Anda.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {['All', 'Coding', 'Robotics', 'AI'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCourseCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    activeCourseCategory === cat
                      ? 'bg-[#FF7A3D] text-white shadow-xs'
                      : 'bg-white border border-[#EDE6DD] text-[#562D29] hover:bg-[#FDEEE7]'
                  }`}
                >
                  {cat === 'All' ? 'Semua Bidang' : cat}
                </button>
              ))}
              <Link
                href="/programs"
                className="px-3 py-1.5 text-xs font-bold text-[#FF7A3D] hover:underline"
              >
                Lihat Semua Program &rarr;
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="p-6 rounded-3xl bg-white border border-[#EDE6DD] hover:border-[#FF7A3D] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FDEEE7] text-[#FF7A3D]">
                      {course.category}
                    </span>
                    {course.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFF9E6] text-[#B45309]">
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors line-clamp-2 leading-tight">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#63544F] line-clamp-2 leading-relaxed">
                    {course.shortDesc}
                  </p>

                  <div className="space-y-1.5 text-xs text-[#7A6A65] pt-3 border-t border-[#EDE6DD]/70">
                    <div className="flex justify-between">
                      <span>Usia:</span>
                      <strong className="text-[#3A1E1A]">{course.ageGroup}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Pertemuan:</span>
                      <strong className="text-[#3A1E1A]">{course.duration}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EDE6DD]/70 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#7A6A65]">
                    <span>Jadwal & Kuota:</span>
                    <span className="font-bold text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full border border-[#C8E6C9] text-[11px]">
                      {course.meetings}
                    </span>
                  </div>

                  <button
                    onClick={() => handleEnrollClick(course.title)}
                    className="w-full py-2.5 rounded-full bg-[#FF7A3D] hover:bg-[#F06543] text-white font-bold text-xs transition-all shadow-xs cursor-pointer active:scale-95"
                  >
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 4. AKTIVITAS & KOMPETISI DUNIA (ACTIVITIES)              */}
        {/* ======================================================== */}
        <section id="activities" className="py-20 bg-[#FAF8F5] border-t border-[#EDE6DD]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-[#43A574] uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#E8F7F0] border border-[#CCEEDB] inline-block mb-2">
                  Aktivitas & Event
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#3A1E1A]">
                  Aktivitas Eksplorasi & <span className="text-[#43A574] font-editorial">Turnamen Robotika</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#63544F] mt-1.5">
                  Dari mentoring World Robot Olympiad (WRO) hingga workshop langsung merakit perangkat fisik.
                </p>
              </div>

              <Link
                href="/activities"
                className="text-xs font-bold text-[#43A574] hover:underline"
              >
                Jelajahi Semua Aktivitas &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Activity Card 1: Championship */}
              <div className="p-6 rounded-3xl bg-white border border-[#EDE6DD] hover:border-[#43A574] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E8F7F0] text-[#43A574]">
                      Turnamen Resmi
                    </span>
                    <span className="text-[10px] text-[#D97706] font-bold">WRO & FLL Track</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#3A1E1A] group-hover:text-[#43A574] transition-colors leading-tight">
                    Mentoring Olimpiade Robotika
                  </h3>
                  <p className="text-xs text-[#63544F] leading-relaxed">
                    Karantina intensif dan simulasi tanding berstandar dunia untuk tim sekolah menembus podium nasional dan internasional.
                  </p>
                  <div className="pt-2 text-xs font-medium text-[#7A6A65] space-y-1">
                    <div>• Analisis regelment & strategi arena</div>
                    <div>• Rancang bangun robot modular</div>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-[#EDE6DD]/70">
                  <Link
                    href="/activities"
                    className="w-full py-2.5 rounded-full bg-[#E8F7F0] hover:bg-[#43A574] text-[#43A574] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Pelajari Jalur Tim</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Activity Card 2: Weekend Workshop */}
              <div className="p-6 rounded-3xl bg-white border border-[#EDE6DD] hover:border-[#FF7A3D] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FDEEE7] text-[#FF7A3D]">
                      Weekend Hands-On
                    </span>
                    <span className="text-[10px] text-[#2E7D32] font-bold">Tiap Akhir Pekan</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors leading-tight">
                    Workshop Merakit Robot Fisik
                  </h3>
                  <p className="text-xs text-[#63544F] leading-relaxed">
                    Peserta merakit sendiri robot line follower atau kit sensor analog dari nol. Belajar menyolder, membaca skematik, dan robot boleh dibawa pulang.
                  </p>
                  <div className="pt-2 text-xs font-medium text-[#7A6A65] space-y-1">
                    <div>• Kit komponen & sertifikat fisik</div>
                    <div>• Pendampingan mentor 1-on-1</div>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-[#EDE6DD]/70">
                  <Link
                    href="/activities"
                    className="w-full py-2.5 rounded-full bg-[#FDEEE7] hover:bg-[#FF7A3D] text-[#FF7A3D] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Daftar Workshop</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Activity Card 3: School STEM Day */}
              <div className="p-6 rounded-3xl bg-white border border-[#EDE6DD] hover:border-[#2563EB] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#2563EB]">
                      Ekskursi Sekolah
                    </span>
                    <span className="text-[10px] text-[#63544F] font-bold">Kunjungan Mitra</span>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold text-[#3A1E1A] group-hover:text-[#2563EB] transition-colors leading-tight">
                    School STEM Day & Lab Roadshow
                  </h3>
                  <p className="text-xs text-[#63544F] leading-relaxed">
                    Demo robotika interaktif, pameran kecerdasan buatan, dan arena uji coba robot langsung di sekolah Anda bersama tim NEXORANESIA.
                  </p>
                  <div className="pt-2 text-xs font-medium text-[#7A6A65] space-y-1">
                    <div>• Demo 15+ unit robot fungsional</div>
                    <div>• Sesi pengenalan kurikulum STEM</div>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-[#EDE6DD]/70">
                  <Link
                    href="/activities"
                    className="w-full py-2.5 rounded-full bg-[#EFF6FF] hover:bg-[#2563EB] text-[#2563EB] hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Undang Roadshow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. SHOWCASE PROYEK & KARYA INOVASI SISWA (PROJECTS)      */}
        {/* ======================================================== */}
        <section id="projects" className="py-20 bg-white border-y border-[#EDE6DD]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-[#FF7A3D] uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FDEEE7] border border-[#FADCD3] inline-block mb-2">
                  Showcase Portofolio
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#3A1E1A]">
                  Karya Nyata & <span className="text-[#FF7A3D] font-editorial">Proyek Riset Siswa</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#63544F] mt-1.5">
                  Bukti nyata kemampuan problem-solving dan inovasi teknologi generasi muda NEXORANESIA.
                </p>
              </div>

              <Link
                href="/projects"
                className="text-xs font-bold text-[#FF7A3D] hover:underline"
              >
                Lihat Semua Portofolio &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Project 1: Agrotech */}
              <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#EDE6DD] hover:border-[#FF7A3D] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md">
                <div className="space-y-3">
                  <div className="w-full h-44 rounded-2xl bg-white border border-[#EDE6DD] overflow-hidden relative">
                    <img
                      src="/images/robotics/line-follower.jpg"
                      alt="Smart Agrotech Hydroponic Monitoring Robot"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#43A574] text-white shadow-xs">
                      Juara 1 Youth Inovator
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors leading-snug">
                    Smart Agrotech Monitoring Robot
                  </h3>
                  <p className="text-xs text-[#63544F] line-clamp-3 leading-relaxed">
                    Robot inspeksi hidroponik cerdas dengan sensor nutrisi PPM, pH air, dan kamera AI edge computing rancangan siswa binaan.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {['ESP32', 'AI Vision', 'IoT Cloud'].map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#7A6A65] border border-[#EDE6DD]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-[#EDE6DD]">
                  <Link href="/projects" className="text-xs font-bold text-[#FF7A3D] hover:underline flex items-center justify-between">
                    <span>Detail Riset Proyek</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Project 2: Delta Striker Soccer Bot */}
              <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#EDE6DD] hover:border-[#FF7A3D] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md">
                <div className="space-y-3">
                  <div className="w-full h-44 rounded-2xl bg-white border border-[#EDE6DD] overflow-hidden relative">
                    <img
                      src="/images/robotics/soccer-bot.jpg"
                      alt="Delta Striker Robot Sepak Bola Holonomik"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FF7A3D] text-white shadow-xs">
                      Podium 2nd RoboCup
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors leading-snug">
                    Delta Striker Holonomic Robot
                  </h3>
                  <p className="text-xs text-[#63544F] line-clamp-3 leading-relaxed">
                    Robot sepak bola otonom berkecepatan 2.4 m/s dengan solenoid kicker 250V yang menjuarai panggung olimpiade ASEAN.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {['STM32', 'Holonomic', 'Olympiad'].map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#7A6A65] border border-[#EDE6DD]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-[#EDE6DD]">
                  <Link href="/projects" className="text-xs font-bold text-[#FF7A3D] hover:underline flex items-center justify-between">
                    <span>Detail Riset Proyek</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Project 3: Autonomous AMR */}
              <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#EDE6DD] hover:border-[#FF7A3D] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md">
                <div className="space-y-3">
                  <div className="w-full h-44 rounded-2xl bg-white border border-[#EDE6DD] overflow-hidden relative">
                    <img
                      src="/images/robotics/amr-robot.jpg"
                      alt="Autonomous AMR Logistics Robot"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2563EB] text-white shadow-xs">
                      Riset Industri
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl font-bold text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors leading-snug">
                    Autonomous Mobile Robot (AMR)
                  </h3>
                  <p className="text-xs text-[#63544F] line-clamp-3 leading-relaxed">
                    Platform robot otonom indoor dengan navigasi LiDAR SLAM 2D dan sensor ultrasonik untuk pemetaan gudang mandiri.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {['LiDAR SLAM', 'ROS2', 'Industrial IoT'].map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#7A6A65] border border-[#EDE6DD]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-[#EDE6DD]">
                  <Link href="/projects" className="text-xs font-bold text-[#FF7A3D] hover:underline flex items-center justify-between">
                    <span>Detail Riset Proyek</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 6. PRODUK & KIT ROBOTIKA POPULER                         */}
        {/* ======================================================== */}
        <section className="py-20 bg-white border-y border-[#EDE6DD]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-[#B45309] uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#FFF9E6] border border-[#FDE68A] inline-block mb-2">
                  Toko & Komponen
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#3A1E1A]">
                  Kit Robotika & <span className="text-[#FF7A3D] font-editorial">Komponen Siap Rakit</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#63544F] mt-1.5">
                  Starter kit lengkap untuk belajar mandiri di rumah atau laboratorium sekolah.
                </p>
              </div>

              <Link
                href="/store"
                className="text-xs font-bold text-[#FF7A3D] hover:underline"
              >
                Lihat Semua Produk &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STORE_ITEMS.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-3xl bg-[#FAF8F5] border border-[#EDE6DD] hover:border-[#FF7A3D] transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div className="w-full h-40 rounded-2xl bg-white border border-[#EDE6DD] overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      {item.isBestSeller && (
                        <span className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FF7A3D] text-white shadow-xs">
                          Best Seller
                        </span>
                      )}
                    </div>

                    <h3 className="font-editorial text-xl font-bold text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors line-clamp-2 leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-[11px] text-[#63544F] line-clamp-2">
                      {item.shortDesc}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-[#F4B740]">
                      <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
                      <span className="font-bold text-[#3A1E1A] text-[11px]">{item.rating}</span>
                      <span className="text-[#7A6A65] text-[10px]">({item.reviewsCount} ulasan)</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#EDE6DD] space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-[#7A6A65]">
                      <span>Ketersediaan:</span>
                      <span className="font-bold text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-full border border-[#C8E6C9]">
                        Stok {item.stock} unit
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(item)}
                      className="w-full py-2.5 rounded-full bg-white hover:bg-[#FF7A3D] hover:text-white border border-[#EDE6DD] hover:border-[#FF7A3D] text-[#3A1E1A] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Tambah Keranjang</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 5. TESTIMONI (Model Edufic Slideshow Sesuai Referensi)   */}
        {/* ======================================================== */}
        <section id="testimoni" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Kolom Kiri: Heading, Subhead & CTA Button */}
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
              <div className="relative bg-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl border border-stone-100 flex flex-col items-center justify-center min-h-[380px] text-center">
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
        {/* 8. CALL TO ACTION & KONTAK (CONTACT)                     */}
        {/* ======================================================== */}
        <section id="contact" className="py-20 bg-[#251310] text-white border-t border-[#3A1E1A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FF7A3D]/20 border border-[#FF7A3D]/40 text-xs uppercase tracking-[0.2em] text-[#FF9E6D] font-bold">
                MULAI LANGKAH INOVASI ANDA (CONTACT)
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

      <MenuDrawer
        isOpen={isMenuDrawerOpen}
        onClose={() => setIsMenuDrawerOpen(false)}
      />

      <EnrollmentModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        defaultCourseSlug={selectedCourseSlug}
      />
    </div>
  );
}
