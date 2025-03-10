import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);

app.get('https://my-chat-backend-five.vercel.app/', (req: any, res: any) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3009, () => {
  console.log('server running at http://localhost:3009');
});