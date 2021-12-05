import asyncHandler from 'express-async-handler';
import { Service } from 'typedi';

import { UserService } from './user.service';

@Service()
export class UserController {
  constructor(private readonly userService: UserService) {}

  public getAllUsers = asyncHandler(async (req, res) => {
    const users = await this.userService.getUsers();
    if (!users) res.status(204);
    res.json(users);
  });

  public getUserByName = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await this.userService.getUser(id);
    if (!user) res.status(204)
    res.json(user);
  });
}
