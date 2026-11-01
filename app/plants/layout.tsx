import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("plants");

export default function PlantsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
