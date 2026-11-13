'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EnrollmentModal } from '@/components/EnrollmentModal';
import { ACADEMY_COURSES } from '@/data/ecosystem';
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  ShieldCheck,
  Code2,
  Bot,
  Brain,
  Gamepad2,
  Globe,
  Radio,
  Layers,
} from 'lucide-react';

export default function AcademyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAge, setSelectedAge] = useState<string>('All');
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [activeCourseTitle, setActiveCourseTitle] = useState<string | undefined>(undefined);
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null);

  const categories = ['All', 'Coding', 'Robotics', 'AI', 'IoT', 'GameDev', 'WebDev'];
  const ageGroups = ['All', 'Kids (7-12 thn)', 'Teens (13-17 thn)', 'College / Adult (18+ thn)'];

  const filteredCourses = ACADEMY_COURSES.filter((c) => {
    const matchCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchAge = selectedAge === 'All' || c.ageGroup === selectedAge;
    return matchCat && matchAge;
  });

  const handleEnroll = (title: string) => {
    setActiveCourseTitle(title);
    setEnrollModalOpen(true);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Coding': return Code2;
      case 'Robotics': return Bot;
      case 'AI': return Brain;
      case 'IoT': return Radio;
      case 'GameDev': return Gamepad2;
      case 'WebDev': return Globe;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>NEXORANESIA ACADEMY — Pusat Pelatihan Teknologi Terdepan</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Katalog Program Kursus & Inkubasi Talenta
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Mulai dari pemrograman visual Scratch untuk anak-anak hingga rekayasa robotika olimpiade, mikrokontroler C++, dan Artificial Intelligence berstandar industri.
            </p>

            {/* Quick Filter Pill Buttons */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-slate-500 mr-2 font-semibold">Kategori:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {cat === 'All' ? 'Semua Bidang' : cat}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-slate-500 mr-2 font-semibold">Rentang Usia:</span>
              {ageGroups.map((age) => (
                <button
                  key={age}
                  onClick={() => setSelectedAge(age)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedAge === age
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-black'
                  }`}
                >
                  {age === 'All' ? 'Semua Usia' : age}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Listing */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center text-xs text-slate-500">
            <div>
              Menampilkan <span className="font-bold text-slate-900">{filteredCourses.length}</span> program pembelajaran
            </div>
            <div className="flex items-center gap-2 text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Sertifikat Resmi & Free Kit Siswa</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => {
              const Icon = getCategoryIcon(course.category);
              const isSyllabusOpen = expandedSyllabus === course.id;

              return (
                <div
                  key={course.id}
                  className="rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl"
                >
                  {/* Card Header & Badges */}
                  <div className="p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                          {course.category} • {course.level}
                        </span>
                      </div>
                      {course.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-xl text-slate-900">
                        {course.title}
                      </h3>
                      <div className="text-xs text-slate-500 mt-1 flex items-center gap-3">
                        <span className="text-amber-700 font-bold">{course.ageGroup}</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Skills Checklist */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Kompetensi yang Dikuasai:
                      </span>
                      <div className="grid grid-cols-1 gap-1">
                        {course.skillsLearned.map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools Used Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {course.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Syllabus Accordion */}
                    <div className="pt-2 border-t border-slate-100">
                      <button
                        onClick={() => setExpandedSyllabus(isSyllabusOpen ? null : course.id)}
                        className="w-full flex items-center justify-between text-xs font-bold text-amber-700 hover:text-amber-800 py-1"
                      >
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Silabus 4 Modul Lengkap</span>
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSyllabusOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isSyllabusOpen && (
                        <div className="mt-3 space-y-2 text-xs bg-slate-50 p-3 rounded-2xl border border-slate-200 animate-in fade-in duration-200">
                          {course.syllabus.map((mod, i) => (
                            <div key={i} className="border-b border-slate-200/80 pb-2 last:border-0 last:pb-0">
                              <div className="font-bold text-slate-800 text-[11px]">{mod.title}</div>
                              <div className="text-[10px] text-slate-500 mt-0.5">{mod.desc}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer & Action Button */}
                  <div className="p-6 bg-slate-50/80 border-t border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Jadwal & Pertemuan:</span>
                      <strong className="text-slate-800 font-semibold">{course.meetings}</strong>
                    </div>

                    <button
                      onClick={() => handleEnroll(course.title)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-105 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20"
                    >
                      <GraduationCap className="w-4 h-4" />
                      <span>Daftar / Konsultasi Jadwal</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Learning Methodology */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-slate-900">
                Metodologi Belajar Standar NEXORANESIA
              </h2>
              <p className="text-xs text-slate-500">
                Kami memastikan setiap peserta tidak hanya menghafal konsep abstrak, melainkan merakit karya yang membanggakan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 w-fit">
                  <Bot className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900">1 Siswa 1 Kit Eksklusif</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tidak ada sistem rebutan peralatan. Setiap siswa memegang set robotika dan modul elektronika sendiri untuk melatih kemandirian merakit dan memprogram.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 w-fit">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900">Project-Based Portfolio</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Setiap bab modul pembelajaran diakhiri dengan capstone project nyata: game yang bisa dimainkan, robot yang mampu bernavigasi mandiri, atau prototipe IoT cerdas.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="p-3 rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 w-fit">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900">Jalur Prestasi Olimpiade</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Siswa yang menunjukkan bakat istimewa akan direkomendasikan langsung masuk ke program pembinaan khusus kompetisi WRO dan FLL bersama tim NEXORANESIA Competition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <EnrollmentModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        defaultCourseSlug={activeCourseTitle}
      />
    </div>
  );
}
