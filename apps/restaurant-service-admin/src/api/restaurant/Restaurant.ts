import { RestaurantPhoto } from "../restaurantPhoto/RestaurantPhoto";
import { RestaurantWorkingHour } from "../restaurantWorkingHour/RestaurantWorkingHour";
import { Tag } from "../tag/Tag";
import { UserFavoriteRestaurant } from "../userFavoriteRestaurant/UserFavoriteRestaurant";
import { UserInteraction } from "../userInteraction/UserInteraction";

export type Restaurant = {
  affordability: string | null;
  contact: string | null;
  createdAt: Date;
  createDate: Date | null;
  email: string | null;
  fullAddress: string | null;
  id: string;
  isRegistered: boolean | null;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  placeId: string | null;
  rating: number | null;
  restaurantPhotos?: Array<RestaurantPhoto>;
  restaurantWorkingHours?: Array<RestaurantWorkingHour>;
  tags?: Array<Tag>;
  totalReviews: number | null;
  updatedAt: Date;
  updateDate: Date | null;
  userFavoriteRestaurants?: Array<UserFavoriteRestaurant>;
  userInteractions?: Array<UserInteraction>;
};
