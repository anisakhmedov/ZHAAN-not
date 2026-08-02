import Constants from 'expo-constants';
import { createApiClient } from '@zhaan/api-client';

export const apiClient = createApiClient({
  baseUrl: (Constants.expoConfig?.extra?.apiUrl as string) ?? 'http://localhost:4000',
});
