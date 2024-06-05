/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  RestaurantWorkingHour as PrismaRestaurantWorkingHour,
  Restaurant as PrismaRestaurant,
} from "@prisma/client";

export class RestaurantWorkingHourServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RestaurantWorkingHourCountArgs, "select">
  ): Promise<number> {
    return this.prisma.restaurantWorkingHour.count(args);
  }

  async restaurantWorkingHours<
    T extends Prisma.RestaurantWorkingHourFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantWorkingHourFindManyArgs>
  ): Promise<PrismaRestaurantWorkingHour[]> {
    return this.prisma.restaurantWorkingHour.findMany<Prisma.RestaurantWorkingHourFindManyArgs>(
      args
    );
  }
  async restaurantWorkingHour<
    T extends Prisma.RestaurantWorkingHourFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantWorkingHourFindUniqueArgs>
  ): Promise<PrismaRestaurantWorkingHour | null> {
    return this.prisma.restaurantWorkingHour.findUnique(args);
  }
  async createRestaurantWorkingHour<
    T extends Prisma.RestaurantWorkingHourCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantWorkingHourCreateArgs>
  ): Promise<PrismaRestaurantWorkingHour> {
    return this.prisma.restaurantWorkingHour.create<T>(args);
  }
  async updateRestaurantWorkingHour<
    T extends Prisma.RestaurantWorkingHourUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantWorkingHourUpdateArgs>
  ): Promise<PrismaRestaurantWorkingHour> {
    return this.prisma.restaurantWorkingHour.update<T>(args);
  }
  async deleteRestaurantWorkingHour<
    T extends Prisma.RestaurantWorkingHourDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.RestaurantWorkingHourDeleteArgs>
  ): Promise<PrismaRestaurantWorkingHour> {
    return this.prisma.restaurantWorkingHour.delete(args);
  }

  async getRestaurant(parentId: string): Promise<PrismaRestaurant | null> {
    return this.prisma.restaurantWorkingHour
      .findUnique({
        where: { id: parentId },
      })
      .restaurant();
  }
}
