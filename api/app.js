// api/app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

// Экспортируем функцию для Serverless Function
module.exports = (req, res) => {
  app(req, res);
};