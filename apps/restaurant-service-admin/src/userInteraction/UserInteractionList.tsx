import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserInteractionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserInteractions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="device_type" source="deviceType" />
        <TextField label="ID" source="id" />
        <TextField
          label="interaction_timestamp"
          source="interactionTimestamp"
        />
        <TextField label="interaction_type" source="interactionType" />
        <TextField label="ip_address" source="ipAddress" />
        <TextField label="latitude" source="latitude" />
        <TextField label="longitude" source="longitude" />
        <TextField label="offer_id" source="offerId" />
        <ReferenceField
          label="Restaurant"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
