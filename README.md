# 🚀 Engineering Showcase & Portfolio Website

[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Repositori ini berisi kode sumber untuk situs portofolio dan *engineering showcase* pribadi saya. Dibangun menggunakan arsitektur modern berbasis **Astro v4**, **TypeScript**, dan **Tailwind CSS**, platform ini dirancang dengan fokus utama pada performa tinggi (*Core Web Vitals*), responsivitas, kecerdasan filter *client-side*, dan aksesibilitas.

---

## 💡 Fitur Utama

- **⚡ Performa & Load Speed Cepat:** Dimaksimalkan dengan *Static Site Generation* (SSG) berbasis Astro, minim eksekusi JavaScript berat di sisi klien.
- **🎯 Dynamic Filtering & Re-ordering System:** Fitur penyaringan proyek interaktif (*Category* & *Role*) tanpa proses *reload* halaman, dilengkapi dengan *logic auto-reordering* untuk menjaga estetika tata letak selang-seling (kiri-kanan) secara otomatis.
- **💼 Interactive Career Timeline:** Rekam jejak pengalaman kerja dan proyek mandiri berbasis vertikal *timeline* yang dilengkapi dengan mekanisme *expand/collapse* untuk kenyamanan membaca rekruter.
- **🎨 Dark / Light Mode Support:** Integrasi tema gelap dan terang yang mulus serta ramah pengguna.
- **📱 Fully Responsive Design:** Mengadopsi prinsip *mobile-first design* agar optimal di seluruh ukuran layar.
- **🔗 Smooth Anchor Navigation:** Navigasi lintas rute (`/#about`, `/#contact`) yang terisolasi dengan dukungan *smooth-scrolling*.

---

## 💻 Tech Stack & Peralatan

- **Frontend Core:** Astro 4, TypeScript, HTML5
- **Styling & UI:** Tailwind CSS, Lucide Icons
- **Asset Optimization:** `@astrojs/assets` (WebP Converter & Layout Shift Prevention)
- **Deployment & Hosting:** Cloudflare Pages / Vercel

---

## 🛠️ Ringkasan Proyek & Studi Kasus Utama

Portofolio ini menampilkan berbagai studi kasus teknis yang dikategorikan berdasarkan spesialisasi:

| Kategori | Deskripsi Ringkas / Problem Solved | Tech Stack Utama |
| :--- | :--- | :--- |
| **Backend Architecture** | Refactoring database monolith, pemangkasan query N+1 hingga 65%, dan implementasi *Async Queue* dengan Redis Worker. | PHP, Laravel, Redis, Relational DB |
| **Mobile Application** | Arsitektur *offline-first* dengan antrean lokal SQLite untuk mitigasi konflik *state* pada aplikasi absensi. | Mobile App, SQLite, REST API, Git |
| **Artificial Intelligence** | Otomasi *screen interaction* dinamis memanfaatkan VLM lokal (Gemma AI) terintegrasi via Python script. | Python, Local VLM, PyAutoGUI |
| **Game Development** | Optimasi *rendering pipeline* 2.5D untuk game fantasy RPG & microservice sinkronisasi *save-state* binary untuk emulator. | C#, Unity, Node.js, Binary Parser |

---

## 📂 Struktur Direktori Proyek

```text
.
├── src/
│   ├── assets/          # Aset statis terkompresi (Foto profil, gambar proyek)
│   ├── components/      # Komponen UI modular
│   │   ├── sections/    # Komponen seksi halaman (Hero, Experience, Featured, dll.)
│   │   └── ui/          # Atom UI dasar (Button, Container, Badge, dll.)
│   ├── data/            # Single Source of Truth (SSOT) data TypeScript
│   │   ├── experience.ts # Array data pengalaman kerja & pencapaian
│   │   └── projects.ts   # Array data proyek & studi kasus
│   ├── layouts/         # Layout dasar halaman (MainLayout.astro)
│   └── pages/           # File rute halaman (index.astro, projects.astro)
├── public/              # Aset umum (Favicon, robots.txt)
├── astro.config.mjs     # Konfigurasi utama Astro Engine
├── tailwind.config.mjs  # Konfigurasi tema & gaya Tailwind
└── tsconfig.json        # Konfigurasi compiler TypeScript