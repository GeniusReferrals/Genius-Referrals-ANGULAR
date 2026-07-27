import { GeniusReferralsClient } from '../src/controllers/genius-referrals-client';
import { APIException } from '../src/api-exception';

// Mock fetch
let mockResponse: { status: number; body: string };
let mockRequests: { method: string; url: string; body?: string }[];

beforeEach(() => {
  mockRequests = [];
  mockResponse = { status: 200, body: '{"data":[]}' };
  (globalThis as any).fetch = async (url: string, init: any) => {
    mockRequests.push({ method: init?.method || 'GET', url, body: init?.body });
    return {
      status: mockResponse.status,
      text: async () => mockResponse.body
    } as Response;
  };
});

function getLastRequest() {
  return mockRequests[mockRequests.length - 1];
}

function setMockResponse(status: number, body: string) {
  mockResponse = { status, body };
}

const TOKEN = 'test-token';
let sdk: GeniusReferralsClient;

beforeEach(() => {
  sdk = new GeniusReferralsClient(TOKEN, 'https://api.geniusreferrals.com');
});

describe('RootsController', () => {
  test('getRoot', async () => {
    setMockResponse(200, '{"_links":{}}');
    const result = await sdk.roots.getRoot();
    expect(result).toContain('_links');
    expect(getLastRequest().method).toBe('GET');
    expect(getLastRequest().url).toContain('/');
  });
});

describe('AuthenticationsController', () => {
  test('getAuthentication', async () => {
    setMockResponse(200, '{"code":200}');
    const result = await sdk.authentications.getAuthentication();
    expect(result).toContain('code');
    expect(getLastRequest().url).toContain('/test-authentication');
  });
});

describe('AccountsController', () => {
  test('getAccounts', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.accounts.getAccounts(1, 10);
    expect(getLastRequest().url).toContain('page=1');
    expect(getLastRequest().url).toContain('limit=10');
  });

  test('getAccount', async () => {
    setMockResponse(200, '{"slug":"test"}');
    await sdk.accounts.getAccount('test-slug');
    expect(getLastRequest().url).toContain('/accounts/test-slug');
  });

  test('createAccount', async () => {
    setMockResponse(201, '{"slug":"new"}');
    await sdk.accounts.createAccount({ name: 'Test' });
    const req = getLastRequest();
    expect(req.method).toBe('POST');
    expect(req.body).toContain('"account"');
    expect(req.body).toContain('"name":"Test"');
  });

  test('updateAccount', async () => {
    setMockResponse(204, '');
    await sdk.accounts.updateAccount('test-slug', { name: 'Updated' });
    const req = getLastRequest();
    expect(req.method).toBe('PUT');
    expect(req.body).toContain('"account"');
  });

  test('deleteAccount', async () => {
    setMockResponse(204, '');
    await sdk.accounts.deleteAccount('test-slug');
    expect(getLastRequest().method).toBe('DELETE');
  });
});

describe('AdvocatesController', () => {
  test('getAdvocates', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.advocates.getAdvocates('test-slug', 1, 10);
    expect(getLastRequest().url).toContain('/accounts/test-slug/advocates');
  });

  test('getAdvocate', async () => {
    setMockResponse(200, '{"token":"abc"}');
    await sdk.advocates.getAdvocate('test-slug', 'abc');
    expect(getLastRequest().url).toContain('/advocates/abc');
  });

  test('postAdvocate', async () => {
    setMockResponse(201, '{"token":"new"}');
    await sdk.advocates.postAdvocate('test-slug', { firstname: 'John', lastname: 'Doe', email: 'john@test.com' });
    const req = getLastRequest();
    expect(req.method).toBe('POST');
    expect(req.body).toContain('"advocate"');
  });

  test('putAdvocate', async () => {
    setMockResponse(204, '');
    await sdk.advocates.putAdvocate('test-slug', 'abc', { firstname: 'Jane', lastname: 'Doe', email: 'jane@test.com' });
    expect(getLastRequest().method).toBe('PUT');
  });

  test('patchAdvocate', async () => {
    setMockResponse(204, '');
    await sdk.advocates.patchAdvocate('test-slug', 'abc', { firstname: 'Updated' });
    const req = getLastRequest();
    expect(req.method).toBe('PATCH');
    expect(req.body).not.toContain('"advocate"');
  });

  test('deleteAdvocate', async () => {
    setMockResponse(204, '');
    await sdk.advocates.deleteAdvocate('test-slug', 'abc');
    expect(getLastRequest().method).toBe('DELETE');
  });

  test('deleteAdvocates bulk', async () => {
    setMockResponse(204, '');
    await sdk.advocates.deleteAdvocates('test-slug', 'abc,def');
    expect(getLastRequest().url).toContain('advocates=abc%2Cdef');
  });

  test('getAdvocateShareLinks', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.advocates.getAdvocateShareLinks('test-slug', 'abc');
    expect(getLastRequest().url).toContain('/share-links');
  });

  test('getAdvocatePaymentMethods', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.advocates.getAdvocatePaymentMethods('test-slug', 'abc');
    expect(getLastRequest().url).toContain('/payment-methods');
  });

  test('getAdvocatePaymentMethod', async () => {
    setMockResponse(200, '{"id":1}');
    await sdk.advocates.getAdvocatePaymentMethod('test-slug', 'abc', '1');
    expect(getLastRequest().url).toContain('/payment-methods/1');
  });

  test('postAdvocatePaymentMethod', async () => {
    setMockResponse(201, '{"id":1}');
    await sdk.advocates.postAdvocatePaymentMethod('test-slug', 'abc', { type: 'paypal' });
    expect(getLastRequest().body).toContain('"advocate_payment_method"');
  });

  test('putAdvocatePaymentMethod', async () => {
    setMockResponse(204, '');
    await sdk.advocates.putAdvocatePaymentMethod('test-slug', 'abc', '1', { type: 'paypal' });
    expect(getLastRequest().method).toBe('PUT');
  });
});

describe('BonusesController', () => {
  test('getBonuses', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.bonuses.getBonuses('test-slug');
    expect(getLastRequest().url).toContain('/bonuses');
  });

  test('getBonus', async () => {
    setMockResponse(200, '{"id":1}');
    await sdk.bonuses.getBonus('test-slug', '123');
    expect(getLastRequest().url).toContain('/bonuses/123');
  });

  test('postBonus', async () => {
    setMockResponse(201, '{"id":1}');
    await sdk.bonuses.postBonus('test-slug', { advocate_token: 'abc', bonus_type: 'referral', amount: 10, currency_code: 'USD' });
    expect(getLastRequest().body).toContain('"bonus"');
  });

  test('forceBonus', async () => {
    setMockResponse(201, '{"id":1}');
    await sdk.bonuses.forceBonus('test-slug', { advocate_token: 'abc', bonus_type: 'referral', amount: 10, currency_code: 'USD' });
    expect(getLastRequest().url).toContain('/bonuses/force');
  });

  test('deleteBonus', async () => {
    setMockResponse(204, '');
    await sdk.bonuses.deleteBonus('test-slug', '123');
    expect(getLastRequest().method).toBe('DELETE');
  });

  test('patchBonus', async () => {
    setMockResponse(204, '');
    await sdk.bonuses.patchBonus('test-slug', '123', { status: 'paid' });
    const req = getLastRequest();
    expect(req.method).toBe('PATCH');
    expect(req.body).not.toContain('"bonus"');
  });

  test('checkupBonuses', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.bonuses.checkupBonuses('test-slug');
    expect(getLastRequest().url).toContain('/bonuses/checkup');
  });

  test('getBonusTraces', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.bonuses.getBonusTraces('test-slug');
    expect(getLastRequest().url).toContain('/bonuses/traces');
  });

  test('getBonusTrace', async () => {
    setMockResponse(200, '{"id":"trace1"}');
    await sdk.bonuses.getBonusTrace('test-slug', 'trace1');
    expect(getLastRequest().url).toContain('/traces/trace1');
  });

  test('getBonusTags', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.bonuses.getBonusTags('test-slug', '123');
    expect(getLastRequest().url).toContain('/bonuses/123/tags');
  });

  test('addBonusTag', async () => {
    setMockResponse(201, '{}');
    await sdk.bonuses.addBonusTag('test-slug', '123', { name: 'vip' });
    expect(getLastRequest().body).toContain('"tag"');
  });

  test('removeBonusTag', async () => {
    setMockResponse(204, '');
    await sdk.bonuses.removeBonusTag('test-slug', '123', 'vip');
    expect(getLastRequest().method).toBe('DELETE');
  });
});

describe('CampaignsController', () => {
  test('getCampaigns', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.campaigns.getCampaigns('test-slug');
    expect(getLastRequest().url).toContain('/campaigns');
  });

  test('getCampaign', async () => {
    setMockResponse(200, '{"slug":"camp1"}');
    await sdk.campaigns.getCampaign('test-slug', 'camp1');
    expect(getLastRequest().url).toContain('/campaigns/camp1');
  });
});

describe('ProductsController', () => {
  test('getProducts', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.products.getProducts('test-slug');
    expect(getLastRequest().url).toContain('/products');
  });

  test('getProduct', async () => {
    setMockResponse(200, '{"slug":"prod1"}');
    await sdk.products.getProduct('test-slug', 'prod1');
  });

  test('createProduct', async () => {
    setMockResponse(201, '{"slug":"prod1"}');
    await sdk.products.createProduct('test-slug', { name: 'Test Product' });
    expect(getLastRequest().body).toContain('"product"');
  });

  test('updateProduct', async () => {
    setMockResponse(204, '');
    await sdk.products.updateProduct('test-slug', 'prod1', { name: 'Updated' });
    expect(getLastRequest().method).toBe('PUT');
  });

  test('deleteProduct', async () => {
    setMockResponse(204, '');
    await sdk.products.deleteProduct('test-slug', 'prod1');
    expect(getLastRequest().method).toBe('DELETE');
  });

  test('getProductVariants', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.products.getProductVariants('test-slug', 'prod1');
  });

  test('createProductVariant', async () => {
    setMockResponse(201, '{"id":1}');
    await sdk.products.createProductVariant('test-slug', 'prod1', { title: 'Variant 1' });
    expect(getLastRequest().body).toContain('"variant"');
  });

  test('patchProductVariant', async () => {
    setMockResponse(204, '');
    await sdk.products.patchProductVariant('test-slug', 'prod1', '1', { title: 'Updated' });
    const req = getLastRequest();
    expect(req.method).toBe('PATCH');
    expect(req.body).not.toContain('"variant"');
  });

  test('deleteProductVariant', async () => {
    setMockResponse(204, '');
    await sdk.products.deleteProductVariant('test-slug', 'prod1', '1');
    expect(getLastRequest().method).toBe('DELETE');
  });

  test('patchProductVariantPrice', async () => {
    setMockResponse(204, '');
    await sdk.products.patchProductVariantPrice('test-slug', 'prod1', '1', 'USD', { amount: 29.99 });
    const req = getLastRequest();
    expect(req.method).toBe('PATCH');
    expect(req.url).toContain('/prices/USD');
  });
});

describe('RedemptionRequestsController', () => {
  test('getRedemptionRequests', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.redemptionRequests.getRedemptionRequests('test-slug');
  });

  test('getRedemptionRequest', async () => {
    setMockResponse(200, '{"id":1}');
    await sdk.redemptionRequests.getRedemptionRequest('test-slug', '1');
  });

  test('postRedemptionRequest', async () => {
    setMockResponse(201, '{"id":1}');
    await sdk.redemptionRequests.postRedemptionRequest('test-slug', { advocate_token: 'abc', amount: 50, currency_code: 'USD' });
    expect(getLastRequest().body).toContain('"redemption_request"');
  });

  test('patchRedemptionRequest', async () => {
    setMockResponse(204, '');
    await sdk.redemptionRequests.patchRedemptionRequest('test-slug', '1', { status: 'approved' });
    expect(getLastRequest().body).not.toContain('"redemption_request"');
  });

  test('patchRedemption', async () => {
    setMockResponse(204, '');
    await sdk.redemptionRequests.patchRedemption('test-slug', '1', { action: 'process' });
    expect(getLastRequest().url).toContain('/redemption');
  });
});

describe('ReferralsController', () => {
  test('getReferrals', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.referrals.getReferrals('test-slug', 'abc');
  });

  test('getReferral', async () => {
    setMockResponse(200, '{"id":1}');
    await sdk.referrals.getReferral('test-slug', 'abc', '1');
  });

  test('postReferral', async () => {
    setMockResponse(201, '{"id":1}');
    await sdk.referrals.postReferral('test-slug', 'abc', { url: 'http://example.com' });
    expect(getLastRequest().body).toContain('"referral"');
  });

  test('putReferral', async () => {
    setMockResponse(204, '');
    await sdk.referrals.putReferral('test-slug', 'abc', '1', { url: 'http://updated.com' });
    expect(getLastRequest().method).toBe('PUT');
  });

  test('deleteReferral', async () => {
    setMockResponse(204, '');
    await sdk.referrals.deleteReferral('test-slug', 'abc', '1');
    expect(getLastRequest().method).toBe('DELETE');
  });
});

describe('ReportsController', () => {
  test('getBonusesDailyGiven', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.reports.getBonusesDailyGiven('test-slug', '2026-01-01', '2026-01-31');
    expect(getLastRequest().url).toContain('/reports/bonuses-daily-given');
  });

  test('getClickDailyParticipation', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.reports.getClickDailyParticipation('test-slug', '2026-01-01', '2026-01-31');
    expect(getLastRequest().url).toContain('/reports/click-daily-participation');
  });

  test('getShareDailyParticipation', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.reports.getShareDailyParticipation('test-slug', '2026-01-01', '2026-01-31');
    expect(getLastRequest().url).toContain('/reports/share-daily-participation');
  });

  test('get1099TaxReport', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.reports.get1099TaxReport('test-slug', 2025);
    expect(getLastRequest().url).toContain('year=2025');
    expect(getLastRequest().url).toContain('/reports/1099-tax-report');
  });

  test('getRevenue', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.reports.getRevenue('test-slug', '2026-01-01', '2026-12-31');
    expect(getLastRequest().url).toContain('/reports/revenue');
  });
});

describe('TagsController', () => {
  test('getTags', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.tags.getTags('test-slug');
  });

  test('getTag', async () => {
    setMockResponse(200, '{"slug":"vip"}');
    await sdk.tags.getTag('test-slug', 'vip');
  });

  test('createTag', async () => {
    setMockResponse(201, '{"slug":"vip"}');
    await sdk.tags.createTag('test-slug', { name: 'VIP' });
    expect(getLastRequest().body).toContain('"tag"');
  });

  test('updateTag', async () => {
    setMockResponse(204, '');
    await sdk.tags.updateTag('test-slug', 'vip', { name: 'Updated' });
    expect(getLastRequest().method).toBe('PUT');
  });

  test('deleteTag', async () => {
    setMockResponse(204, '');
    await sdk.tags.deleteTag('test-slug', 'vip');
    expect(getLastRequest().method).toBe('DELETE');
  });
});

describe('VouchersController', () => {
  test('getVouchers', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.vouchers.getVouchers('test-slug');
  });

  test('getVoucher', async () => {
    setMockResponse(200, '{"id":1}');
    await sdk.vouchers.getVoucher('test-slug', '1');
  });

  test('createVoucher', async () => {
    setMockResponse(201, '{"id":1}');
    await sdk.vouchers.createVoucher('test-slug', { code: 'ABC123', value: 10, currency_code: 'USD' });
    expect(getLastRequest().body).toContain('"voucher"');
  });

  test('patchVoucher', async () => {
    setMockResponse(204, '');
    await sdk.vouchers.patchVoucher('test-slug', '1', { status: 'used' });
    expect(getLastRequest().body).not.toContain('"voucher"');
  });

  test('deleteVoucher', async () => {
    setMockResponse(204, '');
    await sdk.vouchers.deleteVoucher('test-slug', '1');
    expect(getLastRequest().method).toBe('DELETE');
  });

  test('getVoucherDenominations', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.vouchers.getVoucherDenominations('test-slug', 'USD');
    expect(getLastRequest().url).toContain('/vouchers-denominations/USD');
  });
});

describe('WidgetsPackagesController', () => {
  test('getWidgetsPackages', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.widgetsPackages.getWidgetsPackages('test-slug');
  });

  test('getWidgetsPackage', async () => {
    setMockResponse(200, '{"slug":"wp1"}');
    await sdk.widgetsPackages.getWidgetsPackage('test-slug', 'wp1');
  });

  test('createWidgetsPackage', async () => {
    setMockResponse(201, '{"slug":"wp1"}');
    await sdk.widgetsPackages.createWidgetsPackage('test-slug', { name: 'Package 1' });
    expect(getLastRequest().body).toContain('"widgets_package"');
  });

  test('updateWidgetsPackage', async () => {
    setMockResponse(204, '');
    await sdk.widgetsPackages.updateWidgetsPackage('test-slug', 'wp1', { name: 'Updated' });
    expect(getLastRequest().method).toBe('PUT');
  });

  test('deleteWidgetsPackage', async () => {
    setMockResponse(204, '');
    await sdk.widgetsPackages.deleteWidgetsPackage('test-slug', 'wp1');
    expect(getLastRequest().method).toBe('DELETE');
  });

  test('getWidgets', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.widgetsPackages.getWidgets('test-slug', 'wp1');
  });

  test('getWidget', async () => {
    setMockResponse(200, '{"id":1}');
    await sdk.widgetsPackages.getWidget('test-slug', 'wp1', '1');
  });

  test('createWidget', async () => {
    setMockResponse(201, '{"id":1}');
    await sdk.widgetsPackages.createWidget('test-slug', 'wp1', { type: 'referral' });
    expect(getLastRequest().body).toContain('"widget"');
  });

  test('patchWidget', async () => {
    setMockResponse(204, '');
    await sdk.widgetsPackages.patchWidget('test-slug', 'wp1', '1', { name: 'Updated' });
    expect(getLastRequest().body).not.toContain('"widget"');
  });

  test('putWidget', async () => {
    setMockResponse(204, '');
    await sdk.widgetsPackages.putWidget('test-slug', 'wp1', '1', { type: 'referral' });
    expect(getLastRequest().method).toBe('PUT');
  });

  test('deleteWidget', async () => {
    setMockResponse(204, '');
    await sdk.widgetsPackages.deleteWidget('test-slug', 'wp1', '1');
    expect(getLastRequest().method).toBe('DELETE');
  });

  test('getWidgetTranslations', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.widgetsPackages.getWidgetTranslations('test-slug', 'wp1', '1');
  });

  test('getWidgetTranslation', async () => {
    setMockResponse(200, '{"locale":"en"}');
    await sdk.widgetsPackages.getWidgetTranslation('test-slug', 'wp1', '1', 'en');
  });

  test('createWidgetTranslation', async () => {
    setMockResponse(201, '{"locale":"en"}');
    await sdk.widgetsPackages.createWidgetTranslation('test-slug', 'wp1', '1', { locale: 'en' });
    expect(getLastRequest().body).toContain('"widget_translation"');
  });

  test('patchWidgetTranslation', async () => {
    setMockResponse(204, '');
    await sdk.widgetsPackages.patchWidgetTranslation('test-slug', 'wp1', '1', 'en', { locale: 'fr' });
    expect(getLastRequest().body).not.toContain('"widget_translation"');
  });
});

describe('UtilitiesController', () => {
  test('getBonusRedemptionMethods', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.utilities.getBonusRedemptionMethods();
    expect(getLastRequest().url).toContain('/utilities/bonuses-redemption-methods');
  });

  test('getBonusRedemptionMethod', async () => {
    setMockResponse(200, '{"slug":"paypal"}');
    await sdk.utilities.getBonusRedemptionMethod('paypal');
    expect(getLastRequest().url).toContain('/utilities/bonuses-redemption-methods/paypal');
  });

  test('getCurrencies', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.utilities.getCurrencies();
  });

  test('getCurrency', async () => {
    setMockResponse(200, '{"code":"USD"}');
    await sdk.utilities.getCurrency('USD');
  });

  test('getPaymentMethodsList', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.utilities.getPaymentMethodsList();
  });

  test('getRedemptionRequestActions', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.utilities.getRedemptionRequestActions();
  });

  test('getRedemptionRequestAction', async () => {
    setMockResponse(200, '{"slug":"approve"}');
    await sdk.utilities.getRedemptionRequestAction('approve');
  });

  test('getRedemptionRequestStatuses', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.utilities.getRedemptionRequestStatuses();
  });

  test('getRedemptionRequestStatus', async () => {
    setMockResponse(200, '{"slug":"pending"}');
    await sdk.utilities.getRedemptionRequestStatus('pending');
  });

  test('getReferralOrigins', async () => {
    setMockResponse(200, '{"data":[]}');
    await sdk.utilities.getReferralOrigins();
  });

  test('getReferralOrigin', async () => {
    setMockResponse(200, '{"slug":"twitter"}');
    await sdk.utilities.getReferralOrigin('twitter');
  });
});

describe('Error handling', () => {
  test('401 throws auth error', async () => {
    setMockResponse(401, 'Unauthorized');
    await expect(sdk.authentications.getAuthentication()).rejects.toThrow('not authenticated');
  });

  test('403 throws forbidden error', async () => {
    setMockResponse(403, 'Forbidden');
    await expect(sdk.accounts.getAccounts()).rejects.toThrow('not authorized');
  });

  test('404 throws not found error', async () => {
    setMockResponse(404, 'Not Found');
    await expect(sdk.accounts.getAccount('missing')).rejects.toThrow('not found');
  });
});