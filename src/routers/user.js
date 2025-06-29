import { Router } from 'express';
import {
  loginUserController,
  logoutUserController,
  registerUserController,
} from '../controllers/user.js';
import { validateBody } from '../middlewares/validateBody.js';
import { loginUserSchema, registerUserSchema } from '../validation/user.js';

const userRouter = Router();

userRouter.post(
  '/register',
  validateBody(registerUserSchema),
  registerUserController,
);

userRouter.post('/login', validateBody(loginUserSchema), loginUserController);
userRouter.post('/logout', logoutUserController);

export default userRouter;
