import { Service } from 'typedi';

import { User } from './user.model';

@Service()
export class UserRepository {
  private readonly users: User[] = [
    { name: 'aaaaaaa', email: 'aaaaaaa' },
    { name: 'bbbbbbb', email: 'bbbbbbb' },
    { name: 'ccccccc', email: 'ccccccc' },
    { name: 'ddddddd', email: 'ddddddd' },
    { name: 'eeeeeee', email: 'eeeeeee' },
    { name: 'fffffff', email: 'fffffff' },
  ];

  public getAllUsers = async (): Promise<User[]> => this.users;

  public getUserByName = async (name: string): Promise<User> =>
    this.users.filter((user) => user.name === name)[0];
}
