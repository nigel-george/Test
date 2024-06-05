import { UserSearchHistoryWhereInput } from "./UserSearchHistoryWhereInput";
import { UserSearchHistoryOrderByInput } from "./UserSearchHistoryOrderByInput";

export type UserSearchHistoryFindManyArgs = {
  where?: UserSearchHistoryWhereInput;
  orderBy?: Array<UserSearchHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
