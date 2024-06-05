import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestaurantPhotoModuleBase } from "./base/restaurantPhoto.module.base";
import { RestaurantPhotoService } from "./restaurantPhoto.service";
import { RestaurantPhotoController } from "./restaurantPhoto.controller";
import { RestaurantPhotoResolver } from "./restaurantPhoto.resolver";

@Module({
  imports: [RestaurantPhotoModuleBase, forwardRef(() => AuthModule)],
  controllers: [RestaurantPhotoController],
  providers: [RestaurantPhotoService, RestaurantPhotoResolver],
  exports: [RestaurantPhotoService],
})
export class RestaurantPhotoModule {}
