/**
 * Central plants & facilities list.
 * Used by: Plants page, Home page.
 */

export type Plant = {
  slug: string;
  name: string;
  type: string;
  /** Single capacity value, where one exists. */
  capacity?: string;
  /** List of specifications, where a plant has several (e.g. crusher units). */
  specifications?: string[];
  location: string;
  /** Short location label for compact cards. */
  shortLocation: string;
  image: string;
  description: string;
};

const WAGHANGAON = "Waghangaon, Tal-Lanja, Dist-Ratnagiri, Maharashtra";

/** The site where the asphalt plant, crusher plant and quarry are located. */
export const plantSite = {
  name: "Waghangaon",
  taluka: "Tal-Lanja",
  district: "Dist-Ratnagiri",
  state: "Maharashtra",
  full: WAGHANGAON,
};

export const plants: Plant[] = [
  {
    slug: "asphalt-plant",
    name: "Asphalt Plant",
    type: "Production Facility",
    capacity: "120 DM",
    location: WAGHANGAON,
    shortLocation: "Waghangaon",
    image: "/images/plants/asphalt-plant.jpg",
    description:
      "YASH CONSTRUCTION operates an asphalt plant at Waghangaon, Tal-Lanja, Dist-Ratnagiri, supporting its road construction and asphalt-related works.",
  },
  {
    slug: "crusher-plant",
    name: "Crusher Plant",
    type: "Aggregate Processing",
    specifications: ["24X12", "16X6", "42X32", "V-Groove", "NVI760", "NRI-1005"],
    location: WAGHANGAON,
    shortLocation: "Waghangaon",
    image: "/images/plants/crusher-plant.jpg",
    description:
      "The crusher plant at Waghangaon supports the production and processing of crushed aggregate materials used across construction activities.",
  },
  {
    slug: "quarry",
    name: "Quarry",
    type: "Material Source",
    capacity: "Standard capacity",
    location: WAGHANGAON,
    shortLocation: "Waghangaon",
    image: "/images/plants/quarry.jpg",
    description:
      "YASH CONSTRUCTION's quarry operation at Waghangaon forms part of its material and infrastructure resources.",
  },
  {
    slug: "rmc-plant",
    name: "RMC Plant",
    type: "Concrete Production",
    capacity: "30 Cum",
    // NOTE: carried over from the existing site code. The client requirements
    // give a capacity for the RMC plant but no location; confirm this one.
    location: WAGHANGAON,
    shortLocation: "Waghangaon",
    image: "/images/plants/rmc-plant.jpg",
    description:
      "The RMC plant provides concrete production capability as part of YASH CONSTRUCTION's construction infrastructure.",
  },
];

/** Capacity if there is one, otherwise the specification list joined. */
export const getPlantSpecification = (p: Plant) =>
  p.capacity ?? (p.specifications ? p.specifications.join(" · ") : "");
