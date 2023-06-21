// const express = require('express');
import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello, World!');
});

app.get('/products/:product/:variant', (req: Request, res: Response) => {
  // would call database w/ info such as availability, sizes, price, details, model info, etc.

  return res.json({ product: req.params.product, variant: req.params.variant });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
