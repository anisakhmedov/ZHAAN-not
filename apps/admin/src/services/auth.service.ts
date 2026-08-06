import { apiClient } from '@/lib/api-client';
import type { LoginDto, AuthResponse, User } from '@zhaan/types';

export function login(dto: LoginDto) {
  return apiClient.post<AuthResponse>('/api/auth/login', dto);
}

export function me() {
  return apiClient.post<User>('/api/auth/me');
}
