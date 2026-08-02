import { apiClient } from '@/lib/api-client';

export async function login(email: string, password: string) {
  return apiClient.post('/api/auth/login', { email, password });
}

export async function register(email: string, password: string, fullName: string) {
  return apiClient.post('/api/auth/register', { email, password, fullName });
}
