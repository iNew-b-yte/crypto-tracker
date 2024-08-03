// Fetch coin prices
import axios from 'axios';
import CoinPrice from '../models/CoinPrice';
import { Prices } from '../interfaces';
import config from 'config';
import { coins } from '../constants';
import { notifyClients } from './notification.service';

const fetchCoinPrices = async (coinIds: string[]) => {
    try {
      const url: string = config.get("COINGECKO_API_URL");
      const apiKey: string = config.get("COINGECKO_API_KEY");

      const response = await axios.get(
        `${url}/simple/price`,
        {
          params: {
            ids: coinIds.join(','),
            vs_currencies: 'usd'
          },
          headers:{'x-cg-demo-api-key': apiKey},
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching coin prices:', error);
      throw error;
    }
  };
  
  // Save coin prices to MongoDB
  const saveCoinPrices = async (prices: Prices) => {
    const entries = Object.entries(prices).map(([coin, data]) => ({
      coin,
      price: data.usd,
      timestamp: new Date(),
    }));
  
    try {
      const result = await CoinPrice.insertMany(entries);
      console.log('Prices saved to MongoDB');
  
      const coinData = await CoinPrice.find().sort({timestamp: -1}).limit(100);
      notifyClients(coinData);
    } catch (error) {
      console.error('Error saving prices to MongoDB:', error);
    }
  };
  
  // Polling function
  export const pollCoinPrices = async () => {
    const coinIds = coins;
    try {
      const prices = await fetchCoinPrices(coinIds);
      await saveCoinPrices(prices);
    } catch (error) {
      console.error('Polling failed:', error);
    }
  };