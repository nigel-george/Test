import { RestaurantWorkingHourWhereInput } from "./RestaurantWorkingHourWhereInput";
import { RestaurantWorkingHourOrderByInput } from "./RestaurantWorkingHourOrderByInput";

export type RestaurantWorkingHourFindManyArgs = {
  where?: RestaurantWorkingHourWhereInput;
  orderBy?: Array<RestaurantWorkingHourOrderByInput>;
  skip?: number;
  take?: number;
};
