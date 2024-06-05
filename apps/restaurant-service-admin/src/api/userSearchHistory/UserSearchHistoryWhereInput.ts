import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserSearchHistoryWhereInput = {
  id?: StringFilter;
  searchIp?: StringNullableFilter;
  searchLocation?: StringNullableFilter;
  searchQuery?: StringNullableFilter;
  searchTimestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
