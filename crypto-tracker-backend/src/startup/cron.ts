import cron from 'node-cron';
import { pollCoinPrices } from '../services/polling.service';

module.exports = function() {
    cron.schedule('* * * * *', pollCoinPrices);
}
