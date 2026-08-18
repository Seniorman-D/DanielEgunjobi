export const ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  CONTENT_MANAGER: 'CONTENT_MANAGER',
  EDITOR: 'EDITOR',
  ANALYST: 'ANALYST',
} as const;

export type UserRole = typeof ROLES[keyof typeof ROLES];

export const permissions = {
  SUPER_ADMIN: ['*'],
  CONTENT_MANAGER: ['mixes', 'events', 'blog', 'videos', 'gallery', 'products'],
  EDITOR: ['blog', 'events', 'gallery'],
  ANALYST: ['analytics'],
};
