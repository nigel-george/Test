import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RestaurantPhotoTitle } from "../restaurantPhoto/RestaurantPhotoTitle";
import { RestaurantWorkingHourTitle } from "../restaurantWorkingHour/RestaurantWorkingHourTitle";
import { TagTitle } from "../tag/TagTitle";
import { UserFavoriteRestaurantTitle } from "../userFavoriteRestaurant/UserFavoriteRestaurantTitle";
import { UserInteractionTitle } from "../userInteraction/UserInteractionTitle";

export const RestaurantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="affordability" source="affordability" />
        <TextInput label="contact" source="contact" />
        <DateTimeInput label="create_date" source="createDate" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="full_address" source="fullAddress" />
        <BooleanInput label="is_registered" source="isRegistered" />
        <NumberInput label="latitude" source="latitude" />
        <NumberInput label="longitude" source="longitude" />
        <TextInput label="name" source="name" />
        <TextInput label="place_id" source="placeId" />
        <NumberInput label="rating" source="rating" />
        <ReferenceArrayInput
          source="restaurantPhotos"
          reference="RestaurantPhoto"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestaurantPhotoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="restaurantWorkingHours"
          reference="RestaurantWorkingHour"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RestaurantWorkingHourTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tags"
          reference="Tag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TagTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="total_reviews" source="totalReviews" />
        <DateTimeInput label="update_date" source="updateDate" />
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
      </SimpleForm>
    </Create>
  );
};
