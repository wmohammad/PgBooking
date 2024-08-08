import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PgServiceBase } from "./base/pg.service.base";

@Injectable()
export class PgService extends PgServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
