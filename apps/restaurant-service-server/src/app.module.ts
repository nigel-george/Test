import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { RestaurantPhotoModule } from "./restaurantPhoto/restaurantPhoto.module";
import { TagModule } from "./tag/tag.module";
import { UserSearchHistoryModule } from "./userSearchHistory/userSearchHistory.module";
import { UserFavoriteRestaurantModule } from "./userFavoriteRestaurant/userFavoriteRestaurant.module";
import { UserInteractionModule } from "./userInteraction/userInteraction.module";
import { RestaurantWorkingHourModule } from "./restaurantWorkingHour/restaurantWorkingHour.module";
import { AppUserModule } from "./appUser/appUser.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    RestaurantModule,
    RestaurantPhotoModule,
    TagModule,
    UserSearchHistoryModule,
    UserFavoriteRestaurantModule,
    UserInteractionModule,
    RestaurantWorkingHourModule,
    AppUserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
