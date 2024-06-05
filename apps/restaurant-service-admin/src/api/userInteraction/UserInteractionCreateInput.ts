import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserInteractionCreateInput = {
  deviceType?: string | null;
  interactionTimestamp?: Date | null;
  interactionType?: "Option1" | null;
  ipAddress?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  offerId?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
