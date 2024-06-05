import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RestaurantPhotoResolverBase } from "./base/restaurantPhoto.resolver.base";
import { RestaurantPhoto } from "./base/RestaurantPhoto";
import { RestaurantPhotoService } from "./restaurantPhoto.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RestaurantPhoto)
export class RestaurantPhotoResolver extends RestaurantPhotoResolverBase {
  constructor(
    protected readonly service: RestaurantPhotoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
