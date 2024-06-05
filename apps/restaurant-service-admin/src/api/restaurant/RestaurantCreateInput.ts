import { RestaurantPhotoCreateNestedManyWithoutRestaurantsInput } from "./RestaurantPhotoCreateNestedManyWithoutRestaurantsInput";
import { RestaurantWorkingHourCreateNestedManyWithoutRestaurantsInput } from "./RestaurantWorkingHourCreateNestedManyWithoutRestaurantsInput";
import { TagCreateNestedManyWithoutRestaurantsInput } from "./TagCreateNestedManyWithoutRestaurantsInput";
import { UserFavoriteRestaurantCreateNestedManyWithoutRestaurantsInput } from "./UserFavoriteRestaurantCreateNestedManyWithoutRestaurantsInput";
import { UserInteractionCreateNestedManyWithoutRestaurantsInput } from "./UserInteractionCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  affordability?: string | null;
  contact?: string | null;
  createDate?: Date | null;
  email?: string | null;
  fullAddress?: string | null;
  isRegistered?: boolean | null;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
  placeId?: string | null;
  rating?: number | null;
  restaurantPhotos?: RestaurantPhotoCreateNestedManyWithoutRestaurantsInput;
  restaurantWorkingHours?: RestaurantWorkingHourCreateNestedManyWithoutRestaurantsInput;
  tags?: TagCreateNestedManyWithoutRestaurantsInput;
  totalReviews?: number | null;
  updateDate?: Date | null;
  userFavoriteRestaurants?: UserFavoriteRestaurantCreateNestedManyWithoutRestaurantsInput;
  userInteractions?: UserInteractionCreateNestedManyWithoutRestaurantsInput;
};
