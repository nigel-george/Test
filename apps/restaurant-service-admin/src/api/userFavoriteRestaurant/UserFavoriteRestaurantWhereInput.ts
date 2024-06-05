import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserFavoriteRestaurantWhereInput = {
  createDate?: DateTimeNullableFilter;
  id?: StringFilter;
  restaurant?: RestaurantWhereUniqueInput;
  updateDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
