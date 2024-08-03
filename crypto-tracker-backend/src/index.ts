import express from 'express';
import cors from 'cors';
import  { Client }  from "./interfaces";
import { clients } from './constants';

const app = express();
const port = 5000 || process.env.PORT;

app.use(cors());

require("./startup/db")();
require("./startup/cron")();

// SSE endpoint
app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const clientId = new Date().toISOString();
  const newClient: Client = { id: clientId, res };

  clients.push(newClient);

  req.on('close', () => {
    const index = clients.indexOf(newClient);

    clients.splice(index, 1);
  });

});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
