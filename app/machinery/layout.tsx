import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("machinery");

export default function MachineryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
