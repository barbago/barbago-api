import { Router } from 'express';
import Container from 'typedi';

import { UserController } from './user.controller';

const userController = Container.get(UserController);

export const userRouter = Router();

/**
 * @api {get} /user Get all users
 *
 * @apiGroup Users
 * @apiName getAllUsers
 * @apiVersion 1.0.0
 */
userRouter.get('/', userController.getAllUsers);

/**
 * @api {get} /user/:id Get a user by id
 * @apiParam {String} id User ID
 *
 * @apiGroup Users
 * @apiName getUserByName
 * @apiVersion 1.0.0
*/
userRouter.get('/:id', userController.getUserByName);
