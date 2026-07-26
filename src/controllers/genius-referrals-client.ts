import { Configuration } from '../configuration';
import { GRClient } from '../gr-client';
import { RootsController } from './roots-controller';
import { AuthenticationsController } from './authentications-controller';
import { AccountsController } from './accounts-controller';
import { AdvocatesController } from './advocates-controller';
import { BonusesController } from './bonuses-controller';
import { CampaignsController } from './campaigns-controller';
import { ProductsController } from './products-controller';
import { RedemptionRequestsController } from './redemption-requests-controller';
import { ReferralsController } from './referrals-controller';
import { ReportsController } from './reports-controller';
import { TagsController } from './tags-controller';
import { VouchersController } from './vouchers-controller';
import { WidgetsPackagesController } from './widgets-packages-controller';
import { UtilitiesController } from './utilities-controller';

export class GeniusReferralsClient {
  readonly roots: RootsController;
  readonly authentications: AuthenticationsController;
  readonly accounts: AccountsController;
  readonly advocates: AdvocatesController;
  readonly bonuses: BonusesController;
  readonly campaigns: CampaignsController;
  readonly products: ProductsController;
  readonly redemptionRequests: RedemptionRequestsController;
  readonly referrals: ReferralsController;
  readonly reports: ReportsController;
  readonly tags: TagsController;
  readonly vouchers: VouchersController;
  readonly widgetsPackages: WidgetsPackagesController;
  readonly utilities: UtilitiesController;

  constructor(authToken: string, baseUrl?: string) {
    const config = new Configuration();
    config.authToken = authToken;
    if (baseUrl) config.baseUrl = baseUrl;
    const client = new GRClient(config);
    this.roots = new RootsController(client);
    this.authentications = new AuthenticationsController(client);
    this.accounts = new AccountsController(client);
    this.advocates = new AdvocatesController(client);
    this.bonuses = new BonusesController(client);
    this.campaigns = new CampaignsController(client);
    this.products = new ProductsController(client);
    this.redemptionRequests = new RedemptionRequestsController(client);
    this.referrals = new ReferralsController(client);
    this.reports = new ReportsController(client);
    this.tags = new TagsController(client);
    this.vouchers = new VouchersController(client);
    this.widgetsPackages = new WidgetsPackagesController(client);
    this.utilities = new UtilitiesController(client);
  }
}