/**
 * Central site navigation. Add or reorder pages here; the Navbar, Footer
 * and Contact page "explore" cards read from this file.
 */

export type NavLink = { label: string; href: string };

const page = {
  home: { label: "Home", href: "/" },
  about: { label: "About", href: "/about" },
  services: { label: "Services", href: "/services" },
  projects: { label: "Projects", href: "/projects" },
  machinery: { label: "Machinery", href: "/machinery" },
  plants: { label: "Plants", href: "/plants" },
  credentials: { label: "Credentials", href: "/credentials" },
  gallery: { label: "Gallery", href: "/gallery" },
  contact: { label: "Contact", href: "/contact" },
} satisfies Record<string, NavLink>;

/** Top navigation bar and mobile menu. */
export const navItems: NavLink[] = [
  page.home,
  page.about,
  page.services,
  page.projects,
  page.machinery,
  page.plants,
  page.credentials,
  page.contact,
  page.gallery,
];

/** Footer quick links. */
export const footerLinks: NavLink[] = [
  page.home,
  page.about,
  page.services,
  page.projects,
  page.machinery,
  page.plants,
  page.gallery,
  page.credentials,
  page.contact,
];

/** "More from YASH" cards on the Contact page. */
export const exploreLinks = [
  { title: "Projects", description: "Explore selected works and project capabilities.", href: page.projects.href },
  { title: "Machinery", description: "View the company's construction equipment.", href: page.machinery.href },
  { title: "Credentials", description: "Company registrations and professional credentials.", href: page.credentials.href },
];
