import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserFavoriteRestaurantModuleBase } from "./base/userFavoriteRestaurant.module.base";
import { UserFavoriteRestaurantService } from "./userFavoriteRestaurant.service";
import { UserFavoriteRestaurantController } from "./userFavoriteRestaurant.controller";
import { UserFavoriteRestaurantResolver } from "./userFavoriteRestaurant.resolver";

@Module({
  imports: [UserFavoriteRestaurantModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserFavoriteRestaurantController],
  providers: [UserFavoriteRestaurantService, UserFavoriteRestaurantResolver],
  exports: [UserFavoriteRestaurantService],
})
export class UserFavoriteRestaurantModule {}
