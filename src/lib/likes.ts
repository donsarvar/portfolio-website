// Local likes per project — purely client-side. Threshold rule lives in the component.
const KEY = (slug: string) => `like:${slug}`;
const COUNT_KEY = (slug: string) => `like-count:${slug}`;

// Seed a believable baseline so threshold logic is demonstrable.
const SEED: Record<string, number> = {
  "halo-bank": 14,
  "lumen-pos": 7,
  "atlas-saas": 11,
  "north-fitness": 4,
  "verse-cms": 9,
  "kavir-brand": 23,
};

export function getLikes(slug: string) {
  if (typeof window === "undefined") return { count: SEED[slug] ?? 0, liked: false };
  const stored = localStorage.getItem(COUNT_KEY(slug));
  const count = stored ? parseInt(stored, 10) : SEED[slug] ?? 0;
  const liked = localStorage.getItem(KEY(slug)) === "1";
  return { count, liked };
}

export function toggleLike(slug: string) {
  const { count, liked } = getLikes(slug);
  const next = liked ? Math.max(0, count - 1) : count + 1;
  localStorage.setItem(COUNT_KEY(slug), String(next));
  localStorage.setItem(KEY(slug), liked ? "0" : "1");
  return { count: next, liked: !liked };
}
