import { Injectable } from '@nestjs/common';
import { User } from './entity/todo.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Juan Daniel',
      lastName: 'suarez',
      verified: false,
      date: new Date(),
    },
    {
      id: 2,
      name: 'Saitama',
      lastName: 'suarez',
      verified: true,
      date: new Date(),
    },
    {
      id: 3,
      name: 'Jiren',
      lastName: 'suarez',
      verified: true,
      date: new Date(),
    },
    {
      id: 4,
      name: 'Kakaroto',
      lastName: 'suarez',
      verified: false,
      date: new Date(),
    },
    {
      id: 5,
      name: 'Vegeta',
      lastName: 'suarez',
      verified: false,
      date: new Date(),
    },
  ];
  findAll(): User[] {
    return this.users;
  }
}
