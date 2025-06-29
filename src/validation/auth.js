import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(2).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least {#limit} characters long',
    'string.max': 'Name must be at most {#limit} characters long',
    'any.required': 'Name is required',
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'org', 'de'] },
    })
    .messages({
      'string.email': 'Email must be a valid email address',
      'string.base': 'Email must be a string',
      'string.empty': 'Email cannot be empty',
      'any.required': 'Email is required',
    }),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$'))
    .required()
    .messages({
      'string.pattern.base':
        'Password must contain uppercase, lowercase, and numbers',
      'string.min': 'Password must be at least {#limit} characters long',
      'any.required': 'Password is required',
    }),
});
