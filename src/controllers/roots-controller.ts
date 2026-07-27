import { GRClient } from '../gr-client';

export class RootsController {
  constructor(private client: GRClient) {}

  getRoot(): Promise<string> {
    return this.client.get('/');
  }
}