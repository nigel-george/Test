import { RestaurantPhoto as TRestaurantPhoto } from "../api/restaurantPhoto/RestaurantPhoto";

export const RESTAURANTPHOTO_TITLE_FIELD = "id";

export const RestaurantPhotoTitle = (record: TRestaurantPhoto): string => {
  return record.id?.toString() || String(record.id);
};
