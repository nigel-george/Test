import { InputJsonValue } from "../../types";
import { UserFavoriteRestaurantCreateNestedManyWithoutUsersInput } from "./UserFavoriteRestaurantCreateNestedManyWithoutUsersInput";
import { UserInteractionCreateNestedManyWithoutUsersInput } from "./UserInteractionCreateNestedManyWithoutUsersInput";
import { UserSearchHistoryCreateNestedManyWithoutUsersInput } from "./UserSearchHistoryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  userFavoriteRestaurants?: UserFavoriteRestaurantCreateNestedManyWithoutUsersInput;
  userInteractions?: UserInteractionCreateNestedManyWithoutUsersInput;
  username: string;
  userSearchHistories?: UserSearchHistoryCreateNestedManyWithoutUsersInput;
};
