import { JsonValue } from "type-fest";
import { UserFavoriteRestaurant } from "../userFavoriteRestaurant/UserFavoriteRestaurant";
import { UserInteraction } from "../userInteraction/UserInteraction";
import { UserSearchHistory } from "../userSearchHistory/UserSearchHistory";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userFavoriteRestaurants?: Array<UserFavoriteRestaurant>;
  userInteractions?: Array<UserInteraction>;
  username: string;
  userSearchHistories?: Array<UserSearchHistory>;
};
