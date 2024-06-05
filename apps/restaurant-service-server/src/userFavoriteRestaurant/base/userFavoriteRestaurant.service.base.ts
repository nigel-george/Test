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
  UserFavoriteRestaurant as PrismaUserFavoriteRestaurant,
  Restaurant as PrismaRestaurant,
  User as PrismaUser,
} from "@prisma/client";

export class UserFavoriteRestaurantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserFavoriteRestaurantCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userFavoriteRestaurant.count(args);
  }

  async userFavoriteRestaurants<
    T extends Prisma.UserFavoriteRestaurantFindManyArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.UserFavoriteRestaurantFindManyArgs>
  ): Promise<PrismaUserFavoriteRestaurant[]> {
    return this.prisma.userFavoriteRestaurant.findMany<Prisma.UserFavoriteRestaurantFindManyArgs>(
      args
    );
  }
  async userFavoriteRestaurant<
    T extends Prisma.UserFavoriteRestaurantFindUniqueArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.UserFavoriteRestaurantFindUniqueArgs>
  ): Promise<PrismaUserFavoriteRestaurant | null> {
    return this.prisma.userFavoriteRestaurant.findUnique(args);
  }
  async createUserFavoriteRestaurant<
    T extends Prisma.UserFavoriteRestaurantCreateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.UserFavoriteRestaurantCreateArgs>
  ): Promise<PrismaUserFavoriteRestaurant> {
    return this.prisma.userFavoriteRestaurant.create<T>(args);
  }
  async updateUserFavoriteRestaurant<
    T extends Prisma.UserFavoriteRestaurantUpdateArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.UserFavoriteRestaurantUpdateArgs>
  ): Promise<PrismaUserFavoriteRestaurant> {
    return this.prisma.userFavoriteRestaurant.update<T>(args);
  }
  async deleteUserFavoriteRestaurant<
    T extends Prisma.UserFavoriteRestaurantDeleteArgs
  >(
    args: Prisma.SelectSubset<T, Prisma.UserFavoriteRestaurantDeleteArgs>
  ): Promise<PrismaUserFavoriteRestaurant> {
    return this.prisma.userFavoriteRestaurant.delete(args);
  }

  async getRestaurant(parentId: string): Promise<PrismaRestaurant | null> {
    return this.prisma.userFavoriteRestaurant
      .findUnique({
        where: { id: parentId },
      })
      .restaurant();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.userFavoriteRestaurant
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
