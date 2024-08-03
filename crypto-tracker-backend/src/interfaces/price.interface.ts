
interface PriceData {
    usd: number;
}

export interface Prices {
    [coin: string]: PriceData;
  }