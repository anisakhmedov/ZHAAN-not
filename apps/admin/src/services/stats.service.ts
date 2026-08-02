import { apiClient } from '@/lib/api-client';

export async function getDashboardStats() {
  return apiClient.get('/api/admin/stats');
}
