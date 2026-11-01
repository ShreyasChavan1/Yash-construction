/**
 * Central services data. Descriptions use only confirmed facts.
 * Used by: Services page, Home page.
 */

import type { ImagePath } from "./types";

export type Service = {
  slug: string;
  number: string;
  title: string;
  /** Short uppercase category label used on Home. */
  tag: string;
  description: string;
  items: string[];
  /** Expected image path; add the file under /public when supplied. */
  image: ImagePath;
  /** Shown in the Home page services preview. */
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "road-construction",
    number: "01",
    title: "Road Construction",
    tag: "ROADS",
    description: "Construction of road infrastructure using bitumen and concrete construction methods.",
    items: ["Bitumen Road", "Concrete Road"],
    image: "/images/services/road-construction.jpg",
    featured: true,
  },
  {
    slug: "building-construction",
    number: "02",
    title: "Building Construction",
    tag: "BUILDINGS",
    description: "Construction capabilities covering residential, commercial and related building works.",
    items: ["Residential Buildings", "Commercial Buildings"],
    image: "/images/services/building-construction.jpg",
    featured: true,
  },
  {
    slug: "industrial-construction",
    number: "03",
    title: "Industrial Construction",
    tag: "INDUSTRIAL",
    description: "Construction and development of industrial structures and supporting facilities.",
    items: ["Factory Sheds"],
    image: "/images/services/industrial-construction.jpg",
  },
  {
    slug: "earthwork-excavation",
    number: "04",
    title: "Earthwork & Excavation",
    tag: "EARTHWORK",
    description: "Earthwork and excavation operations supporting infrastructure and land development projects.",
    items: ["Earthwork", "Excavation", "Land Development"],
    image: "/images/services/earthwork.jpg",
    featured: true,
  },
  {
    slug: "asphalt-bitumen",
    number: "05",
    title: "Asphalt & Bitumen",
    tag: "ASPHALT",
    description: "Asphalt production capabilities supporting road construction and surfacing requirements.",
    items: ["Carpet", "BM", "BC"],
    image: "/images/services/asphalt-bitumen.jpg",
  },
  {
    slug: "rmc-aggregate",
    number: "06",
    title: "RMC & Aggregate",
    tag: "RMC & AGGREGATE",
    description: "Production and processing infrastructure for concrete and construction aggregates.",
    items: ["RMC - All Grades of Concrete", "Crushed Aggregate Material", "Wash Sand"],
    image: "/images/services/rmc-aggregate.jpg",
  },
  {
    slug: "bridge-construction",
    number: "07",
    title: "Bridge Construction",
    tag: "BRIDGES",
    description: "Construction of minor bridges across varying spans as part of civil infrastructure works.",
    items: ["Minor Bridges", "All Span Requirements"],
    image: "/images/services/bridge-construction.jpg",
    featured: true,
  },
  {
    slug: "drainage-work",
    number: "08",
    title: "Drainage Work",
    tag: "DRAINAGE",
    description: "Drainage and associated civil works supporting road and infrastructure projects.",
    items: ["Drainage Works"],
    image: "/images/services/drainage-work.jpg",
  },
  {
    slug: "warehouse-construction",
    number: "09",
    title: "Warehouse Construction",
    tag: "WAREHOUSE",
    description: "Construction of warehouse and supporting industrial storage structures.",
    items: ["Warehouse Construction"],
    image: "/images/services/warehouse-construction.jpg",
  },
];

/**
 * Confirmed government-contract CATEGORIES. These are not individual
 * completed projects and must not be presented as such.
 */
export const governmentContracts: string[] = [
  "PWD",
  "PMGSY",
  "MIDC",
  "Nagarpanchayat",
  "Zillah Parishad",
  "MMB",
];

/**
 * CONFLICT, not displayed: the requirements list "Bitumen Supply" as a
 * confirmed service, but the original client form marks it "NA".
 * Confirm with the client before adding it to `services`.
 */
export const unconfirmedServices = [
  { title: "Bitumen Supply", note: "Listed as confirmed in the brief; client form says NA." },
];

export const featuredServices = services.filter((s) => s.featured);
