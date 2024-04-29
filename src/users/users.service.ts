import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entity/todo.entity';
import { CreateUserInput } from './dto/inputs/create-todo.input';

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
  findaOne(id: number): User {
    const user = this.users.find((user) => user.id === id);
    if (!user)
      throw new NotFoundException(`The user with id ${id} doesn't exist`);
    return user;
  }
  create(createUserInput: CreateUserInput): User {
    const user = new User();
    user.name = createUserInput.name;
    user.lastName = createUserInput.lastName;
    user.id = Math.max(...this.users.map((user) => user.id), 0) + 1;
    this.users.push(user);
    return user;
  }
}
