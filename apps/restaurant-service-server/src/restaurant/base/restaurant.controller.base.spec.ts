import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { RestaurantController } from "../restaurant.controller";
import { RestaurantService } from "../restaurant.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  affordability: "exampleAffordability",
  contact: "exampleContact",
  createdAt: new Date(),
  createDate: new Date(),
  email: "exampleEmail",
  fullAddress: "exampleFullAddress",
  id: "exampleId",
  isRegistered: "true",
  latitude: 42.42,
  longitude: 42.42,
  name: "exampleName",
  placeId: "examplePlaceId",
  rating: 42.42,
  totalReviews: 42,
  updatedAt: new Date(),
  updateDate: new Date(),
};
const CREATE_RESULT = {
  affordability: "exampleAffordability",
  contact: "exampleContact",
  createdAt: new Date(),
  createDate: new Date(),
  email: "exampleEmail",
  fullAddress: "exampleFullAddress",
  id: "exampleId",
  isRegistered: "true",
  latitude: 42.42,
  longitude: 42.42,
  name: "exampleName",
  placeId: "examplePlaceId",
  rating: 42.42,
  totalReviews: 42,
  updatedAt: new Date(),
  updateDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    affordability: "exampleAffordability",
    contact: "exampleContact",
    createdAt: new Date(),
    createDate: new Date(),
    email: "exampleEmail",
    fullAddress: "exampleFullAddress",
    id: "exampleId",
    isRegistered: "true",
    latitude: 42.42,
    longitude: 42.42,
    name: "exampleName",
    placeId: "examplePlaceId",
    rating: 42.42,
    totalReviews: 42,
    updatedAt: new Date(),
    updateDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  affordability: "exampleAffordability",
  contact: "exampleContact",
  createdAt: new Date(),
  createDate: new Date(),
  email: "exampleEmail",
  fullAddress: "exampleFullAddress",
  id: "exampleId",
  isRegistered: "true",
  latitude: 42.42,
  longitude: 42.42,
  name: "exampleName",
  placeId: "examplePlaceId",
  rating: 42.42,
  totalReviews: 42,
  updatedAt: new Date(),
  updateDate: new Date(),
};

const service = {
  createRestaurant() {
    return CREATE_RESULT;
  },
  restaurants: () => FIND_MANY_RESULT,
  restaurant: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Restaurant", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RestaurantService,
          useValue: service,
        },
      ],
      controllers: [RestaurantController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /restaurants", async () => {
    await request(app.getHttpServer())
      .post("/restaurants")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        createDate: CREATE_RESULT.createDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        updateDate: CREATE_RESULT.updateDate.toISOString(),
      });
  });

  test("GET /restaurants", async () => {
    await request(app.getHttpServer())
      .get("/restaurants")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          createDate: FIND_MANY_RESULT[0].createDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          updateDate: FIND_MANY_RESULT[0].updateDate.toISOString(),
        },
      ]);
  });

  test("GET /restaurants/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/restaurants"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /restaurants/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/restaurants"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        createDate: FIND_ONE_RESULT.createDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        updateDate: FIND_ONE_RESULT.updateDate.toISOString(),
      });
  });

  test("POST /restaurants existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/restaurants")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        createDate: CREATE_RESULT.createDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        updateDate: CREATE_RESULT.updateDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/restaurants")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
