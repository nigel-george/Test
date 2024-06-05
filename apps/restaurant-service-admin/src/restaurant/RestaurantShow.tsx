import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RESTAURANT_TITLE_FIELD } from "./RestaurantTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RestaurantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="RestaurantPhoto"
          target="restaurantId"
          label="RestaurantPhotos"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="photo_url" source="photoUrl" />
            <ReferenceField
              label="Restaurant"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RestaurantWorkingHour"
          target="restaurantId"
          label="RestaurantWorkingHours"
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
        </ReferenceManyField>
        <ReferenceManyField reference="Tag" target="restaurantId" label="Tags">
          <Datagrid rowClick="show">
            <TextField label="address" source="address" />
            <TextField label="ambience" source="ambience" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="is_correct" source="isCorrect" />
            <TextField label="main_tag" source="mainTag" />
            <ReferenceField
              label="Restaurant"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="restaurant_name" source="restaurantName" />
            <TextField label="sub_tags" source="subTags" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserFavoriteRestaurant"
          target="restaurantId"
          label="UserFavoriteRestaurants"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="create_date" source="createDate" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Restaurant"
              source="restaurant.id"
              reference="Restaurant"
            >
              <TextField source={RESTAURANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="update_date" source="updateDate" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserInteraction"
          target="restaurantId"
          label="UserInteractions"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
