PHASE 12D: image fallbacks, filters, certificates, shared types   (FULL app/ SNAPSHOT)
Unzip into your project's app/ folder (replace when asked). Back up / git commit first.
Delete this README from app/ afterwards.

app/layout.tsx is NOT overwritten. It needs the 3 edits from the Phase 12C notes:
  import { rootMetadata, localBusinessJsonLd } from "./lib/seo";
  import JsonLd from "./components/JsonLd";
  export const metadata = rootMetadata;            // replaces the old metadata block
  <JsonLd data={localBusinessJsonLd} />            // first child inside <body>

Where content goes (plug-and-play):
  photos         public/images/...  (paths are listed in app/lib/*.ts)
  certificates   public/documents/..., then set `document` in app/lib/company.ts
  projects       app/lib/projects.ts  (add category + featured to use filters / Home)
  gallery        app/lib/gallery.ts
