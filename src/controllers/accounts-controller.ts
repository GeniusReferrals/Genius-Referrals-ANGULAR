import { GRClient } from '../gr-client';
import { AccountForm } from '../models/account-form';

export class AccountsController {
  constructor(private client: GRClient) {}

  getAccounts(page?: number, limit?: number, format?: string, clientSlug?: string): Promise<string> {
    return this.client.get('/accounts', { page, limit, format, client_slug: clientSlug });
  }

  getAccount(accountSlug: string, clientSlug?: string): Promise<string> {
    return this.client.get(`/accounts/${accountSlug}`, { client_slug: clientSlug });
  }

  createAccount(accountForm: AccountForm): Promise<string> {
    return this.client.post('/accounts', { account: accountForm });
  }

  updateAccount(accountSlug: string, accountForm: AccountForm): Promise<string> {
    return this.client.put(`/accounts/${accountSlug}`, { account: accountForm });
  }

  deleteAccount(accountSlug: string): Promise<string> {
    return this.client.delete(`/accounts/${accountSlug}`);
  }
}