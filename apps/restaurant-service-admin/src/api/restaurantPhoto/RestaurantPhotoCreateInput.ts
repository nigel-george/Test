import { InputJsonValue } from "../../types";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantPhotoCreateInput = {
  photoUrl?: InputJsonValue;
  restaurant?: RestaurantWhereUniqueInput | null;
};
