export interface TCoin {
  id: string;
  name: string;
  fullName: string;
  imageUrl: any;
  price: number;
  volume24hour: number;
}

export type TSelectedCoin = {
  name: string;
  price: number | null;
};
