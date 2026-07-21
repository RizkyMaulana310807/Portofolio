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
    role: "Backend / Full-Stack Web Developer",
    company: "Tech Enterprise / Self-Employed",
    location: "Remote / Jakarta",
    period: "2025 - Sekarang",
    description: "Bertanggung jawab atas siklus pengembangan aplikasi web monolith berbasis Laravel dan sistem otomasi backend untuk meningkatkan efisiensi operasional.",
    achievements: [
      "Melakukan refactoring skema database dan mengimplementasikan Eager Loading yang berhasil memangkas eksekusi query N+1 hingga 65%.",
      "Merancang sistem antrean asinkronus (Asynchronous Queue) berbasis Redis Worker untuk menangani lonjakan request webhook gateway.",
      "Membangun arsitektur offline-first menggunakan SQLite pada aplikasi absensi mobile untuk mengatasi kendala sinkronisasi state di area minim sinyal."
    ],
    techStack: ["Laravel", "PHP", "SQLite", "Redis", "Astro Framework", "Git"]
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