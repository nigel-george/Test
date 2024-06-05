import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AppUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="accountStatus"
          label="account_status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="address" source="address" />
        <TextInput label="auth_id" source="authId" />
        <TextInput label="country" source="country" />
        <DateTimeInput label="date_of_birth" source="dateOfBirth" />
        <TextInput label="email" source="email" type="email" />
        <SelectInput
          source="gender"
          label="gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="language_preference" source="languagePreference" />
        <DateTimeInput label="last_login" source="lastLogin" />
        <NumberInput label="latitude" source="latitude" />
        <NumberInput label="longitude" source="longitude" />
        <TextInput label="name" source="name" />
        <TextInput label="password" source="password" />
        <TextInput label="phone_number" source="phoneNumber" />
        <TextInput label="profile_picture_url" source="profilePictureUrl" />
        <TextInput label="timezone" source="timezone" />
        <SelectInput
          source="userType"
          label="user_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="verificationStatus"
          label="verification_status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
