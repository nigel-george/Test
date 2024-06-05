import { Restaurant } from "../restaurant/Restaurant";

export type Tag = {
  address: string | null;
  ambience: string | null;
  createdAt: Date;
  id: string;
  isCorrect: boolean | null;
  mainTag: string | null;
  restaurant?: Restaurant | null;
  restaurantName: string | null;
  subTags: string | null;
  updatedAt: Date;
};
