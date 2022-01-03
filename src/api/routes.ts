import { Router } from "express";

import { userRouter } from "./features/user";

export const router = Router();

router.use('/user', userRouter);
