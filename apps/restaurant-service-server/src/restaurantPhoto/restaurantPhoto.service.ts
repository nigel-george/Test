import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestaurantPhotoServiceBase } from "./base/restaurantPhoto.service.base";

@Injectable()
export class RestaurantPhotoService extends RestaurantPhotoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
