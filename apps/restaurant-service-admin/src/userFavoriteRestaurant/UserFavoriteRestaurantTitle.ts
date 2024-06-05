import { UserFavoriteRestaurant as TUserFavoriteRestaurant } from "../api/userFavoriteRestaurant/UserFavoriteRestaurant";

export const USERFAVORITERESTAURANT_TITLE_FIELD = "id";

export const UserFavoriteRestaurantTitle = (
  record: TUserFavoriteRestaurant
): string => {
  return record.id?.toString() || String(record.id);
};
