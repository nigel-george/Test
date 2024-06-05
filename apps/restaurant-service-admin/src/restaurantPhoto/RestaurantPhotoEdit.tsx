import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const RestaurantPhotoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="restaurant.id"
          reference="Restaurant"
          label="Restaurant"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
