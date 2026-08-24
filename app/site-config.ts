const FALLBACK_SITE_URL = "https://drjibinjohn.com";

function normalizeSiteUrl(value: string | undefined) {
  try {
    const url = new URL(value?.trim() || FALLBACK_SITE_URL);
    return url.origin + (url.pathname === "/" ? "" : url.pathname.replace(/\/+$/, ""));
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_BASE_URL);
export const SITE_ORIGIN = new URL(`${SITE_URL}/`);
export const SITE_BASE_PATH = (process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "").replace(/\/+$/, "");
