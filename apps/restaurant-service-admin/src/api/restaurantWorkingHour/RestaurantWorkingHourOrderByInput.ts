import { SortOrder } from "../../util/SortOrder";

export type RestaurantWorkingHourOrderByInput = {
  closingTime?: SortOrder;
  createdAt?: SortOrder;
  dayOfWeek?: SortOrder;
  id?: SortOrder;
  isClosed?: SortOrder;
  openingTime?: SortOrder;
  restaurantId?: SortOrder;
  updatedAt?: SortOrder;
};
