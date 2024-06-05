import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserFavoriteRestaurantService } from "./userFavoriteRestaurant.service";
import { UserFavoriteRestaurantControllerBase } from "./base/userFavoriteRestaurant.controller.base";

@swagger.ApiTags("userFavoriteRestaurants")
@common.Controller("userFavoriteRestaurants")
export class UserFavoriteRestaurantController extends UserFavoriteRestaurantControllerBase {
  constructor(
    protected readonly service: UserFavoriteRestaurantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
