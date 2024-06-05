import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const TagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="ambience" source="ambience" />
        <BooleanInput label="is_correct" source="isCorrect" />
        <TextInput label="main_tag" source="mainTag" />
        <ReferenceInput
          source="restaurant.id"
          reference="Restaurant"
          label="Restaurant"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <TextInput label="restaurant_name" source="restaurantName" />
        <TextInput label="sub_tags" multiline source="subTags" />
      </SimpleForm>
    </Edit>
  );
};
