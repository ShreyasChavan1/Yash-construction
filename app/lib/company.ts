/**
 * Central company data for YASH CONSTRUCTION.
 * Only client-confirmed information lives here. Anything not yet supplied is
 * left empty (or null) on purpose: do not fill it with invented content.
 * Later, this file is the one a CMS / admin panel replaces.
 */

const PRIMARY_PHONE = "7798763555";

/**
 * PHONE NUMBER CONFLICT (unresolved, needs client confirmation):
 * the client requirements list the alternate number as 9090270707 in one
 * section and 9090240707 in another. The site currently uses 9090240707, so
 * that is kept here. Change ALTERNATE_PHONE in this one place once confirmed.
 */
const ALTERNATE_PHONE = "9090240707";
export const alternatePhoneVariants = ["9090270707", "9090240707"] as const;

const formatPhone = (n: string) => `+91 ${n.slice(0, 5)} ${n.slice(5)}`;
const telHref = (n: string) => `tel:+91${n}`;

export type Registration = {
  id: string;
  number: string;
  title: string;
  label: string;
  value: string;
  description: string;
  /** Path to the certificate scan once supplied. */
  document: string | null;
};

export type Statistic = {
  value: string;
  label: string;
  /** Optional supporting line. Only add confirmed wording. */
  caption?: string;
};

export type CoreValue = { title: string; description: string };
export type Partner = { name: string; role: string; image: string };

const phones = [
  { label: "Primary", number: PRIMARY_PHONE },
  { label: "Alternate", number: ALTERNATE_PHONE },
].map((p) => ({ ...p, display: formatPhone(p.number), href: telHref(p.number) }));

const areasOfOperation = ["Lanja Taluka", "Rajapur Taluka", "Ratnagiri District"];

export const company = {
  name: "YASH CONSTRUCTION",
  established: 1984,
  type: "Partnership Firm",
  experienceYears: 42,

  areasOfOperation,
  areasOfOperationText: "Lanja Taluka, Rajapur Taluka & Ratnagiri District",
  /** Same list as a sentence fragment, for running prose. */
  areasSentence: "Lanja Taluka, Rajapur Taluka and Ratnagiri District",
  areaNames: ["Lanja", "Rajapur", "Ratnagiri"],
  areaNamesText: "Lanja, Rajapur and Ratnagiri",

  /** Where the company is based (registered office). */
  location: {
    town: "Lanja",
    taluka: "Tal-Lanja",
    district: "Dist-Ratnagiri",
    districtName: "Ratnagiri",
    state: "Maharashtra",
  },

  /** Short description built only from confirmed facts. Used in the footer. */
  blurb:
    "Construction and infrastructure works across Lanja Taluka, Rajapur Taluka and Ratnagiri District, with experience spanning roads, bridges, buildings, earthwork and government projects.",

  /** Confirmed project types. */
  projectTypes: ["Roads", "Bridges", "Residential", "Commercial", "Government Buildings"],

  pan: "AAAFY3458L",

  address: {
    short: "YASH CONSTRUCTION - LANJA, TAL-LANJA, DIST-RATNAGIRI",
    line1: "Yash Construction-1933, Radhai Niwas",
    line2: "Lanja, Tal-Lanja, Dist-Ratnagiri - 416701",
    lines: ["Yash Construction-1933, Radhai Niwas,", "Lanja, Tal-Lanja,", "Dist-Ratnagiri - 416701"],
    full: "Yash Construction-1933, Radhai Niwas, Lanja, Tal-Lanja, Dist-Ratnagiri - 416701",
    pincode: "416701",
  },

  contact: {
    phones,
    primaryPhone: phones[0],
    email: "yash_const@rediffmail.com",
    emailHref: "mailto:yash_const@rediffmail.com",
    whatsappHref: `https://wa.me/91${PRIMARY_PHONE}`,
  },

  maps: {
    url: "https://www.google.com/maps/search/Yash+Construction/@16.8620473,73.5527078,17z?hl=en&entry=ttu",
    latitude: 16.862296472772382,
    longitude: 73.55268523808955,
  },

  /** No website or social media accounts supplied. */
  website: null as string | null,
  social: [] as { platform: string; url: string }[],

  statistics: [
    { value: "42+", label: "Years of Experience", caption: "Established 1984" },
    { value: "1,500+", label: "Projects" },
    { value: "20+", label: "Clients" },
    { value: "100+", label: "Employees" },
  ] as Statistic[],

  registrations: [
    {
      id: "gst",
      number: "01",
      title: "GST Registration",
      label: "Tax Registration",
      value: "27AAAFY3458L1ZP",
      description: "Goods and Services Tax registration of YASH CONSTRUCTION.",
      document: null,
    },
    {
      id: "msme",
      number: "02",
      title: "MSME / Udyam",
      label: "Enterprise Registration",
      value: "MH-28-0023022",
      description: "MSME / Udyam registration associated with YASH CONSTRUCTION.",
      document: null,
    },
    {
      id: "pwd",
      number: "03",
      title: "PWD Registration",
      label: "Government Contractor",
      value: "TQOJ0ANI3YH8",
      description: "Public Works Department registration of YASH CONSTRUCTION.",
      document: null,
    },
    {
      id: "partnership",
      number: "04",
      title: "Partnership Registration",
      label: "Firm Registration",
      value: "MA19454",
      description: "Registered partnership firm identification for YASH CONSTRUCTION.",
      document: null,
    },
  ] as Registration[],

  coreValues: [
    { title: "Integrity", description: "Conducting construction and contracting work with transparency, responsibility and professional discipline." },
    { title: "Safety", description: "Maintaining a strong focus on safe working practices across construction sites and operations." },
    { title: "Quality", description: "Delivering construction work with attention to materials, workmanship and project requirements." },
    { title: "Innovation", description: "Looking for better ways to plan, build and deliver construction work." },
    { title: "Customer Satisfaction", description: "Building long-term relationships through dependable execution and responsible project delivery." },
  ] as CoreValue[],

  partners: [
    { name: "Chandrashekhar Sitaram Bhingarde", role: "Partner", image: "/images/partners/chandrashekhar.jpg" },
    { name: "Sudhir Sitaram Bhingarde", role: "Partner", image: "/images/partners/sudhir.jpg" },
    { name: "Sandip Sitaram Bhingarde", role: "Partner", image: "/images/partners/sandip.jpg" },
  ] as Partner[],

  /** NOT SUPPLIED YET. Keep empty until the client provides them. */
  pending: {
    history: null as string | null,
    vision: null as string | null,
    mission: null as string | null,
    founderMessage: null as string | null,
    awards: [] as string[],
    testimonials: [] as string[],
    clientLogos: [] as string[],
    materialPartners: [] as string[],
  },
} as const;

export type Company = typeof company;
