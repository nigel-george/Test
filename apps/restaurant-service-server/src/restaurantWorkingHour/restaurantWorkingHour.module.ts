import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestaurantWorkingHourModuleBase } from "./base/restaurantWorkingHour.module.base";
import { RestaurantWorkingHourService } from "./restaurantWorkingHour.service";
import { RestaurantWorkingHourController } from "./restaurantWorkingHour.controller";
import { RestaurantWorkingHourResolver } from "./restaurantWorkingHour.resolver";

@Module({
  imports: [RestaurantWorkingHourModuleBase, forwardRef(() => AuthModule)],
  controllers: [RestaurantWorkingHourController],
  providers: [RestaurantWorkingHourService, RestaurantWorkingHourResolver],
  exports: [RestaurantWorkingHourService],
})
export class RestaurantWorkingHourModule {}
