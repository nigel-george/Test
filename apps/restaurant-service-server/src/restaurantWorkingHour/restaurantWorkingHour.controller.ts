import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestaurantWorkingHourService } from "./restaurantWorkingHour.service";
import { RestaurantWorkingHourControllerBase } from "./base/restaurantWorkingHour.controller.base";

@swagger.ApiTags("restaurantWorkingHours")
@common.Controller("restaurantWorkingHours")
export class RestaurantWorkingHourController extends RestaurantWorkingHourControllerBase {
  constructor(
    protected readonly service: RestaurantWorkingHourService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
