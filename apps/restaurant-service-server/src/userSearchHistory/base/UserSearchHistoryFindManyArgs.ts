/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserSearchHistoryWhereInput } from "./UserSearchHistoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UserSearchHistoryOrderByInput } from "./UserSearchHistoryOrderByInput";

@ArgsType()
class UserSearchHistoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserSearchHistoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserSearchHistoryWhereInput, { nullable: true })
  @Type(() => UserSearchHistoryWhereInput)
  where?: UserSearchHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: [UserSearchHistoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserSearchHistoryOrderByInput], { nullable: true })
  @Type(() => UserSearchHistoryOrderByInput)
  orderBy?: Array<UserSearchHistoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserSearchHistoryFindManyArgs as UserSearchHistoryFindManyArgs };
