import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getAllArticles } from '@/lib/articles';
import { InsightsContent } from '@/components/InsightsContent';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Artikel & Panduan Robotika - NEXORANESIA',
  description:
    'Pusat edukasi dan panduan praktis coding anak, perakitan robotika, tuning PID, artificial intelligence, persiapan olimpiade WRO, dan pembangunan lab STEM sekolah.',
  alternates: {
    canonical: 'https://nexoranesia.id/insights',
  },
  openGraph: {
    title: 'Artikel & Panduan Robotika - NEXORANESIA',
    description:
      'Panduan mendalam tentang coding anak, tutorial merakit robot pemula, machine learning, kiat juara olimpiade, hingga strategi mendirikan Lab STEM sekolah.',
    url: 'https://nexoranesia.id/insights',
    siteName: 'NEXORANESIA Insights',
    type: 'website',
  },
};

export default function InsightsPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-16 md:py-24 bg-white border-b border-[#EDE6DD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FF7A3D]">
              Materi &amp; Panduan Teknis
            </p>

            <h1 className="font-editorial font-extrabold text-3xl sm:text-5xl text-[#3A1E1A] tracking-tight">
              Artikel &amp; Panduan Robotika
            </h1>

            <p className="text-sm sm:text-base text-[#63544F] max-w-2xl mx-auto leading-relaxed">
              Panduan mendalam seputar coding anak, tutorial merakit robot pemula, tuning PID kompetisi, pemanfaatan AI, persiapan olimpiade WRO, dan perancangan Lab STEM sekolah.
            </p>
          </div>
        </section>

        {/* Dynamic Articles Content with Filters & Search */}
        <InsightsContent articles={articles} />
      </main>

      <Footer />
    </div>
  );
}
