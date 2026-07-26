import { GRClient } from '../gr-client';
import { BonusesForm } from '../models/bonuses-form';
import { ForceBonusesForm } from '../models/force-bonuses-form';
import { BonusPatchForm } from '../models/bonus-patch-form';
import { TagForm } from '../models/tag-form';

export class BonusesController {
  constructor(private client: GRClient) {}

  getBonuses(accountSlug: string, page?: number, limit?: number, format?: string, advocateToken?: string, status?: string, createdRange?: string, updatedRange?: string, fields?: string, sort?: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/bonuses`, { page, limit, format, advocate_token: advocateToken, status, created_range: createdRange, updated_range: updatedRange, fields, sort });
  }

  getBonus(accountSlug: string, bonusId: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/bonuses/${bonusId}`);
  }

  postBonus(accountSlug: string, bonusForm: BonusesForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/bonuses`, { bonus: bonusForm });
  }

  forceBonus(accountSlug: string, forceBonusForm: ForceBonusesForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/bonuses/force`, { bonus: forceBonusForm });
  }

  deleteBonus(accountSlug: string, bonusId: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}/bonuses/${bonusId}`);
  }

  patchBonus(accountSlug: string, bonusId: string, bonusPatchForm: BonusPatchForm): Promise<string> {
    return this.client.patch(`/accounts/${accountSlug}/bonuses/${bonusId}`, bonusPatchForm);
  }

  checkupBonuses(accountSlug: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/bonuses/checkup`);
  }

  getBonusTraces(accountSlug: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/bonuses/traces`, { page, limit });
  }

  getBonusTrace(accountSlug: string, traceId: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/bonuses/traces/${traceId}`);
  }

  getBonusTags(accountSlug: string, bonusId: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/bonuses/${bonusId}/tags`, { page, limit });
  }

  addBonusTag(accountSlug: string, bonusId: string, tagForm: TagForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/bonuses/${bonusId}/tags`, { tag: tagForm });
  }

  removeBonusTag(accountSlug: string, bonusId: string, tagSlug: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}/bonuses/${bonusId}/tags/${tagSlug}`);
  }
}