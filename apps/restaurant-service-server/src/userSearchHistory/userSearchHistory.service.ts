import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserSearchHistoryServiceBase } from "./base/userSearchHistory.service.base";

@Injectable()
export class UserSearchHistoryService extends UserSearchHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
