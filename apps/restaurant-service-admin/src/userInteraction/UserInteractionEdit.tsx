import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";

import { RestaurantTitle } from "../restaurant/RestaurantTitle";
import { UserTitle } from "../user/UserTitle";

export const UserInteractionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="device_type" source="deviceType" />
        <DateTimeInput
          label="interaction_timestamp"
          source="interactionTimestamp"
        />
        <SelectInput
          source="interactionType"
          label="interaction_type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="ip_address" source="ipAddress" />
        <NumberInput label="latitude" source="latitude" />
        <NumberInput label="longitude" source="longitude" />
        <NumberInput step={1} label="offer_id" source="offerId" />
        <ReferenceInput
          source="restaurant.id"
          reference="Restaurant"
          label="Restaurant"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
