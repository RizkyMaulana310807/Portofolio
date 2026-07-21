export interface Experience {
    role: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
    techStack: string[];
}

export const Experiences: Experience[] = [
    {
        role: "Backend / Full-Stack Developer",
        company: "Freelance",
        location: "Remote",
        period: "Agustus 2024 - Januari 2026",
        description: "Merancang dan mengembangkan berbagai aplikasi web serta mobile dengan fokus utama pada arsitektur backend, pembuatan API, dan penanganan logika bisnis yang kompleks.",
        achievements: [
            "Membangun dan menstrukturisasi database untuk berbagai sistem manajemen, termasuk aplikasi absensi mobile, platform rental barang, dan sistem peminjaman buku perpustakaan.",
            "Merancang RESTful API mandiri (lokal dan online) sebagai jembatan komunikasi data yang aman dan efisien antara server dan *client-side*.",
            "Mengintegrasikan API pihak ketiga secara dinamis pada aplikasi komik untuk menarik dan menampilkan data buku secara *real-time* tanpa membebani *storage* lokal.",
            "Memprioritaskan fungsionalitas, performa, dan integritas data pada sisi backend di berbagai proyek yang memiliki tenggat waktu ketat."
        ],
        techStack: ["Laravel", "PHP", "RESTful API", "MySQL/SQLite", "Git", "Postman"]
    },
    {
        role: "Full-Stack Web Developer",
        company: "Team Project (Food Business Simulation)",
        location: "On-site / Remote",
        period: "2025",
        description: "Berkolaborasi dalam tim pengembang beranggotakan 3 orang untuk membangun platform e-commerce dan manajemen pesanan end-to-end untuk bisnis kuliner.",
        achievements: [
            "Mengembangkan katalog produk interaktif yang memfasilitasi pengguna untuk melihat ketersediaan stok (*ready*) dan melakukan pemesanan sistem *pre-order*.",
            "Membangun *Admin Panel* khusus untuk mengelola operasional bisnis, memungkinkan pelacakan pesanan masuk dan pembaruan status pengiriman secara *real-time* (dari proses hingga selesai).",
            "Bertanggung jawab penuh atas siklus *full-stack* bersama satu rekan *developer*, mulai dari perancangan antarmuka, pembuatan logika backend, hingga integrasi database."
        ],
        techStack: ["PHP", "Laravel", "HTML/CSS", "JavaScript", "MySQL", "Git"]
    },
    {
        role: "Game Logic Programmer",
        company: "Educational / Independent Project",
        location: "Remote",
        period: "2024 - 2025",
        description: "Mempelajari dan menerapkan logika inti permainan (gameplay programming) untuk pengembangan sistem dan mekanika beberapa proyek game sederhana.",
        achievements: [
            "Merancang dan mengimplementasikan algoritma untuk sistem penyimpanan data pemain (*save score*) secara persisten.",
            "Membangun logika kalkulasi matematis internal game, termasuk sistem pengurangan nilai dan manajemen *Health Points* (darah/HP) karakter.",
            "Fokus pada efisiensi struktur kode *backend* game untuk memastikan mekanika permainan berjalan lancar dan responsif."
        ],
        techStack: ["Game Logic", "Data Structures", "Algorithms", "Object-Oriented Programming"]
    },
    {
        role: "Automation & Tools Developer",
        company: "Independent Projects",
        location: "Remote",
        period: "2024 - 2025",
        description: "Fokus pada pengembangan utilitas automasi berbasis kecerdasan buatan lokal (Local AI) dan skrip pengolahan data berskala besar.",
        achievements: [
            "Mengintegrasikan Vision-Language Model (VLM) via LM Studio dengan skrip Python untuk menciptakan sistem otomasi layar yang adaptif terhadap perubahan resolusi UI.",
            "Mengembangkan data pipeline dan scraping otomatis memory-safe dengan fitur rotasi proxy guna mencegah IP ban dan kebocoran memori RAM."
        ],
        techStack: ["Python", "Gemma AI", "PyAutoGUI", "Scrapy", "Linux Server"]
    }
];