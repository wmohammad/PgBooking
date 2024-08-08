import * as graphql from "@nestjs/graphql";
import { PgResolverBase } from "./base/pg.resolver.base";
import { Pg } from "./base/Pg";
import { PgService } from "./pg.service";

@graphql.Resolver(() => Pg)
export class PgResolver extends PgResolverBase {
  constructor(protected readonly service: PgService) {
    super(service);
  }
}
