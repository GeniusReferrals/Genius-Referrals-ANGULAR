import { GRClient } from '../gr-client';

export class CampaignsController {
  constructor(private client: GRClient) {}

  getCampaigns(accountSlug: string, page?: number, limit?: number, format?: string, fields?: string, sort?: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/campaigns`, { page, limit, format, fields, sort });
  }

  getCampaign(accountSlug: string, campaignSlug: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/campaigns/${campaignSlug}`);
  }
}