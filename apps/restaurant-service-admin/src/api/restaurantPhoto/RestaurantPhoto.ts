import { JsonValue } from "type-fest";
import { Restaurant } from "../restaurant/Restaurant";

export type RestaurantPhoto = {
  createdAt: Date;
  id: string;
  photoUrl: JsonValue;
  restaurant?: Restaurant | null;
  updatedAt: Date;
};
