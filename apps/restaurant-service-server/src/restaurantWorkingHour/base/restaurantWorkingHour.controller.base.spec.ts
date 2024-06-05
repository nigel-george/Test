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
import { RestaurantWorkingHourController } from "../restaurantWorkingHour.controller";
import { RestaurantWorkingHourService } from "../restaurantWorkingHour.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  closingTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isClosed: "true",
  openingTime: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  closingTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isClosed: "true",
  openingTime: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    closingTime: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    isClosed: "true",
    openingTime: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  closingTime: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  isClosed: "true",
  openingTime: new Date(),
  updatedAt: new Date(),
};

const service = {
  createRestaurantWorkingHour() {
    return CREATE_RESULT;
  },
  restaurantWorkingHours: () => FIND_MANY_RESULT,
  restaurantWorkingHour: ({ where }: { where: { id: string } }) => {
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

describe("RestaurantWorkingHour", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RestaurantWorkingHourService,
          useValue: service,
        },
      ],
      controllers: [RestaurantWorkingHourController],
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

  test("POST /restaurantWorkingHours", async () => {
    await request(app.getHttpServer())
      .post("/restaurantWorkingHours")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closingTime: CREATE_RESULT.closingTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        openingTime: CREATE_RESULT.openingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /restaurantWorkingHours", async () => {
    await request(app.getHttpServer())
      .get("/restaurantWorkingHours")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          closingTime: FIND_MANY_RESULT[0].closingTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          openingTime: FIND_MANY_RESULT[0].openingTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /restaurantWorkingHours/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/restaurantWorkingHours"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /restaurantWorkingHours/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/restaurantWorkingHours"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        closingTime: FIND_ONE_RESULT.closingTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        openingTime: FIND_ONE_RESULT.openingTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /restaurantWorkingHours existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/restaurantWorkingHours")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closingTime: CREATE_RESULT.closingTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        openingTime: CREATE_RESULT.openingTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/restaurantWorkingHours")
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
