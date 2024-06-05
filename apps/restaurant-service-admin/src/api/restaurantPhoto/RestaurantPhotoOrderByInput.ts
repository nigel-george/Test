import { SortOrder } from "../../util/SortOrder";

export type RestaurantPhotoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  photoUrl?: SortOrder;
  restaurantId?: SortOrder;
  updatedAt?: SortOrder;
};
