import { AccountForm } from '../src/models/account-form';
import { AdvocateForm } from '../src/models/advocate-form';
import { AdvocatePatchForm } from '../src/models/advocate-patch-form';
import { BonusesForm } from '../src/models/bonuses-form';
import { BonusPatchForm } from '../src/models/bonus-patch-form';
import { ForceBonusesForm } from '../src/models/force-bonuses-form';
import { PaymentMethodForm } from '../src/models/payment-method-form';
import { ProductForm } from '../src/models/product-form';
import { VariantForm } from '../src/models/variant-form';
import { VariantPatchForm } from '../src/models/variant-patch-form';
import { PriceForm } from '../src/models/price-form';
import { RedemptionRequestForm } from '../src/models/redemption-request-form';
import { RedemptionRequestPatchForm } from '../src/models/redemption-request-patch-form';
import { ProcessRedemptionForm } from '../src/models/process-redemption-form';
import { ReferralForm } from '../src/models/referral-form';
import { TagForm } from '../src/models/tag-form';
import { VoucherForm } from '../src/models/voucher-form';
import { VoucherPatchForm } from '../src/models/voucher-patch-form';
import { WidgetForm } from '../src/models/widget-form';
import { WidgetPatchForm } from '../src/models/widget-patch-form';
import { WidgetTranslationForm } from '../src/models/widget-translation-form';
import { WidgetTranslationPatchForm } from '../src/models/widget-translation-patch-form';
import { WidgetsPackageForm } from '../src/models/widgets-package-form';

describe('Model serialization', () => {
  test('AccountForm serializes with required fields', () => {
    const form: AccountForm = { name: 'Test Account' };
    const json = JSON.stringify(form);
    expect(JSON.parse(json).name).toBe('Test Account');
  });

  test('AdvocateForm serializes with required fields', () => {
    const form: AdvocateForm = { firstname: 'John', lastname: 'Doe', email: 'john@test.com' };
    const json = JSON.stringify(form);
    const parsed = JSON.parse(json);
    expect(parsed.firstname).toBe('John');
    expect(parsed.lastname).toBe('Doe');
    expect(parsed.email).toBe('john@test.com');
  });

  test('AdvocatePatchForm omits undefined optional fields', () => {
    const form: AdvocatePatchForm = { firstname: 'Updated' };
    const json = JSON.stringify(form);
    const parsed = JSON.parse(json);
    expect(parsed.firstname).toBe('Updated');
    expect(parsed.lastname).toBeUndefined();
  });

  test('POST/PUT wrapper key pattern: account', () => {
    const form: AccountForm = { name: 'Test' };
    const body = JSON.stringify({ account: form });
    expect(JSON.parse(body).account.name).toBe('Test');
  });

  test('POST/PUT wrapper key pattern: advocate', () => {
    const form: AdvocateForm = { firstname: 'John', lastname: 'Doe', email: 'j@t.com' };
    const body = JSON.stringify({ advocate: form });
    expect(JSON.parse(body).advocate.firstname).toBe('John');
  });

  test('POST/PUT wrapper key pattern: bonus', () => {
    const form: BonusesForm = { advocate_token: 'abc', bonus_type: 'referral', amount: 10, currency_code: 'USD' };
    const body = JSON.stringify({ bonus: form });
    expect(JSON.parse(body).bonus.amount).toBe(10);
  });

  test('POST/PUT wrapper key pattern: voucher', () => {
    const form: VoucherForm = { code: 'ABC', value: 5, currency_code: 'USD' };
    const body = JSON.stringify({ voucher: form });
    expect(JSON.parse(body).voucher.code).toBe('ABC');
  });

  test('POST/PUT wrapper key pattern: tag', () => {
    const form: TagForm = { name: 'VIP' };
    const body = JSON.stringify({ tag: form });
    expect(JSON.parse(body).tag.name).toBe('VIP');
  });

  test('POST/PUT wrapper key pattern: widget', () => {
    const form: WidgetForm = { type: 'referral' };
    const body = JSON.stringify({ widget: form });
    expect(JSON.parse(body).widget.type).toBe('referral');
  });

  test('POST/PUT wrapper key pattern: widgets_package', () => {
    const form: WidgetsPackageForm = { name: 'Package' };
    const body = JSON.stringify({ widgets_package: form });
    expect(JSON.parse(body).widgets_package.name).toBe('Package');
  });

  test('POST/PUT wrapper key pattern: widget_translation', () => {
    const form: WidgetTranslationForm = { locale: 'en' };
    const body = JSON.stringify({ widget_translation: form });
    expect(JSON.parse(body).widget_translation.locale).toBe('en');
  });

  test('POST/PUT wrapper key pattern: redemption_request', () => {
    const form: RedemptionRequestForm = { advocate_token: 'abc', amount: 50, currency_code: 'USD' };
    const body = JSON.stringify({ redemption_request: form });
    expect(JSON.parse(body).redemption_request.amount).toBe(50);
  });

  test('POST/PUT wrapper key pattern: variant', () => {
    const form: VariantForm = { title: 'Variant 1' };
    const body = JSON.stringify({ variant: form });
    expect(JSON.parse(body).variant.title).toBe('Variant 1');
  });

  test('POST/PUT wrapper key pattern: product', () => {
    const form: ProductForm = { name: 'Product' };
    const body = JSON.stringify({ product: form });
    expect(JSON.parse(body).product.name).toBe('Product');
  });

  test('POST/PUT wrapper key pattern: referral', () => {
    const form: ReferralForm = { url: 'http://example.com' };
    const body = JSON.stringify({ referral: form });
    expect(JSON.parse(body).referral.url).toBe('http://example.com');
  });

  test('POST/PUT wrapper key pattern: advocate_payment_method', () => {
    const form: PaymentMethodForm = { type: 'paypal' };
    const body = JSON.stringify({ advocate_payment_method: form });
    expect(JSON.parse(body).advocate_payment_method.type).toBe('paypal');
  });

  test('PATCH bare body: advocate patch has NO wrapper key', () => {
    const form: AdvocatePatchForm = { firstname: 'Updated' };
    const body = JSON.stringify(form);
    expect(JSON.parse(body).firstname).toBe('Updated');
    expect(JSON.parse(body).advocate).toBeUndefined();
  });

  test('PATCH bare body: bonus patch has NO wrapper key', () => {
    const form: BonusPatchForm = { status: 'paid' };
    const body = JSON.stringify(form);
    expect(JSON.parse(body).status).toBe('paid');
    expect(JSON.parse(body).bonus).toBeUndefined();
  });

  test('PATCH bare body: voucher patch has NO wrapper key', () => {
    const form: VoucherPatchForm = { status: 'used' };
    const body = JSON.stringify(form);
    expect(JSON.parse(body).status).toBe('used');
    expect(JSON.parse(body).voucher).toBeUndefined();
  });

  test('PATCH bare body: widget patch has NO wrapper key', () => {
    const form: WidgetPatchForm = { name: 'Updated' };
    const body = JSON.stringify(form);
    expect(JSON.parse(body).name).toBe('Updated');
    expect(JSON.parse(body).widget).toBeUndefined();
  });

  test('PATCH bare body: variant patch has NO wrapper key', () => {
    const form: VariantPatchForm = { title: 'Updated' };
    const body = JSON.stringify(form);
    expect(JSON.parse(body).title).toBe('Updated');
    expect(JSON.parse(body).variant).toBeUndefined();
  });

  test('PATCH bare body: redemption request patch has NO wrapper key', () => {
    const form: RedemptionRequestPatchForm = { status: 'approved' };
    const body = JSON.stringify(form);
    expect(JSON.parse(body).status).toBe('approved');
    expect(JSON.parse(body).redemption_request).toBeUndefined();
  });

  test('PATCH bare body: process redemption has NO wrapper key', () => {
    const form: ProcessRedemptionForm = { action: 'process' };
    const body = JSON.stringify(form);
    expect(JSON.parse(body).action).toBe('process');
  });

  test('PATCH bare body: widget translation patch has NO wrapper key', () => {
    const form: WidgetTranslationPatchForm = { locale: 'fr' };
    const body = JSON.stringify(form);
    expect(JSON.parse(body).locale).toBe('fr');
    expect(JSON.parse(body).widget_translation).toBeUndefined();
  });

  test('PATCH bare body: price form has NO wrapper key', () => {
    const form: PriceForm = { amount: 29.99 };
    const body = JSON.stringify(form);
    expect(JSON.parse(body).amount).toBe(29.99);
    expect(JSON.parse(body).price).toBeUndefined();
  });
});