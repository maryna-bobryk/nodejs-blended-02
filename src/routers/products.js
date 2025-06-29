import { Router } from 'express';
import {
  getAllProductsController,
  getProductByIdController,
  createProductsController,
  deleteProductController,
  patchProductController,
} from '../controllers/products.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { ProductsCollection } from '../db/models/products.js';
import {
  createProductsSchema,
  updateProductsSchema,
} from '../validation/products.js';

const productsRouter = Router();

productsRouter.get('/products', getAllProductsController);
productsRouter.get('/products/:productId', isValidId, getProductByIdController);
productsRouter.post(
  '/products',
  validateBody(createProductsSchema),
  createProductsController,
);
productsRouter.patch(
  '/products/:productId',
  validateBody(updateProductsSchema),
  isValidId,
  patchProductController,
);
productsRouter.delete(
  '/products/:productId',
  isValidId,
  deleteProductController,
);
export default productsRouter;
