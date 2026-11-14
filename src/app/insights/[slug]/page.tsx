import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles';
import { COMPANY_INFO } from '@/data/ecosystem';
import {
  BookOpen,
  Clock,
  Calendar,
  User,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Share2,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan | NEXORANESIA',
    };
  }

  const canonicalUrl = `https://nexoranesia.id/insights/${article.slug}`;

  return {
    title: `${article.seoTitle || article.title} | NEXORANESIA`,
    description: article.description,
    keywords: article.tags,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: canonicalUrl,
      siteName: 'NEXORANESIA Insights',
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [
        {
          url: article.heroImage || '/images/hero/slide-1.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.heroImage || '/images/hero/slide-1.jpg'],
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article.slug, article.category, 3);
  const waConsultText = encodeURIComponent(
    `Halo NEXORANESIA, saya baru membaca artikel "${article.title}" dan ingin konsultasi lebih lanjut.`
  );

  // Schema.org Structured Data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `https://nexoranesia.id${article.heroImage || '/images/hero/slide-1.jpg'}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NEXORANESIA',
      url: 'https://nexoranesia.id',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://nexoranesia.id/insights/${article.slug}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: 'https://nexoranesia.id',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Insights',
        item: 'https://nexoranesia.id/insights',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://nexoranesia.id/insights/${article.slug}`,
      },
    ],
  };

  const faqSchema =
    article.faqs && article.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.a,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3A1E1A] flex flex-col">
      <Navbar />

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <section className="bg-white border-b border-stone-200 py-3.5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-xs text-stone-500 overflow-x-auto whitespace-nowrap">
              <Link href="/" className="hover:text-[#FF7A3D] transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0 text-stone-400" />
              <Link href="/insights" className="hover:text-[#FF7A3D] transition-colors">
                Insights
              </Link>
              <ChevronRight className="w-3.5 h-3.5 shrink-0 text-stone-400" />
              <span className="text-stone-800 font-medium truncate max-w-[280px] sm:max-w-md">
                {article.title}
              </span>
            </nav>
          </div>
        </section>

        {/* Article Header & Meta */}
        <article className="py-10 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            {/* Badges & Meta */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDEEE7] text-[#FF7A3D] font-black uppercase tracking-wider border border-[#FADCD3]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{article.category}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 text-stone-600 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <h1 className="font-editorial font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#3A1E1A] leading-tight tracking-tight">
                {article.title}
              </h1>

              {/* Author & Date Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-b border-stone-200 py-3.5 text-xs text-stone-600">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7A3D] to-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    {article.author.charAt(0)}
                  </div>
                  <div>
                    <strong className="text-[#3A1E1A] block font-bold text-sm leading-tight">
                      {article.author}
                    </strong>
                    <span className="text-[11px] text-[#8C7A75] font-medium">
                      {article.authorRole}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-stone-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{article.publishDate}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            {article.heroImage && (
              <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden border-2 border-[#EDE6DD] shadow-md bg-stone-100">
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                  priority
                />
              </div>
            )}

            {/* Intro Lead */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#EDE6DD] shadow-xs">
              <p className="text-base sm:text-lg text-[#562D29] leading-relaxed font-normal">
                {article.intro}
              </p>
            </div>

            {/* Section 1: In-depth Content */}
            <section className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE6DD]">
              <h2 className="font-editorial font-extrabold text-2xl sm:text-3xl text-[#3A1E1A] tracking-tight">
                {article.section1Title}
              </h2>
              <div className="text-sm sm:text-base text-[#63544F] leading-relaxed space-y-4">
                <p>{article.section1Content}</p>
              </div>
            </section>

            {/* Expert Tips / Catatan Mentor */}
            {article.expertTips && article.expertTips.length > 0 && (
              <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-white border-2 border-amber-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-amber-900 font-editorial font-extrabold text-lg sm:text-xl">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <h3>Catatan Mentor & Poin Kritis Lapangan</h3>
                </div>
                <div className="space-y-3">
                  {article.expertTips.map((tip, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white/90 p-4 rounded-2xl border border-amber-200/60 text-xs sm:text-sm text-[#4A2D27] leading-relaxed"
                    >
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 2: Technical Table */}
            {article.tableHeaders && article.tableRows && (
              <section className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE6DD]">
                <h2 className="font-editorial font-extrabold text-xl sm:text-2xl text-[#3A1E1A] tracking-tight">
                  {article.tableTitle}
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-stone-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#FAF8F5] text-[#3A1E1A] border-b border-stone-200 font-bold uppercase tracking-wider text-[11px]">
                      <tr>
                        {article.tableHeaders.map((head, i) => (
                          <th key={i} className="py-3 px-4 sm:px-5">
                            {head}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-[#562D29]">
                      {article.tableRows.map((row, i) => (
                        <tr key={i} className="hover:bg-stone-50/80 transition-colors">
                          {row.map((cell, j) => (
                            <td key={j} className="py-3.5 px-4 sm:px-5 leading-normal">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Section 3: Practical Steps */}
            {article.steps && article.steps.length > 0 && (
              <section className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE6DD]">
                <h2 className="font-editorial font-extrabold text-xl sm:text-2xl text-[#3A1E1A] tracking-tight">
                  {article.section3Title}
                </h2>
                <div className="grid grid-cols-1 gap-4 pt-2">
                  {article.steps.map((st, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EDE6DD] space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#FF7A3D] text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="font-bold text-sm sm:text-base text-[#3A1E1A]">
                          {st.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#63544F] pl-8 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {article.faqs && article.faqs.length > 0 && (
              <section className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#EDE6DD]">
                <div className="flex items-center gap-2 font-editorial font-extrabold text-xl sm:text-2xl text-[#3A1E1A]">
                  <HelpCircle className="w-5 h-5 text-[#FF7A3D]" />
                  <h2>Tanya Jawab Teknis (FAQ)</h2>
                </div>
                <div className="space-y-3 pt-2">
                  {article.faqs.map((f, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EDE6DD] space-y-2"
                    >
                      <h4 className="font-bold text-sm sm:text-base text-[#3A1E1A]">
                        {f.q}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#63544F] leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs text-stone-500 font-semibold mr-1">Kata Kunci:</span>
                {article.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white border border-stone-200 text-xs text-stone-600"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Conversion CTA Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#251310] via-[#331B17] to-[#251310] text-white shadow-xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Konsultasi Program & Hardware NEXORANESIA</span>
              </div>

              <h3 className="font-editorial font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                {article.ctaTitle || 'Tertarik Mengembangkan Minat Teknologi Bersama Kami?'}
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
                {article.ctaText ||
                  'NEXORANESIA menghadirkan ekosistem pembelajaran coding, robotika, dan AI terlengkap dengan kurikulum terstruktur dan bimbingan mentor berpengalaman.'}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${waConsultText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#FF7A3D] hover:bg-[#F06543] active:scale-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#FF7A3D]/30 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konsultasi Gratis via WhatsApp</span>
                </a>
                <Link
                  href="/programs"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
                >
                  Lihat Pilihan Kelas
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            {related.length > 0 && (
              <section className="pt-10 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-editorial font-extrabold text-2xl text-[#3A1E1A]">
                    Artikel Terkait Lainnya
                  </h3>
                  <Link
                    href="/insights"
                    className="text-xs font-bold text-[#FF7A3D] hover:underline flex items-center gap-1"
                  >
                    <span>Lihat Semua</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/insights/${rel.slug}`}
                      className="group p-5 rounded-2xl bg-white border border-[#EDE6DD] hover:border-[#FF7A3D] transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
                    >
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FDEEE7] text-[#FF7A3D]">
                          {rel.category}
                        </span>
                        <h4 className="font-bold text-sm text-[#3A1E1A] group-hover:text-[#FF7A3D] transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                        <p className="text-xs text-[#63544F] line-clamp-2 leading-relaxed">
                          {rel.description}
                        </p>
                      </div>
                      <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                        <span>{rel.readTime}</span>
                        <span className="font-bold text-[#FF7A3D] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Baca <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
