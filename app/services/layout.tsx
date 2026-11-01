import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("services");

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
