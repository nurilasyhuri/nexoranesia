'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { STORE_ITEMS } from '@/data/ecosystem';
import {
  Cpu,
  ShoppingBag,
  Search,
  Star,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Sparkles,
} from 'lucide-react';

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'rating'>('featured');
  const { addToCart, openCart } = useCart();

  const categories = [
    'All',
    'Robotics Kit',
    'Microcontroller',
    'Sensors',
    'Motors',
    'Robot Parts',
    'Tools',
  ];

  const filteredItems = STORE_ITEMS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative py-14 md:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Cpu className="w-4 h-4 text-amber-600" />
              <span>NEXORANESIA STORE — Hardware & Electronics Maker Hub</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              Toko Kit Robotika, Komponen & Perkakas
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Penyedia resmi starter kit robotika edukasi, mikrokontroler ESP32 & Arduino, modul sensor presisi, aktuator servo, dan peralatan bengkel mekatronika.
            </p>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Produk Original & Bergaransi
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Truck className="w-4 h-4 text-amber-600" /> Pengiriman Cepat Seluruh Indonesia (JNE/SiCepat/J&T)
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-4 h-4 text-emerald-600" /> Free Video Tutorial Pembelajaran Tiap Kit
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Melayani Pengadaan Sekolah & Faktur Pajak
              </span>
            </div>
          </div>
        </section>

        {/* Store Control Bar: Search, Category, Sorting */}
        <section className="py-6 bg-white/90 border-b border-slate-200 sticky top-16 z-30 backdrop-blur-md shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari kit, Arduino, ESP32, sensor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-white shadow-2xs'
                      : 'bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'All' ? 'Semua Produk' : cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs text-slate-600 self-end md:self-auto font-medium">
              <span>Urutan:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-amber-500"
              >
                <option value="featured">Unggulan</option>
                <option value="name">Nama Produk</option>
                <option value="rating">Rating Tertinggi</option>
              </select>
            </div>
          </div>
        </section>

        {/* Product Catalog Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-between items-center text-xs text-slate-500">
            <div>
              Menampilkan <span className="font-bold text-slate-900">{filteredItems.length}</span> produk
            </div>
            <button
              onClick={openCart}
              className="text-amber-600 hover:underline flex items-center gap-1 font-bold"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Buka Keranjang</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div className="space-y-3">
                  <div className="w-full h-44 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative group-hover:border-amber-400 transition-colors">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />

                    {item.isBestSeller && (
                      <span className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500 text-white shadow-sm">
                        Best Seller
                      </span>
                    )}
                    {item.isNew && (
                      <span className="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-sm">
                        New
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
                    {item.shortDesc}
                  </p>

                  <ul className="space-y-1 text-[10.5px] text-slate-600 pt-1 border-t border-slate-100">
                    {item.specs.slice(0, 2).map((s, idx) => (
                      <li key={idx} className="flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="truncate">{s}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-bold text-slate-800 text-[11px]">{item.rating}</span>
                      <span className="text-slate-400 text-[10px]">({item.reviewsCount})</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium">
                      Stok: <strong className="text-emerald-700 font-bold">{item.stock} unit</strong>
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 space-y-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Pesan / Tambah Keranjang</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
