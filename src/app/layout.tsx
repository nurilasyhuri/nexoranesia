import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { CartDrawer } from '@/components/CartDrawer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { COMPANY_INFO } from '@/data/ecosystem';

export const metadata: Metadata = {
  metadataBase: new URL('https://nexoranesia.com'),
  title: `${COMPANY_INFO.name}: Ekosistem Edukasi Robotika, Coding & Solusi Rekayasa STEAM Indonesia`,
  description: `${COMPANY_INFO.description} Pusat pelatihan coding anak, robotika canggih, komponen elektronika ESP32, mentoring kompetisi dunia, dan pembangunan Lab STEM sekolah di Indonesia.`,
  keywords: [
    'NEXORANESIA',
    'kursus coding anak',
    'kursus robotika Malang',
    'robot soccer RCJ',
    'toko robotika Indonesia',
    'komponen Arduino ESP32',
    'mentoring olimpiade robot WRO FLL',
    'laboratorium STEM sekolah',
    'pelatihan guru informatika',
  ],
  authors: [{ name: 'NEXORANESIA Digital Ecosystem' }],
  creator: 'PT Nexoranesia Teknologi Nusantara',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "NEXORANESIA: Robotika & Edukasi STEAM Terpadu",
    description: 'Ekosistem Pendidikan, Robotika, Komponen, dan Solusi Rekayasa di Indonesia.',
    url: 'https://nexoranesia.com',
    siteName: 'NEXORANESIA Ecosystem',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#FAF8F5] text-[#3A1E1A] antialiased min-h-screen flex flex-col selection:bg-[#FF7A3D] selection:text-white">
        <CartProvider>
          {children}
          <CartDrawer />
          <WhatsAppWidget />
        </CartProvider>
      </body>
    </html>
  );
}
