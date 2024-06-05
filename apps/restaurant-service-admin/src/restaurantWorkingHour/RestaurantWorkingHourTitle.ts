import { RestaurantWorkingHour as TRestaurantWorkingHour } from "../api/restaurantWorkingHour/RestaurantWorkingHour";

export const RESTAURANTWORKINGHOUR_TITLE_FIELD = "id";

export const RestaurantWorkingHourTitle = (
  record: TRestaurantWorkingHour
): string => {
  return record.id?.toString() || String(record.id);
};
