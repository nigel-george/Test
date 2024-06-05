import { User } from "../user/User";

export type UserSearchHistory = {
  createdAt: Date;
  id: string;
  searchIp: string | null;
  searchLocation: string | null;
  searchQuery: string | null;
  searchTimestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
