import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserFavoriteRestaurantListRelationFilter } from "../userFavoriteRestaurant/UserFavoriteRestaurantListRelationFilter";
import { UserInteractionListRelationFilter } from "../userInteraction/UserInteractionListRelationFilter";
import { UserSearchHistoryListRelationFilter } from "../userSearchHistory/UserSearchHistoryListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userFavoriteRestaurants?: UserFavoriteRestaurantListRelationFilter;
  userInteractions?: UserInteractionListRelationFilter;
  username?: StringFilter;
  userSearchHistories?: UserSearchHistoryListRelationFilter;
};
