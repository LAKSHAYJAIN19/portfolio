// Returns the correct asset base path depending on environment
// Usage: assetPath('models/java_logo.glb') -> '/models/java_logo.glb' (local) or 'https://cdn/.../models/java_logo.glb' (prod)
export default function assetPath(p) {
  const base = import.meta.env.VITE_ASSET_BASE || import.meta.env.BASE_URL || '/';
  // ensure base ends with slash
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  // ensure p starts with '/'
  const normalizedPath = p.startsWith('/') ? p : `/${p}`;
  return `${normalizedBase}${normalizedPath}`;
}
