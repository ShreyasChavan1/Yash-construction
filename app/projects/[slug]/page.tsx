import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProjectBySlug } from "../../lib/projects";
import { projectMetadata } from "../../lib/seo";
import ProjectDetail from "./ProjectDetail";

// Next 15+/16: `params` is a Promise.
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? projectMetadata(project) : { title: "Project not found" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  return <ProjectDetail project={project} next={next} />;
}
