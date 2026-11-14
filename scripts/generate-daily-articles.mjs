import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const articlesDir = path.join(projectRoot, 'src', 'content', 'articles');

function ensureArticlesDir() {
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }
}

function getIndonesianDate(date = new Date()) {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  const wibDate = new Date(utc + (3600000 * 7));
  const day = wibDate.getDate();
  const month = months[wibDate.getMonth()];
  const year = wibDate.getFullYear();
  return `${day} ${month} ${year}`;
}

const CORNERSTONE_ARTICLES = [
  {
    slug: 'panduan-belajar-coding-anak-scratch-sampai-python',
    title: 'Panduan Lengkap Belajar Coding Anak dari Nol: Tahapan dari Scratch Visual Hingga Sintaks Python',
    seoTitle: 'Panduan Belajar Coding Anak dari Scratch ke Python',
    description: 'Panduan terstruktur mengenalkan coding pada anak usia 6-15 tahun. Alur belajar computational thinking, logika blok Scratch 3.0, hingga transisi ke Python nyata.',
    category: 'Coding',
    tags: ['coding anak', 'belajar scratch 3.0', 'python untuk pemula', 'computational thinking', 'kurikulum coding'],
    heroImage: '/images/academy/scratch-coding.jpg',
    readTime: '6 Menit Baca',
    author: 'Tim Kurikulum NEXORANESIA Academy',
    authorRole: 'Head of STEAM Curriculum',
    intro: 'Banyak orang tua dan pendidik bertanya-tanya kapan waktu paling tepat mengenalkan pemrograman kepada anak. Di era kecerdasan buatan, belajar coding bukan sekadar menghafal sintaksis kode bahasa industri, melainkan membangun pondasi Computational Thinking: kemampuan mendekomposisi masalah rumit, mengenali pola, berpikir abstrak, dan merancang algoritma sistematis sejak dini.',
    section1Title: 'Prinsip Bertahap: Dari Manipulatif Visual Menuju Kode Tekstual',
    section1Content: 'Anak usia sekolah dasar (6–10 tahun) membutuhkan umpan balik visual instan. Memaksa mereka langsung menghafal tanda kurung, titik koma, dan error syntax pada bahasa tekstual seperti C++ atau Python justru memicu rasa frustrasi. Karena itu, metodologi standar NEXORANESIA membagi pembelajaran menjadi tiga jenjang: Exploratory Block Coding (Scratch), Physical Computing (Robotika Terhubung), dan Applied Text-based Scripting (Python & AI).',
    expertTips: [
      'Fokus Pada Logika, Bukan Menghafal Sintaks: Biarkan anak bereksperimen dengan blok perulangan (loops) dan pengkondisian (if-else) pada animasi cerita Scratch sebelum berpindah ke baris kode.',
      'Gunakan Siklus Debugging Positif: Ajarkan anak bahwa error atau bug bukanlah kegagalan, melainkan petunjuk logis bahwa ada asumsi logika yang perlu diuji kembali satu per satu.',
      'Koneksikan Kode ke Dunia Nyata: Hubungkan perintah kode di layar komputer ke pergerakan motor atau sensor fisik pada kit robot agar konsep variabel menjadi konkret.'
    ],
    tableTitle: 'Tabel Tahapan Perkembangan Belajar Coding Anak Berdasarkan Usia',
    tableHeaders: ['Kelompok Usia', 'Fase Pembelajaran', 'Platform & Bahasa', 'Fokus Keterampilan Kunci', 'Luaran Proyek Siswa'],
    tableRows: [
      ['Usia 6 – 8 Tahun', 'Pre-Coding & Logika Spasial', 'Scratch Jr / Visual Block', 'Urutan perintah beruntun (sequencing), arah, loop sederhana', 'Animasi interaktif kartu ucapan & labirin cerdas'],
      ['Usia 8 – 11 Tahun', 'Computational Thinking Dasar', 'Scratch 3.0 & Robotika Blok', 'Variabel, koordinat X-Y, kondisi logika, event handling', 'Game arcade 2D, kalkulator visual, gerak robot line tracer'],
      ['Usia 11 – 14 Tahun', 'Physical Computing & I/O', 'Block-to-Text & Arduino C++', 'Sinyal digital/analog, PWM motor, membaca sensor ultrasonik', 'Robot penjinak rintangan otonom & smart home miniature'],
      ['Usia 14 – 18 Tahun', 'Professional Text Scripting', 'Python 3, OpenCV & Web', 'Struktur data (list, dict), fungsi, modul AI visual, telemetri', 'Pengenal gestur tangan webcam, IoT dashboard cloud']
    ],
    section3Title: 'Langkah Praktis Memulai Kelas Coding Pertama di Rumah atau Sekolah',
    steps: [
      { title: 'Mulai dengan Akun Online Scratch Gratis', desc: 'Buka scratch.mit.edu dan ajak anak membuat karakter (sprite) bergerak 10 langkah saat tombol spasi ditekan.' },
      { title: 'Tantang Anak Membuat Game Mini', desc: 'Buat proyek game menangkap buah jatuh menggunakan variabel skor yang bertambah saat tersentuh keranjang.' },
      { title: 'Perkenalkan Konsep Perulangan Dinamis', desc: 'Ajarkan blok selamanya (forever loop) untuk mendeteksi tabrakan dinding dan gravitasi buatan.' },
      { title: 'Ajak Anak Mempresentasikan Karyanya', desc: 'Latih kemampuan komunikasi siswa dengan meminta mereka menjelaskan alur logika game kepada orang tua atau teman sekelas.' }
    ],
    faqs: [
      { q: 'Apakah anak harus mahir matematika terlebih dahulu untuk belajar coding?', a: 'Tidak. Pembelajaran coding di jenjang awal justru membantu anak memahami konsep matematika seperti koordinat kartesius, sudut derajat, pecahan, dan probabilitas secara visual dan menyenangkan.' },
      { q: 'Berapa durasi ideal anak belajar coding dalam satu minggu?', a: 'Satu hingga dua sesi terstruktur per minggu (masing-masing 90 menit) sudah sangat efektif untuk mengasah konsentrasi tanpa menimbulkan kejenuhan di depan layar.' }
    ],
    ctaTitle: 'Ingin Anak Anda Belajar Coding dengan Kurikulum Terarah?',
    ctaText: 'Daftarkan putra-putri Anda dalam sesi Free Trial Class di NEXORANESIA Academy. Fasilitas lab berstandar internasional dengan mentor berpengalaman.'
  },
  {
    slug: 'cara-merakit-robot-line-follower-cepat-lomba-pid',
    title: 'Cara Merakit Robot Line Follower Cepat untuk Lomba: Rumus Sensor PID, Motor DC, & Kalibrasi Track',
    seoTitle: 'Merakit Robot Line Follower Lomba Cepat dengan Tuning PID',
    description: 'Panduan teknis merakit robot line follower analog & mikro untuk kompetisi. Rumus algoritma PID, kalibrasi photodioda sensor bar, pemilihan gear ratio motor, dan baterai LiPo.',
    category: 'Robotika',
    tags: ['robot line follower', 'algoritma pid line follower', 'merakit robot lomba', 'tuning motor dc', 'sensor photodioda'],
    heroImage: '/images/academy/amr-rover.jpg',
    readTime: '8 Menit Baca',
    author: 'Tim Rekayasa NEXORANESIA Robotics',
    authorRole: 'Head of Robotics R&D',
    intro: 'Dalam arena lomba robot line follower, selisih waktu 0,05 detik adalah penentu antara juara podium dan tereliminasi di babak penyisihan. Membuat robot yang sekadar bisa berjalan mengikuti garis hitam sangatlah mudah. Namun, membangun robot yang mampu melibas tikungan tajam 90 derajat, perempatan, tanjakan, dan garis putus-putus pada kecepatan tinggi menuntut integrasi presisi antara sasis mekanik, sirkuit daya, barisan sensor, dan kontrol algoritma PID.',
    section1Title: 'Arsitektur Kunci: Barisan Sensor, Driver Motor, dan Kontroler',
    section1Content: 'Line follower modern menggunakan barisan sensor photodioda atau fototransistor minimal 8 hingga 14 titik dengan multiplexer. Setiap sensor membaca perbedaan intensitas pantulan cahaya LED inframerah pada garis hitam dan lantai putih. Data posisi garis diubah menjadi nilai error offset dari titik tengah robot, yang kemudian diproses mikrokontroler (ATmega328P, STM32, atau ESP32) untuk mengkalkulasi output kecepatan motor kiri dan kanan.',
    expertTips: [
      'Gunakan Algoritma Auto-Kalibrasi Awal: Jangan meng-hardcode nilai ambang (threshold) sensor di program. Buat rutin kalibrasi di mana robot memutar sensor di atas garis saat tombol start ditekan untuk merekam nilai MAX dan MIN pembacaan ADC.',
      'Perhatikan Pusat Gravitasi (Center of Gravity): Pasang baterai LiPo di bagian paling bawah sasis mendekati sumbu roda penggerak. Titik gravitasi yang terlalu tinggi menyebabkan roda terangkat dan selip saat bermanuver di tikungan tajam.',
      'Pilih Driver Motor MOSFET Berhambatan Rendah: Driver seperti TB6612FNG atau MOSFET discrete jauh lebih dingin dan responsif terhadap frekuensi PWM tinggi dibanding IC driver lama L298N yang menjatuhkan tegangan hingga 2 Volt.'
    ],
    tableTitle: 'Tabel Pemilihan Komponen Kritis Robot Line Follower Kompetisi',
    tableHeaders: ['Komponen Inti', 'Standar Pemula / Sekolah', 'Spesifikasi Khusus Juara Lomba', 'Alasan Keunggulan Teknis'],
    tableRows: [
      ['Mikrokontroler', 'Arduino Nano (ATmega328P 16MHz)', 'STM32F401 / ESP32-S3 (84–240MHz)', 'Loop frekuensi PID hingga 1.000 Hz menghasilkan respon koreksi motor ultra-halus'],
      ['Array Sensor Bar', '4 – 6 Titik Photodioda Tunggal', '8 – 14 Titik Phototransistor + ADC 12-bit', 'Resolusi pembacaan posisi garis hingga desimal milimeter'],
      ['Motor Penggerak', 'DC Gearbox Kuning 1:48 (100 RPM)', 'Coreless DC Motor Neodymium 10:1 (1.000–3.000 RPM)', 'Torsi akselerasi kilat dan bobot motor di bawah 25 gram'],
      ['Ban & Roda', 'Roda Karet Plastik Standar', 'Velg Duralumin Bubut + Karet Silikon Halus Cor', 'Grip traksi maksimal tanpa selip di atas karpet vinyl arena'],
      ['Sumber Daya Baterai', 'Baterai Kotak 9V Alkaline', 'LiPo 2S – 3S 850mAh Discharge Rate 45C', 'Tegangan stabil tanpa tegangan drop mendadak saat akselerasi penuh']
    ],
    section3Title: 'Panduan Tuning Nilai PID (Kp, Ki, Kd) di Atas Karpet Lintasan',
    steps: [
      { title: 'Nol-kan Nilai Ki dan Kd Terlebih Dahulu', desc: 'Mulai hanya dengan parameter Proportional (Kp). Naikkan nilai Kp perlahan hingga robot dapat mengikuti garis lurus dan mulai berosilasi (goyang) saat berbelok.' },
      { title: 'Masukkan Nilai Derivative (Kd) untuk Meredam Goyangan', desc: 'Naikkan nilai Kd bertahap untuk meredam osilasi. Nilai Kd bertindak seperti rem kejut hidrolik yang mengantisipasi laju perubahan error garis.' },
      { title: 'Tambahkan Sedikit Nilai Integral (Ki) Jika Perlu', desc: 'Nilai Ki digunakan untuk mengeliminasi steady-state error pada tikungan panjang berkelanjutan, namun gunakan secukupnya agar tidak terjadi overshoot.' },
      { title: 'Uji Pada Kecepatan Maksimum Berulang', desc: 'Naikkan base speed motor hingga mencapai batas traksi ban pada tikungan tertajam lintasan lomba.' }
    ],
    faqs: [
      { q: 'Mengapa robot line follower sering keluar lintasan saat melintasi garis perempatan?', a: 'Robot membutuhkan algoritma pembacaan persimpangan (junction rule). Saat seluruh sensor membaca garis hitam bersamaan, robot harus mengabaikan koreksi PID sesaat dan mempertahankan arah lurus berdasarkan state sebelumnya.' },
      { q: 'Berapa jarak ideal sensor ke permukaan lantai?', a: 'Jarak optimal array sensor photodioda ke permukaan karpet vinyl adalah 3 mm hingga 5 mm, dilengkapi tirai pelindung karet agar tidak terganggu lampu sorot panggung.' }
    ],
    ctaTitle: 'Butuh Kit Line Follower Siap Lomba & Bimbingan Teknis?',
    ctaText: 'Dapatkan Nexoranesia Apex Line Follower Kit di NEXORANESIA Store lengkap dengan skematik PCB presisi dan source code tuning PID teruji.'
  },
  {
    slug: 'strategi-mempersiapkan-tim-sekolah-juara-olimpiade-robotika-wro-fll',
    title: 'Strategi Mempersiapkan Tim Sekolah Juara Olimpiade Robotika (WRO & FLL): Alur Mentoring & R&D',
    seoTitle: 'Strategi Tim Sekolah Juara Olimpiade Robotika WRO & FLL',
    description: 'Panduan manajerial dan teknis bagi guru & sekolah menyiapkan tim juara World Robot Olympiad (WRO) dan FIRST LEGO League (FLL). Alur seleksi, roadmap R&D, dan simulasi juri.',
    category: 'Kompetisi & Olimpiade',
    tags: ['olimpiade robotika', 'wro indonesia', 'first lego league', 'mentoring tim robotika', 'prestasi sekolah'],
    heroImage: '/images/hero/slide-3.jpg',
    readTime: '7 Menit Baca',
    author: 'Tim Pelatih NEXORANESIA Competition',
    authorRole: 'National Coach & Mentor WRO',
    intro: 'Menjuarai kompetisi robotika internasional bergengsi seperti World Robot Olympiad (WRO) atau FIRST LEGO League (FLL) bukan sekadar urusan merakit hardware paling mahal. Kemenangan di panggung dunia ditentukan oleh kedisiplinan riset, kekuatan rekayasa algoritma mandiri oleh siswa, strategi alokasi waktu pada babak kejutan (Surprise Rule), serta kemampuan presentasi ilmiah di hadapan panel juri internasional.',
    section1Title: 'Faktor Kunci Penentu Skor Maksimal di Arena Internasional',
    section1Content: 'Di kompetisi WRO kategori RoboMission, robot harus menyelesaikan serangkaian misi otomatis di atas arena meja berukuran 236 x 114 cm dalam waktu maksimal 2 menit. Robot yang stabil adalah robot yang memiliki mekanika kokoh dengan toleransi error mekanik minimal, didukung sensor navigasi cerdas seperti gyroscope digital dan sensor warna yang dikalibrasi terhadap pantulan cahaya lampu venue.',
    expertTips: [
      'Terapkan Teknik Odometri & Kalibrasi Dinding: Jangan hanya mengandalkan putaran derajat motor (rotasi encoder). Ajarkan siswa melakukan perataan sudut robot ke dinding arena (squaring on wall) secara berkala agar akumulasi drift sudut kembali nol.',
      'Desain Mekanika Attachment Modular: Gunakan sistem attachment lepas-pasang cepat (quick-release) tanpa sekrup rumit untuk menjalankan misi-misi berbeda dalam satu ronde pertandingan.',
      'Latihan Dry Run dengan Gangguan Tak Terduga: Simulasikan kondisi panggung sebenarnya: matikan beberapa lampu, ubah intensitas cahaya ruangan, gunakan baterai yang sedikit drop, dan minta siswa beradaptasi tanpa bantuan pelatih.'
    ],
    tableTitle: 'Roadmap 6 Bulan Pembinaan Tim Olimpiade Robotika Sekolah',
    tableHeaders: ['Bulan Pembinaan', 'Fokus Utama', 'Kegiatan Kunci Siswa', 'Indikator Keberhasilan (Milestone)'],
    tableRows: [
      ['Bulan 1', 'Seleksi & Fondasi Teori', 'Uji logika logika programming, seleksi siswa, pembagian peran mekanik/koder', 'Terbentuk tim inti berisi 2–3 siswa dengan komitmen tinggi'],
      ['Bulan 2', 'Analisis Rulebook & Prototyping', 'Bedah buku aturan resmi, hitung efisiensi poin per detik setiap misi', 'Sketsa CAD & purwarupa awal sasis robot penggerak utama'],
      ['Bulan 3', 'Rekayasa Mekanisme Misi', 'Perakitan lengan gripper, mekanisme pengungkit, uji coba motorik', 'Robot mampu menyelesaikan 50% misi di atas matras arena resmi'],
      ['Bulan 4', 'Optimasi Kode & Algoritma Gyro', 'Implementasi PID gyro driving, penyesuaian akselerasi tikungan halus', 'Robot mencapai konsistensi 80% keberhasilan misi penuh dalam waktu 100 detik'],
      ['Bulan 5', 'Simulasi Surprise Rule & Sparring', 'Pemberian misi kejutan mendadak, latihan perakitan ulang robot dari nol', 'Siswa mampu mendesain ulang program mandiri di bawah 60 menit'],
      ['Bulan 6', 'Finalisasi Kompetisi & Mentalitas', 'Simulasi lomba resmi dengan timer dan juri tamu, latihan presentasi', 'Robot mencapai skor 100% konsisten pada 5 kali uji coba berturut-turut']
    ],
    section3Title: 'Struktur Pembagian Peran Tim Robotika yang Efektif',
    steps: [
      { title: 'Lead Programmer (Software Architect)', desc: 'Bertanggung jawab atas arsitektur kode, fungsi modular navigasi gyro, pembacaan sensor warna, dan perbaikan bug algoritma.' },
      { title: 'Lead Mechanical Engineer (Hardware Specialist)', desc: 'Memastikan kekokohan sasis, keselarasan gear rasio, keausan ban, kabel manajemen, dan attachment mekanik pengambil objek.' },
      { title: 'Strategist & Documenter (Project Manager)', desc: 'Menghitung rute urutan misi tercepat, mencatat data statistik keberhasilan setiap uji coba, dan mengelola dokumen rekayasa tim.' }
    ],
    faqs: [
      { q: 'Apakah pelatih boleh membantu memprogram robot saat hari perlombaan WRO?', a: 'Sama sekali tidak boleh. Di kompetisi WRO, area pit steril dari pelatih dan orang tua. Siswa harus merakit robot dari bagian terpisah dan memprogram sendiri di hadapan panitia juri pengawas.' },
      { q: 'Kapan batas usia peserta untuk kategori WRO RoboMission?', a: 'Kategori RoboMission terbagi dalam Elementary (usia 8–12), Junior (usia 11–15), dan Senior (usia 14–19 tahun).' }
    ],
    ctaTitle: 'Ingin Sekolah Anda Memiliki Tim Robotika Juara Olimpiade?',
    ctaText: 'Program NEXORANESIA Competition menyediakan kurikulum intensif, simulasi arena standar internasional, dan mentoring dari pelatih berpengalaman kejuaraan dunia.'
  },
  {
    slug: 'panduan-membangun-lab-stem-robotika-modern-sekolah',
    title: 'Panduan Lengkap Membangun Lab STEM & Robotika Modern di Sekolah: Anggaran, Kurikulum, & Standar Alat',
    seoTitle: 'Panduan Membangun Lab STEM & Robotika Sekolah Modern',
    description: 'Panduan bagi yayasan dan kepala sekolah mendirikan Laboratorium STEM & Robotika berstandar industri. Analisis kebutuhan ruang, hardware, modul ajar, dan sertifikasi guru.',
    category: 'STEM & Lab Sekolah',
    tags: ['lab stem sekolah', 'laboratorium robotika', 'kurikulum stem', 'pelatihan guru robotika', 'fasilitas sekolah unggulan'],
    heroImage: '/images/hero/slide-2.jpg',
    readTime: '7 Menit Baca',
    author: 'Tim Konsultan NEXORANESIA Solutions',
    authorRole: 'Head of Institutional Partnership',
    intro: 'Dalam persaingan institusi pendidikan modern, fasilitas laboratorium STEM (Science, Technology, Engineering, Mathematics) dan Robotika menjadi tolok ukur utama inovasi sekolah di mata orang tua murid. Namun, tidak sedikit sekolah yang telah menginvestasikan ratusan juta rupiah untuk pengadaan alat robotik, namun fasilitas tersebut berakhir berdebu di lemari karena ketiadaan kurikulum terstruktur dan minimnya pelatihan guru pendamping.',
    section1Title: 'Tiga Pilar Utama Lab STEM yang Berkelanjutan',
    section1Content: 'Membangun laboratorium teknologi yang sukses bertumpu pada formula segitiga seimbang: Hardware & Tools yang tepat guna, Kurikulum Terstruktur berbasis proyek (PBL) per semester, dan Training of Trainers (ToT) berkala untuk guru sains dan TIK sekolah. Tanpa modul ajar dan guru yang percaya diri, secanggih apa pun perangkat kerasnya tidak akan melahirkan karya siswa yang membanggakan.',
    expertTips: [
      'Gunakan Prinsip 1 Siswa 1 Kit (atau Maksimal 2 Siswa per Tim): Efektivitas belajar robotika anjlok drastis jika 4 hingga 5 siswa harus berbagi 1 modul, karena hanya satu anak dominan yang memegang alat sementara siswa lain pasif.',
      'Sediakan Area Uji Karpet & Meja Arena Permanen: Sediakan meja arena standar ukuran 2,4 x 1,2 meter berpagar tepi agar siswa dapat langsung menguji pergerakan robot tanpa mengganggu meja kerja laptop.',
      'Pilih Ekosistem Hardware Terbuka (Open Source): Hindari sistem tertutup berkunci lisensi mahal per tahun. Prioritaskan kit berbasis Arduino, ESP32, dan sensor standar industri yang mudah dicari suku cadangnya di pasar lokal.'
    ],
    tableTitle: 'Estimasi Matriks Pengadaan Lab STEM Robotika Sekolah (Kapasitas 24 Siswa)',
    tableHeaders: ['Kategori Fasilitas', 'Item Kebutuhan Inti', 'Spesifikasi Rekomendasi', 'Estimasi Alokasi Anggaran'],
    tableRows: [
      ['Hardware Pembelajaran Siswa', '12–24 Paket STEM Robotics Kit', 'Microcontroller Trainer, Sensor Set, Chassis, Solder Station', '40% – 50% dari total anggaran'],
      ['Peralatan Rapid Prototyping', '3D Printer FDM & Laser Engraver', 'CoreXY 3D Printer 300x300mm + Filament PLA+', '15% – 20% dari total anggaran'],
      ['Meja & Arena Simulasi Lomba', 'Meja Arena Kayu + Karpet Vinyl WRO', 'Meja berpagar kayu lisensi standar olimpiade nasional', '10% – 15% dari total anggaran'],
      ['Kurikulum & Buku Panduan Siswa', 'Modul 4 Level (Dasar hingga Mahir)', 'Panduan praktikum bergambar langkah-demi-langkah (1 Tahun)', '10% – 15% dari total anggaran'],
      ['Pelatihan & Sertifikasi Guru (ToT)', 'Workshop Intensif Instruktur Guru', '16 Jam pelatihan tatap muka, mentoring konsultasi mingguan', '10% – 15% dari total anggaran']
    ],
    section3Title: 'Tahapan Eksekusi Pendirian Lab STEM Sekolah Bersama NEXORANESIA',
    steps: [
      { title: 'Site Visit & Analisis Kebutuhan Ruangan', desc: 'Tim arsitek lab kami meninjau luas ruangan sekolah, instalasi kelistrikan aman, ventilasi, dan pencahayaan meja praktikum.' },
      { title: 'Penyusunan Rencana Anggaran Biaya (RAB) Custom', desc: 'Penyesuaian kebutuhan perangkat dengan jenjang sekolah (SD, SMP, SMA, atau SMK Vokasi) dan alokasi budget yayasan.' },
      { title: 'Instalasi Hardware & Tata Letak Interior Modern', desc: 'Pengiriman unit kit, penataan meja praktikum heksagonal kolaboratif, lemari komponen transparan, dan branding visual lab.' },
      { title: 'Training of Trainers (ToT) Guru Sekolah', desc: 'Pelatihan intensif bagi guru pendamping hingga menguasai seluruh materi praktikum dan mampu memimpin kelas dengan mandiri.' }
    ],
    faqs: [
      { q: 'Berapa luas ruangan minimum yang dibutuhkan untuk mendirikan Lab STEM Robotika?', a: 'Luas ideal untuk kapasitas 24 hingga 30 siswa adalah minimal 7 x 8 meter (56 m²), yang mencakup 6 meja kerja kelompok, 1 meja arena uji coba robot, rak penyimpanan komponen, dan area komputer.' },
      { q: 'Apakah NEXORANESIA bisa menyediakan instruktur eksternal jika sekolah belum memiliki guru khusus?', a: 'Bisa. Kami memiliki program Kemitraan Ekstrakurikuler di mana instruktur bersertifikasi dari NEXORANESIA hadir langsung setiap minggu untuk membimbing siswa di sekolah mitra.' }
    ],
    ctaTitle: 'Konsultasikan Pendirian Lab STEM di Sekolah Anda',
    ctaText: 'Hubungi tim NEXORANESIA Solutions untuk survey lokasi gratis, pembuatan proposal RAB resmi sekolah, dan katalog peralatan laboratorium.'
  },
  {
    slug: 'perbandingan-mikrokontroler-robotika-arduino-esp32-raspberry-pi',
    title: 'Perbandingan Mikrokontroler Robotika Edukasi: Arduino Uno vs ESP32 vs Raspberry Pi Pico',
    seoTitle: 'Arduino Uno vs ESP32 vs Raspberry Pi Pico untuk Robotika',
    description: 'Analisis komparasi teknis Arduino Uno, ESP32, dan Raspberry Pi Pico untuk proyek robotika pelajar. Kecepatan clock, konektivitas WiFi/BLE, jumlah pin PWM, dan efisiensi daya.',
    category: 'Robotika',
    tags: ['arduino vs esp32', 'raspberry pi pico', 'mikrokontroler robotika', 'belajar elektronika', 'pemrograman iot'],
    heroImage: '/images/academy/arduino-c.jpg',
    readTime: '6 Menit Baca',
    author: 'Tim Hardware NEXORANESIA Store',
    authorRole: 'Embedded Systems Specialist',
    intro: 'Memilih papan mikrokontroler yang tepat adalah langkah paling fundamental dalam merancang proyek mekatronika dan robotika. Kesalahan memilih papan bisa berakibat fatal: kekurangan pin input/output analog, memori RAM habis saat memuat library sensor rumit, atau ketiadaan modul nirkabel untuk kendali jarak jauh ponsel pintar.',
    section1Title: 'Evolusi dari 8-bit Klasik Menuju Dual-Core 32-bit Berkecepatan Tinggi',
    section1Content: 'Arduino Uno dengan chip ATmega328P 8-bit telah menjadi standar pengajaran sejak 2005 karena ketahanan fisiknya terhadap kesalahan voltase pemula (5V tolerant). Namun, perkembangan IoT dan robot cerdas membutuhkan chip 32-bit bertenaga seperti ESP32 (Xtensa dual-core dengan WiFi/Bluetooth bawaan) atau Raspberry Pi Pico (RP2040 dual ARM Cortex-M0+ dengan clock 133MHz dan programmable I/O).',
    expertTips: [
      'Gunakan Arduino Uno untuk Pelajar Pemula Usia 9–13 Tahun: Toleransi tegangan 5V membuat Arduino Uno jauh lebih tahan korsleting saat siswa salah memasang kabel jumper dibanding board 3.3V.',
      'Pilih ESP32 untuk Proyek IoT dan Kendali Smartphone: Dengan modul WiFi dan BLE onboard di bawah harga Rp 75.000, ESP32 adalah opsi paling bernilai tinggi untuk robot remote control dan smart device.',
      'Manfaatkan Raspberry Pi Pico untuk Robot Multi-Motor: Fitur State Machine PIO (Programmable I/O) pada RP2040 memungkinkan kontrol pulsa servo dan encoder motor berkecepatan tinggi tanpa membebani prosesor utama.'
    ],
    tableTitle: 'Tabel Perbandingan Teknis Detail: Arduino Uno vs ESP32 vs Raspberry Pi Pico',
    tableHeaders: ['Spesifikasi Teknis', 'Arduino Uno R3', 'ESP32 NodeMCU V1', 'Raspberry Pi Pico (RP2040)'],
    tableRows: [
      ['Arsitektur Prosesor', '8-bit AVR RISC (ATmega328P)', '32-bit Xtensa Dual-Core LX6', '32-bit Dual ARM Cortex-M0+'],
      ['Kecepatan Clock CPU', '16 MHz', '240 MHz (15x Lebih Cepat)', '133 MHz (Bisa di-overclock 250MHz)'],
      ['Memori SRAM', '2 KB (Sangat Terbatas)', '520 KB (Sangat Lapang)', '264 KB'],
      ['Memori Flash Program', '32 KB', '4 MB (Bisa Menyimpan Web Server)', '2 MB SPI Flash'],
      ['Tegangan Logika I/O', '5V Tolerant (Aman Korslet)', '3.3V (Hati-hati Tegangan Berlebih)', '3.3V'],
      ['Konektivitas Nirkabel', 'Tidak Ada (Perlu Modul Tambahan)', 'WiFi 802.11 b/g/n + Bluetooth 4.2 BLE', 'Hanya di Versi Pico W (WiFi/BLE)'],
      ['Bahasa Pemrograman', 'C / C++ (Arduino IDE)', 'C/C++, MicroPython, CircuitPython', 'MicroPython, C/C++, CircuitPython'],
      ['Peruntukan Terbaik', 'Belajar dasar fisika & sensor SD/SMP', 'Robot IoT, robotika cerdas, telemetry', 'Robotik kinematika, kalkulasi matematika']
    ],
    section3Title: 'Panduan Memilih Sesuai Kebutuhan Proyek Siswa',
    steps: [
      { title: 'Identifikasi Kebutuhan Komunikasi Data', desc: 'Jika robot perlu dikendalikan lewat aplikasi smartphone atau mengirim data ke cloud, gunakan ESP32.' },
      { title: 'Tinjau Level Pemahaman Elektronika Siswa', desc: 'Untuk siswa yang baru pertama memegang sirkuit, gunakan Arduino Uno agar chip tidak mudah rusak akibat polaritas terbalik.' },
      { title: 'Pertimbangkan Efisiensi Biaya Massal', desc: 'Untuk pengadaan kelas dalam jumlah besar, Raspberry Pi Pico dan ESP32 menawarkan performa komputasi tertinggi pada kisaran harga paling kompetitif.' }
    ],
    faqs: [
      { q: 'Apakah ESP32 bisa diprogram menggunakan Arduino IDE?', a: 'Bisa. ESP32 didukung penuh oleh board manager Arduino IDE dengan ratusan library komunitas yang siap pakai.' },
      { q: 'Bisakah Raspberry Pi Pico menjalankan sistem operasi Linux seperti Raspberry Pi 4?', a: 'Tidak. Raspberry Pi Pico adalah mikrokontroler (bare-metal executor), bukan single-board computer (SBC) seperti Raspberry Pi 4/5 yang memiliki OS lengkap.' }
    ],
    ctaTitle: 'Dapatkan Board Mikrokontroler Original & Teruji',
    ctaText: 'Kunjungi NEXORANESIA Store untuk pengadaan Arduino, ESP32, sensor modul, dan perlengkapan maker dengan garansi kualitas terpercaya.'
  },
  {
    slug: 'belajar-ai-computer-vision-python-pelajar-mediapipe',
    title: 'Belajar Artificial Intelligence (AI) & Computer Vision untuk Pelajar: Deteksi Tangan dengan Python & MediaPipe',
    seoTitle: 'Belajar AI & Computer Vision untuk Pelajar dengan Python',
    description: 'Panduan praktis siswa SMP-SMA belajar Artificial Intelligence. Tutorial deteksi 21 titik tangan webcam real-time menggunakan Python, OpenCV, dan Google MediaPipe.',
    category: 'Artificial Intelligence',
    tags: ['belajar ai pelajar', 'python opencv', 'google mediapipe', 'computer vision pemula', 'ai untuk anak'],
    heroImage: '/images/academy/python-ai.jpg',
    readTime: '7 Menit Baca',
    author: 'Tim AI & Data Science NEXORANESIA',
    authorRole: 'Lead Machine Learning Mentor',
    intro: 'Kecerdasan Buatan (Artificial Intelligence) bukan lagi materi abstrak yang hanya bisa dipelajari di tingkat magister universitas. Dengan pustaka modern seperti Google MediaPipe dan OpenCV, pelajar usia 12 hingga 18 tahun kini mampu menciptakan aplikasi cerdas real-time: mulai dari robot yang dikendalikan dengan lambaian tangan, pengenal bahasa isyarat, hingga filter interaktif cerdas hanya dalam beberapa lusin baris kode Python.',
    section1Title: 'Bagaimana Komputer Melihat Dunia: Konsep Landmark Landmark AI',
    section1Content: 'Alih-alih memproses gambar piksel demi piksel secara lambat, model machine learning MediaPipe menggunakan arsitektur neural network yang telah dilatih pada jutaan gambar tangan. Model ini memprediksi koordinat spasial 3D dari 21 titik persendian (landmarks) pada tangan manusia: mulai dari pergelangan (wrist), ruas ibu jari, hingga ujung jari telunjuk dan kelingking secara real-time pada 30+ frame per second.',
    expertTips: [
      'Gunakan Virtual Environment (venv): Selalu biasakan siswa membuat lingkungan virtual Python terisolasi untuk menghindari konflik versi antar paket pip.',
      'Normalisasi Koordinat Layar: Ingat bahwa MediaPipe menghasilkan koordinat ternormalisasi antara 0.0 hingga 1.0. Kalikan dengan lebar (width) dan tinggi (height) frame webcam untuk mendapatkan posisi piksel absolut.',
      'Manfaatkan Nilai Jarak Euclidean Antar Ujung Jari: Untuk mendeteksi gestur mencubit (pinch) atau kepalan tinju, cukup hitung jarak matematis antara ujung jempol (titik #4) dan ujung telunjuk (titik #8).'
    ],
    tableTitle: 'Tabel Pemetaan 21 Landmark Tangan pada Model MediaPipe Hands',
    tableHeaders: ['Indeks Titik', 'Nama Persendian Anatomi', 'Fungsi Deteksi Gestur Kunci', 'Contoh Aplikasi Nyata'],
    tableRows: [
      ['Titik #0', 'Wrist (Pergelangan Tangan)', 'Titik acuan posisi tengah telapak tangan', 'Menentukan orientasi tangan kiri/kanan di layar'],
      ['Titik #4', 'Thumb Tip (Ujung Ibu Jari)', 'Ujung jari pengukur gestur jepit (pinch)', 'Trigger klik mouse virtual atau trigger gripper robot'],
      ['Titik #8', 'Index Finger Tip (Ujung Telunjuk)', 'Pointer navigasi utama kursor layar', 'Menggambar di kanvas udara (air canvas) virtual'],
      ['Titik #12', 'Middle Finger Tip (Ujung Jari Tengah)', 'Kombinasi gestur damai (peace sign)', 'Navigasi mode game atau scroll halaman web'],
      ['Titik #16 & #20', 'Ring Tip & Pinky Tip', 'Deteksi kondisi tangan terbuka vs mengepal', 'Kontrol kecepatan motor robot (buka = maju, kepal = rem)']
    ],
    section3Title: '4 Langkah Instalasi dan Menjalankan Proyek AI Pertama di Laptop Siswa',
    steps: [
      { title: 'Instal Python 3.10 atau 3.11', desc: 'Unduh installer resmi dari python.org dan pastikan centang opsi "Add Python to PATH" saat instalasi.' },
      { title: 'Instal Library OpenCV dan MediaPipe', desc: 'Buka terminal/command prompt dan jalankan perintah: pip install opencv-python mediapipe.' },
      { title: 'Inisialisasi Akses Webcam Laptop', desc: 'Gunakan fungsi cv2.VideoCapture(0) untuk membuka kamera default laptop dan membaca video frame secara berkala.' },
      { title: 'Ekstrak dan Gambar 21 Titik Sendi', desc: 'Kirim gambar ke model mp_hands.Hands() dan gambar garis rangka menggunakan mp_drawing.draw_landmarks().' }
    ],
    faqs: [
      { q: 'Apakah laptop siswa harus memiliki GPU khusus untuk belajar Computer Vision?', a: 'Tidak perlu. MediaPipe dioptimalkan secara cerdas untuk berjalan ringan di CPU laptop standar tanpa membutuhkan kartu grafis (GPU) diskrit.' },
      { q: 'Bagaimana cara menghubungkan deteksi gestur Python ke robot Arduino?', a: 'Siswa dapat mengirimkan sinyal perintah karakter lewat komunikasi serial (kabel USB atau Bluetooth) menggunakan pustaka pyserial di Python ke port mikrokontroler.' }
    ],
    ctaTitle: 'Tertarik Belajar Coding Python & Machine Learning?',
    ctaText: 'Ikuti kursus Python & AI Junior di NEXORANESIA Academy. Siswa diajak praktik membangun proyek computer vision, deteksi wajah, dan integrasi robot nyata.'
  },
  {
    slug: 'cara-memilih-kit-robotika-pertama-untuk-anak',
    title: 'Cara Memilih Kit Robotika Pertama untuk Anak: Perbandingan Modular, Lego, & Explorer Kit',
    seoTitle: 'Panduan Memilih Kit Robotika Pertama untuk Anak',
    description: 'Panduan orang tua memilih kit robot edukasi pertama bagi anak usia 6-12 tahun. Komparasi sistem snap-fit modular, Lego Education, dan open-hardware kit.',
    category: 'Robotika',
    tags: ['kit robotika anak', 'lego education', 'explorer kit', 'mainan edukasi stem', 'hadiah edukatif anak'],
    heroImage: '/images/academy/robotics-kids.jpg',
    readTime: '6 Menit Baca',
    author: 'Tim Konsultan Edukasi NEXORANESIA',
    authorRole: 'Senior STEM Education Advisor',
    intro: 'Banyak orang tua ingin mengarahkan minat anak dari kecanduan layar gadget (gadget addiction) menjadi kreator teknologi melalui mainan robotika. Namun, pasar dipenuhi ratusan pilihan: mulai dari kit plastik murah yang cepat rusak, hingga paket robot impor bermerek dengan harga belasan juta rupiah. Memilih kit yang keliru bisa membuat anak cepat bosan atau merasa materi terlalu rumit.',
    section1Title: 'Kriteria Utama: Kesesuaian Usia, Keamanan, dan Skalabilitas Modul',
    section1Content: 'Kit robotika yang ideal harus memiliki tingkat hambatan awal (friction) yang rendah namun batas atas eksplorasi (ceiling) yang tinggi. Anak usia dini membutuhkan koneksi snap-fit atau magnetik tanpa melibatkan solder panas atau baut kecil berbahaya. Sementara untuk anak usia sekolah dasar menengah, kit harus dapat diprogram ulang dan dikombinasikan dengan sensor baru seiring bertambahnya wawasan logika mereka.',
    expertTips: [
      'Hindari Robot Jadi yang Hanya Berfungsi Sebagai Remote Control: Mainan robot siap pakai tanpa proses perakitan dan pemrograman tidak melatih logika problem solving sama sekali.',
      'Pastikan Tersedia Panduan Video dan Modul Bahasa Indonesia: Kit tanpa buku panduan step-by-step yang jelas akan berujung terbengkalai di lemari mainan anak.',
      'Pilih Kit yang Kompatibel dengan Bahasa Pemrograman Standar: Prioritaskan kit yang dapat diprogram via Scratch (blok) dan nantinya bisa dikembangkan ke C++ atau Python.'
    ],
    tableTitle: 'Tabel Perbandingan Jenis Kit Robotika untuk Pemula',
    tableHeaders: ['Karakteristik Kunci', 'Kit Snap-Fit Modular Magnetik', 'Lego Education (Spike/Mindstorms)', 'Nexoranesia Explorer Starter Kit'],
    tableRows: [
      ['Rekomendasi Usia', '4 – 7 Tahun (TK – SD Awal)', '7 – 12 Tahun (SD Menengah)', '8 – 15 Tahun (SD – SMP/SMA)'],
      ['Metode Perakitan', 'Sambungan magnetik / puzzle plastik', 'Balok konstruksi Lego Technic', 'Sasis akrilik kokoh + baut pengaman + breadboard'],
      ['Fleksibilitas Sensor', 'Hanya modul bawaan pabrik', 'Sensor proprietary Lego (mahal)', 'Menggunakan sensor elektronik standar terbuka (murah & variatif)'],
      ['Bahasa Pemrograman', 'Tombol manual / Scratch Jr', 'Scratch App Lego Spike', 'Scratch 3.0 Blok -> Arduino IDE C++'],
      ['Efisiensi Investasi', 'Cukup terjangkau, cepat outgrown', 'Sangat mahal (Rp 7–12 Juta)', 'Sangat ekonomis dengan skalabilitas proyek tak terbatas'],
      ['Ketahanan Modul', 'Plastik ringan', 'Plastik ABS berkualitas tinggi', 'Akrilik tebal + PCB tahan banting']
    ],
    section3Title: 'Panduan Memperkenalkan Kit Robotika Pertama Kali kepada Anak',
    steps: [
      { title: 'Fasilitasi Proses Unboxing Bersama', desc: 'Ajak anak mengenali setiap komponen: mana motor penggerak, mana otak mikrokontroler, dan mana sensor pendeteksi mata robot.' },
      { title: 'Ikuti Proyek Perakitan Pertama Sesuai Buku', desc: 'Bimbing anak merakit bentuk dasar sasis beroda 2WD hingga kokoh dan kabel terpasang rapi.' },
      { title: 'Coba Program Sederhana: Robot Menari', desc: 'Beri tantangan pertama membuat robot maju 2 detik, berputar balik, dan membunyikan buzzer gembira.' },
      { title: 'Tantang Anak Mengatasi Rintangan Dinding', desc: 'Pasang sensor ultrasonik dan ajak anak menyusun logika: jika jarak rintangan di bawah 15 cm, belok ke kanan.' }
    ],
    faqs: [
      { q: 'Apakah aman bagi anak usia 8 tahun merakit kit robotika sendiri?', a: 'Sangat aman jika menggunakan kit bertegangan rendah (baterai 5V–9V) dengan komponen solderless (tanpa solder panas) seperti breadboard dan kabel jumper socket.' },
      { q: 'Berapa lama rata-rata anak dapat menyelesaikan satu proyek robot?', a: 'Untuk proyek pemula, rata-rata anak membutuhkan waktu 45 hingga 90 menit untuk merakit sasis dan memasukkan kode program pertama.' }
    ],
    ctaTitle: 'Mulai Petualangan Teknologi Anak Anda Hari Ini',
    ctaText: 'Dapatkan Nexoranesia STEM Robotics Starter Kit lengkap dengan buku panduan visual warna dan akses kelas video tutorial interaktif.'
  }
];

// Procedural Matrix Database for Continuous Publishing
const TOPIC_CATEGORIES = [
  { name: 'Robotika', img: '/images/academy/amr-rover.jpg' },
  { name: 'Coding', img: '/images/academy/scratch-coding.jpg' },
  { name: 'Artificial Intelligence', img: '/images/academy/python-ai.jpg' },
  { name: 'Kompetisi & Olimpiade', img: '/images/hero/slide-3.jpg' },
  { name: 'STEM & Lab Sekolah', img: '/images/hero/slide-2.jpg' },
  { name: 'Internet of Things', img: '/images/academy/arduino-c.jpg' }
];

const AUDIENCES = [
  { level: 'Tingkat SD & Pemula', age: 'Usia 6-10 Tahun', complexity: 'Pemula', focus: 'Logika visual, animasi, mekanik dasar' },
  { level: 'Tingkat SMP & Remaja', age: 'Usia 11-14 Tahun', complexity: 'Menengah', focus: 'Algoritma terstruktur, sensorik, C++/Python' },
  { level: 'Tingkat SMA / SMK Vokasi', age: 'Usia 15-18 Tahun', complexity: 'Lanjutan', focus: 'Kinematika, computer vision, AI & IoT industri' },
  { level: 'Bagi Guru & Pendidik', age: 'Pengajar & Fasilitator', complexity: 'Manajerial & Pedagogi', focus: 'Kurikulum PBL, evaluasi capaian, manajemen lab' }
];

const THEMES = [
  {
    themeSlug: 'algoritma-navigasi-dan-sensor',
    themeTitle: 'Kalibrasi Presisi Sensor dan Navigasi Otonom',
    subtopics: [
      'Menghindari pantulan cahaya panggung pada sensor optik',
      'Integrasi sensor jarak ultrasonik dan inframerah anti-blindspot',
      'Pemanfaatan modul gyroscope MPU6050 untuk koreksi sudut lurus',
      'Algoritma deteksi persimpangan garis hitam di arena kompetisi'
    ]
  },
  {
    themeSlug: 'manajemen-daya-dan-efisiensi-motor',
    themeTitle: 'Manajemen Daya Baterai LiPo dan Karakteristik Driver Motor',
    subtopics: [
      'Menghitung discharge rate (C-rating) baterai LiPo agar daya tidak drop',
      'Pemilihan driver motor MOSFET TB6612FNG vs H-Bridge L298N',
      'Regulator tegangan step-down buck converter untuk mikrokontroler stabil',
      'Proteksi sirkuit elektronik dari lonjakan arus balik (Back-EMF)'
    ]
  },
  {
    themeSlug: 'kurikulum-dan-metodologi-pembelajaran',
    themeTitle: 'Desain Kurikulum Berbasis Proyek (Project-Based Learning)',
    subtopics: [
      'Membagi proyek semester menjadi 8 modul praktikum mandiri',
      'Rubrik penilaian portofolio karya coding dan dokumentasi siswa',
      'Integrasi standar literasi digital nasional ke dalam silabus sekolah',
      'Teknik bimbingan instruktur yang memicu rasa ingin tahu alami anak'
    ]
  },
  {
    themeSlug: 'inovasi-ai-dan-computer-vision',
    themeTitle: 'Penerapan Kecerdasan Buatan dan Visi Komputer Sederhana',
    subtopics: [
      'Deteksi warna bola arena menggunakan warna ruang HSV di OpenCV',
      'Klasifikasi gestur jari untuk kendali mobil robotik nirkabel',
      'Pemanfaatan modul kamera ESP32-CAM untuk streaming video lokal',
      'Pengenalan model machine learning Teachable Machine untuk proyek sains'
    ]
  },
  {
    themeSlug: 'membangun-kultur-riset-dan-ekskul',
    themeTitle: 'Pengembangan Ekstrakurikuler dan Budaya Inovasi Sekolah',
    subtopics: [
      'Perekrutan dan tes minat bakat siswa untuk tim inti robotika',
      'Penyusunan anggaran operasional tahunan ekskul teknologi sekolah',
      'Pameran karya tahunan (Maker Fair) untuk apresiasi kreasi siswa',
      'Sinergi orang tua murid dan sekolah dalam mendukung delegasi lomba'
    ]
  }
];

function generateProceduralArticle(cat, aud, thm, seedIndex) {
  const cleanCategory = cat.name;
  const cleanAudience = aud.level;
  const cleanTheme = thm.themeTitle;
  const subtopic = thm.subtopics[seedIndex % thm.subtopics.length];
  
  const slug = `panduan-${cat.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${thm.themeSlug}-${aud.level.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${seedIndex + 1}`;
  const title = `${cleanTheme}: Panduan ${cleanCategory} untuk ${cleanAudience} (${subtopic})`;
  const seoTitle = `${cleanTheme} - Panduan ${cleanCategory} ${aud.complexity}`;
  const description = `Panduan komprehensif ${cleanCategory.toLowerCase()} untuk ${cleanAudience.toLowerCase()} membahas ${subtopic.toLowerCase()}. Disertai data parameter teknis, tips mentor, dan tahapan implementasi.`;

  return {
    slug,
    title,
    seoTitle,
    description,
    category: cleanCategory,
    tags: [cleanCategory.toLowerCase(), 'belajar robotika', 'coding anak', 'stem edukasi', aud.complexity.toLowerCase()],
    heroImage: cat.img,
    readTime: '6 Menit Baca',
    author: 'Tim Ahli & Instruktur NEXORANESIA',
    authorRole: 'Senior STEM & Technology Specialist',
    intro: `Dalam ekosistem pendidikan teknologi modern, penguasaan ${cleanCategory.toLowerCase()} menuntut integrasi yang seimbang antara pemahaman teori mendasar dan pengalaman praktik hands-on. Khusus untuk ${cleanAudience.toLowerCase()}, pendekatan instruksional harus dirancang spesifik dengan mempertimbangkan rentang atensi, tingkat abstraksi logika, serta kesiapan motorik siswa agar pembelajaran berlangsung efektif dan memicu kreativitas jangka panjang.`,
    section1Title: `Pondasi Teknis: Memahami Esensi ${cleanTheme}`,
    section1Content: `Fokus utama pada modul ini menitikberatkan pada topik "${subtopic}". Pemahaman yang kuat terhadap interaksi antara instruksi kode dan respon perangkat keras fisik menjadi kunci keberhasilan. Siswa tidak hanya diajak merangkai komponen, melainkan juga memahami mengapa setiap parameter disetel sedemikian rupa, bagaimana sinyal data dialirkan, dan bagaimana sistem mendiagnosa anomali ketika terjadi kendala operasional.`,
    expertTips: [
      `Lakukan Uji Coba Terisolasi per Modul: Sebelum menggabungkan seluruh sensor dan aktuator ke dalam satu sistem terpadu, selalu pastikan setiap komponen lulus pengujian mandiri untuk memudahkan pelacakan error.`,
      `Catat Nilai Kalibrasi Secara Berkala: Kondisi lingkungan seperti suhu, intensitas cahaya ruangan, dan level voltase baterai sangat memengaruhi perilaku sensor analog. Dokumentasikan variasi nilai untuk referensi algoritma.`,
      `Bangun Mentalitas Eksperimen Tanpa Takut Salah: Dorong siswa untuk mencoba variasi nilai konstanta program secara mandiri guna mengamati langsung perbedaan respon fisik yang dihasilkan robot.`
    ],
    tableTitle: `Tabel Matriks Parameter Teknis dan Capaian Belajar (${aud.complexity})`,
    tableHeaders: ['Indikator Evaluasi', 'Standar Minimum Capaian', 'Ekspektasi Proyek Lanjutan', 'Rekomendasi Alat & Bahan'],
    tableRows: [
      ['Pemahaman Konseptual', 'Mampu menjelaskan alur data input-proses-output', 'Mampu memodifikasi logika algoritma secara mandiri', 'Buku panduan visual & modul praktikum'],
      ['Keterampilan Perakitan', 'Pemasangan kabel jumper dan komponen rapi & aman', 'Mampu mendeteksi jalur korsleting menggunakan multimeter', 'Kit sasis akrilik modular & breadboard presisi'],
      ['Pengujian Fungsional', 'Toleransi keberhasilan sistem di atas 75%', 'Toleransi keberhasilan sistem konsisten 95%+', 'Arena uji coba berstandar kompetisi'],
      ['Penyelesaian Masalah', 'Mampu mengidentifikasi sumber error dengan panduan', 'Mampu melakukan troubleshooting mandiri dalam 15 menit', 'Serial monitor terminal & logic analyzer']
    ],
    section3Title: `Langkah Terstruktur Menerapkan Materi dalam Pembelajaran`,
    steps: [
      { title: 'Eksplorasi Konsep & Demonstrasi Awal', desc: 'Instruktur mendemonstrasikan purwarupa fungsional untuk membangkitkan antusiasme dan memberi gambaran nyata hasil akhir proyek.' },
      { title: 'Perakitan Hardware Bertahap', desc: 'Siswa merakit bagian mekanik dan menghubungkan pin sirkuit elektronik dengan mengacu pada skematik diagram berwarna.' },
      { title: 'Penulisan dan Pengunggahan Kode Program', desc: 'Implementasi baris kode logika secara modular, diuji coba mulai dari fungsi pembacaan data sensor hingga kendali gerak aktuator.' },
      { title: 'Uji Validasi Lapangan dan Presentasi Karya', desc: 'Setiap siswa atau tim menguji performa alat di arena uji coba dan membagikan hasil evaluasi bersama teman sekelas.' }
    ],
    faqs: [
      { q: `Bagaimana cara mengukur tingkat pemahaman siswa terhadap materi ${cleanCategory}?`, a: `Evaluasi dilakukan melalui portofolio proyek fungsional, kemampuan siswa mempresentasikan alur logika karyanya, serta kecepatan mereka memecahkan skenario error buatan (bug challenge).` },
      { q: `Apakah modul praktikum ini cocok untuk sekolah yang baru pertama kali memulai program robotika?`, a: `Sangat cocok. Struktur kurikulum NEXORANESIA dirancang bertingkat dengan scaffolding lengkap, sehingga sekolah dapat memulai dari tingkat pemula dengan percaya diri.` }
    ],
    ctaTitle: `Tingkatkan Kualitas Pembelajaran Teknologi di Sekolah Anda`,
    ctaText: `NEXORANESIA siap mendampingi sekolah, guru, dan orang tua menghadirkan pendidikan coding, robotika, dan AI terbaik. Hubungi tim kami untuk konsultasi kurikulum dan kemitraan.`
  };
}

function main() {
  ensureArticlesDir();
  const args = process.argv.slice(2);
  let count = 7;
  const countIdx = args.indexOf('--count');
  if (countIdx !== -1 && args[countIdx + 1]) {
    count = parseInt(args[countIdx + 1], 10);
  }

  const existingFiles = fs.readdirSync(articlesDir);
  const existingSlugs = new Set(existingFiles.map((f) => f.replace(/\.json$/, '')));

  const candidateTopics = [];

  // 1. Static Cornerstone Articles
  for (const c of CORNERSTONE_ARTICLES) {
    candidateTopics.push(c);
  }

  // 2. Procedural Combinations
  let seed = 0;
  for (const cat of TOPIC_CATEGORIES) {
    for (const aud of AUDIENCES) {
      for (const thm of THEMES) {
        candidateTopics.push(generateProceduralArticle(cat, aud, thm, seed++));
      }
    }
  }

  const availableTopics = candidateTopics.filter((art) => !existingSlugs.has(art.slug));

  if (availableTopics.length === 0) {
    console.log('[Info] Semua topik dalam database generator saat ini sudah terpublikasi.');
    return;
  }

  const topicsToPublish = availableTopics.slice(0, count);
  const todayStr = getIndonesianDate();
  const todayIso = new Date().toISOString();

  console.log(`[Publisher] Menyiapkan publikasi ${topicsToPublish.length} artikel SEO baru (Tanggal: ${todayStr})...`);

  let createdCount = 0;
  for (const art of topicsToPublish) {
    const filePath = path.join(articlesDir, `${art.slug}.json`);
    if (fs.existsSync(filePath)) {
      console.log(`[Skip] Sudah ada: ${art.slug}.json`);
      continue;
    }

    const payload = {
      ...art,
      publishDate: todayStr,
      publishedAt: todayIso
    };

    fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
    console.log(`[Berhasil] Dibuat: ${art.slug}.json -> "${art.title}"`);
    createdCount++;
  }

  console.log(`[Selesai] Total ${createdCount} artikel SEO baru berhasil disimpan ke ${articlesDir}`);
}

main();
