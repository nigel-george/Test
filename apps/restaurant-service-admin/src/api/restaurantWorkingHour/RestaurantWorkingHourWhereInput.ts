import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantWorkingHourWhereInput = {
  closingTime?: DateTimeNullableFilter;
  dayOfWeek?: "Option1";
  id?: StringFilter;
  isClosed?: BooleanNullableFilter;
  openingTime?: DateTimeNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
};
