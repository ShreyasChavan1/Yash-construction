/**
 * Central SEO data. Titles and descriptions use only confirmed facts.
 * Used by: root layout, per-route layout.tsx files, project pages,
 * sitemap.ts, robots.ts and the JSON-LD business markup.
 */
import type { Metadata } from "next";
import { company } from "./company";
import { services } from "./services";
import type { Project } from "./projects";

/**
 * Set NEXT_PUBLIC_SITE_URL (e.g. in .env.local / hosting settings) once the
 * domain exists. The client has no website yet, so this falls back to localhost.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Add a real photo path (e.g. "/images/hero-construction.jpg") for social previews. */
export const ogImage: string | null = null;

export type PageKey =
  | "about" | "services" | "projects" | "machinery"
  | "plants" | "credentials" | "contact" | "gallery";

type PageSeo = { path: string; title: string; description: string };

const area = company.areasSentence;

export const pageSeo: Record<PageKey, PageSeo> = {
  about: {
    path: "/about",
    title: "About",
    description: `${company.name} is a ${company.type.toLowerCase()} established in ${company.established}, with ${company.experienceYears} years of experience across ${area}.`,
  },
  services: {
    path: "/services",
    title: "Services: Roads, Bridges & Buildings",
    description: `Road and bridge construction, residential and commercial buildings, earthwork, excavation, asphalt, RMC and aggregate from ${company.name}, ${company.location.town}, ${company.location.districtName}.`,
  },
  projects: {
    path: "/projects",
    title: "Projects",
    description: `Projects by ${company.name} across ${area}: roads, bridges, residential, commercial and government buildings.`,
  },
  machinery: {
    path: "/machinery",
    title: "Machinery & Equipment",
    description: `The ${company.name} equipment fleet: excavators, JCBs, pavers, rollers, dumpers, loaders, tankers and more.`,
  },
  plants: {
    path: "/plants",
    title: "Plants & Facilities",
    description: `Asphalt plant, crusher plant, quarry and RMC plant operated by ${company.name} at Waghangaon, Tal-Lanja, Dist-Ratnagiri.`,
  },
  credentials: {
    path: "/credentials",
    title: "Credentials & Registrations",
    description: `${company.name} registrations: PWD, GST, MSME / Udyam and partnership firm registration.`,
  },
  contact: {
    path: "/contact",
    title: "Contact",
    description: `Contact ${company.name}, ${company.location.town}, ${company.location.districtName}, ${company.location.state}. Call, WhatsApp, email or visit.`,
  },
  gallery: {
    path: "/gallery",
    title: "Gallery",
    description: `Photographs of ${company.name} machinery, plants, construction sites and projects.`,
  },
};

const siteName = company.name;

/** Root layout metadata: `export const metadata = rootMetadata;` */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Construction & Infrastructure in Lanja, Ratnagiri`,
    template: `%s | ${siteName}`,
  },
  description: `${siteName} is a ${company.type.toLowerCase()} established in ${company.established}: roads, bridges, residential, commercial and government buildings across ${area}.`,
  applicationName: siteName,
  keywords: [
    siteName,
    "construction company in Ratnagiri",
    "construction company in Lanja",
    "road construction",
    "bridge construction",
    "building construction",
    "civil construction",
    "PWD registered contractor",
    "construction contractor in Ratnagiri",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_IN",
    url: "/",
    title: `${siteName} | Construction & Infrastructure in Lanja, Ratnagiri`,
    description: `Established ${company.established}. Roads, bridges and buildings across ${area}.`,
    ...(ogImage ? { images: [{ url: ogImage }] } : {}),
  },
  twitter: { card: ogImage ? "summary_large_image" : "summary" },
};

/** Per-route metadata: `export const metadata = pageMetadata("about");` */
export function pageMetadata(key: PageKey): Metadata {
  const { path, title, description } = pageSeo[key];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${siteName}`, description, url: path },
  };
}

/** Metadata for one project page. Only uses fields that are filled in. */
export function projectMetadata(project: Project): Metadata {
  const bits = [project.client, project.location, project.year].filter(Boolean).join(", ");
  const description = (project.scope || `${project.name}${bits ? `: ${bits}` : ""}`).slice(0, 160);
  const path = `/projects/${project.slug}`;
  const image = project.images[0];
  return {
    title: project.name,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${project.name} | ${siteName}`,
      description,
      url: path,
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}

/** schema.org business markup, built from company.ts. Rendered once in the root layout. */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  url: siteUrl,
  foundingDate: String(company.established),
  email: company.contact.email,
  telephone: company.contact.phones.map((p) => `+91${p.number}`),
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.line1,
    addressLocality: company.location.town,
    addressRegion: company.location.state,
    postalCode: company.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.maps.latitude,
    longitude: company.maps.longitude,
  },
  areaServed: company.areasOfOperation.map((name) => ({ "@type": "AdministrativeArea", name })),
  knowsAbout: services.map((s) => s.title),
  ...(company.social.length ? { sameAs: company.social.map((s) => s.url) } : {}),
};
