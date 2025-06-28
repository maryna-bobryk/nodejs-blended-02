import { isHttpError } from 'http-errors';
import { MongooseError } from 'mongoose';

export const errorHandler = (err, req, res, next) => {
  if (isHttpError(err)) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
      data: err.message,
    });
  }
  console.error(err);

  return res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message || 'Unknown error',
  });
};
