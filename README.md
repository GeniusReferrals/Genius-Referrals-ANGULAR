# Genius Referrals Angular SDK v2.0

TypeScript SDK for the Genius Referrals REST API.

## Install

```bash
npm install geniusreferrals-angular
```

## Usage

```typescript
import { GeniusReferralsClient } from 'geniusreferrals-angular';

const sdk = new GeniusReferralsClient('your-api-token');

// Get accounts
const accounts = await sdk.accounts.getAccounts(1, 10);

// Get advocates
const advocates = await sdk.advocates.getAdvocates('your-account-slug', 1, 10);

// Create a tag
await sdk.tags.createTag('your-account-slug', { name: 'VIP' });

// Get a report
const report = await sdk.reports.getBonusesDailyGiven('your-account-slug', '2026-01-01', '2026-01-31');
```

## Architecture

- TypeScript with strict mode
- Uses native `fetch` (no external HTTP dependency)
- Promise-based API
- 14 controllers covering all API endpoints
- 44 typed model interfaces

## Key rules

- POST/PUT bodies use wrapper keys: `{"advocate": {...}}`
- PATCH bodies are bare partial objects: `{"firstname": "Updated"}`

## Testing

```bash
npm test                  # unit tests only
GR_API_TOKEN=your-token npm test  # unit + live smoke test
```

## License

MIT