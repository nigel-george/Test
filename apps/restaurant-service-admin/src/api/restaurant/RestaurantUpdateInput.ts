import { RestaurantPhotoUpdateManyWithoutRestaurantsInput } from "./RestaurantPhotoUpdateManyWithoutRestaurantsInput";
import { RestaurantWorkingHourUpdateManyWithoutRestaurantsInput } from "./RestaurantWorkingHourUpdateManyWithoutRestaurantsInput";
import { TagUpdateManyWithoutRestaurantsInput } from "./TagUpdateManyWithoutRestaurantsInput";
import { UserFavoriteRestaurantUpdateManyWithoutRestaurantsInput } from "./UserFavoriteRestaurantUpdateManyWithoutRestaurantsInput";
import { UserInteractionUpdateManyWithoutRestaurantsInput } from "./UserInteractionUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
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
  restaurantPhotos?: RestaurantPhotoUpdateManyWithoutRestaurantsInput;
  restaurantWorkingHours?: RestaurantWorkingHourUpdateManyWithoutRestaurantsInput;
  tags?: TagUpdateManyWithoutRestaurantsInput;
  totalReviews?: number | null;
  updateDate?: Date | null;
  userFavoriteRestaurants?: UserFavoriteRestaurantUpdateManyWithoutRestaurantsInput;
  userInteractions?: UserInteractionUpdateManyWithoutRestaurantsInput;
};
