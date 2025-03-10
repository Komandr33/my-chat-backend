import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

// Экспортируем приложение как Serverless Function

export default app;