import { createApiClient } from '@zhaan/api-client';
import { useAdminAuthStore } from '@/store/auth-store';

export const apiClient = createApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000',
  withAuth: true,
  getToken: () => useAdminAuthStore.getState().accessToken,
});
