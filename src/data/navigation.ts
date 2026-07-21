export interface NavigationItem {
  title: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/#about", // FIX: Mengarah ke ID 'about' di halaman beranda
  },
  {
    title: "Projects",
    href: "/#projects", // Tetap halaman terpisah karena kodenya panjang
  },
  {
    title: "Work",
    href: "/#work", // Tetap halaman terpisah karena kodenya panjang
  },
  {
    title: "Contact",
    href: "/#footer", // FIX: Mengarah ke ID 'contact' di halaman beranda
  },
];