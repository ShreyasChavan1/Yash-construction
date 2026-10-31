/**
 * Central gallery data. INTENTIONALLY EMPTY until the client supplies real
 * high-resolution photographs. Do not add stock or placeholder images and
 * present them as YASH CONSTRUCTION's work.
 * Used by: Gallery page.
 */

export type GalleryItem = {
  /** Path under /public, e.g. "/images/gallery/office-1.jpg" */
  src: string;
  title: string;
  /** Must match one of `galleryCategories`. */
  category: GalleryCategory;
};

export const galleryCategories = [
  "Office",
  "Team",
  "Machinery",
  "Construction Sites",
  "Projects",
  "Plants",
  "Quarry",
  "Warehouse",
  "Drone",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  // Add real client photographs here as they become available. Example:
  // { src: "/images/gallery/office-1.jpg", title: "YASH CONSTRUCTION Office", category: "Office" },
];

/** Guidance list shown on the Gallery page until photos are supplied. */
export const galleryShotList: string[] = [
  "Office & Team",
  "Heavy Machinery",
  "Road Construction",
  "Bridge Works",
  "Asphalt Plant",
  "Crusher Plant",
  "RMC Plant",
  "Quarry Operations",
  "Warehouse",
  "Completed Projects",
  "Construction Sites",
  "Drone Photography",
];
