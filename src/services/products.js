import { ProductsCollection } from '../db/models/products.js';

export const getAllProducts = async (filter = {}) => {
  const { category, minPrice, maxPrice } = filter;

  const productsQuery = ProductsCollection.find();

  if (category) {
    productsQuery.where('category').equals(category);
  }

  if (minPrice !== undefined) {
    productsQuery.where('price').gte(minPrice);
  }

  if (maxPrice !== undefined) {
    productsQuery.where('price').lte(maxPrice);
  }

  const products = await productsQuery.exec();
  return { data: products };
};

export const getProductById = async (productId) => {
  const product = await ProductsCollection.findById(productId);
  return product;
};

export const createProduct = async (payload) => {
  const product = await ProductsCollection.create(payload);
  return product;
};

export const updateProduct = async (productId, payload, options = {}) => {
  const product = await ProductsCollection.findOneAndUpdate(
    { _id: productId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!product || !product.value) return null;

  return { product: product.value };
};

export const deleteProductById = async (productId) => {
  const product = await ProductsCollection.findByIdAndDelete(productId);
  return product;
};
