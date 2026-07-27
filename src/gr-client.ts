import { Configuration } from './configuration';
import { APIException } from './api-exception';

export class GRClient {
  constructor(private config: Configuration) {}

  private buildHeaders(): Record<string, string> {
    return {
      'Accept': this.config.accept,
      'Content-Type': this.config.contentType,
      'X-Auth-Token': this.config.authToken
    };
  }

  private buildUrl(path: string, params?: Record<string, string | number | boolean | undefined>): string {
    let url = this.config.baseUrl + path;
    if (params) {
      const query = Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== null && v !== '')
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&');
      if (query) url += (url.includes('?') ? '&' : '?') + query;
    }
    return url;
  }

  private async handleResponse(response: Response): Promise<string> {
    const text = await response.text();
    if (response.status === 401) {
      throw new APIException('You are not authenticated', 401, text);
    } else if (response.status === 403) {
      throw new APIException('User not authorized to perform the operation', 403, text);
    } else if (response.status === 404) {
      throw new APIException('Resource not found', 404, text);
    } else if (response.status >= 400) {
      throw new APIException('HTTP Response Not OK', response.status, text);
    }
    return text || '{}';
  }

  async get(path: string, params?: Record<string, string | number | boolean | undefined>): Promise<string> {
    const res = await fetch(this.buildUrl(path, params), {
      method: 'GET',
      headers: this.buildHeaders()
    });
    return this.handleResponse(res);
  }

  async post(path: string, body?: unknown): Promise<string> {
    const res = await fetch(this.buildUrl(path), {
      method: 'POST',
      headers: this.buildHeaders(),
      body: body ? JSON.stringify(body) : undefined
    });
    return this.handleResponse(res);
  }

  async put(path: string, body?: unknown): Promise<string> {
    const res = await fetch(this.buildUrl(path), {
      method: 'PUT',
      headers: this.buildHeaders(),
      body: body ? JSON.stringify(body) : undefined
    });
    return this.handleResponse(res);
  }

  async patch(path: string, body?: unknown): Promise<string> {
    const res = await fetch(this.buildUrl(path), {
      method: 'PATCH',
      headers: this.buildHeaders(),
      body: body ? JSON.stringify(body) : undefined
    });
    return this.handleResponse(res);
  }

  async delete(path: string, params?: Record<string, string | number | boolean | undefined>): Promise<string> {
    const res = await fetch(this.buildUrl(path, params), {
      method: 'DELETE',
      headers: this.buildHeaders()
    });
    return this.handleResponse(res);
  }
}