import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata("credentials");

export default function CredentialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
