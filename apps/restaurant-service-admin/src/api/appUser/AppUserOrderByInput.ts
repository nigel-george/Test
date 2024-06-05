import { SortOrder } from "../../util/SortOrder";

export type AppUserOrderByInput = {
  accountStatus?: SortOrder;
  address?: SortOrder;
  authId?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  languagePreference?: SortOrder;
  lastLogin?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  profilePictureUrl?: SortOrder;
  timezone?: SortOrder;
  updatedAt?: SortOrder;
  userType?: SortOrder;
  verificationStatus?: SortOrder;
};
