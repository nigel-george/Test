import { SortOrder } from "../../util/SortOrder";

export type TagOrderByInput = {
  address?: SortOrder;
  ambience?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isCorrect?: SortOrder;
  mainTag?: SortOrder;
  restaurantId?: SortOrder;
  restaurantName?: SortOrder;
  subTags?: SortOrder;
  updatedAt?: SortOrder;
};
