export interface EmailContent {
  from: string;
  subject: string;
  title: string;
  featuredUpdate: string;
  specialOffer: string;
  statistics: string[];
  year: string;
  companyName: string;
}

export type DeviceType = "desktop" | "tablet" | "mobile"; 