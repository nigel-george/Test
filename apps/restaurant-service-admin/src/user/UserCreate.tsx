import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { UserFavoriteRestaurantTitle } from "../userFavoriteRestaurant/UserFavoriteRestaurantTitle";
import { UserInteractionTitle } from "../userInteraction/UserInteractionTitle";
import { UserSearchHistoryTitle } from "../userSearchHistory/UserSearchHistoryTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="userFavoriteRestaurants"
          reference="UserFavoriteRestaurant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserFavoriteRestaurantTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userInteractions"
          reference="UserInteraction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserInteractionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="userSearchHistories"
          reference="UserSearchHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserSearchHistoryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
