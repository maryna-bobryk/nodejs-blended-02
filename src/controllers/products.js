import createHttpError from 'http-errors';
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../services/products.js';
import mongoose from 'mongoose';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllProductsController = async (req, res, next) => {
  const filter = parseFilterParams(req.query);

  const products = await getAllProducts(filter);
  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res, next) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw createHttpError(400, 'Invalid product ID');
  }

  const product = await getProductById(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const createProductsController = async (req, res, next) => {
  const { name, price } = req.body;
  if (!name || typeof price !== 'number') {
    throw createHttpError(400, 'Name and price are required and must be valid');
  }
  const product = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const patchProductController = async (req, res, next) => {
  const { productId } = req.params;
  const result = await updateProduct(productId, req.body);
  if (!result) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: result,
  });
};

export const deleteProductController = async (req, res, next) => {
  const { productId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw createHttpError(400, 'Invalid product ID');
  }
  const product = await deleteProductById(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(204).send();
};
