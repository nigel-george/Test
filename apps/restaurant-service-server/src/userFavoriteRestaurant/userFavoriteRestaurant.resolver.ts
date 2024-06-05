import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserFavoriteRestaurantResolverBase } from "./base/userFavoriteRestaurant.resolver.base";
import { UserFavoriteRestaurant } from "./base/UserFavoriteRestaurant";
import { UserFavoriteRestaurantService } from "./userFavoriteRestaurant.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserFavoriteRestaurant)
export class UserFavoriteRestaurantResolver extends UserFavoriteRestaurantResolverBase {
  constructor(
    protected readonly service: UserFavoriteRestaurantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
