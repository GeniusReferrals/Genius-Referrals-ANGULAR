import { GRClient } from '../gr-client';
import { TagForm } from '../models/tag-form';

export class TagsController {
  constructor(private client: GRClient) {}

  getTags(accountSlug: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/tags`, { page, limit });
  }

  getTag(accountSlug: string, tagSlug: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/tags/${tagSlug}`);
  }

  createTag(accountSlug: string, tagForm: TagForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/tags`, { tag: tagForm });
  }

  updateTag(accountSlug: string, tagSlug: string, tagForm: TagForm): Promise<string> {
    return this.client.put(`/accounts/${accountSlug}/tags/${tagSlug}`, { tag: tagForm });
  }

  deleteTag(accountSlug: string, tagSlug: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}/tags/${tagSlug}`);
  }
}