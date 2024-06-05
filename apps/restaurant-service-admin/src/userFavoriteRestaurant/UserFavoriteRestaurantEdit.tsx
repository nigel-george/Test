import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";
import { UserTitle } from "../user/UserTitle";

export const UserFavoriteRestaurantEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="create_date" source="createDate" />
        <ReferenceInput
          source="restaurant.id"
          reference="Restaurant"
          label="Restaurant"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <DateTimeInput label="update_date" source="updateDate" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
