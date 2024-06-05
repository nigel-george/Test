/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { RestaurantWorkingHour } from "./RestaurantWorkingHour";
import { RestaurantWorkingHourCountArgs } from "./RestaurantWorkingHourCountArgs";
import { RestaurantWorkingHourFindManyArgs } from "./RestaurantWorkingHourFindManyArgs";
import { RestaurantWorkingHourFindUniqueArgs } from "./RestaurantWorkingHourFindUniqueArgs";
import { CreateRestaurantWorkingHourArgs } from "./CreateRestaurantWorkingHourArgs";
import { UpdateRestaurantWorkingHourArgs } from "./UpdateRestaurantWorkingHourArgs";
import { DeleteRestaurantWorkingHourArgs } from "./DeleteRestaurantWorkingHourArgs";
import { Restaurant } from "../../restaurant/base/Restaurant";
import { RestaurantWorkingHourService } from "../restaurantWorkingHour.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RestaurantWorkingHour)
export class RestaurantWorkingHourResolverBase {
  constructor(
    protected readonly service: RestaurantWorkingHourService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "RestaurantWorkingHour",
    action: "read",
    possession: "any",
  })
  async _restaurantWorkingHoursMeta(
    @graphql.Args() args: RestaurantWorkingHourCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [RestaurantWorkingHour])
  @nestAccessControl.UseRoles({
    resource: "RestaurantWorkingHour",
    action: "read",
    possession: "any",
  })
  async restaurantWorkingHours(
    @graphql.Args() args: RestaurantWorkingHourFindManyArgs
  ): Promise<RestaurantWorkingHour[]> {
    return this.service.restaurantWorkingHours(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => RestaurantWorkingHour, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "RestaurantWorkingHour",
    action: "read",
    possession: "own",
  })
  async restaurantWorkingHour(
    @graphql.Args() args: RestaurantWorkingHourFindUniqueArgs
  ): Promise<RestaurantWorkingHour | null> {
    const result = await this.service.restaurantWorkingHour(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RestaurantWorkingHour)
  @nestAccessControl.UseRoles({
    resource: "RestaurantWorkingHour",
    action: "create",
    possession: "any",
  })
  async createRestaurantWorkingHour(
    @graphql.Args() args: CreateRestaurantWorkingHourArgs
  ): Promise<RestaurantWorkingHour> {
    return await this.service.createRestaurantWorkingHour({
      ...args,
      data: {
        ...args.data,

        restaurant: args.data.restaurant
          ? {
              connect: args.data.restaurant,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => RestaurantWorkingHour)
  @nestAccessControl.UseRoles({
    resource: "RestaurantWorkingHour",
    action: "update",
    possession: "any",
  })
  async updateRestaurantWorkingHour(
    @graphql.Args() args: UpdateRestaurantWorkingHourArgs
  ): Promise<RestaurantWorkingHour | null> {
    try {
      return await this.service.updateRestaurantWorkingHour({
        ...args,
        data: {
          ...args.data,

          restaurant: args.data.restaurant
            ? {
                connect: args.data.restaurant,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => RestaurantWorkingHour)
  @nestAccessControl.UseRoles({
    resource: "RestaurantWorkingHour",
    action: "delete",
    possession: "any",
  })
  async deleteRestaurantWorkingHour(
    @graphql.Args() args: DeleteRestaurantWorkingHourArgs
  ): Promise<RestaurantWorkingHour | null> {
    try {
      return await this.service.deleteRestaurantWorkingHour(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Restaurant, {
    nullable: true,
    name: "restaurant",
  })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async getRestaurant(
    @graphql.Parent() parent: RestaurantWorkingHour
  ): Promise<Restaurant | null> {
    const result = await this.service.getRestaurant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
