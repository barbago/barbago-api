import { Router } from 'express';
import Container from 'typedi';

import { UserController } from './user.controller';
import { isAdmin, isAuthenticated } from '../../middlewares';

const userController = Container.get(UserController);

export const userRouter = Router();

/**
 * @api {get} /user Get all users
 * // Todo: implement paging logic with query params
 * 
 * @apiGroup Users
 * @apiName getAllUsers
 * @apiVersion 1.0.0
 * @apiPermission Administrators
 *
 * @apiSuccess {Array} users Array of Users
 * @apiSuccessExample {json} Success response:
 * HTTPS 200 OK
 * [
 *     {
 *         "name": "aaaaaaa"
 *     }
 * ]
 *
 * @apiUse BearerAuth
 * @apiUse UnauthorizedError
 * @apiUse ForbiddenError
 */
userRouter.get('/', userController.getAllUsers);

/**
 * @api {get} /user/:uid Get a user by its uid
 * @apiParam {String} id User ID
 *
 * @apiGroup Users
 * @apiName getUserByName
 * @apiVersion 1.0.0
 *
 * @apiUse BearerAuth
 */
userRouter.get('/:id', userController.getUser);

/**
 * @api {delete} /user/:uid Delete a user by its uid
 * @apiParam {String} id User ID
 *
 * @apiGroup Users
 * @apiName deleteUserById
 * @apiVersion 1.0.0
 * @apiPermission Admin
 *
 * @apiUse BearerAuth
 */
userRouter.delete('/:id', [isAdmin], userController.deleteUser);

/**
 * @api {post} /user/ Create a new user
 * @apiBody {String} name
 * @apiBody {String} email
 *
 * @apiGroup Users
 * @apiName createUser
 * @apiVersion 1.0.0
 * @apiPermission Authenticated Users
 * 
 * @apiUse BearerAuth
 * @apiUse UnauthorizedError
 */
userRouter.post('/', [isAuthenticated], userController.createUser);

/**
 * @api {put} /user/:id Update an existing user
 * @apiBody {String} name
 * @apiBody {String} email
 *
 * @apiGroup Users
 * @apiName updateUser
 * @apiVersion 1.0.0
 *
 * @apiUse BearerAuth
 */
userRouter.put('/:id', [isAuthenticated], userController.updateUser);
