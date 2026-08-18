export type AdminRole = 'SUPER_ADMIN' | 'CONTENT_MANAGER' | 'EDITOR' | 'ANALYST';

export const adminPermissions = {
  SUPER_ADMIN: ['*'],
  CONTENT_MANAGER: ['mixes', 'events', 'blog', 'videos', 'gallery', 'products'],
  EDITOR: ['blog', 'events', 'gallery'],
  ANALYST: ['analytics'],
};

export function hasPermission(role: AdminRole, module: string) {
  const permissions = adminPermissions[role];
  return permissions.includes('*') || permissions.includes(module);
}
