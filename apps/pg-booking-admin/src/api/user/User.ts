import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";

export type User = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  role?: "Option1" | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
