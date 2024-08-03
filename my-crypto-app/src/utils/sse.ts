import store from '../store';
import { addCryptoData } from '../store/cryptoSlice';

export const initializeSSE = () => {
  const eventSource = new EventSource('http://localhost:5000/events');

  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);

    store.dispatch(addCryptoData(data));
  };

  eventSource.onerror = (error) => {
    console.error('SSE error:', error);
    eventSource.close();
  };
};
