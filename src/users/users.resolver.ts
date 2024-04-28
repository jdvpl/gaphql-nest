import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from './entity/todo.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}
  @Query(() => [User], {
    description: 'Retorna Users los Users',
    name: 'getAllUsers',
  })
  getAllUsers(): User[] {
    return this.userService.findAll();
  }
  @Query(() => Float, { name: 'findOneUser' })
  findOne(): number {
    return Math.floor(Math.random() * 100);
  }

  @Query(() => Float, { name: 'updateUser' })
  updateUser(
    @Args('to', { nullable: true, type: () => Int }) to: number = 20,
  ): number {
    return Math.floor(Math.random() * to);
  }
  @Query(() => Float, { name: 'removeUser' })
  removeUser(
    @Args('to', { nullable: true, type: () => Int }) to: number = 20,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
