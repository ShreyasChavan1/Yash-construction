import type { ImagePath } from "./types";

export type Project = {
  slug: string;
  name: string;
  client: string;
  location: string;
  year: string;
  cost: string;
  scope: string;
  duration: string;
  status: string;
  images: ImagePath[];
  /** Optional. One of `projectCategories`; used for filters on the Projects page. */
  category?: ProjectCategory;
  /** Optional. Show on the Home page featured projects. */
  featured?: boolean;
};

/** Categories confirmed in the client's project types. */
export const projectCategories = [
  "Roads",
  "Bridges",
  "Residential",
  "Commercial",
  "Government Buildings",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: Project[] = [
  // Projects will be added here once the client provides
  // the actual project information.
];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
