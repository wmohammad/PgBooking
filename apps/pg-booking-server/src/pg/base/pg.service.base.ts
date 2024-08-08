/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Pg as PrismaPg,
  Booking as PrismaBooking,
} from "@prisma/client";

export class PgServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PgCountArgs, "select">): Promise<number> {
    return this.prisma.pg.count(args);
  }

  async pgs(args: Prisma.PgFindManyArgs): Promise<PrismaPg[]> {
    return this.prisma.pg.findMany(args);
  }
  async pg(args: Prisma.PgFindUniqueArgs): Promise<PrismaPg | null> {
    return this.prisma.pg.findUnique(args);
  }
  async createPg(args: Prisma.PgCreateArgs): Promise<PrismaPg> {
    return this.prisma.pg.create(args);
  }
  async updatePg(args: Prisma.PgUpdateArgs): Promise<PrismaPg> {
    return this.prisma.pg.update(args);
  }
  async deletePg(args: Prisma.PgDeleteArgs): Promise<PrismaPg> {
    return this.prisma.pg.delete(args);
  }

  async findBookings(
    parentId: string,
    args: Prisma.BookingFindManyArgs
  ): Promise<PrismaBooking[]> {
    return this.prisma.pg
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bookings(args);
  }
}
