import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TodosResolver {
  @Query(() => String, { description: 'Retorna un string', name: 'todoMethod' })
  todo(): string {
    return 'Hola chinito';
  }
  @Query(() => Float, { name: 'randonNumber' })
  getRandonNumber(): number {
    return Math.floor(Math.random() * 100);
  }

  @Query(() => Float, { name: 'getRandonNumberFromZero' })
  getNumber(
    @Args('to', { nullable: true, type: () => Int }) to: number = 20,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
