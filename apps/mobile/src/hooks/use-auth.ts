import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  return { user, setUser };
}
