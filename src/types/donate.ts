export interface DonatePackage {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  privileges: string[];
  popular?: boolean;
  color: string;
}

export interface DonateItem {
  id: number;
  name: string;
  price: number;
  color: string;
}
