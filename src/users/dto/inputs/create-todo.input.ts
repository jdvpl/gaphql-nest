import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Name of user' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  name: string;
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  lastName: string;
}
