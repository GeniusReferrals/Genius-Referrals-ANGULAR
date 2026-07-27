import { GRClient } from '../gr-client';
import { AdvocateForm } from '../models/advocate-form';
import { AdvocatePatchForm } from '../models/advocate-patch-form';
import { PaymentMethodForm } from '../models/payment-method-form';

export class AdvocatesController {
  constructor(private client: GRClient) {}

  getAdvocates(accountSlug: string, page?: number, limit?: number, format?: string, email?: string, name?: string, lastname?: string, code?: string, token?: string, status?: string, fraudulent?: boolean, isEmailConfirmed?: boolean, canRefer?: boolean, updatedRange?: string, createdRange?: string, fields?: string, sort?: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/advocates`, { page, limit, format, email, name, lastname, code, token, status, fraudulent, is_email_confirmed: isEmailConfirmed, can_refer: canRefer, updated_range: updatedRange, created_range: createdRange, fields, sort });
  }

  getAdvocate(accountSlug: string, advocateToken: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/advocates/${advocateToken}`);
  }

  postAdvocate(accountSlug: string, advocateForm: AdvocateForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/advocates`, { advocate: advocateForm });
  }

  putAdvocate(accountSlug: string, advocateToken: string, advocateForm: AdvocateForm): Promise<string> {
    return this.client.put(`/accounts/${accountSlug}/advocates/${advocateToken}`, { advocate: advocateForm });
  }

  patchAdvocate(accountSlug: string, advocateToken: string, advocatePatchForm: AdvocatePatchForm): Promise<string> {
    return this.client.patch(`/accounts/${accountSlug}/advocates/${advocateToken}`, advocatePatchForm);
  }

  deleteAdvocate(accountSlug: string, advocateToken: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}/advocates/${advocateToken}`);
  }

  deleteAdvocates(accountSlug: string, advocates: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}/advocates`, { advocates });
  }

  getAdvocateShareLinks(accountSlug: string, advocateToken: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/advocates/${advocateToken}/share-links`);
  }

  getAdvocatePaymentMethods(accountSlug: string, advocateToken: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/advocates/${advocateToken}/payment-methods`, { page, limit });
  }

  getAdvocatePaymentMethod(accountSlug: string, advocateToken: string, paymentMethodId: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/advocates/${advocateToken}/payment-methods/${paymentMethodId}`);
  }

  postAdvocatePaymentMethod(accountSlug: string, advocateToken: string, paymentMethodForm: PaymentMethodForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/advocates/${advocateToken}/payment-methods`, { advocate_payment_method: paymentMethodForm });
  }

  putAdvocatePaymentMethod(accountSlug: string, advocateToken: string, paymentMethodId: string, paymentMethodForm: PaymentMethodForm): Promise<string> {
    return this.client.put(`/accounts/${accountSlug}/advocates/${advocateToken}/payment-methods/${paymentMethodId}`, { advocate_payment_method: paymentMethodForm });
  }
}