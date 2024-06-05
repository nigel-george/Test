import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";

export const TagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
