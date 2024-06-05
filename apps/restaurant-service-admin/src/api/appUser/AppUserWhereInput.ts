import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type AppUserWhereInput = {
  accountStatus?: "Option1";
  address?: StringNullableFilter;
  authId?: StringNullableFilter;
  country?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  languagePreference?: StringNullableFilter;
  lastLogin?: DateTimeNullableFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  profilePictureUrl?: StringNullableFilter;
  timezone?: StringNullableFilter;
  userType?: "Option1";
  verificationStatus?: "Option1";
};
