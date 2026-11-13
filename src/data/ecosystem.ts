export interface AcademyCourse {
  id: string;
  title: string;
  slug: string;
  category: 'Coding' | 'Robotics' | 'AI' | 'GameDev' | 'WebDev' | 'IoT';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  ageGroup: 'Kids (7-12 thn)' | 'Teens (13-17 thn)' | 'College / Adult (18+ thn)';
  duration: string;
  meetings: string;
  price: number;
  formattedPrice: string;
  rating: number;
  studentsCount: number;
  featured: boolean;
  shortDesc: string;
  description: string;
  skillsLearned: string[];
  syllabus: { title: string; desc: string }[];
  tools: string[];
  image: string;
  badge?: string;
}

export interface RoboticsProduct {
  id: string;
  title: string;
  slug: string;
  category: 'Robotics Kit' | 'Soccer Robot' | 'Line Follower' | 'Robotic Arm' | 'Autonomous AMR' | 'Custom R&D';
  badge?: string;
  price: number;
  formattedPrice: string;
  specs: { [key: string]: string };
  highlights: string[];
  description: string;
  image: string;
  isCustomQuote?: boolean;
}

export interface StoreItem {
  id: string;
  name: string;
  slug: string;
  category: 'Robotics Kit' | 'Microcontroller' | 'Sensors' | 'Motors' | 'Robot Parts' | 'Tools';
  price: number;
  formattedPrice: string;
  stock: number;
  rating: number;
  reviewsCount: number;
  image: string;
  shortDesc: string;
  specs: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CompetitionProgram {
  id: string;
  name: string;
  tier: 'National' | 'International';
  organizer: string;
  categories: string[];
  targetAge: string;
  schedule: string;
  status: 'Open Registration' | 'Preparation Phase' | 'Upcoming';
  description: string;
  mentoringPhases: string[];
  achievements: string;
}

export interface InstitutionalSolution {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  target: 'Sekolah (SD/SMP/SMA/SMK)' | 'Pesantren' | 'Kampus / Universitas' | 'Institusi & Industri';
  features: string[];
  deliverables: string[];
  description: string;
  investmentTier: string;
  icon: string;
}

export interface ProjectPortfolio {
  id: string;
  title: string;
  category: 'Student Project' | 'Robotics Innovation' | 'Institutional Lab' | 'Competition Trophy';
  client: string;
  year: string;
  description: string;
  tags: string[];
  metrics: string;
  image: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Tutorial' | 'Technology' | 'Education' | 'Competition' | 'Case Study';
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string[];
}

export const COMPANY_INFO = {
  name: 'NEXORANESIA',
  legalName: 'PT Nexoranesia Teknologi Nusantara',
  tagline: "Indonesia's Next Era of Innovation.",
  subTagline: 'Ekosistem Pendidikan, Robotika, Komponen, dan Solusi Rekayasa Masa Depan.',
  description: 'NEXORANESIA adalah penyedia pendidikan, produk, dan solusi teknologi terpadu yang membantu generasi muda dan institusi menguasai Coding, Robotics, Artificial Intelligence (AI), dan Engineering Solutions.',
  location: 'Jl. KH. Malik Dalam Buring, Kedungkandang, Malang',
  phone: '085183003060',
  whatsapp: '6285183003060',
  email: 'halo@nexoranesia.id',
  operatingHours: 'Senin - Sabtu: 08:30 - 17:30 WIB',
  stats: [
    { value: '15,000+', label: 'Peserta Didik & Maker' },
    { value: '48+', label: 'Trofi Lomba Nasional & Global' },
    { value: '120+', label: 'Sekolah & Mitra Lab STEM' },
    { value: '99.4%', label: 'Kepuasan Pembelajaran' },
  ],
  units: [
    {
      id: 'academy',
      name: 'NEXORANESIA ACADEMY',
      tagline: 'Future Tech Talent Incubator',
      description: 'Kursus coding, robotika, AI, dan IoT berstandar internasional dari usia 7 tahun hingga profesional.',
      href: '/academy',
      color: '#16A6A0',
      badge: 'Pendidikan',
    },
    {
      id: 'robotics',
      name: 'NEXORANESIA ROBOTICS',
      tagline: 'Robotics Engineering & Prototyping',
      description: 'Pengembangan robot edukasi, robot kompetisi, dan solusi otomasi kustom berkemampuan tinggi.',
      href: '/robotics',
      color: '#4EE3DD',
      badge: 'Hardware R&D',
    },
    {
      id: 'store',
      name: 'NEXORANESIA STORE',
      tagline: 'Electronics & Maker Hub',
      description: 'Penyedia kit robotika, mikrokontroler, modul sensor, aktuator, hingga perkakas laboratorium lengkap.',
      href: '/store',
      color: '#A6E65B',
      badge: 'E-Commerce',
    },
    {
      id: 'competition',
      name: 'NEXORANESIA COMPETITION',
      tagline: 'Olympiad & Tournament Mentorship',
      description: 'Konsultasi, pembinaan teknis, dan pendampingan tim kompetisi robotika tingkat nasional dan dunia (WRO, FLL).',
      href: '/competition',
      color: '#F59E0B',
      badge: 'Mentoring',
    },
    {
      id: 'solutions',
      name: 'NEXORANESIA SOLUTIONS',
      tagline: 'Institutional & STEM Lab Transformation',
      description: 'Perancangan laboratorium STEM, lisensi kurikulum, pengadaan perangkat, dan sertifikasi guru sekolah.',
      href: '/solutions',
      color: '#3B82F6',
      badge: 'B2B & Sekolah',
    },
  ],
};

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'acad-01',
    title: 'Robotics for Kids & STEM Explorer',
    slug: 'robotics-for-kids',
    category: 'Robotics',
    level: 'Beginner',
    ageGroup: 'Kids (7-12 thn)',
    duration: '3 Bulan',
    meetings: '12 Sesi Pertemuan (120 Menit/Sesi)',
    price: 1850000,
    formattedPrice: 'Rp 1.850.000',
    rating: 4.9,
    studentsCount: 1420,
    featured: true,
    badge: 'Paling Populer',
    shortDesc: 'Belajar logika mesin, sensor optik, dan merakit 8 variasi robot bergerak mandiri tanpa batas.',
    description: 'Program fondasi terbaik bagi anak untuk memahami prinsip fisika, mekanik, elektronika dasar, dan pemrograman visual blok robotika. Menggunakan Nexoranesia Explorer Starter Kit yang ramah anak dan aman.',
    skillsLearned: ['Mekanika Roda & Gear', 'Sensor Ultrasonik & Cahaya', 'Logika Algoritma Dasar', 'Problem Solving Kolaboratif'],
    syllabus: [
      { title: 'Modul 1: Pengenalan Rangka & Motor Listrik', desc: 'Memahami torsi, motor DC, saklar, dan perakitan sasis dasar.' },
      { title: 'Modul 2: Eksplorasi Sensor Jarak & Halangan', desc: 'Menghubungkan sensor ultrasonik untuk navigasi robot anti-nabrak.' },
      { title: 'Modul 3: Logika Percabangan IF-ELSE', desc: 'Pemrograman blok visual untuk menentukan respon sensor terhadap lingkungan.' },
      { title: 'Modul 4: Final Showcase & Battle Robot Sederhana', desc: 'Presentasi karya orisinal peserta di hadapan mentor dan orang tua.' }
    ],
    tools: ['Nexoranesia Explorer Kit', 'Block Coding Studio', 'Motor DC Shield', 'Buku Panduan Visual'],
    image: '/images/academy/robotics-kids.jpg'
  },
  {
    id: 'acad-02',
    title: 'Coding for Kids: Scratch & Game Creation',
    slug: 'coding-for-kids-scratch',
    category: 'Coding',
    level: 'Beginner',
    ageGroup: 'Kids (7-12 thn)',
    duration: '2.5 Bulan',
    meetings: '10 Sesi Pertemuan',
    price: 1450000,
    formattedPrice: 'Rp 1.450.000',
    rating: 4.9,
    studentsCount: 2150,
    featured: true,
    badge: 'Favorit Pemula',
    shortDesc: 'Mengubah anak dari konsumen game menjadi pencipta game interaktif dan animasi digital sendiri.',
    description: 'Kursus ramah anak yang mengajarkan logika komputasi bertaraf internasional lewat pembuatan game 2D seru seperti platformer, maze runner, dan quiz game berbasis Scratch 3.0.',
    skillsLearned: ['Computational Thinking', 'Variabel & Skor Game', 'Animasi Sprite Dinamis', 'Audio & Event Handling'],
    syllabus: [
      { title: 'Modul 1: Sprite & Koordinat Layar X-Y', desc: 'Menggerakkan karakter dengan keyboard dan mendeteksi tabrakan batas.' },
      { title: 'Modul 2: Loop, Looping & Timer Game', desc: 'Membuat animasi berulang, waktu hitung mundur, dan skor game.' },
      { title: 'Modul 3: Logika Musuh (AI Dasar)', desc: 'Membuat karakter lawan yang mengejar atau menembak secara acak.' },
      { title: 'Modul 4: Publikasi Game ke Komunitas Global', desc: 'Finishing game, upload portofolio, dan live testing bersama teman.' }
    ],
    tools: ['Scratch 3.0', 'Canva for Kids Graphics', 'MIT Media Lab Assets'],
    image: '/images/academy/scratch-coding.jpg'
  },
  {
    id: 'acad-03',
    title: 'Python Programming & Artificial Intelligence',
    slug: 'python-programming-ai',
    category: 'AI',
    level: 'Intermediate',
    ageGroup: 'Teens (13-17 thn)',
    duration: '3.5 Bulan',
    meetings: '14 Sesi Pertemuan',
    price: 2400000,
    formattedPrice: 'Rp 2.400.000',
    rating: 5.0,
    studentsCount: 890,
    featured: true,
    badge: 'Teknologi Unggulan',
    shortDesc: 'Bahasa pemrograman paling dicari dunia: Data Analysis, Object-Oriented, dan Dasar AI Machine Learning.',
    description: 'Dirancang untuk remaja SMP-SMA yang ingin loncat ke ranah pemrograman teks profesional. Mempelajari sintaks Python murni, struktur data, pengolahan citra computer vision dengan OpenCV, hingga model prediksi AI sederhana.',
    skillsLearned: ['Python Core & OOP', 'NumPy & Data Manipulation', 'Computer Vision (OpenCV)', 'Machine Learning Classifier'],
    syllabus: [
      { title: 'Modul 1: Sintaks Python, List, Dict, & Functions', desc: 'Fondasi sintaksis bersih, alur logika, dan penanganan input-output.' },
      { title: 'Modul 2: OOP & Modul Pemrograman Terstruktur', desc: 'Membuat class, method, inheritance untuk simulasi aplikasi nyata.' },
      { title: 'Modul 3: Computer Vision & Face Detection', desc: 'Membaca feed webcam dan mengenali wajah serta gestur tangan real-time.' },
      { title: 'Modul 4: Model Prediksi AI & Proyek Portfolio', desc: 'Melatih model klasifikasi data tabular dan demo aplikasi interaktif.' }
    ],
    tools: ['Python 3.12', 'VS Code', 'OpenCV', 'Jupyter Notebook', 'Scikit-Learn'],
    image: '/images/academy/python-ai.jpg'
  },
  {
    id: 'acad-04',
    title: 'Robotics Engineering & Arduino C++',
    slug: 'robotics-engineering-arduino',
    category: 'Robotics',
    level: 'Intermediate',
    ageGroup: 'Teens (13-17 thn)',
    duration: '3 Bulan',
    meetings: '12 Sesi Pertemuan',
    price: 2200000,
    formattedPrice: 'Rp 2.200.000',
    rating: 4.8,
    studentsCount: 940,
    featured: false,
    shortDesc: 'Pemrograman mikrokontroler C++, skematik sirkuit elektronika, dan perancangan sensor aktuator nyata.',
    description: 'Pelajari rekayasa robotika sesungguhnya dengan mikrokontroler Arduino Uno & Nano. Memprogram PWM motor, komunikasi serial, sensor analog digital, dan membaca data secara presisi.',
    skillsLearned: ['Bahasa C/C++ Embedded', 'Skema Rangkaian Breadboard', 'Motor Driver H-Bridge (L298N)', 'Interfacing Sensor I2C/SPI'],
    syllabus: [
      { title: 'Modul 1: Digital I/O & PWM Timing', desc: 'Kendali LED cerdas, tombol debouncing, dan modulasi pulsa motor.' },
      { title: 'Modul 2: Analog Sensor & Serial Communication', desc: 'Membaca LDR, potensiometer, sensor suhu, dan logging data serial.' },
      { title: 'Modul 3: Motor DC, Servo & Encoder Posisi', desc: 'Pengaturan kecepatan dan sudut rotasi servo secara akurat.' },
      { title: 'Modul 4: Robot Autonomous Line Tracker & Maze', desc: 'Merakit robot jalur cepat dan uji rintangan lab.' }
    ],
    tools: ['Arduino IDE', 'Tinkercad Circuits', 'Nexoranesia Micro Trainer', 'Multimeter Digital'],
    image: '/images/academy/arduino-c.jpg'
  },
  {
    id: 'acad-05',
    title: 'Modern Web & Fullstack Development',
    slug: 'modern-web-fullstack',
    category: 'WebDev',
    level: 'Intermediate',
    ageGroup: 'College / Adult (18+ thn)',
    duration: '4 Bulan',
    meetings: '16 Sesi Pertemuan',
    price: 2750000,
    formattedPrice: 'Rp 2.750.000',
    rating: 4.9,
    studentsCount: 760,
    featured: false,
    shortDesc: 'Bangun web aplikasi profesional dari nol dengan Next.js, React, Tailwind CSS, REST API & Database.',
    description: 'Jalur karir lengkap menjadi Web Developer modern. Tidak sekadar HTML/CSS, peserta mempelajari arsitektur web modern, integrasi database Postgres, auth, dan deployment cloud.',
    skillsLearned: ['HTML5/Tailwind CSS', 'TypeScript & React', 'Next.js App Router', 'Database & API Integration'],
    syllabus: [
      { title: 'Modul 1: Modern HTML, Responsive CSS & Tailwind', desc: 'Perancangan UI web adaptif untuk mobile dan desktop modern.' },
      { title: 'Modul 2: JavaScript Modern (ES6+) & TypeScript', desc: 'Async/await, DOM manipulation, type safety dan error handling.' },
      { title: 'Modul 3: React 19 & Component Driven Architecture', desc: 'Hooks, state management, props, dan lifecycle.' },
      { title: 'Modul 4: Fullstack Next.js & Cloud Deployment', desc: 'Route handlers, SSR, database Drizzle/Postgres, dan live deploy.' }
    ],
    tools: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'GitHub', 'Vercel'],
    image: '/images/academy/web-dev.jpg'
  },
  {
    id: 'acad-06',
    title: 'IoT & Smart Home Automation with ESP32',
    slug: 'iot-smart-home-esp32',
    category: 'IoT',
    level: 'Intermediate',
    ageGroup: 'Teens (13-17 thn)',
    duration: '3 Bulan',
    meetings: '12 Sesi Pertemuan',
    price: 2300000,
    formattedPrice: 'Rp 2.300.000',
    rating: 4.9,
    studentsCount: 610,
    featured: false,
    shortDesc: 'Koneksikan perangkat fisik ke internet! Kendali relay, telemetry cloud MQTT, dan integrasi WhatsApp bot.',
    description: 'Eksplorasi revolusi Internet of Things menggunakan chipset ESP32 WiFi+Bluetooth. Bangun sistem Smart Garden, monitoring energi, dan kendali smart home dari smartphone.',
    skillsLearned: ['ESP32 Dual-Core Architecture', 'Protokol MQTT & HTTP REST', 'Cloud Dashboard (Blynk/Adafruit IO)', 'Automated Relay & Sensor Telemetry'],
    syllabus: [
      { title: 'Modul 1: Arsitektur ESP32 & Konektivitas WiFi', desc: 'Menghubungkan mikrokontroler ke jaringan internet lokal dan cloud.' },
      { title: 'Modul 2: Protokol MQTT & Realtime Dashboard', desc: 'Kirim telemetri suhu & kelembaban ke smartphone secara instan.' },
      { title: 'Modul 3: Smart Switch & Sistem Notifikasi Telegram/WA', desc: 'Trigger alarm otomatis saat sensor mendeteksi kebocoran gas/gerakan.' },
      { title: 'Modul 4: Capstone Proyek Smart Campus / Home', desc: 'Implementasi menyeluruh sistem kendali IoT yang siap dipamerkan.' }
    ],
    tools: ['ESP32 DevKit', 'MQTT Broker', 'Blynk IoT Cloud', 'Arduino IDE / PlatformIO'],
    image: '/images/academy/iot-esp32.jpg'
  },
  {
    id: 'acad-07',
    title: 'Game Development with Roblox & Unity 3D',
    slug: 'game-dev-roblox-unity',
    category: 'GameDev',
    level: 'Beginner',
    ageGroup: 'Kids (7-12 thn)',
    duration: '3 Bulan',
    meetings: '12 Sesi Pertemuan',
    price: 1950000,
    formattedPrice: 'Rp 1.950.000',
    rating: 4.8,
    studentsCount: 1120,
    featured: false,
    shortDesc: 'Bikin game multiplayer impianmu di Roblox Studio dengan bahasa pemrograman Luau & pengenalan Unity C#.',
    description: 'Ubah antusiasme gaming menjadi keterampilan teknis seumur hidup. Peserta belajar merancang dunia 3D, physics engine, leaderboard, dan script gameplay multiplayer yang dapat dimainkan teman di seluruh dunia.',
    skillsLearned: ['3D World Building', 'Bahasa Pemrograman Luau', 'Game Physics & Mechanics', 'Multiplayer Networking Dasar'],
    syllabus: [
      { title: 'Modul 1: Roblox Studio & Obby Level Design', desc: 'Membangun lintasan rintangan 3D, material, dan checkpoint script.' },
      { title: 'Modul 2: Scripting Luau: Variables, Events & Functions', desc: 'Menulis script untuk koin, power-up, dan timer interaktif.' },
      { title: 'Modul 3: Leaderboard & Game Economy', desc: 'Menyimpan statistik pemain, currency game, dan sistem inventory.' },
      { title: 'Modul 4: Publish & Monetization Dasar', desc: 'Merilis game ke platform global dan playtesting bersama komunitas.' }
    ],
    tools: ['Roblox Studio', 'Luau Scripting', 'Blender 3D Dasar'],
    image: '/images/academy/game-dev.jpg'
  },
  {
    id: 'acad-08',
    title: 'Competitive Robotics & Algorithm Olympiad',
    slug: 'competitive-robotics-olympiad',
    category: 'Robotics',
    level: 'Advanced',
    ageGroup: 'Teens (13-17 thn)',
    duration: '4 Bulan',
    meetings: '16 Sesi Intensif + Simulasi Arena',
    price: 3500000,
    formattedPrice: 'Rp 3.500.000',
    rating: 5.0,
    studentsCount: 380,
    featured: true,
    badge: 'Jalur Prestasi',
    shortDesc: 'Persiapan intensif tembus kejuaraan WRO, FLL, dan Lomba Robot Nasional dengan algoritma PID & state machine.',
    description: 'Pelatihan tingkat lanjut bagi siswa yang memiliki target menjuarai kompetisi robotika. Fokus pada optimasi gerak, kontrol PID kalibrasi tinggi, sensor fusion, dan strategi simulasi pertandingan berstandar olimpiade.',
    skillsLearned: ['PID Algorithm Tuning', 'State Machine & Path Planning', 'Sensor Fusion (Gyro + Odometry)', 'Olympiad Strategy & Debugging'],
    syllabus: [
      { title: 'Modul 1: Teori Kendali Proporsional, Integral & Derivatif (PID)', desc: 'Matematika kendali di balik kestabilan navigasi kecepatan tinggi.' },
      { title: 'Modul 2: Kalibrasi Sensor Multi-Array & Auto-Thresholding', desc: 'Membaca kondisi arena gelap/terang secara adaptif.' },
      { title: 'Modul 3: Gripper & Mekanisme Pengangkut Objek Presisi', desc: 'Rancang bangun aktuator mekanik pengambil misi kompetisi.' },
      { title: 'Modul 4: Simulasi Kejuaraan & Mentoring Regelment', desc: 'Uji coba regulasi ketat WRO/FLL dengan batas waktu kompetisi nyata.' }
    ],
    tools: ['Nexoranesia Competition Rig', 'Oscilloscope / Telemetry Visualizer', 'Arena Standar WRO/FLL'],
    image: '/images/academy/competition-bootcamp.jpg'
  }
];

export const ROBOTICS_SHOWCASE: RoboticsProduct[] = [
  {
    id: 'rob-01',
    title: 'Nexoranesia Striker Soccer Robot V3',
    slug: 'nexoranesia-striker-soccer-robot-v3',
    category: 'Soccer Robot',
    badge: 'Juara Nasional 2024',
    price: 8500000,
    formattedPrice: 'Rp 8.500.000',
    specs: {
      'Mikrokontroler': 'STM32F405 ARM Cortex-M4 168MHz',
      'Sistem Penggerak': '4-Wheel Omnidirectional Holonomic Drive',
      'Aktuator Tendang': 'High Voltage Solenoid Kicker (Capacitive Discharge)',
      'Sensorik': '360° IR Ball Seeker + Digital Compass BNO055 + 4x Line Sensor',
      'Kecepatan Maksimal': '2.4 m/s dengan akselerasi responsif',
      'Baterai': 'LiPo 3S 11.1V 2200mAh 45C'
    },
    highlights: [
      'Mematuhi regulasi resmi Robosoccer RCJ & Kontes Robot Sepak Bola',
      'Algoritma tracking bola 360 derajat tanpa blindspot',
      'Chassis aluminium anodized CNC ultra ringan & tahan benturan keras',
      'Dukungan wireless telemetry bluetooth untuk kalibrasi real-time'
    ],
    description: 'Robot sepak bola berstandar kompetisi nasional dan dunia. Dibuat dengan tingkat presisi mekanik tertinggi dan firmware PID holonomic drive yang lincah.',
    image: '/images/robotics/soccer-bot.jpg'
  },
  {
    id: 'rob-02',
    title: 'Nexoranesia Apex Line Follower Turbo',
    slug: 'nexoranesia-apex-line-follower-turbo',
    category: 'Line Follower',
    badge: 'Best Seller Lomba',
    price: 3200000,
    formattedPrice: 'Rp 3.200.000',
    specs: {
      'Mikrokontroler': 'ESP32 Dual Core 240MHz + OLED 0.96"',
      'Array Sensor': '14-Photodiode Precision Sensor Bar dengan Auto-Calibrate',
      'Motor': 'DC Coreless High RPM 3000RPM dengan Dual Encoder',
      'Driver Motor': 'Discrete MOSFET Dual Driver 10A Continuous',
      'Algoritma': 'Discrete PID dengan Lookahead Interpolation',
      'Bodi': 'Full Carbon Fiber PCB Chassis'
    },
    highlights: [
      'Deteksi garis hitam dan putih otomatis hanya dalam 3 detik kalibrasi',
      'Fitur memori mapping lintasan dan pencatat rute perempatan',
      'Daya cengkeram roda silikon kompon balap anti selip',
      'Menu navigasi setting langsung via joystick & display OLED bawaan'
    ],
    description: 'Line follower kelas mikro tercepat di kelasnya. Dirancang khusus untuk menaklukkan lintasan rumit, tanjakan, turunan curam, dan garis patah-patah.',
    image: '/images/robotics/line-follower.jpg'
  },
  {
    id: 'rob-03',
    title: 'Nexoranesia 6-DOF Industrial Robotic Arm Trainer',
    slug: 'nexoranesia-6dof-industrial-robotic-arm',
    category: 'Robotic Arm',
    badge: 'Peralatan Lab STEM',
    price: 12500000,
    formattedPrice: 'Rp 12.500.000',
    specs: {
      'Derajat Kebebasan (DOF)': '6-Degree of Freedom (Rotasi Penuh)',
      'Aktuator': 'Digital High-Torque Bus Servo dengan Feedback Posisi',
      'Material Rangka': 'Aviation Grade Aluminium Alloy 6061',
      'Kapasitas Beban (Payload)': '500 gram pada jangkauan maksimal',
      'Interface': 'Python API, ROS2, Joypad, dan Web Controller',
      'End Effector': 'Pneumatic Suction & Mechanical Gripper Interchangeable'
    },
    highlights: [
      'Simulasi robot industri nyata untuk pendidikan vokasi dan riset universitas',
      'Mendukung perhitungan Inverse Kinematics (IK) secara real-time',
      'Fitur drag-and-teach: rekam pergerakan tangan dan ulangi secara presisi',
      'Paket lengkap dengan kamera AI untuk sistem pick-and-place berbasis warna'
    ],
    description: 'Platform edukasi lengan robotik industri untuk melatih siswa dan mahasiswa memahami mekatronika pabrik, otomasi gudang, dan integrasi visi komputer.',
    image: '/images/robotics/robotic-arm.jpg'
  },
  {
    id: 'rob-04',
    title: 'Nexoranesia Pathfinder AMR (Autonomous Mobile Robot)',
    slug: 'nexoranesia-pathfinder-amr',
    category: 'Autonomous AMR',
    badge: 'R&D Flagship',
    price: 24500000,
    formattedPrice: 'Rp 24.500.000',
    isCustomQuote: true,
    specs: {
      'Navigasi': '2D LiDAR 360° 12 Meter + Depth Camera Intel RealSense',
      'Processing Unit': 'NVIDIA Jetson Orin Nano / Raspberry Pi 5 8GB',
      'Operating System': 'Ubuntu Linux 24.04 LTS + ROS 2 Humble',
      'Payload Maksimal': '25 kg (Cocok untuk logistik indoor)',
      'Algoritma SLAM': 'Cartographer / Fast-SLAM dengan Nav2 Stack',
      'Otonom': 'Obstacle avoidance dinamis, auto-docking charger'
    },
    highlights: [
      'Platform riset universitas dan implementasi prototipe rumah sakit / pergudangan',
      'Mampu memetakan denah gedung bertingkat secara akurat tanpa GPS',
      'Dukungan penuh komunitas ROS2 dan tutorial lengkap berbahasa Indonesia',
      'Dilengkapi emergency stop button fisik dan sensor bumper pengaman'
    ],
    description: 'Solusi robot otonom beroda bergerak untuk riset tingkat lanjut dan proof-of-concept industri logistik internal masa kini.',
    image: '/images/robotics/amr-robot.jpg'
  },
  {
    id: 'rob-05',
    title: 'Nexoranesia Custom Engineering & Prototyping Service',
    slug: 'nexoranesia-custom-engineering',
    category: 'Custom R&D',
    badge: 'Layanan Terpadu',
    price: 0,
    formattedPrice: 'Konsultasi Proyek',
    isCustomQuote: true,
    specs: {
      'Cakupan Rekayasa': 'Desain 3D CAD, PCB Printing, Embedded Firmware, AI Vision',
      'Waktu Pengerjaan': '2 Minggu - 3 Bulan tergantung kompleksitas',
      'Dokumentasi': 'Schematic, Source Code, Manual Book & Training Pengoperasian',
      'Garansi': 'Dukungan teknis dan garansi komponen 6 bulan'
    },
    highlights: [
      'Bantuan rancang bangun purwarupa tugas akhir, hibah riset, atau paten produk',
      'Dikerjakan oleh insinyur mekatronika berpengalaman dari kampus ternama',
      'Kerahasiaan ide terjamin dengan Non-Disclosure Agreement (NDA)',
      'Transfer knowledge menyeluruh hingga produk siap difungsikan'
    ],
    description: 'Punya ide robot atau alat cerdas khusus? Tim insinyur NEXORANESIA siap mewujudkan konsep Anda menjadi purwarupa fungsional siap pakai.',
    image: '/images/robotics/custom-rd.jpg'
  }
];

export const STORE_ITEMS: StoreItem[] = [
  {
    id: 'store-01',
    name: 'Nexoranesia Complete STEM Robotics Starter Kit',
    slug: 'nexoranesia-stem-robotics-starter-kit',
    category: 'Robotics Kit',
    price: 585000,
    formattedPrice: 'Rp 585.000',
    stock: 45,
    rating: 4.9,
    reviewsCount: 168,
    isBestSeller: true,
    image: '/images/store/starter-kit.jpg',
    shortDesc: 'Kit lengkap belajar robotik dari nol. Dilengkapi mikrokontroler, 15+ sensor modul, sasis roda dan buku panduan bergambar.',
    specs: ['Board kompatibel Arduino Uno', 'Sasis Akrilik 2WD & Motor Gearbox', 'Modul Bluetooth & Sensor Ultrasonik', 'Free Akses Kelas Video Nexoranesia']
  },
  {
    id: 'store-02',
    name: 'ESP32 Type-C Dual Core WiFi + Bluetooth DevKit',
    slug: 'esp32-type-c-devkit',
    category: 'Microcontroller',
    price: 68000,
    formattedPrice: 'Rp 68.000',
    stock: 250,
    rating: 4.9,
    reviewsCount: 340,
    isBestSeller: true,
    image: '/images/store/esp32.jpg',
    shortDesc: 'Board mikrokontroler IoT favorit dengan port modern USB Type-C dan antena onboard berperforma tinggi.',
    specs: ['Chipset ESP-WROOM-32 240MHz', 'Flash Memory 4MB', 'Port USB Type-C CH340', 'Support Arduino IDE, MicroPython & ESP-IDF']
  },
  {
    id: 'store-03',
    name: 'Arduino Uno R3 ATmega328P DIP Original Equivalent',
    slug: 'arduino-uno-r3-dip',
    category: 'Microcontroller',
    price: 85000,
    formattedPrice: 'Rp 85.000',
    stock: 180,
    rating: 4.8,
    reviewsCount: 220,
    image: '/images/store/arduino-uno.jpg',
    shortDesc: 'Standar emas belajar elektronika dasar dan mikrokontroler pemula sekolah dan universitas.',
    specs: ['ATmega328P Chip IC DIP socket', '14 Digital I/O (6 PWM) & 6 Analog Pins', 'Input Voltage 7-12V DC', 'Dilengkapi Kabel USB Biru']
  },
  {
    id: 'store-04',
    name: 'Sensor Jarak Ultrasonik HC-SR04 High Precision',
    slug: 'sensor-ultrasonik-hcsr04',
    category: 'Sensors',
    price: 16500,
    formattedPrice: 'Rp 16.500',
    stock: 520,
    rating: 4.8,
    reviewsCount: 410,
    image: '/images/store/hc-sr04.jpg',
    shortDesc: 'Modul sensor sonar pengukur jarak 2cm hingga 400cm dengan akurasi 3mm.',
    specs: ['Tegangan Kerja 5V DC', 'Sudut Pengukuran < 15 Derajat', 'Frekuensi 40kHz', 'Kompatibel dengan Arduino, ESP32, Raspberry Pi']
  },
  {
    id: 'store-05',
    name: 'MG996R High Torque Metal Gear Digital Servo 180°',
    slug: 'mg996r-metal-gear-servo',
    category: 'Motors',
    price: 65000,
    formattedPrice: 'Rp 65.000',
    stock: 140,
    rating: 4.9,
    reviewsCount: 195,
    image: '/images/store/mg996r.jpg',
    shortDesc: 'Servo roda gigi logam tangguh untuk sendi lengan robot, kemudi RC, dan sistem mekanik presisi.',
    specs: ['Torque 11 kg/cm pada 6V', 'Full Metal Internal Gears', 'Sudut Rotasi 180 Derajat', 'Konektor standar JR 3-Pin']
  },
  {
    id: 'store-06',
    name: 'Nexoranesia 4WD Mecanum Wheel Omni Robot Chassis Kit',
    slug: '4wd-mecanum-omni-chassis',
    category: 'Robot Parts',
    price: 495000,
    formattedPrice: 'Rp 495.000',
    stock: 35,
    rating: 5.0,
    reviewsCount: 78,
    isNew: true,
    image: '/images/store/mecanum-chassis.jpg',
    shortDesc: 'Sasis robot holonomik dengan 4 roda Mecanum 60mm yang dapat bergerak ke segala arah secara instan.',
    specs: ['Plat Akrilik Tebal 4mm Kokoh', '4x Motor DC TT Gearbox 1:48', '4x Roda Mecanum Kiri & Kanan', 'Baut, Spacer, dan Dudukan Baterai Lengkap']
  },
  {
    id: 'store-07',
    name: 'L298N Dual H-Bridge Motor Driver Module',
    slug: 'l298n-dual-hbridge-driver',
    category: 'Motors',
    price: 24000,
    formattedPrice: 'Rp 24.000',
    stock: 310,
    rating: 4.7,
    reviewsCount: 312,
    image: '/images/store/l298n.jpg',
    shortDesc: 'Modul kendali arah dan kecepatan untuk 2 motor DC atau 1 motor stepper bipolar.',
    specs: ['Driver IC L298N dengan Heatsink', 'Tegangan Motor 5V - 35V', 'Arus Puncak 2A per channel', 'Dilengkapi regulator 5V onboard']
  },
  {
    id: 'store-08',
    name: 'Digital Multimeter Auto-Ranging Anti-Bakar True RMS',
    slug: 'digital-multimeter-autoranging',
    category: 'Tools',
    price: 175000,
    formattedPrice: 'Rp 175.000',
    stock: 60,
    rating: 4.9,
    reviewsCount: 89,
    image: '/images/store/multimeter.jpg',
    shortDesc: 'Alat ukur wajib bagi teknisi mekatronika. Otomatis menentukan rentang ukur voltase, resistansi, dan kontinuitas.',
    specs: ['Pengukuran AC/DC Voltage & Current', 'Uji Dioda & Buzzer Kontinuitas Cepat', 'Layar LCD dengan Backlight Terang', 'Perlindungan overload ganda']
  },
  {
    id: 'store-09',
    name: 'Sensor MPU-6050 6-Axis Gyroscope + Accelerometer I2C',
    slug: 'mpu6050-gyro-accelerometer',
    category: 'Sensors',
    price: 28500,
    formattedPrice: 'Rp 28.500',
    stock: 220,
    rating: 4.8,
    reviewsCount: 154,
    image: '/images/store/mpu6050.jpg',
    shortDesc: 'Sensor penyeimbang untuk robot self-balancing, drone, pelacak orientasi gerak kepala, dan gimbal kamera.',
    specs: ['Prosesor DMP (Digital Motion Processor)', 'Interface Komunikasi I2C Standar', 'Resolusi 16-bit ADC tiap channel', 'Low power consumption']
  },
  {
    id: 'store-10',
    name: 'Nexoranesia IoT Smart Hydroponics / Garden Starter Kit',
    slug: 'iot-smart-hydroponics-kit',
    category: 'Robotics Kit',
    price: 690000,
    formattedPrice: 'Rp 690.000',
    stock: 28,
    rating: 5.0,
    reviewsCount: 42,
    isNew: true,
    image: '/images/store/iot-hydroponics.jpg',
    shortDesc: 'Kit otomasi penyiraman tanaman cerdas berbasis ESP32, sensor kelembaban tanah kapasitif, dan pompa mini.',
    specs: ['ESP32 Controller + Relay Module', 'Sensor Kelembaban Tanah Kapasitif Anti Karat', 'Mini Submersible Water Pump + Selang 2m', 'Dashboard monitoring via aplikasi smartphone']
  }
];

export const COMPETITION_PROGRAMS: CompetitionProgram[] = [
  {
    id: 'comp-01',
    name: 'World Robot Olympiad (WRO)',
    tier: 'International',
    organizer: 'WRO Association (Dunia)',
    categories: ['RoboMission (Elementary, Junior, Senior)', 'Future Innovators', 'Future Engineers (Autonomous Car)'],
    targetAge: 'Usia 8 - 19 Tahun',
    schedule: 'Seleksi Regional: April-Juni | Nasional: Agustus | Global Final: November',
    status: 'Open Registration',
    description: 'Ajang kompetisi robotika anak dan remaja paling bergengsi di dunia. NEXORANESIA menyediakan pendampingan teknis intensif dari perakitan mekanik, algoritma navigasi cepat, hingga kesiapan mental bertanding.',
    mentoringPhases: [
      'Analisis Regelment & Bedah Matriks Poin Misi Resmi',
      'Desain CAD Robot & Mekanisme Pengambil Objek Khusus',
      'Kalibrasi Sensor Warna & Algoritma Navigasi Garis Presisi',
      'Simulasi Surprise Rule & Manajemen Waktu Perakitan',
      'Pendampingan Delegasi Langsung di Venue Pertandingan'
    ],
    achievements: 'Bimbingan NEXORANESIA telah meraih 1st Place National WRO 2023 & Top 8 International Final di Panama.'
  },
  {
    id: 'comp-02',
    name: 'FIRST LEGO League (FLL) Challenge',
    tier: 'International',
    organizer: 'FIRST & LEGO Education',
    categories: ['Robot Game', 'Innovation Project', 'Core Values & Teamwork'],
    targetAge: 'Usia 9 - 16 Tahun',
    schedule: 'Kickoff Tema: September | Turnamen: Januari - Maret',
    status: 'Preparation Phase',
    description: 'Turnamen global yang menggabungkan keahlian robotik dengan riset inovasi sains dan nilai kepemimpinan tim (Core Values).',
    mentoringPhases: [
      'Brainstorming & Validasi Ide Innovation Project',
      'Desain Modular Attachments & Pemrograman Robot Spike Prime',
      'Public Speaking & Persiapan Presentasi Juri Berbahasa Inggris',
      'Simulasi Penilaian Core Values & Poster Desain Rekayasa'
    ],
    achievements: 'Juara Kategori Robot Design Award & National Representative FLL Houston 2024.'
  },
  {
    id: 'comp-03',
    name: 'Robofest World Championship',
    tier: 'International',
    organizer: 'Lawrence Technological University (USA)',
    categories: ['Game Competition', 'Exhibition (Open STEM Robotics)', 'RoboParade', 'Vision Centric Robot'],
    targetAge: 'Usia 10 - 18 Tahun',
    schedule: 'Seleksi Indonesia: Februari | World Championship: Mei di Michigan, USA',
    status: 'Upcoming',
    description: 'Kompetisi otonom murni tanpa kendali jarak jauh (remote control), menuntut penguasaan algoritma mandiri dan sensor cerdas.',
    mentoringPhases: [
      'Penyelesaian Masalah Otonom Tanpa Intervensi Manual',
      'Optimasi Kecepatan Algoritma Search and Rescue',
      'Dokumentasi Kode & Uji Stabilitas Rangka Fisik'
    ],
    achievements: 'Gold Medal Robofest Exhibition Division 2024.'
  },
  {
    id: 'comp-04',
    name: 'Indonesian Robotics Challenge (IRC) & Kontes Robot Nasional',
    tier: 'National',
    organizer: 'Asosiasi Robotika & Kemendikbudristek',
    categories: ['Soccer Robot RCJ', 'Line Follower Micro Open', 'Creative Maker & IoT Innovation', 'Maze Runner'],
    targetAge: 'SD, SMP, SMA, SMK & Mahasiswa',
    schedule: 'Berlangsung Sepanjang Tahun (Series Kota & Nasional)',
    status: 'Open Registration',
    description: 'Panggung unjuk gigi talenta robotik terbaik se-Indonesia. Kami membina tim sekolah dari level nol hingga menembus podium juara.',
    mentoringPhases: [
      'Penyusunan Rencana Kerja Tim & Alokasi Peran Spesialisasi',
      'Penyediaan Rig & Komponen Kelas Pertandingan',
      'Dry Run & Sparring Partner Antar Tim Binaan NEXORANESIA'
    ],
    achievements: '24+ Trofi Juara 1, 2, dan 3 di berbagai event IRC, UGM Robo, dan ITS Robotics.'
  }
];

export const INSTITUTIONAL_SOLUTIONS: InstitutionalSolution[] = [
  {
    id: 'sol-01',
    title: 'STEM & Robotics Lab Turnkey Setup',
    slug: 'stem-robotics-lab-setup',
    tagline: 'Transformasi Ruang Belajar Sekolah Menjadi Laboratorium Inovasi Masa Depan',
    target: 'Sekolah (SD/SMP/SMA/SMK)',
    icon: 'Cpu',
    description: 'Layanan terpadu pembangunan ruang laboratorium robotika dan STEM sekolah mulai dari layout ergonomis, meja kerja antistatik, rak penyimpanan modular, hub 3D printing, hingga branding interior futuristik.',
    features: [
      'Desain 3D Visual & Perencanaan Layout Ruangan Futuristik',
      'Pengadaan 10-30 Set Robot Edukasi & Starter Kit Terstandarisasi',
      'Penyediaan Fasilitas 3D Printer & Komputerisasi Lab',
      'Storage Modular Khusus Komponen Elektronika & Toolset Lengkap',
      'Sertifikat Kemitraan Laboratorium Resmi NEXORANESIA'
    ],
    deliverables: [
      'Fasilitas Laboratorium Siap Pakai 100%',
      'SOP Pemakaian & Tata Tertib Keamanan Peralatan',
      'Dokumen Inventaris & Garansi Servis Hardware 1 Tahun'
    ],
    investmentTier: 'Konsultasi Kebutuhan & Skala Ruang'
  },
  {
    id: 'sol-02',
    title: 'Integrated STEM Curriculum & Licensing',
    slug: 'stem-curriculum-licensing',
    tagline: 'Kurikulum Teknologi Modern Siap Ajarkan untuk Kurikulum Merdeka',
    target: 'Sekolah (SD/SMP/SMA/SMK)',
    icon: 'BookOpen',
    description: 'Modul ajar lengkap berstandar global untuk mata pelajaran informatika, kokurikuler STEM, maupun muatan lokal. Dilengkapi buku panduan guru, slide materi interaktif, lembar kerja siswa (LKS), dan rubrik asesmen.',
    features: [
      'Silabus Bertingkat (Tingkat Pemula, Menengah, Mahir)',
      'Buku Panduan Guru Step-by-Step & Kunci Jawaban Proyek',
      'Modul Lembar Proyek Siswa & Video Tutorial Penjelas',
      'Penilaian Berbasis Portofolio & Capstone Project Nyata',
      'Revisi & Update Konten Berkala Mengikuti Perkembangan AI'
    ],
    deliverables: [
      'Akses Repositori Digital Materi Lengkap Guru',
      'Paket Cetak Buku Panduan Siswa',
      'Template Asesmen Nilai Siap Pakai'
    ],
    investmentTier: 'Lisensi Tahunan Terjangkau per Sekolah'
  },
  {
    id: 'sol-03',
    title: 'Teacher Training & Certification (ToT)',
    slug: 'teacher-training-certification',
    tagline: 'Mencetak Guru Ahli Pembina Robotika & Coding yang Berdikari',
    target: 'Sekolah (SD/SMP/SMA/SMK)',
    icon: 'GraduationCap',
    description: 'Pelatihan intensif bagi guru sekolah untuk menguasai metodologi pengajaran coding dan robotika tanpa harus memiliki latar belakang IT murni. Kami bimbing hingga percaya diri mengajar di kelas.',
    features: [
      '3-5 Hari Workshop Tatap Muka / Hybrid Intensif',
      'Praktik Langsung Merakit & Debugging Masalah Umum Robot',
      'Simulasi Mengajar Mikro (Microteaching) & Manajemen Kelas',
      'Akses Konsultasi Langsung dengan Master Mentor NEXORANESIA',
      'Sertifikat Kompetensi Pengajar Robotika Terakreditasi'
    ],
    deliverables: [
      'Sertifikat Instruktur Resmi NEXORANESIA',
      'Kit Pelatihan Guru Eksklusif',
      'Pendampingan Online Berkala Selama 6 Bulan'
    ],
    investmentTier: 'Paket Workshop per Institusi'
  },
  {
    id: 'sol-04',
    title: 'Extracurricular Club Management & Coaching',
    slug: 'extracurricular-management',
    tagline: 'Pengelolaan Ekstrakurikuler Robotika Profesional Tanpa Beban Guru',
    target: 'Sekolah (SD/SMP/SMA/SMK)',
    icon: 'Users',
    description: 'NEXORANESIA menyediakan pelatih berpengalaman yang datang langsung ke sekolah setiap minggu untuk membimbing ekskul robotika, menyiapkan delegasi lomba, dan menggelar pameran karya akhir semester.',
    features: [
      'Instruktur Resmi Bersertifikasi dari Tim NEXORANESIA',
      'Jadwal Rutin Mingguan yang Menyesuaikan Agenda Sekolah',
      'Laporan Perkembangan Individu Siswa ke Pihak Sekolah & Orang Tua',
      'Penyelenggaraan Internal School Exhibition / Showcase Karya',
      'Prioritas Seleksi Tim Binaan Menuju Kejuaraan Resmi'
    ],
    deliverables: [
      'Laporan Absensi & Nilai Capaian Belajar Per Semester',
      'Dokumentasi Foto/Video Kegiatan Ekstrakurikuler',
      'Trofi & Sertifikat Apresiasi Siswa'
    ],
    investmentTier: 'Iuran Bulanan per Peserta / Kontrak Kerjasama Sekolah'
  }
];

export const PORTFOLIO_PROJECTS: ProjectPortfolio[] = [
  {
    id: 'port-01',
    title: 'Smart Agrotech Hydroponic Monitoring Robot',
    category: 'Student Project',
    client: 'Karya Siswa Binaan NEXORANESIA Academy',
    year: '2024',
    description: 'Sistem mobile robot cerdas yang bergerak menyusuri rak hidroponik untuk memantau kadar nutrisi PPM, pH air, dan deteksi dini daun layu menggunakan kamera AI edge computing.',
    tags: ['ESP32', 'AI Computer Vision', 'Mobile Robot', 'IoT Cloud'],
    metrics: 'Juara 1 Youth Inovator Expo 2024',
    image: '/images/projects/agrotech-bot.jpg'
  },
  {
    id: 'port-02',
    title: 'Pembangunan Modern Robotics Lab SMA Unggulan Malang',
    category: 'Institutional Lab',
    client: 'SMA Negeri Favorit di Jawa Timur',
    year: '2024',
    description: 'Pengadaan 24 unit komputer sains, 30 kit robotika modular, 3 printer 3D, dan pelatihan bagi 6 guru pengampu kurikulum STEM tingkat lanjut.',
    tags: ['Turnkey Lab', 'Teacher Training', '3D Printing Hub'],
    metrics: 'Menaikkan minat ekskul teknologi sekolah hingga 300%',
    image: '/images/projects/school-lab.jpg'
  },
  {
    id: 'port-03',
    title: 'Nexoranesia Delta Striker — Robot Sepak Bola Holonomik',
    category: 'Robotics Innovation',
    client: 'R&D NEXORANESIA Robotics Division',
    year: '2023 - 2024',
    description: 'Robot sepak bola berkecepatan 2.4 m/s dengan solenoid kicker 250V yang mengantarkan kontingen Indonesia meraih podium kompetisi internasional di Singapura.',
    tags: ['STM32', 'Holonomic Drive', 'High-Voltage Solenoid', 'Olympiad'],
    metrics: 'Podium 2nd Place ASEAN RoboCup Junior',
    image: '/images/projects/soccer-podium.jpg'
  },
  {
    id: 'port-04',
    title: 'Smart Waste Sorting AI Bin for Eco-Campus',
    category: 'Student Project',
    client: 'Tim Pelajar SMA Binaan NEXORANESIA',
    year: '2024',
    description: 'Tempat sampah cerdas dengan kemampuan memilah sampah organik, anorganik, dan limbah elektronik secara otomatis menggunakan sensor induktif dan model klasifikasi gambar.',
    tags: ['Machine Learning', 'Servo Gripper', 'Raspberry Pi', 'Environmental STEM'],
    metrics: 'Special Award at International Science & Invention Fair',
    image: '/images/projects/waste-sorter.jpg'
  }
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'art-01',
    title: 'Apa Itu Coding dan Mengapa Anak Perlu Belajar Sejak Usia Sekolah Dasar?',
    slug: 'apa-itu-coding-mengapa-anak-perlu-belajar',
    category: 'Education',
    date: '10 November 2024',
    readTime: '5 Menit Baca',
    author: 'Fajar Nugraha, M.T.',
    authorRole: 'Head of NEXORANESIA Academy',
    excerpt: 'Coding bukan sekadar menghafal sintaks kode rumit, melainkan metode melatih computational thinking, logika terstruktur, dan pemecahan masalah sejak dini.',
    content: [
      'Di era kecerdasan buatan (AI) yang berkembang sangat pesat, kemampuan membaca dan menulis kode telah bergeser dari sekadar keterampilan teknis menjadi bentuk literasi baru di abad ke-21.',
      'Ketika seorang anak belajar pemrograman visual seperti Scratch atau robotika modular, mereka tidak sedang dipaksa menjadi programmer profesional dewasa. Yang sebenarnya terjadi adalah proses pembentukan cara berpikir komputasi (computational thinking): bagaimana menguraikan masalah rumit menjadi langkah-langkah kecil yang logis (dekomposisi), menemukan pola yang berulang, dan menyusun algoritma yang efisien.',
      'Riset menunjukkan anak-anak yang belajar coding sejak usia 7-10 tahun memiliki kemampuan pemecahan masalah matematis 24% lebih tinggi dan lebih tahan banting terhadap kegagalan (resilience), karena dalam coding "error" atau "bug" dipandang sebagai teka-teki yang menyenangkan untuk dipecahkan.',
      'NEXORANESIA Academy merancang kurikulum bertahap yang menyenangkan: dimulai dari eksplorasi blok animasi di usia anak-anak, berlanjut ke pemrograman robot nyata, hingga sintaks bahasa industri seperti Python dan C++ di usia remaja.'
    ]
  },
  {
    id: 'art-02',
    title: 'Panduan Lengkap Merakit Robot Line Follower Pemula dari Nol',
    slug: 'panduan-merakit-robot-line-follower-pemula',
    category: 'Tutorial',
    date: '02 November 2024',
    readTime: '8 Menit Baca',
    author: 'Bayu Aditya, S.T.',
    authorRole: 'Senior Robotics Hardware Specialist',
    excerpt: 'Pahami cara kerja sensor photodioda, logika komparator tegangan, motor driver H-Bridge, hingga penulisan kode kendali motor pertama Anda.',
    content: [
      'Robot pengikut garis (Line Follower) adalah "Hello World" dalam dunia mekatronika dan robotika gerak mandiri (mobile autonomous).',
      '1. Prinsip Kerja Sensor Garis: Garis hitam dan permukaan putih memiliki koefisien pantulan cahaya yang sangat berbeda. Permukaan putih memantulkan sebagian besar cahaya inframerah dari LED emiter kembali ke photodiode, sedangkan garis hitam menyerapnya. Perbedaan intensitas cahaya ini diubah menjadi variasi tegangan analog.',
      '2. Rangkaian Komparator vs ADC: Pada robot analog sederhana, op-amp seperti LM324 membandingkan tegangan sensor dengan potensiometer acuan. Namun pada robot digital modern berbasis Arduino/ESP32, nilai dibaca langsung melalui pin ADC untuk mendapatkan fleksibilitas kalibrasi otomatis.',
      '3. Pengendalian Kecepatan dengan PWM: Untuk belokan yang mulus dan stabil tanpa keluar jalur, kita memanfaatkan sinyal Pulse Width Modulation (PWM) ke IC driver motor seperti L298N atau modul MOSFET TB6612FNG.',
      'Di NEXORANESIA Store, kami menyediakan paket Nexoranesia Apex Line Follower Kit lengkap dengan panduan skematik dan source code yang siap diujicobakan.'
    ]
  },
  {
    id: 'art-03',
    title: 'Mengenal Artificial Intelligence & Computer Vision untuk Pelajar Masa Kini',
    slug: 'mengenal-ai-computer-vision-untuk-pelajar',
    category: 'Technology',
    date: '25 Oktober 2024',
    readTime: '6 Menit Baca',
    author: 'Ir. Hendra Wijaya',
    authorRole: 'AI & Machine Learning Advisor NEXORANESIA',
    excerpt: 'Bagaimana sebuah komputer bisa "melihat" dan mengenali wajah, objek, atau rambu lalu lintas? Kupas tuntas konsep vision AI secara sederhana.',
    content: [
      'Bagi komputer, sebuah gambar sebenarnya hanyalah susunan angka-angka dalam matriks 2 dimensi atau 3 dimensi (RGB), di mana tiap angka merepresentasikan tingkat kecerahan pixel dari 0 (hitam) hingga 255 (putih terang).',
      'Computer Vision adalah cabang ilmu AI yang memungkinkan mesin memahami arti di balik susunan angka-angka tersebut.',
      'Dalam kurikulum Python & AI di NEXORANESIA Academy, peserta diajak langsung mempraktikkan library OpenCV dan MediaPipe untuk mendeteksi 21 titik sendi tangan dari webcam secara real-time. Dengan data titik sendi tersebut, siswa dapat membuat game kontroler tanpa sentuhan hanya dengan melambaikan tangan di depan laptop!',
      'Membekali generasi muda dengan pemahaman cara kerja AI sejak bangku sekolah memastikan mereka tidak hanya menjadi pengguna pasif, tetapi menjadi kreator inovasi masa depan.'
    ]
  },
  {
    id: 'art-04',
    title: 'Strategi dan Kiat Sukses Menembus Kejuaraan Robotika Dunia (WRO & FLL)',
    slug: 'strategi-sukses-kejuaraan-robotika-wro-fll',
    category: 'Competition',
    date: '15 Oktober 2024',
    readTime: '7 Menit Baca',
    author: 'Tim Pelatih NEXORANESIA Competition',
    authorRole: 'National & Global Delegation Mentors',
    excerpt: 'Kunci menjuarai olimpiade robotika internasional tidak hanya terletak pada kecepatan robot, melainkan reliabilitas mekanik, kesiapan tim, dan manajemen strategi.',
    content: [
      'Setiap tahunnya, ribuan siswa dari lebih dari 70 negara berkompetisi di World Robot Olympiad (WRO) dan FIRST LEGO League (FLL). Mengapa banyak tim yang robotnya sangat cepat saat latihan di sekolah justru gagal di arena turnamen resmi?',
      'Faktor #1: Variasi Pencahayaan Arena. Lampu sorot panggung dan pantulan cahaya venue sering kali membuat sensor warna meleset. Tim binaan NEXORANESIA dilatih membuat algoritma auto-kalibrasi dinamis sesaat sebelum robot dinyalakan.',
      'Faktor #2: Drop Tegangan Baterai. Robot yang diprogram dengan kecepatan tetap (konstan) akan berperilaku lambat saat baterai mulai turun dari 12V ke 11.2V. Penggunaan encoder motor dan sensor gyroscope (IMU) adalah keharusan untuk menjaga akurasi jarak tempuh.',
      'Faktor #3: Mental Bertanding & Teamwork. Di NEXORANESIA Competition Center, kami mengadakan simulasi pertandingan berkala dengan batas waktu ketat dan "kejutan aturan mendadak" (surprise rule) agar peserta tidak panik di panggung internasional.'
    ]
  },
  {
    id: 'art-05',
    title: 'Langkah Membangun Laboratorium Robotika & STEM di Sekolah Modern',
    slug: 'langkah-membangun-lab-robotika-stem-sekolah',
    category: 'Case Study',
    date: '08 Oktober 2024',
    readTime: '6 Menit Baca',
    author: 'Dian Permata, M.Pd.',
    authorRole: 'Institutional Solutions Consultant',
    excerpt: 'Poin-poin penting yang harus diperhatikan kepala sekolah dan yayasan sebelum menginvestasikan dana untuk pengadaan Lab STEM dan Robotika.',
    content: [
      'Banyak institusi sekolah yang telah mengalokasikan anggaran besar untuk membeli kit robotika canggih, namun setahun kemudian peralatan tersebut hanya tersimpan di lemari karena gurunya tidak siap mengajar atau tidak ada kurikulum terpadu.',
      'Melalui NEXORANESIA Solutions, kami menerapkan prinsip Tri-Fokus dalam setiap pembangunan laboratorium sekolah:',
      '1. Hardware & Lingkungan: Meja kerja dengan perlindungan listrik yang aman, rak penyimpanan komponen bersistem barcode, serta 3D printing area.',
      '2. Modul Kurikulum Terstruktur: Panduan ajar bertahap per semester yang terintegrasi dengan capaian pembelajaran Kurikulum Merdeka.',
      '3. Pemberdayaan Guru (ToT): Pelatihan intensif hingga guru sekolah memiliki kepercayaan diri memandu kelas, membimbing ekskul, dan menangani perbaikan alat sederhana.',
      'Hubungi tim NEXORANESIA Solutions untuk mendapatkan proposal studi kelayakan dan simulasi anggaran gratis bagi sekolah Anda.'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-01',
    name: 'Dr. Ir. Bambang Sujarwo, M.T.',
    role: 'Kepala Sekolah Mitra SMA Unggulan',
    organization: 'Sekolah Menengah Atas di Jawa Timur',
    avatar: '/images/avatars/bambang.jpg',
    content: 'Kerjasama pendirian STEM & Robotics Lab bersama NEXORANESIA mengubah iklim riset di sekolah kami secara drastis. Siswa yang awalnya pasif kini mampu membuat inovasi IoT yang menjuarai kompetisi tingkat provinsi. Pendampingan guru mereka sangat tuntas!',
    rating: 5
  },
  {
    id: 'test-02',
    name: 'Nadia Safira & Bpk. Hendarto',
    role: 'Orang Tua Siswa NEXORANESIA Academy',
    organization: 'Peserta Program Robotics for Kids',
    avatar: '/images/avatars/nadia.jpg',
    content: 'Putra kami (10 tahun) dulunya kecanduan game online berjam-jam. Setelah ikut kelas Robotics di Nexoranesia, energinya beralih merakit robot dan mengotak-atik Scratch. Sekarang dia bangga bisa pamer game buatannya sendiri ke teman-temannya.',
    rating: 5
  },
  {
    id: 'test-03',
    name: 'Rifqi Pratama',
    role: 'Ketua Tim Robotika Binaan',
    organization: 'Juara 1 WRO Regional 2023',
    avatar: '/images/avatars/rifqi.jpg',
    content: 'Mentor di NEXORANESIA Competition benar-benar detail mengajarkan algoritma PID dan strategi arena. Kami tidak cuma diajari cara menang, tapi juga bagaimana mendiagnosa error saat robot macet di arena bertekanan tinggi.',
    rating: 5
  },
  {
    id: 'test-04',
    name: 'Kevin Santoso',
    role: 'Maker & Pengembang Perangkat IoT',
    organization: 'Pelanggan Setia NEXORANESIA Store',
    avatar: '/images/avatars/kevin.jpg',
    content: 'Pengiriman komponen dari NEXORANESIA Store super cepat dan barangnya dijamin original. Sangat jarang ada toko robotika di Indonesia yang memberikan datasheet jelas dan tim teknis yang ramah saat diajak diskusi troubleshooting.',
    rating: 5
  }
];

export const CLIENT_PARTNERS = [
  { name: 'SMAN 1 Favorit Malang', type: 'Sekolah Menengah' },
  { name: 'Institut Teknologi Nusantara', type: 'Perguruan Tinggi' },
  { name: 'SMP Al-Hikmah Islamic School', type: 'Sekolah Mitra STEM' },
  { name: 'Robotics Olympiad Committee', type: 'Partner Turnamen' },
  { name: 'Yayasan Bina Talenta Vokasi', type: 'Lembaga Pendidikan' },
  { name: 'Maker Fest Indonesia', type: 'Komunitas Hardware' }
];
