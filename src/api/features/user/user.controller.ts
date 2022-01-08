import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { Service } from 'typedi';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

import { UserService } from './user.service';

@Service()
export class UserController {
  constructor(private userService: UserService) {}

  public getAllUsers = asyncHandler(async (req: Request, res: Response) => {
    const users = this.userService.getUsers();
    res.json(users);
  });

  public getUser = asyncHandler(async (req: Request, res: Response) => {

  });

  public createUser = asyncHandler(async (req: Request, res: Response) => {
    const currentUser = req['currentUser'] as DecodedIdToken;
  });

  public deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const currentUser = req['currentUser'] as DecodedIdToken;
    
  });

  public updateUser = asyncHandler(async (req, res) => {
    // todo: extract isRole utils from middlewares, use here
    // if currentUser.uid === req.body.uid || req.role==admin
  });
}
