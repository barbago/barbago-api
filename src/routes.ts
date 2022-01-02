import { Router } from "express";

import { authRouter } from "./features/auth";
import { userRouter } from "./features/user";

export const router = Router();

router.use('/user', userRouter);
router.use('/auth', authRouter)
