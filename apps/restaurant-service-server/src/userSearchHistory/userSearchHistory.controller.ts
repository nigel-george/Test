import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserSearchHistoryService } from "./userSearchHistory.service";
import { UserSearchHistoryControllerBase } from "./base/userSearchHistory.controller.base";

@swagger.ApiTags("userSearchHistories")
@common.Controller("userSearchHistories")
export class UserSearchHistoryController extends UserSearchHistoryControllerBase {
  constructor(
    protected readonly service: UserSearchHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
