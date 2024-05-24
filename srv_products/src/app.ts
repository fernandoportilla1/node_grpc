import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ msg: 'Hello world' });
});

app.get('/api', (req, res) => {
  res.json({ msg: 'Hello world' });
});

export default app;
