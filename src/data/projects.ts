export interface CaseStudy {
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  category: string;
  role: string;
  year: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const Projects: CaseStudy[] = [
  {
    title: "Optimasi Sinkronisasi State & Konflik Data pada Aplikasi Absensi Mobile",
    problem: "Aplikasi sering mengalami race condition (tabrakan data) dan konflik state lokal ketika user melakukan check-in offline di area minim sinyal lalu mengirim data secara bersamaan.",
    solution: "Menerapkan arsitektur offline-first dengan lokal antrean sekuensial (SQLite) dan algoritma rekonsiliasi timestamp untuk memastikan validitas data sebelum disinkronkan ke server pusat.",
    techStack: ["Mobile App", "SQLite", "Git Control", "REST API Builder"],
    category: "MOBILE APPLICATION",
    role: "Full-Stack Dev",
    year: "2026",
    image: "/images/projects/attendance-app.png",
    liveUrl: "https://demo.attendanceapp.com",
    githubUrl: "https://github.com/yourusername/attendanceApp-mobile"
  },
  {
    title: "Refactoring Arsitektur Database & State Session pada Monolith Project",
    problem: "Bottleneck performa dan kebocoran session storage ketika relasi data project meningkat, mengakibatkan query N+1 yang memperlambat loading dashboard secara drastis.",
    solution: "Melakukan optimasi skema database via indexing, migrasi session ke table terisolasi, dan mengimplementasikan Eager Loading untuk memangkas eksekusi query hingga 65%.",
    techStack: ["PHP", "Laravel System", "Relational DB", "Query Optimizer"],
    category: "WEB DEVELOPMENT",
    role: "Backend Eng",
    year: "2026",
    image: "/images/projects/laravel-portfolio.png",
    liveUrl: "https://portfolio.dev",
    githubUrl: "https://github.com/yourusername/Portofolio-laravel"
  },
  {
    title: "Sistem Otomasi Screen-Interaction Berbasis Vision-Language Model Lokal",
    problem: "Skrip otomasi berbasis koordinat layar sering patah/gagal akibat perubahan dinamis pada tata letak (layout) UI aplikasi target di berbagai resolusi layar.",
    solution: "Mengintegrasikan local AI model (VLM) via LM Studio sebagai mesin pendeteksi elemen visual secara real-time, memberikan koordinat dinamis yang akurat sebelum dieksekusi oleh py-script.",
    techStack: ["Python Engine", "Local AI / Gemma", "PyAutoGUI", "Automation Tool"],
    category: "ARTIFICIAL INTELLIGENCE",
    role: "Automation Eng",
    year: "2025",
    image: "/images/projects/ai-automation.png",
    liveUrl: "",
    githubUrl: "https://github.com/yourusername/local-vlm-pyautogui"
  },
  {
    title: "Perancangan Asynchronous Queue & Rate Limiter pada Webhook Gateway",
    problem: "Server sering mengalami crash (HTTP 429 & Gateway Timeout) akibat lonjakan request webhooks dari platform pihak ketiga yang masuk secara bersamaan tanpa pembatasan.",
    solution: "Membangun sistem antrean asinkronus berbasis Worker Redis dan mengimplementasikan Token Bucket Rate-Limiting untuk mendistribusikan beban eksekusi API secara merata.",
    techStack: ["Redis Broker", "Queue Worker", "API Throttling", "Backend Security"],
    category: "BACKEND ARCHITECTURE",
    role: "Backend Eng",
    year: "2025",
    image: "/images/projects/webhook-gateway.png",
    liveUrl: "",
    githubUrl: "https://github.com/yourusername/redis-queue-limiter"
  },
  {
    title: "Sistem Pipeline Data & Scraping Otomatis Berbasis Memory-Safe Worker",
    problem: "Proses penambangan data dari ratusan target situs web sering terhenti di tengah jalan karena deteksi bot (IP Ban) dan konsumsi RAM server yang melonjak hingga memicu Out-Of-Memory.",
    solution: "Mengembangkan script otomasi headless dengan rotasi proxy dinamis, sistem pembersihan RAM otomatis setelah siklus eksekusi, serta mekanisme auto-retry jika koneksi terputus.",
    techStack: ["Python Engine", "Scrapy System", "Proxy Rotator", "Memory Optimizer"],
    category: "DATA ENGINEERING",
    role: "Data Engineer",
    year: "2025",
    image: "/images/projects/data-pipeline.png",
    liveUrl: "",
    githubUrl: "https://github.com/yourusername/memory-safe-scraper"
  },
  {
    title: "Pembangunan Engine Layout Modular dengan Optimasi Sistem SEO Dinamis",
    problem: "Proses perilisan halaman portofolio dan dokumentasi proyek memakan waktu lama karena tim harus menulis ulang struktur boilerplate HTML dan meta tags secara manual untuk tiap rute.",
    solution: "Merancang arsitektur tata letak berbasis komponen server-side yang mengisolasi skrip global, mengotomatisasi generasi Open Graph tags, serta mengoptimalkan pemuatan aset kritis.",
    techStack: ["Astro Framework", "Tailwind CSS", "SEO Architecture", "Component UI"],
    category: "WEB DEVELOPMENT",
    role: "Frontend Eng",
    year: "2026",
    image: "/images/projects/modular-engine.png",
    liveUrl: "https://premium-portfolio-showcase.pages.dev",
    githubUrl: "https://github.com/yourusername/astro-premium-portfolio"
  },
  {
    title: "Client Engine & Pipeline Render untuk Lightweight Fantasy RPG",
    problem: "Overhead grafis dan memori yang tinggi pada standar engine membuat proyek game bergenre MMORPG fantasi sulit berjalan stabil di atas 60fps, sering memicu overheating pada sistem pendingin laptop.",
    solution: "Mengembangkan kustomisasi rendering pipeline 2.5D dan optimasi pemuatan aset secara asinkron (asynchronous asset loading) sehingga menekan konsumsi RAM dan meringankan beban kerja perangkat secara dramatis.",
    techStack: ["C#", "Unity Engine", "Asset Bundles", "Game Loop"],
    category: "GAME DEVELOPMENT",
    role: "Game Client Dev",
    year: "2026",
    image: "/images/projects/fantasy-rpg.png",
    liveUrl: "https://store.steampowered.com/app/...",
    githubUrl: ""
  },
  {
    title: "Sistem Manajemen & Sinkronisasi Save-State untuk Emulator Game",
    problem: "Pemain sering kehilangan progres (save state) saat berpindah sesi bermain dari perangkat PC ke mobile karena tidak adanya standarisasi struktur sinkronisasi pada file memory card virtual.",
    solution: "Membangun microservice backend untuk melakukan sinkronisasi save state lintas platform dengan algoritma kompresi data binary, memungkinkan proses unggah/unduh state ke cloud berjalan nyaris instan.",
    techStack: ["Node.js", "Redis", "Binary Parser", "Cloud Sync"],
    category: "GAME DEVELOPMENT",
    role: "Backend Eng",
    year: "2025",
    image: "/images/projects/emulator-sync.png",
    liveUrl: "",
    githubUrl: "https://github.com/yourusername/emu-cloud-sync"
  }
];