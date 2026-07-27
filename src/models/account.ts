 export interface Account {
   name?: string;
   url?: string;
   is_active?: boolean;
   is_live?: boolean;
   created?: string;
   updated?: string;
   slug?: string;
   _currencies?: string[];
   _domains?: string[];
   _links?: Record<string, string>;
 }
