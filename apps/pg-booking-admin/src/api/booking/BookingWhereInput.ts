import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PgWhereUniqueInput } from "../pg/PgWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  id?: StringFilter;
  pg?: PgWhereUniqueInput;
  price?: FloatNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
