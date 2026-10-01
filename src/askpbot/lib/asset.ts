/** Public-dir URL that respects Vite's `base` (the site deploys under /portfolio/). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
