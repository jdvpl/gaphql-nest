import { Args, Float, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entity/todo.entity';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/inputs/create-todo.input';

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
  @Query(() => User, { name: 'findOneUser' })
  findOne(@Args('id', { type: () => Int }) id: number): User {
    return this.userService.findaOne(id);
  }

  @Mutation(() => User, { name: 'createUser' })
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
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
