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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RestaurantPhotoListRelationFilter } from "../../restaurantPhoto/base/RestaurantPhotoListRelationFilter";
import { RestaurantWorkingHourListRelationFilter } from "../../restaurantWorkingHour/base/RestaurantWorkingHourListRelationFilter";
import { TagListRelationFilter } from "../../tag/base/TagListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserFavoriteRestaurantListRelationFilter } from "../../userFavoriteRestaurant/base/UserFavoriteRestaurantListRelationFilter";
import { UserInteractionListRelationFilter } from "../../userInteraction/base/UserInteractionListRelationFilter";

@InputType()
class RestaurantWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  affordability?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  contact?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  createDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fullAddress?: StringNullableFilter;

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
  isRegistered?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  latitude?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  longitude?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  placeId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  rating?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RestaurantPhotoListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RestaurantPhotoListRelationFilter)
  @IsOptional()
  @Field(() => RestaurantPhotoListRelationFilter, {
    nullable: true,
  })
  restaurantPhotos?: RestaurantPhotoListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RestaurantWorkingHourListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RestaurantWorkingHourListRelationFilter)
  @IsOptional()
  @Field(() => RestaurantWorkingHourListRelationFilter, {
    nullable: true,
  })
  restaurantWorkingHours?: RestaurantWorkingHourListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TagListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TagListRelationFilter)
  @IsOptional()
  @Field(() => TagListRelationFilter, {
    nullable: true,
  })
  tags?: TagListRelationFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  totalReviews?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updateDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserFavoriteRestaurantListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserFavoriteRestaurantListRelationFilter)
  @IsOptional()
  @Field(() => UserFavoriteRestaurantListRelationFilter, {
    nullable: true,
  })
  userFavoriteRestaurants?: UserFavoriteRestaurantListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserInteractionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserInteractionListRelationFilter)
  @IsOptional()
  @Field(() => UserInteractionListRelationFilter, {
    nullable: true,
  })
  userInteractions?: UserInteractionListRelationFilter;
}

export { RestaurantWhereInput as RestaurantWhereInput };
