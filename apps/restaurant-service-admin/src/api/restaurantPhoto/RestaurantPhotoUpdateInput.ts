import { InputJsonValue } from "../../types";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantPhotoUpdateInput = {
  photoUrl?: InputJsonValue;
  restaurant?: RestaurantWhereUniqueInput | null;
};
