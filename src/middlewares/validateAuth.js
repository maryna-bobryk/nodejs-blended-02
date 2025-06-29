import createHttpError from 'http-errors';

export const validateAuth = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (err) {
    const error = createHttpError(400, 'Validation failed', {
      errors: err?.details || [{ message: err.message }],
    });
    next(error);
  }
};
