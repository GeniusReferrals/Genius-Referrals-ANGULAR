 export interface Advocate {
   firstname?: string;
   lastname?: string;
   name?: string;
   email?: string;
   code?: string;
   token?: string;
   short_token?: string;
   status?: string;
   status_date?: string;
   fraudulent?: boolean;
   is_email_confirmed?: boolean;
   can_refer?: boolean;
   payout_threshold?: number;
   claimed_balance?: number;
   unclaimed_balance?: number;
   total_bonuses?: number;
   total_referrals?: number;
   _currency?: string;
   _bonuses_redemption_method?: string;
   setting?: Record<string, unknown>;
   created?: string;
   updated?: string;
 }
