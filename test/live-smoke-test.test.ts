import { GeniusReferralsClient } from '../src/controllers/genius-referrals-client';

const TOKEN = process.env.GR_API_TOKEN;
const ACCOUNT = process.env.GR_ACCOUNT_SLUG || 'my-wordpress';

let sdk: GeniusReferralsClient;
let passCount = 0;
let failCount = 0;

function check(name: string, condition: boolean) {
  if (condition) {
    passCount++;
  } else {
    failCount++;
    console.error(`FAIL: ${name}`);
  }
}

async function runSmoke() {
  if (!TOKEN) {
    console.log('GR_API_TOKEN not set, skipping live smoke test');
    return;
  }

  sdk = new GeniusReferralsClient(TOKEN);

  // 1. Authentication
  try {
    const auth = await sdk.authentications.getAuthentication();
    check('authentication', auth.includes('200') || auth.includes('Hello'));
  } catch (e) { check('authentication', false); }

  // 2. Root
  try {
    const root = await sdk.roots.getRoot();
    check('root', root.includes('_links'));
  } catch (e) { check('root', false); }

  // 3. Accounts list
  try {
    const accounts = await sdk.accounts.getAccounts(1, 5);
    check('accounts list', accounts.includes('data') || accounts.includes('slug'));
  } catch (e) { check('accounts list', false); }

  // 4. Advocates list
  try {
    const advocates = await sdk.advocates.getAdvocates(ACCOUNT, 1, 5);
    check('advocates list', advocates.includes('data') || advocates.includes('token'));
  } catch (e) { check('advocates list', false); }

  // 5. Bonuses list
  try {
    const bonuses = await sdk.bonuses.getBonuses(ACCOUNT, 1, 5);
    check('bonuses list', bonuses.includes('data') || bonuses.includes('id'));
  } catch (e) { check('bonuses list', false); }

  // 6. Campaigns list
  try {
    const campaigns = await sdk.campaigns.getCampaigns(ACCOUNT, 1, 5);
    check('campaigns list', campaigns.includes('data') || campaigns.includes('slug'));
  } catch (e) { check('campaigns list', false); }

  // 7. Products list
  try {
    const products = await sdk.products.getProducts(ACCOUNT, 1, 5);
    check('products list', products.includes('data') || products.includes('slug'));
  } catch (e) { check('products list', false); }

  // 8. Tags list
  try {
    const tags = await sdk.tags.getTags(ACCOUNT, 1, 5);
    check('tags list', tags.includes('data') || tags.includes('slug'));
  } catch (e) { check('tags list', false); }

  // 9. Vouchers list
  try {
    const vouchers = await sdk.vouchers.getVouchers(ACCOUNT, 1, 5);
    check('vouchers list', vouchers.includes('data') || vouchers.includes('id'));
  } catch (e) { check('vouchers list', false); }

  // 10. Widgets packages list
  try {
    const widgets = await sdk.widgetsPackages.getWidgetsPackages(ACCOUNT, 1, 5);
    check('widgets packages list', widgets.includes('data') || widgets.includes('slug'));
  } catch (e) { check('widgets packages list', false); }

  // 11. Reports - bonuses daily given
  try {
    const report = await sdk.reports.getBonusesDailyGiven(ACCOUNT, '2026-01-01', '2026-01-31');
    check('reports bonuses-daily-given', report.includes('data') || report.includes('account'));
  } catch (e) { check('reports bonuses-daily-given', false); }

  // 12. Reports - 1099
  try {
    const report = await sdk.reports.get1099TaxReport(ACCOUNT, 2025);
    check('reports 1099', report.includes('data') || report.includes('account_slug') || report.includes('year'));
  } catch (e) { check('reports 1099', false); }

  // 13. Utilities - currencies
  try {
    const currencies = await sdk.utilities.getCurrencies(1, 5);
    check('utilities currencies', currencies.includes('data') || currencies.includes('code'));
  } catch (e) { check('utilities currencies', false); }

  // 14. Utilities - bonus redemption methods
  try {
    const methods = await sdk.utilities.getBonusRedemptionMethods(1, 5);
    check('utilities bonus redemption methods', methods.includes('data') || methods.includes('slug'));
  } catch (e) { check('utilities bonus redemption methods', false); }

  // 15. POST - create tag
  let createdTagSlug = '';
  try {
    const tag = await sdk.tags.createTag(ACCOUNT, { name: 'BoltSmokeTest' });
    const parsed = JSON.parse(tag);
    createdTagSlug = parsed.slug || parsed.data?.slug || '';
    check('POST create tag', !!createdTagSlug || tag.includes('slug'));
  } catch (e) { check('POST create tag', false); }

  // 16. GET single - tag
  if (createdTagSlug) {
    try {
      const tag = await sdk.tags.getTag(ACCOUNT, createdTagSlug);
      check('GET single tag', tag.includes(createdTagSlug));
    } catch (e) { check('GET single tag', false); }
  }

  // 17. PUT - update tag
  if (createdTagSlug) {
    try {
      await sdk.tags.updateTag(ACCOUNT, createdTagSlug, { name: 'BoltSmokeTestUpdated' });
      check('PUT update tag', true);
    } catch (e) { check('PUT update tag', false); }
  }

  // 18. PATCH - update tag (name only)
  if (createdTagSlug) {
    try {
      await sdk.tags.updateTag(ACCOUNT, createdTagSlug, { name: 'BoltSmokePatched' });
      check('PATCH update tag (via PUT)', true);
    } catch (e) { check('PATCH update tag', false); }
  }

  // 19. DELETE - tag
  if (createdTagSlug) {
    try {
      await sdk.tags.deleteTag(ACCOUNT, createdTagSlug);
      check('DELETE tag', true);
    } catch (e) { check('DELETE tag', false); }
  }

  // 20. POST - create advocate
  let advocateToken = '';
  try {
    const advocate = await sdk.advocates.postAdvocate(ACCOUNT, {
      firstname: 'BoltSmoke',
      lastname: 'Test',
      email: `bolt+smoke${Date.now()}@test.com`
    });
    const parsed = JSON.parse(advocate);
    advocateToken = parsed.token || parsed.data?.token || '';
    check('POST create advocate', !!advocateToken || advocate.includes('token'));
  } catch (e) { check('POST create advocate', false); }

  // 21. PATCH - update advocate
  if (advocateToken) {
    try {
      await sdk.advocates.patchAdvocate(ACCOUNT, advocateToken, { firstname: 'BoltUpdated' });
      check('PATCH advocate', true);
    } catch (e) { check('PATCH advocate', false); }
  }

  // 22. DELETE - advocate
  if (advocateToken) {
    try {
      await sdk.advocates.deleteAdvocate(ACCOUNT, advocateToken);
      check('DELETE advocate', true);
    } catch (e) { check('DELETE advocate', false); }
  }

  // 23. POST - create voucher
  let voucherId = '';
  try {
    const voucher = await sdk.vouchers.createVoucher(ACCOUNT, {
      code: `BOLT-SMOKE-${Date.now()}`,
      value: 9.99,
      currency_code: 'USD',
      status: 'available'
    });
    const parsed = JSON.parse(voucher);
    voucherId = String(parsed.id || parsed.data?.id || '');
    check('POST create voucher', !!voucherId || voucher.includes('id'));
  } catch (e) { check('POST create voucher', false); }

  // 24. PATCH - update voucher
  if (voucherId) {
    try {
      await sdk.vouchers.patchVoucher(ACCOUNT, voucherId, { status: 'used' });
      check('PATCH voucher', true);
    } catch (e) { check('PATCH voucher', false); }
  }

  // 25. DELETE - voucher
  if (voucherId) {
    try {
      await sdk.vouchers.deleteVoucher(ACCOUNT, voucherId);
      check('DELETE voucher', true);
    } catch (e) { check('DELETE voucher', false); }
  }

  // 26. Reports - revenue
  try {
    const revenue = await sdk.reports.getRevenue(ACCOUNT, '2026-01-01', '2026-12-31');
    check('reports revenue', revenue.includes('data') || revenue.includes('account_slug') || revenue.includes('revenue'));
  } catch (e) { check('reports revenue', false); }

  // 27. Utilities - referral origins
  try {
    const origins = await sdk.utilities.getReferralOrigins(1, 5);
    check('utilities referral origins', origins.includes('data') || origins.includes('slug'));
  } catch (e) { check('utilities referral origins', false); }

  // 28. Utilities - redemption request statuses
  try {
    const statuses = await sdk.utilities.getRedemptionRequestStatuses(1, 5);
    check('utilities redemption request statuses', statuses.includes('data') || statuses.includes('slug'));
  } catch (e) { check('utilities redemption request statuses', false); }

  // 29. Utilities - payment methods
  try {
    const methods = await sdk.utilities.getPaymentMethodsList(1, 5);
    check('utilities payment methods', methods.includes('data') || methods.includes('slug'));
  } catch (e) { check('utilities payment methods', false); }

  // 30. Share daily participation report
  try {
    const report = await sdk.reports.getShareDailyParticipation(ACCOUNT, '2026-01-01', '2026-01-31');
    check('reports share-daily-participation', report.includes('data') || report.includes('account_slug'));
  } catch (e) { check('reports share-daily-participation', false); }

  console.log(`\nLive smoke results: ${passCount} passed, ${failCount} failed`);
  if (failCount > 0) {
    throw new Error(`${failCount} live smoke test(s) failed`);
  }
}

test('live API smoke test', async () => {
  if (!TOKEN) {
    console.log('Skipping live smoke test (GR_API_TOKEN not set)');
    return;
  }
  await runSmoke();
}, 60000);