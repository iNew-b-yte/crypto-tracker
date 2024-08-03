import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import styles from '../styles/CryptoTable.module.css';
import Image from 'next/image';

const CryptoTable: React.FC = () => {
  const cryptoData = useSelector((state: RootState) => state.crypto.data);
  const selectedCoin = useSelector((state: RootState) => state.crypto.selectedCoin);
  const selectedCoinImage = useSelector((state: RootState) => state.crypto.image);

  const filteredData = cryptoData
    .filter((data) => data.coin === selectedCoin)
    .slice(0, 20);

  return (
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((entry) => (
              <tr key={entry._id} className={styles.tableRow}>
                <td><Image className={styles.coinImage} src={selectedCoinImage} alt="coin-image" width={20} height={20} /></td>
                <td>{entry.price}</td>
                <td>{new Date(entry.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default CryptoTable;
