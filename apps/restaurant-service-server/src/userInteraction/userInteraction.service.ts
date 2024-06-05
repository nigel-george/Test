import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserInteractionServiceBase } from "./base/userInteraction.service.base";

@Injectable()
export class UserInteractionService extends UserInteractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
