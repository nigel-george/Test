import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type RestaurantPhotoWhereInput = {
  id?: StringFilter;
  photoUrl?: JsonFilter;
  restaurant?: RestaurantWhereUniqueInput;
};
