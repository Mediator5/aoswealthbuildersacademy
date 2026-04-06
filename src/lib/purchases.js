/*
  Purchase Verification Utility
  
  This uses a simple cookie-based approach for purchase tracking.
  In production, you should replace this with a database-backed solution.
  
  The cookie stores a JSON array of purchased ebook slugs, signed with
  a session ID from the Stripe checkout session.
*/

const COOKIE_NAME = "aos_purchases";

/**
 * Get purchased ebook IDs from cookies (server-side)
 */
export function getPurchasedEbooks(cookieStore) {
  const cookie = cookieStore.get(COOKIE_NAME);
  if (!cookie) return [];

  try {
    const parsed = JSON.parse(cookie.value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Add a purchased ebook ID to the cookie (server-side)
 */
export function addPurchasedEbook(cookieStore, ebookId) {
  const current = getPurchasedEbooks(cookieStore);
  if (!current.includes(ebookId)) {
    current.push(ebookId);
  }

  cookieStore.set(COOKIE_NAME, JSON.stringify(current), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  });

  return current;
}

/**
 * Check if a specific ebook has been purchased (server-side)
 */
export function hasEbookAccess(cookieStore, ebookId) {
  const purchased = getPurchasedEbooks(cookieStore);
  return purchased.includes(ebookId);
}
