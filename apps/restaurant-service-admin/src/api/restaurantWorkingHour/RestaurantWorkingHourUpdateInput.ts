import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantWorkingHourUpdateInput = {
  closingTime?: Date | null;
  dayOfWeek?: "Option1" | null;
  isClosed?: boolean | null;
  openingTime?: Date | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
