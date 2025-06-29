import Joi from 'joi';

export const createProductsSchema = Joi.object({
  name: Joi.string().min(2).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least {#limit} characters long',
    'string.max': 'Name must be at most {#limit} characters long',
    'any.required': 'Name is required',
  }),
  price: Joi.number().positive().precision(2).required().messages({
    'number.base': '"price" must be a number',
    'number.positive': '"price" must be greater than 0',
    'number.precision': '"price" must have at most 2 decimal places',
    'any.required': '"price" is required',
  }),
  category: Joi.string()
    .valid('books', 'electronics', 'clothing', 'other')
    .messages({
      'any.only':
        'Category must be one of: books, electronics, clothing, other',
      'string.base': 'Category must be a string',
    }),
  description: Joi.string().messages({
    'string.base': 'Description must be a string',
  }),
});

export const updateProductsSchema = Joi.object({
  name: Joi.string().min(2).max(20).messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least {#limit} characters long',
    'string.max': 'Name must be at most {#limit} characters long',
  }),
  price: Joi.number().positive().precision(2).messages({
    'number.base': '"price" must be a number',
    'number.positive': '"price" must be greater than 0',
    'number.precision': '"price" must have at most 2 decimal places',
  }),
  category: Joi.string()
    .valid('books', 'electronics', 'clothing', 'other')
    .messages({
      'any.only':
        'Category must be one of: books, electronics, clothing, other',
      'string.base': 'Category must be a string',
    }),
  description: Joi.string().messages({
    'string.base': 'Description must be a string',
  }),
});
