import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { User } from '@zhaan/types';

interface AdminAuthState {
  admin: User | null;
  accessToken: string | null;
  hasHydrated: boolean;
  setSession: (admin: User, accessToken: string) => void;
  clearSession: () => void;
  setHasHydrated: (value: boolean) => void;
}

// Same bearer-token-in-localStorage model as apps/web (see that app's auth-store
// for the XSS trade-off note) — kept under a distinct key so devtools don't
// conflate the two apps' sessions.
export const useAdminAuthStore = create<AdminAuthState>()(
  persist(
    (set) => ({
      admin: null,
      accessToken: null,
      hasHydrated: false,
      setSession: (admin, accessToken) => set({ admin, accessToken }),
      clearSession: () => set({ admin: null, accessToken: null }),
      setHasHydrated: (value) => set({ hasHydrated: value }),
    }),
    {
      name: 'zhaan-admin-auth',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ admin: state.admin, accessToken: state.accessToken }),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(true),
    },
  ),
);
