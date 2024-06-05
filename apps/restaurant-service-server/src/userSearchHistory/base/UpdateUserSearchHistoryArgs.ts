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
import { UserSearchHistoryWhereUniqueInput } from "./UserSearchHistoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserSearchHistoryUpdateInput } from "./UserSearchHistoryUpdateInput";

@ArgsType()
class UpdateUserSearchHistoryArgs {
  @ApiProperty({
    required: true,
    type: () => UserSearchHistoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserSearchHistoryWhereUniqueInput)
  @Field(() => UserSearchHistoryWhereUniqueInput, { nullable: false })
  where!: UserSearchHistoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserSearchHistoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserSearchHistoryUpdateInput)
  @Field(() => UserSearchHistoryUpdateInput, { nullable: false })
  data!: UserSearchHistoryUpdateInput;
}

export { UpdateUserSearchHistoryArgs as UpdateUserSearchHistoryArgs };