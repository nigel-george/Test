import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserFavoriteRestaurantServiceBase } from "./base/userFavoriteRestaurant.service.base";

@Injectable()
export class UserFavoriteRestaurantService extends UserFavoriteRestaurantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
