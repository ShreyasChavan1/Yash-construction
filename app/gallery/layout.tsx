import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("gallery");

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
