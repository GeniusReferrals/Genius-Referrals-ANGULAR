import { GRClient } from '../gr-client';

export class ReportsController {
  constructor(private client: GRClient) {}

  getBonusesDailyGiven(accountSlug: string, startDate: string, endDate: string, advocateToken?: string): Promise<string> {
    return this.client.get('/reports/bonuses-daily-given', { account_slug: accountSlug, start_date: startDate, end_date: endDate, advocate_token: advocateToken });
  }

  getBonusesSummaryPerOrigin(accountSlug: string, startDate: string, endDate: string, advocateToken?: string): Promise<string> {
    return this.client.get('/reports/bonuses-summary-per-origin', { account_slug: accountSlug, start_date: startDate, end_date: endDate, advocate_token: advocateToken });
  }

  getClickDailyParticipation(accountSlug: string, startDate: string, endDate: string, advocateToken?: string): Promise<string> {
    return this.client.get('/reports/click-daily-participation', { account_slug: accountSlug, start_date: startDate, end_date: endDate, advocate_token: advocateToken });
  }

  getReferralDailyParticipation(accountSlug: string, startDate: string, endDate: string, advocateToken?: string): Promise<string> {
    return this.client.get('/reports/referral-daily-participation', { account_slug: accountSlug, start_date: startDate, end_date: endDate, advocate_token: advocateToken });
  }

  getReferralsSummaryPerOrigin(accountSlug: string, startDate: string, endDate: string, advocateToken?: string): Promise<string> {
    return this.client.get('/reports/referrals-summary-per-origin', { account_slug: accountSlug, start_date: startDate, end_date: endDate, advocate_token: advocateToken });
  }

  getShareDailyParticipation(accountSlug: string, startDate: string, endDate: string, advocateToken?: string): Promise<string> {
    return this.client.get('/reports/share-daily-participation', { account_slug: accountSlug, start_date: startDate, end_date: endDate, advocate_token: advocateToken });
  }

  getTopAdvocates(accountSlug: string, startDate: string, endDate: string, advocateToken?: string): Promise<string> {
    return this.client.get('/reports/top-advocates', { account_slug: accountSlug, start_date: startDate, end_date: endDate, advocate_token: advocateToken });
  }

  getRevenue(accountSlug: string, startDate: string, endDate: string): Promise<string> {
    return this.client.get('/reports/revenue', { account_slug: accountSlug, start_date: startDate, end_date: endDate });
  }

  get1099TaxReport(accountSlug: string, year: number): Promise<string> {
    return this.client.get('/reports/1099-tax-report', { account_slug: accountSlug, year });
  }
}