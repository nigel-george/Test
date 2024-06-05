import { Restaurant } from "../restaurant/Restaurant";
import { User } from "../user/User";

export type UserFavoriteRestaurant = {
  createdAt: Date;
  createDate: Date | null;
  id: string;
  restaurant?: Restaurant | null;
  updatedAt: Date;
  updateDate: Date | null;
  user?: User | null;
};
