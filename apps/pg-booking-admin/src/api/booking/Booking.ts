import { Pg } from "../pg/Pg";
import { User } from "../user/User";

export type Booking = {
  bookingDate: Date | null;
  createdAt: Date;
  id: string;
  pg?: Pg | null;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
