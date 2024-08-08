import { Pg as TPg } from "../api/pg/Pg";

export const PG_TITLE_FIELD = "name";

export const PgTitle = (record: TPg): string => {
  return record.name?.toString() || String(record.id);
};
