import * as dotenv from 'dotenv';
import app from './src/app';

// Config .env
dotenv.config();
const port = process.env.PORT || process.argv[3] || 8080;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
