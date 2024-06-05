import { RestaurantPhotoWhereInput } from "./RestaurantPhotoWhereInput";
import { RestaurantPhotoOrderByInput } from "./RestaurantPhotoOrderByInput";

export type RestaurantPhotoFindManyArgs = {
  where?: RestaurantPhotoWhereInput;
  orderBy?: Array<RestaurantPhotoOrderByInput>;
  skip?: number;
  take?: number;
};
