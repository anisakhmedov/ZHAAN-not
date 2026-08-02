export interface ApiClientOptions {
  baseUrl: string;
  withAuth?: boolean;
  getToken?: () => string | null | undefined;
}

export function createApiClient(options: ApiClientOptions) {
  async function request<T = unknown>(path: string, init?: RequestInit): Promise<T> {
    const headers = new Headers(init?.headers);
    headers.set('Content-Type', 'application/json');

    if (options.withAuth) {
      const token = options.getToken?.();
      if (token) headers.set('Authorization', `Bearer ${token}`);
    }

    const res = await fetch(`${options.baseUrl}${path}`, { ...init, headers });
    if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);
    return res.json() as Promise<T>;
  }

  return {
    get: <T = unknown>(path: string) => request<T>(path, { method: 'GET' }),
    post: <T = unknown>(path: string, body?: unknown) =>
      request<T>(path, { method: 'POST', body: body ? JSON.stringify(body) : undefined }),
    patch: <T = unknown>(path: string, body?: unknown) =>
      request<T>(path, { method: 'PATCH', body: body ? JSON.stringify(body) : undefined }),
    delete: <T = unknown>(path: string) => request<T>(path, { method: 'DELETE' }),
  };
}
