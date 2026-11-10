const localSiteUrl = "http://localhost:3000";

export function getSiteUrl() {
  const configuredUrl = process.env.SITE_URL?.trim();
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const value = configuredUrl || (vercelProductionUrl ? `https://${vercelProductionUrl}` : undefined);
  if (!value && process.env.VERCEL) {
    throw new Error("Set SITE_URL to the canonical production origin in Vercel, or enable VERCEL_PROJECT_PRODUCTION_URL.");
  }

  try {
    const url = new URL(value ?? localSiteUrl);
    if (process.env.VERCEL && url.hostname === "localhost") {
      throw new Error("Production SITE_URL cannot use localhost.");
    }
    if (url.protocol !== "https:" && url.hostname !== "localhost") {
      throw new Error("SITE_URL must use HTTPS outside local development.");
    }
    return new URL(url.origin);
  } catch {
    throw new Error("Invalid SITE_URL. Set it to the canonical production origin, for example https://your-project.vercel.app.");
  }
}
