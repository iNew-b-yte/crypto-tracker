import { clients } from '../constants';

export const notifyClients = async (data: any) => {
    clients.forEach(client => client.res.write(`data: ${JSON.stringify(data)}\n\n`));
  };