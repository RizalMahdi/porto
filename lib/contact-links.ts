export function isValidContactLink(label: string, href: string | null): href is string {
  if (!href) return false;
  if (label === "Email") return /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(href);
  try {
    const url = new URL(href);
    return (url.protocol === "https:" || url.protocol === "http:") && Boolean(url.hostname);
  } catch {
    return false;
  }
}
