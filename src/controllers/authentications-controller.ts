import { GRClient } from '../gr-client';

export class AuthenticationsController {
  constructor(private client: GRClient) {}

  getAuthentication(): Promise<string> {
    return this.client.get('/test-authentication');
  }
}