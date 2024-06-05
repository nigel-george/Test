import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestaurantWorkingHourServiceBase } from "./base/restaurantWorkingHour.service.base";

@Injectable()
export class RestaurantWorkingHourService extends RestaurantWorkingHourServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
