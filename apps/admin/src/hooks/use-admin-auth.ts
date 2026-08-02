import { useState } from 'react';

// TODO: back with real admin session/token state
export function useAdminAuth() {
  const [admin, setAdmin] = useState<{ email: string } | null>(null);
  return { admin, setAdmin };
}
