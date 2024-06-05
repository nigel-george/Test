import { SortOrder } from "../../util/SortOrder";

export type UserSearchHistoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  searchIp?: SortOrder;
  searchLocation?: SortOrder;
  searchQuery?: SortOrder;
  searchTimestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
