import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type TagUpdateInput = {
  address?: string | null;
  ambience?: string | null;
  isCorrect?: boolean | null;
  mainTag?: string | null;
  restaurant?: RestaurantWhereUniqueInput | null;
  restaurantName?: string | null;
  subTags?: string | null;
};
