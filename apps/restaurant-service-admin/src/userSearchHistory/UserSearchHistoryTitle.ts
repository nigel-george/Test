import { UserSearchHistory as TUserSearchHistory } from "../api/userSearchHistory/UserSearchHistory";

export const USERSEARCHHISTORY_TITLE_FIELD = "searchIp";

export const UserSearchHistoryTitle = (record: TUserSearchHistory): string => {
  return record.searchIp?.toString() || String(record.id);
};
