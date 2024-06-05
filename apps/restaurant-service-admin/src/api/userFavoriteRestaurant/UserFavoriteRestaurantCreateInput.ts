import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserFavoriteRestaurantCreateInput = {
  createDate?: Date | null;
  restaurant?: RestaurantWhereUniqueInput | null;
  updateDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
