import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PgWhereInput = {
  address?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  location?: "Option1";
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  price?: FloatNullableFilter;
  typeField?: "Option1";
};
