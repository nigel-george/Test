import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserInteractionService } from "./userInteraction.service";
import { UserInteractionControllerBase } from "./base/userInteraction.controller.base";

@swagger.ApiTags("userInteractions")
@common.Controller("userInteractions")
export class UserInteractionController extends UserInteractionControllerBase {
  constructor(
    protected readonly service: UserInteractionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
