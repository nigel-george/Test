import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserSearchHistoryResolverBase } from "./base/userSearchHistory.resolver.base";
import { UserSearchHistory } from "./base/UserSearchHistory";
import { UserSearchHistoryService } from "./userSearchHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserSearchHistory)
export class UserSearchHistoryResolver extends UserSearchHistoryResolverBase {
  constructor(
    protected readonly service: UserSearchHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
