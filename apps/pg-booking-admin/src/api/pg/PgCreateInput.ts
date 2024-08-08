import { BookingCreateNestedManyWithoutPgsInput } from "./BookingCreateNestedManyWithoutPgsInput";

export type PgCreateInput = {
  address?: string | null;
  amenities?: Array<"Option1">;
  bookings?: BookingCreateNestedManyWithoutPgsInput;
  location?: "Option1" | null;
  name?: string | null;
  phoneNumber?: string | null;
  price?: number | null;
  typeField?: "Option1" | null;
};
