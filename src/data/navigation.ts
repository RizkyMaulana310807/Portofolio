export interface NavigationItem {
  title: string;
  href: string;
}

// Mengambil base URL secara otomatis (misal: "/" di lokal, atau "/Portofolio/" di GitHub Pages)
const base = import.meta.env.BASE_URL;

export const navigation: NavigationItem[] = [
  {
    title: "Home",
    href: base, // Hasil: "/" atau "/Portofolio/"
  },
  {
    title: "About",
    href: `${base}#about`, // Hasil: "/#about" atau "/Portofolio/#about"
  },
  {
    title: "Projects",
    href: `${base}#projects`, // Hasil: "/#projects" atau "/Portofolio/#projects"
  },
  {
    title: "Work",
    href: `${base}#work`, // Hasil: "/#work" atau "/Portofolio/#work"
  },
  {
    title: "Contact",
    href: `${base}#footer`, // Hasil: "/#footer" atau "/Portofolio/#footer"
  },
];