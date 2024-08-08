import { PgWhereInput } from "./PgWhereInput";
import { PgOrderByInput } from "./PgOrderByInput";

export type PgFindManyArgs = {
  where?: PgWhereInput;
  orderBy?: Array<PgOrderByInput>;
  skip?: number;
  take?: number;
};
