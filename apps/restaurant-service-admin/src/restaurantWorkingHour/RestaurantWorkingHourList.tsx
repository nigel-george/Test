import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { RESTAURANT_TITLE_FIELD } from "../restaurant/RestaurantTitle";

export const RestaurantWorkingHourList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RestaurantWorkingHours"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="closing_time" source="closingTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="day_of_week" source="dayOfWeek" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_closed" source="isClosed" />
        <TextField label="opening_time" source="openingTime" />
        <ReferenceField
          label="Restaurant"
          source="restaurant.id"
          reference="Restaurant"
        >
          <TextField source={RESTAURANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
