import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserSearchHistoryModuleBase } from "./base/userSearchHistory.module.base";
import { UserSearchHistoryService } from "./userSearchHistory.service";
import { UserSearchHistoryController } from "./userSearchHistory.controller";
import { UserSearchHistoryResolver } from "./userSearchHistory.resolver";

@Module({
  imports: [UserSearchHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserSearchHistoryController],
  providers: [UserSearchHistoryService, UserSearchHistoryResolver],
  exports: [UserSearchHistoryService],
})
export class UserSearchHistoryModule {}
