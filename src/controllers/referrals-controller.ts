import { GRClient } from '../gr-client';
import { ReferralForm } from '../models/referral-form';

export class ReferralsController {
  constructor(private client: GRClient) {}

  getReferrals(accountSlug: string, advocateToken: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/advocates/${advocateToken}/referrals`, { page, limit });
  }

  getReferral(accountSlug: string, advocateToken: string, referralId: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/advocates/${advocateToken}/referrals/${referralId}`);
  }

  postReferral(accountSlug: string, advocateToken: string, referralForm: ReferralForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/advocates/${advocateToken}/referrals`, { referral: referralForm });
  }

  putReferral(accountSlug: string, advocateToken: string, referralId: string, referralForm: ReferralForm): Promise<string> {
    return this.client.put(`/accounts/${accountSlug}/advocates/${advocateToken}/referrals/${referralId}`, { referral: referralForm });
  }

  deleteReferral(accountSlug: string, advocateToken: string, referralId: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}/advocates/${advocateToken}/referrals/${referralId}`);
  }
}