import { Service } from 'typedi';

import { UserRepository } from './user.repository';

@Service()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  public getUsers = async () => {
    const users = await this.userRepository.getAllUsers();
    return users;
  };

  public getUser = async (name: string) => {
    const user = await this.userRepository.getUserByName(name);
    return user;
  };
}
