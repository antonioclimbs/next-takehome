// const express = require('express');
import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
