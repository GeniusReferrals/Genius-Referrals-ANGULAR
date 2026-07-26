import { GRClient } from '../gr-client';

export class UtilitiesController {
  constructor(private client: GRClient) {}

  getBonusRedemptionMethods(page?: number, limit?: number): Promise<string> {
    return this.client.get('/utilities/bonuses-redemption-methods', { page, limit });
  }

  getBonusRedemptionMethod(slug: string): Promise<string> {
    return this.client.get(`/utilities/bonuses-redemption-methods/${slug}`);
  }

  getCurrencies(page?: number, limit?: number): Promise<string> {
    return this.client.get('/utilities/currencies', { page, limit });
  }

  getCurrency(code: string): Promise<string> {
    return this.client.get(`/utilities/currencies/${code}`);
  }

  getPaymentMethodsList(page?: number, limit?: number): Promise<string> {
    return this.client.get('/utilities/payment-methods', { page, limit });
  }

  getRedemptionRequestActions(page?: number, limit?: number): Promise<string> {
    return this.client.get('/utilities/redemption-request-actions', { page, limit });
  }

  getRedemptionRequestAction(slug: string): Promise<string> {
    return this.client.get(`/utilities/redemption-request-actions/${slug}`);
  }

  getRedemptionRequestStatuses(page?: number, limit?: number): Promise<string> {
    return this.client.get('/utilities/redemption-request-statuses', { page, limit });
  }

  getRedemptionRequestStatus(slug: string): Promise<string> {
    return this.client.get(`/utilities/redemption-request-statuses/${slug}`);
  }

  getReferralOrigins(page?: number, limit?: number): Promise<string> {
    return this.client.get('/utilities/referral-origins', { page, limit });
  }

  getReferralOrigin(slug: string): Promise<string> {
    return this.client.get(`/utilities/referral-origins/${slug}`);
  }
}