export function sanitizeInput(value: string) {
  return value.trim().replace(/[<>]/g, '');
}

export function validateRequired(fields: Record<string, string>) {
  return Object.values(fields).every((field) => field.trim().length > 0);
}
