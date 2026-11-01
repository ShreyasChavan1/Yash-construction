/** Shared data types so every list (services, machinery, plants, partners, projects) treats images the same way. */

/** Path under /public, e.g. "/images/machinery/jcb.jpg". The photo file may not exist yet; pages show a placeholder. */
export type ImagePath = string;

/** Path under /public to a supplied certificate scan, e.g. "/documents/gst-certificate.pdf". `null` = not supplied yet. */
export type DocumentPath = string | null;
