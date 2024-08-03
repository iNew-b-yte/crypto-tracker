import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { initializeSSE } from '../utils/sse';
import CryptoTable from '../components/CryptoTable';
import CoinSelector from '../components/CoinSelector';
import styles from '../styles/CryptoTable.module.css';
import homeStyles from '../styles/Home.module.css'

const Home: React.FC = () => {
  useEffect(() => {
    initializeSSE();
  }, []);

  return (
    <Provider store={store}>
      <div className={homeStyles.container}>
        <h3 className={styles.title}>Crypto Prices</h3>
        <CoinSelector />
        <CryptoTable />
      </div>
    </Provider>
  );
};

export default Home;
