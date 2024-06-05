import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserSearchHistoryUpdateInput = {
  searchIp?: string | null;
  searchLocation?: string | null;
  searchQuery?: string | null;
  searchTimestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
