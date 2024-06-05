import { UserFavoriteRestaurantWhereInput } from "./UserFavoriteRestaurantWhereInput";
import { UserFavoriteRestaurantOrderByInput } from "./UserFavoriteRestaurantOrderByInput";

export type UserFavoriteRestaurantFindManyArgs = {
  where?: UserFavoriteRestaurantWhereInput;
  orderBy?: Array<UserFavoriteRestaurantOrderByInput>;
  skip?: number;
  take?: number;
};
