/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserFavoriteRestaurantWhereUniqueInput } from "../../userFavoriteRestaurant/base/UserFavoriteRestaurantWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserFavoriteRestaurantUpdateManyWithoutUsersInput {
  @Field(() => [UserFavoriteRestaurantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserFavoriteRestaurantWhereUniqueInput],
  })
  connect?: Array<UserFavoriteRestaurantWhereUniqueInput>;

  @Field(() => [UserFavoriteRestaurantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserFavoriteRestaurantWhereUniqueInput],
  })
  disconnect?: Array<UserFavoriteRestaurantWhereUniqueInput>;

  @Field(() => [UserFavoriteRestaurantWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserFavoriteRestaurantWhereUniqueInput],
  })
  set?: Array<UserFavoriteRestaurantWhereUniqueInput>;
}

export { UserFavoriteRestaurantUpdateManyWithoutUsersInput as UserFavoriteRestaurantUpdateManyWithoutUsersInput };
