import { useAdminAuthStore } from '@/store/auth-store';

export function useAdminAuth() {
  const admin = useAdminAuthStore((s) => s.admin);
  const accessToken = useAdminAuthStore((s) => s.accessToken);
  const hasHydrated = useAdminAuthStore((s) => s.hasHydrated);
  const setSession = useAdminAuthStore((s) => s.setSession);
  const clearSession = useAdminAuthStore((s) => s.clearSession);

  return { admin, accessToken, isAuthenticated: !!accessToken, hasHydrated, setSession, clearSession };
}
