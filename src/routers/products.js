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
import {
  createProductsSchema,
  updateProductsSchema,
} from '../validation/products.js';

const productsRouter = Router();

productsRouter.get('/', getAllProductsController);
productsRouter.get('/:productId', isValidId, getProductByIdController);
productsRouter.post(
  '/',
  validateBody(createProductsSchema),
  createProductsController,
);
productsRouter.patch(
  '/:productId',
  validateBody(updateProductsSchema),
  isValidId,
  patchProductController,
);
productsRouter.delete('/:productId', isValidId, deleteProductController);
export default productsRouter;
