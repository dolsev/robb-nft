import type { NextApiRequest, NextApiResponse } from 'next';

type TickerData = {
  symbol: string;
  priceChange: string;
  priceChangePercent: string;
  weightedAvgPrice: string;
  prevClosePrice: string;
  lastPrice: string;
  lastQty: string;
  bidPrice: string;
  askPrice: string;
  openPrice: string;
  highPrice: string;
  lowPrice: string;
  volume: string;
  quoteVolume: string;
  openTime: number;
  closeTime: number;
  firstId: number;
  lastId: number;
  count: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<TickerData[]>
) {
  try {
    const response = await fetch('https://api.binance.com/api/v3/ticker/24hr');
    const tickerData: TickerData[] = await response.json();
    const first20Items = tickerData.slice(0, 20);
    res.status(200).json(first20Items);
  } catch (error) {
    console.error(error);
  }
}
