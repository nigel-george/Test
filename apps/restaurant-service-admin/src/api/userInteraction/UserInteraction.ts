import { Restaurant } from "../restaurant/Restaurant";
import { User } from "../user/User";

export type UserInteraction = {
  createdAt: Date;
  deviceType: string | null;
  id: string;
  interactionTimestamp: Date | null;
  interactionType?: "Option1" | null;
  ipAddress: string | null;
  latitude: number | null;
  longitude: number | null;
  offerId: number | null;
  restaurant?: Restaurant | null;
  updatedAt: Date;
  user?: User | null;
};
