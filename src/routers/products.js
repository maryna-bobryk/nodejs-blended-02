import { Router } from 'express';
import {
  getAllProductsController,
  getProductByIdController,
  createProductsController,
  deleteProductController,
  patchProductController,
} from '../controllers/products.js';

const productsRouter = Router();

productsRouter.get('/products', getAllProductsController);
productsRouter.get('/products/:productId', getProductByIdController);
productsRouter.post('/products', createProductsController);
productsRouter.patch('/products/:productId', patchProductController);
productsRouter.delete('/products/:productId', deleteProductController);
export default productsRouter;
