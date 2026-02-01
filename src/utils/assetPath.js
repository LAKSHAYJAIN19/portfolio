// Returns the correct asset base path depending on environment
// Usage: assetPath('models/java_logo.glb') -> '/models/java_logo.glb' (local) or '/portfolio/models/java_logo.glb' (prod when base is /portfolio)
export default function assetPath(p) {
  // prefer import.meta.env.BASE_URL (Vite base) then VITE_ASSET_BASE, then '/'
  const base = import.meta.env.BASE_URL || import.meta.env.VITE_ASSET_BASE || '/';
  // remove trailing slash if present (we'll add one when joining)
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = p.startsWith('/') ? p : `/${p}`;
  return `${normalizedBase}${normalizedPath}`;
}
