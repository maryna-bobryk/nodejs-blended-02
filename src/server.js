import express from 'express';
import cors from 'cors';

import { env } from './utils/env.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import productsRouter from './routers/products.js';

const PORT = Number(env('PORT', '4000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res) => {
    res.status(200).json({
      message: `Server is live on port ${PORT}. Use /products to get all available products or /products/:productId to get a specific product.`,
    });
  });

  app.use(productsRouter);
  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
