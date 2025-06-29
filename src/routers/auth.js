import { Router } from 'express';
import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema } from '../validation/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  registerUserController,
  validateBody(registerUserSchema),
);

export default authRouter;
