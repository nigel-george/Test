import { Restaurant } from "../restaurant/Restaurant";

export type RestaurantWorkingHour = {
  closingTime: Date | null;
  createdAt: Date;
  dayOfWeek?: "Option1" | null;
  id: string;
  isClosed: boolean | null;
  openingTime: Date | null;
  restaurant?: Restaurant | null;
  updatedAt: Date;
};
