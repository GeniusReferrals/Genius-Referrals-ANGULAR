# Angular SDK Resource Contract Sheet
# SOP Step 1: Built before any code changes

## Existing Angular SDK state (AngularJS 1.x, APIMATIC generated 2017)

### Controllers (9)
- AccountsController: getAccount, getAccounts (MISSING: createAccount, updateAccount, deleteAccount)
- AdvocatesController: getAdvocates, getAdvocates (MISSING: putAdvocate, patchAdvocate, deleteAdvocate, deleteAdvocates bulk, share-links, payment-methods)
- AuthenticationsController: getAuthentication
- BonusesController: getBonuses, postBonus, forceBonus, deleteBonus (MISSING: getBonus, patchBonus, checkup, traces, tags)
- CampaignsController: getCampaigns, getCampaign
- RedemptionRequestsController: getRedemptionRequests, postRedemptionRequest, patchRedemptionRequest, patchRedemption (MISSING: getRedemptionRequest)
- ReferralsController: getReferrals, postReferral, deleteReferral (MISSING: getReferral, putReferral)
- ReportsController: getBonusesDailyGiven, getBonusesSummaryPerOrigin, getClickReferralShareDailyParticipation, getReferralsSummaryPerOrigin, getTopAdvocates, get1099TaxReport (MISSING: click-daily-participation split, referral-daily-participation, share-daily-participation, revenue; path names wrong)
- RootsController: getRoot

### Missing controllers (5)
- ProductsController
- TagsController
- VouchersController
- WidgetsPackagesController
- UtilitiesController

### Models (13)
Advocate, AdvocateForm, AdvocatePatchForm, Bonuses, BonusesForm, ForceBonuses, ForceBonusesForm, PaymentMethod, PaymentMethodForm, RedemptionRequest, RedemptionRequestForm, Referral, ReferralForm

### Missing models
Account, AccountForm, Bonus, BonusPatchForm, Product, ProductForm, Variant, VariantForm, VariantPatchForm, Price, PriceForm, PricePatchForm, ProcessRedemptionForm, Tag, TagForm, Voucher, VoucherForm, VoucherPatchForm, Widget, WidgetForm, WidgetPatchForm, WidgetTranslation, WidgetTranslationForm, WidgetTranslationPatchForm, WidgetsPackage, WidgetsPackageForm

## Full resource contract (against API inventory)

| # | Resource | Endpoints | Write Methods | Wrapper Key | Read Class | Form Class | Patch Class | Nested DTOs |
|---|---|---|---|---|---|---|---|---|
| 1 | Roots | GET / | none | n/a | n/a | n/a | n/a | n/a |
| 2 | Authentications | GET /test-authentication | none | n/a | n/a | n/a | n/a | n/a |
| 3 | Accounts | GET list, GET single, POST, PUT, DELETE | POST, PUT | account | Account | AccountForm | n/a | n/a |
| 4 | Advocates | GET list, GET single, POST, PUT, PATCH, DELETE single, DELETE bulk, GET share-links, GET/POST/PUT payment-methods, GET single payment-method | POST advocate, PUT advocate, PATCH (bare), POST payment_method, PUT payment_method | advocate / advocate_payment_method | Advocate | AdvocateForm | AdvocatePatchForm | PaymentMethod, PaymentMethodForm |
| 5 | Bonuses | GET list, GET single, POST, POST force, DELETE, PATCH, GET checkup, GET traces, GET trace, GET tags, POST tag, DELETE tag | POST bonus, POST force, PATCH (bare) | bonus / force_bonus | Bonus, Bonuses, ForceBonus, ForceBonuses | BonusesForm, ForceBonusesForm | BonusPatchForm | Tag, TagForm |
| 6 | Campaigns | GET list, GET single | none | n/a | n/a | n/a | n/a | n/a |
| 7 | Products | GET list, GET single, POST, PUT, DELETE, GET/POST variants, PATCH variant, DELETE variant, PATCH price | POST product, PUT product, POST variant, PATCH variant (bare), PATCH price (bare) | product / variant | Product, Variant, Price | ProductForm, VariantForm, PriceForm | VariantPatchForm, PricePatchForm | Variant[], Price |
| 8 | Redemption Requests | GET list, GET single, POST, PATCH update, PATCH redemption | POST redemption_request, PATCH update (bare), PATCH redemption (bare) | redemption_request | RedemptionRequest | RedemptionRequestForm | RedemptionRequestPatchForm | ProcessRedemptionForm |
| 9 | Referrals | GET list, GET single, POST, PUT, DELETE | POST referral, PUT referral | referral | Referral | ReferralForm | n/a | n/a |
| 10 | Reports | 9 GET endpoints | none | n/a | n/a | n/a | n/a | n/a |
| 11 | Tags | GET list, GET single, POST, PUT, DELETE | POST tag, PUT tag | tag | Tag | TagForm | n/a | n/a |
| 12 | Vouchers | GET list, GET single, POST, PATCH, DELETE, GET denominations | POST voucher, PATCH (bare) | voucher | Voucher | VoucherForm | VoucherPatchForm | n/a |
| 13 | Widgets Packages | package CRUD, widget CRUD+PATCH+PUT, translation CRUD+PATCH | POST/PUT widgets_package, POST/PUT widget, PATCH widget (bare), POST translation, PATCH translation (bare) | widgets_package / widget / widget_translation | WidgetsPackage, Widget, WidgetTranslation | WidgetsPackageForm, WidgetForm, WidgetTranslationForm | WidgetPatchForm, WidgetTranslationPatchForm | Widget[], WidgetTranslation[] |
| 14 | Utilities | 6 list + 5 single GET | none | n/a | n/a | n/a | n/a | n/a |

## Modernization approach
- Rewrite from AngularJS 1.x to framework-agnostic TypeScript library with Angular provider
- Use `fetch` API (no external HTTP dependency needed, works in browsers and Node 18+)
- TypeScript with strict typing for all models and forms
- Jest for unit tests (mock fetch), live smoke test with real API
- Docker verification with node:18-alpine
- Keep the same endpoint coverage as Node.js SDK (14 controllers, ~98 endpoints)