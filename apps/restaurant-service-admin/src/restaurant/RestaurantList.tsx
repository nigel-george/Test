import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const RestaurantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Restaurants"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="affordability" source="affordability" />
        <TextField label="contact" source="contact" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="create_date" source="createDate" />
        <TextField label="email" source="email" />
        <TextField label="full_address" source="fullAddress" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_registered" source="isRegistered" />
        <TextField label="latitude" source="latitude" />
        <TextField label="longitude" source="longitude" />
        <TextField label="name" source="name" />
        <TextField label="place_id" source="placeId" />
        <TextField label="rating" source="rating" />
        <TextField label="total_reviews" source="totalReviews" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="update_date" source="updateDate" />
      </Datagrid>
    </List>
  );
};
