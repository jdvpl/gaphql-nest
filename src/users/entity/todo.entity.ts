import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => String)
  lastName: string;
  @Field(() => Boolean)
  verified?: boolean = false;
  @Field(() => Date)
  date?: Date = new Date();
}
