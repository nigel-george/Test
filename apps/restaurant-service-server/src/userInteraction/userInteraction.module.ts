import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserInteractionModuleBase } from "./base/userInteraction.module.base";
import { UserInteractionService } from "./userInteraction.service";
import { UserInteractionController } from "./userInteraction.controller";
import { UserInteractionResolver } from "./userInteraction.resolver";

@Module({
  imports: [UserInteractionModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserInteractionController],
  providers: [UserInteractionService, UserInteractionResolver],
  exports: [UserInteractionService],
})
export class UserInteractionModule {}
