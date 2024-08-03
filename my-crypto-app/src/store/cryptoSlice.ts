import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CryptoData {
  _id: string;
  coin: string;
  price: number;
  timestamp: string;
}

interface CryptoState {
  data: CryptoData[];
  selectedCoin: string;
  image: string;
}

const initialState: CryptoState = {
  data: [],
  selectedCoin: 'bitcoin',
  image: '/static/images/bitcoin.png',
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    addCryptoData: (state, action: PayloadAction<CryptoData[]>) => {
      state.data = action.payload;
    },
    setSelectedCoin: (state, action: PayloadAction<string>) => {
      state.selectedCoin = action.payload;
    },

    setSelectedCoinImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const { addCryptoData, setSelectedCoin, setSelectedCoinImage } = cryptoSlice.actions;

export default cryptoSlice.reducer;
