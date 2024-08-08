import { PgWhereUniqueInput } from "../pg/PgWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  bookingDate?: Date | null;
  pg?: PgWhereUniqueInput | null;
  price?: number | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
