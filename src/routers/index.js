import { Router } from 'express';
import productsRouter from './products.js';
import userRouter from './user.js';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', userRouter);

export default router;
