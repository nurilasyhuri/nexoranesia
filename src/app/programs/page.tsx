'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EnrollmentModal } from '@/components/EnrollmentModal';
import { ACADEMY_COURSES } from '@/data/ecosystem';
import {
  GraduationCap,
  Bot,
  Code2,
  Cpu,
  Gamepad2,
  Globe,
  Radio,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Layers,
  ArrowRight,
} from 'lucide-react';

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAge, setSelectedAge] = useState<string>('All');
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string | undefined>(undefined);

  const categories = ['All', 'Coding', 'Robotics', 'AI', 'IoT', 'GameDev', 'WebDev'];
  const ageGroups = ['All', 'Kids (7-12 thn)', 'Teens (13-17 thn)', 'College / Adult (18+ thn)'];

  const filteredCourses = ACADEMY_COURSES.filter((course) => {
    const matchCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchAge = selectedAge === 'All' || course.ageGroup === selectedAge;
    return matchCategory && matchAge;
  });

  const handleEnroll = (courseTitle: string) => {
    setSelectedCourseSlug(courseTitle);
    setEnrollModalOpen(true);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Coding': return Code2;
      case 'Robotics': return Bot;
      case 'AI': return Cpu;
      case 'IoT': return Radio;
      case 'GameDev': return Gamepad2;
      case 'WebDev': return Globe;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar onOpenEnrollment={() => setEnrollModalOpen(true)} />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-16 md:py-24 bg-white border-b border-[#EDE6DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FDEEE7] text-[#FF7A3D] text-xs font-bold border border-[#FADCD3]">
              <GraduationCap className="w-4 h-4" />
              <span>NEXORANESIA PROGRAMS — Pusat Pembelajaran & Inkubasi Talenta Teknologi</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl text-[#3A1E1A] tracking-tight leading-tight">
              Kurikulum Holistik: Coding, Robotika & Kecerdasan Buatan
            </h1>

            <p className="text-sm sm:text-base text-[#63544F] max-w-2xl mx-auto leading-relaxed">
              Mulai dari pemrograman visual Scratch untuk pemula usia dini hingga rekayasa mekatronika olimpiade, mikrokontroler C++, dan Computer Vision berbasis industri.
            </p>

            {/* Quick Filter Pill Buttons */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-[#7A6A65] mr-2 font-semibold">Bidang:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#FF7A3D] text-white shadow-md shadow-[#FF7A3D]/25'
                      : 'bg-[#FAF8F5] border border-[#EDE6DD] text-[#3A1E1A] hover:bg-[#F3ECE4]'
                  }`}
                >
                  {cat === 'All' ? 'Semua Bidang' : cat}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-[#7A6A65] mr-2 font-semibold">Rentang Usia:</span>
              {ageGroups.map((age) => (
                <button
                  key={age}
                  onClick={() => setSelectedAge(age)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedAge === age
                      ? 'bg-[#43A574] text-white shadow-xs'
                      : 'bg-white border border-[#EDE6DD] text-[#63544F] hover:text-[#3A1E1A]'
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
          <div className="mb-6 flex justify-between items-center text-xs text-[#7A6A65]">
            <div>
              Menampilkan <span className="font-bold text-[#3A1E1A]">{filteredCourses.length}</span> program pembelajaran
            </div>
            <div className="flex items-center gap-2 text-[#43A574] font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#43A574]" />
              <span>Sertifikat Resmi & Free Starter Hardware Kit</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => {
              const Icon = getCategoryIcon(course.category);
              const isSyllabusOpen = expandedSyllabus === course.id;

              return (
                <div
                  key={course.id}
                  className="rounded-3xl bg-white border border-[#EDE6DD] hover:border-[#FF7A3D] transition-all flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl group"
                >
                  {/* Card Header & Badges */}
                  <div className="p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-[#FDEEE7] text-[#FF7A3D] border border-[#FADCD3]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A3D]">
                          {course.category} • {course.level}
                        </span>
                      </div>
                      {course.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E8F7F0] text-[#43A574] border border-[#CCEEDB]">
                          {course.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-extrabold text-xl text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors">
                        {course.title}
                      </h3>
                      <div className="text-xs text-[#7A6A65] mt-1 flex items-center gap-3">
                        <span className="text-[#FF7A3D] font-bold">{course.ageGroup}</span>
                        <span>•</span>
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#63544F] leading-relaxed">
                      {course.description}
                    </p>

                    {/* Skills Checklist */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[11px] font-bold text-[#8A7974] uppercase tracking-wider block">
                        Kompetensi Utama:
                      </span>
                      <div className="grid grid-cols-1 gap-1">
                        {course.skillsLearned.map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[#3A1E1A]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#43A574] shrink-0" />
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
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#FAF8F5] text-[#63544F] border border-[#EDE6DD]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Syllabus Accordion */}
                    <div className="pt-2 border-t border-[#EDE6DD]">
                      <button
                        onClick={() => setExpandedSyllabus(isSyllabusOpen ? null : course.id)}
                        className="w-full flex items-center justify-between text-xs font-bold text-[#FF7A3D] hover:text-[#F06543] py-1 cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Silabus 4 Modul Lengkap</span>
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSyllabusOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isSyllabusOpen && (
                        <div className="mt-3 space-y-2 text-xs bg-[#FAF8F5] p-3 rounded-2xl border border-[#EDE6DD] animate-in fade-in duration-200">
                          {course.syllabus.map((mod, i) => (
                            <div key={i} className="border-b border-[#EDE6DD]/80 pb-2 last:border-0 last:pb-0">
                              <div className="font-bold text-[#3A1E1A] text-[11px]">{mod.title}</div>
                              <div className="text-[10px] text-[#7A6A65] mt-0.5">{mod.desc}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer & Action Button */}
                  <div className="p-6 bg-[#FAF8F5] border-t border-[#EDE6DD] space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#7A6A65]">
                      <span>Jadwal Kelas:</span>
                      <strong className="text-[#3A1E1A] font-semibold">{course.meetings}</strong>
                    </div>

                    <button
                      onClick={() => handleEnroll(course.title)}
                      className="w-full py-3 rounded-xl bg-[#FF7A3D] hover:bg-[#F06543] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-[#FF7A3D]/20 cursor-pointer active:scale-95"
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
      </main>

      <Footer />

      <EnrollmentModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        defaultCourseSlug={selectedCourseSlug}
      />
    </div>
  );
}
