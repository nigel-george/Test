/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumRestaurantWorkingHourDayOfWeek } from "./EnumRestaurantWorkingHourDayOfWeek";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { RestaurantWhereUniqueInput } from "../../restaurant/base/RestaurantWhereUniqueInput";

@InputType()
class RestaurantWorkingHourWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  closingTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumRestaurantWorkingHourDayOfWeek,
  })
  @IsEnum(EnumRestaurantWorkingHourDayOfWeek)
  @IsOptional()
  @Field(() => EnumRestaurantWorkingHourDayOfWeek, {
    nullable: true,
  })
  dayOfWeek?: "Option1";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  isClosed?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  openingTime?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RestaurantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RestaurantWhereUniqueInput)
  @IsOptional()
  @Field(() => RestaurantWhereUniqueInput, {
    nullable: true,
  })
  restaurant?: RestaurantWhereUniqueInput;
}

export { RestaurantWorkingHourWhereInput as RestaurantWorkingHourWhereInput };