// ----------------------------------------------------------------------

export type IShopItem = {
  id: string;
  name: string;
  description: string;
  logo: string;
  price: number;
  currency: string;
  period: string;
  showPopular: boolean;
  createdAt: Date | string | number;
};
