export interface AdminSession {
  id: string;
  email: string;
  role: string;
}

export function hasAdminAccess(session?: AdminSession) {
  return Boolean(session && session.role);
}
