import { useState } from 'react';

// TODO: back this with real session/token state (cookies or a store)
export function useAuth() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  return { user, setUser };
}
