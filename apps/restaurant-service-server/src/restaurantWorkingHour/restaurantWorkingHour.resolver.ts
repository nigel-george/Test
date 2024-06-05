import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RestaurantWorkingHourResolverBase } from "./base/restaurantWorkingHour.resolver.base";
import { RestaurantWorkingHour } from "./base/RestaurantWorkingHour";
import { RestaurantWorkingHourService } from "./restaurantWorkingHour.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RestaurantWorkingHour)
export class RestaurantWorkingHourResolver extends RestaurantWorkingHourResolverBase {
  constructor(
    protected readonly service: RestaurantWorkingHourService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
