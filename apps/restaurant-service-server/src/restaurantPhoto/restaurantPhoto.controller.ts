import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestaurantPhotoService } from "./restaurantPhoto.service";
import { RestaurantPhotoControllerBase } from "./base/restaurantPhoto.controller.base";

@swagger.ApiTags("restaurantPhotos")
@common.Controller("restaurantPhotos")
export class RestaurantPhotoController extends RestaurantPhotoControllerBase {
  constructor(
    protected readonly service: RestaurantPhotoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
