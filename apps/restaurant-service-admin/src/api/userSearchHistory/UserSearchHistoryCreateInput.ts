import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserSearchHistoryCreateInput = {
  searchIp?: string | null;
  searchLocation?: string | null;
  searchQuery?: string | null;
  searchTimestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
