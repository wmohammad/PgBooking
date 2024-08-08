import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PgService } from "./pg.service";
import { PgControllerBase } from "./base/pg.controller.base";

@swagger.ApiTags("pgs")
@common.Controller("pgs")
export class PgController extends PgControllerBase {
  constructor(protected readonly service: PgService) {
    super(service);
  }
}
