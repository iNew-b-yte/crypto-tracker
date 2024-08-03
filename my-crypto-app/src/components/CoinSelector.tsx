import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCoin, setSelectedCoinImage } from '../store/cryptoSlice';
import { RootState } from '../store';
import styles from '../styles/CoinSelector.module.css';
// import icon from "../static/images/binancecoin.png"

const CoinSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const selectedCoin = useSelector((state: RootState) => state.crypto.selectedCoin);
  const coins = ['bitcoin', 'ethereum', 'litecoin', 'ripple', 'binancecoin'];

  const handleCoinChange = async (coin: string) => {
    dispatch(setSelectedCoin(coin));
    const imgSrc = `/static/images/${coin}.png`;
    console.log(imgSrc);
    
    dispatch(setSelectedCoinImage(imgSrc));
    setIsOpen(false);
  };

//   const getCoinImage = async(coinId: string) => {
//     const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}`);
//     // const response = await axios.get(
//     //     `${url}/simple/price`,
//     //     {
//     //       params: {
//     //         ids: coinIds.join(','),
//     //         vs_currencies: 'usd'
//     //       },
//     //       headers:{'x-cg-demo-api-key': apiKey},
//     //     },
//     //   );
//     const data = await response.json();
//     if (data && data.length > 0) {
//         return data[0].image;
//     } else {
//         throw new Error('Coin not found');
//     }
// }

  return (
    <div className={styles.selectorContainer}>
      <button className={styles.selectedCoinButton}>
        Selected Coin: {selectedCoin} 
      </button>
      {isOpen && (
        <div className={`${styles.modalOverlay} ${styles.modalShow}`}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <div className={styles.coinButtonsContainer}>
              {coins.map((coin) => (
                <button
                  key={coin}
                  className={styles.coinButton}
                  onClick={() => handleCoinChange(coin)}
                >
                  {coin}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <button className={styles.button} onClick={() => setIsOpen(true)}>
        Select Coin
      </button>
    </div>
  );
};

export default CoinSelector;
