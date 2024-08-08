import { Booking } from "../booking/Booking";

export type Pg = {
  address: string | null;
  amenities?: Array<"Option1">;
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  location?: "Option1" | null;
  name: string | null;
  phoneNumber: string | null;
  price: number | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
