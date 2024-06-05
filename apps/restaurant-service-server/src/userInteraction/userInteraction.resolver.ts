import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserInteractionResolverBase } from "./base/userInteraction.resolver.base";
import { UserInteraction } from "./base/UserInteraction";
import { UserInteractionService } from "./userInteraction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserInteraction)
export class UserInteractionResolver extends UserInteractionResolverBase {
  constructor(
    protected readonly service: UserInteractionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
