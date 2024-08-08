import { PgWhereUniqueInput } from "./PgWhereUniqueInput";
import { PgUpdateInput } from "./PgUpdateInput";

export type UpdatePgArgs = {
  where: PgWhereUniqueInput;
  data: PgUpdateInput;
};
