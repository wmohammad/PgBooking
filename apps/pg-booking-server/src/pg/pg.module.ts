import { Module } from "@nestjs/common";
import { PgModuleBase } from "./base/pg.module.base";
import { PgService } from "./pg.service";
import { PgController } from "./pg.controller";
import { PgResolver } from "./pg.resolver";

@Module({
  imports: [PgModuleBase],
  controllers: [PgController],
  providers: [PgService, PgResolver],
  exports: [PgService],
})
export class PgModule {}
