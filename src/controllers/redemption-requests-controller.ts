import { GRClient } from '../gr-client';
import { RedemptionRequestForm } from '../models/redemption-request-form';
import { RedemptionRequestPatchForm } from '../models/redemption-request-patch-form';
import { ProcessRedemptionForm } from '../models/process-redemption-form';

export class RedemptionRequestsController {
  constructor(private client: GRClient) {}

  getRedemptionRequests(accountSlug: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/redemption-requests`, { page, limit });
  }

  getRedemptionRequest(accountSlug: string, redemptionRequestId: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/redemption-requests/${redemptionRequestId}`);
  }

  postRedemptionRequest(accountSlug: string, redemptionRequestForm: RedemptionRequestForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/redemption-requests`, { redemption_request: redemptionRequestForm });
  }

  patchRedemptionRequest(accountSlug: string, redemptionRequestId: string, redemptionRequestPatchForm: RedemptionRequestPatchForm): Promise<string> {
    return this.client.patch(`/accounts/${accountSlug}/redemption-requests/${redemptionRequestId}`, redemptionRequestPatchForm);
  }

  patchRedemption(accountSlug: string, redemptionRequestId: string, processRedemptionForm: ProcessRedemptionForm): Promise<string> {
    return this.client.patch(`/accounts/${accountSlug}/redemption-requests/${redemptionRequestId}/redemption`, processRedemptionForm);
  }
}