import mongoose, { Document, Schema } from 'mongoose';

interface ICoinPrice extends Document {
  coin: string;
  price: number;
  timestamp: Date;
}

const CoinPriceSchema: Schema = new Schema({
  coin: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const CoinPrice = mongoose.model<ICoinPrice>('CoinPrice', CoinPriceSchema);


export default CoinPrice;
