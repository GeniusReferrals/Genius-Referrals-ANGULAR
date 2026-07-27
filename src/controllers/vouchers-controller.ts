import { GRClient } from '../gr-client';
import { VoucherForm } from '../models/voucher-form';
import { VoucherPatchForm } from '../models/voucher-patch-form';

export class VouchersController {
  constructor(private client: GRClient) {}

  getVouchers(accountSlug: string, page?: number, limit?: number): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/vouchers`, { page, limit });
  }

  getVoucher(accountSlug: string, voucherId: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/vouchers/${voucherId}`);
  }

  createVoucher(accountSlug: string, voucherForm: VoucherForm): Promise<string> {
    return this.client.post(`/accounts/${accountSlug}/vouchers`, { voucher: voucherForm });
  }

  patchVoucher(accountSlug: string, voucherId: string, voucherPatchForm: VoucherPatchForm): Promise<string> {
    return this.client.patch(`/accounts/${accountSlug}/vouchers/${voucherId}`, voucherPatchForm);
  }

  deleteVoucher(accountSlug: string, voucherId: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}/vouchers/${voucherId}`);
  }

  getVoucherDenominations(accountSlug: string, currencyCode: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}/vouchers-denominations/${currencyCode}`);
  }
}