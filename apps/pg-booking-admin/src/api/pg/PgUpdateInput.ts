import { BookingUpdateManyWithoutPgsInput } from "./BookingUpdateManyWithoutPgsInput";

export type PgUpdateInput = {
  address?: string | null;
  amenities?: Array<"Option1">;
  bookings?: BookingUpdateManyWithoutPgsInput;
  location?: "Option1" | null;
  name?: string | null;
  phoneNumber?: string | null;
  price?: number | null;
  typeField?: "Option1" | null;
};
