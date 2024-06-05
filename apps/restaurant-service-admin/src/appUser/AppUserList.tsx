import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AppUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AppUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="account_status" source="accountStatus" />
        <TextField label="address" source="address" />
        <TextField label="auth_id" source="authId" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_of_birth" source="dateOfBirth" />
        <TextField label="email" source="email" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="language_preference" source="languagePreference" />
        <TextField label="last_login" source="lastLogin" />
        <TextField label="latitude" source="latitude" />
        <TextField label="longitude" source="longitude" />
        <TextField label="name" source="name" />
        <TextField label="password" source="password" />
        <TextField label="phone_number" source="phoneNumber" />
        <TextField label="profile_picture_url" source="profilePictureUrl" />
        <TextField label="timezone" source="timezone" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_type" source="userType" />
        <TextField label="verification_status" source="verificationStatus" />
      </Datagrid>
    </List>
  );
};
