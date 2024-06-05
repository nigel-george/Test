import { SortOrder } from "../../util/SortOrder";

export type UserInteractionOrderByInput = {
  createdAt?: SortOrder;
  deviceType?: SortOrder;
  id?: SortOrder;
  interactionTimestamp?: SortOrder;
  interactionType?: SortOrder;
  ipAddress?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  offerId?: SortOrder;
  restaurantId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
