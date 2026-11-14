'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/lib/articles';
import {
  BookOpen,
  Clock,
  ArrowRight,
  Search,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface Props {
  articles: Article[];
}

export function InsightsContent({ articles }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Semua',
    'Robotika',
    'Coding',
    'Artificial Intelligence',
    'Kompetisi & Olimpiade',
    'STEM & Lab Sekolah',
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCat =
      selectedCategory === 'Semua' ||
      art.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch =
      searchQuery === '' ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      {/* Search & Category Filter Bar */}
      <section className="py-8 bg-white border-b border-[#EDE6DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#FF7A3D] text-white shadow-sm'
                      : 'bg-[#FAF8F5] text-[#562D29] hover:bg-[#FDEEE7] border border-[#EDE6DD]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari artikel, topik, sensor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#EDE6DD] text-xs text-[#3A1E1A] focus:outline-none focus:border-[#FF7A3D]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#8C7A75] pt-2 border-t border-stone-100">
            <span>
              Menampilkan <strong>{filteredArticles.length}</strong> artikel SEO
              terpublikasi
            </span>
            <span className="text-[#FF7A3D] font-bold">
              Update Harian • 7 Artikel Baru / Hari
            </span>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#EDE6DD] p-8 space-y-3">
            <BookOpen className="w-10 h-10 text-stone-300 mx-auto" />
            <h3 className="font-bold text-lg text-[#3A1E1A]">Tidak ada artikel ditemukan</h3>
            <p className="text-xs text-[#8C7A75]">
              Coba ganti kata kunci pencarian atau pilih kategori lain.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article
                key={art.slug}
                className="rounded-3xl bg-white border border-[#EDE6DD] hover:border-[#FF7A3D] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg hover:-translate-y-1 group overflow-hidden"
              >
                <div>
                  {/* Thumbnail Image */}
                  {art.heroImage && (
                    <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                      <Image
                        src={art.heroImage}
                        alt={art.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#3A1E1A] shadow-xs border border-stone-200">
                          {art.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 z-10">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {art.readTime}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <h2 className="font-editorial font-extrabold text-lg text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors line-clamp-2 leading-snug">
                      <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                    </h2>

                    <p className="text-xs text-[#63544F] line-clamp-3 leading-relaxed">
                      {art.description}
                    </p>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-[#8C7A75]">
                      <span className="font-semibold text-[#3A1E1A] truncate max-w-[150px]">
                        {art.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-stone-400" />
                        {art.publishDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/insights/${art.slug}`}
                    className="w-full py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#FF7A3D] hover:text-white text-[#3A1E1A] font-bold text-xs flex items-center justify-center gap-1.5 transition-all border border-[#EDE6DD] group-hover:border-[#FF7A3D] shadow-2xs"
                  >
                    <span>Baca Artikel Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
