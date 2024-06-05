import { InputJsonValue } from "../../types";
import { UserFavoriteRestaurantUpdateManyWithoutUsersInput } from "./UserFavoriteRestaurantUpdateManyWithoutUsersInput";
import { UserInteractionUpdateManyWithoutUsersInput } from "./UserInteractionUpdateManyWithoutUsersInput";
import { UserSearchHistoryUpdateManyWithoutUsersInput } from "./UserSearchHistoryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userFavoriteRestaurants?: UserFavoriteRestaurantUpdateManyWithoutUsersInput;
  userInteractions?: UserInteractionUpdateManyWithoutUsersInput;
  username?: string;
  userSearchHistories?: UserSearchHistoryUpdateManyWithoutUsersInput;
};
