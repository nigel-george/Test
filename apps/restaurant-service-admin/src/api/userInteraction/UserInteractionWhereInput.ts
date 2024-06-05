import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserInteractionWhereInput = {
  deviceType?: StringNullableFilter;
  id?: StringFilter;
  interactionTimestamp?: DateTimeNullableFilter;
  interactionType?: "Option1";
  ipAddress?: StringNullableFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  offerId?: IntNullableFilter;
  restaurant?: RestaurantWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
