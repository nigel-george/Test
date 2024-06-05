import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TagWhereInput = {
  address?: StringNullableFilter;
  ambience?: StringNullableFilter;
  id?: StringFilter;
  isCorrect?: BooleanNullableFilter;
  mainTag?: StringNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
  restaurantName?: StringNullableFilter;
  subTags?: StringNullableFilter;
};
