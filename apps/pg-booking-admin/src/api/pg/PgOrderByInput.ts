import { SortOrder } from "../../util/SortOrder";

export type PgOrderByInput = {
  address?: SortOrder;
  amenities?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  price?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
