/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
  IsDate,
  IsNumber,
  Min,
  Max,
} from "class-validator";

import { EnumPgAmenities } from "./EnumPgAmenities";
import { Booking } from "../../booking/base/Booking";
import { Type } from "class-transformer";
import { EnumPgLocation } from "./EnumPgLocation";
import { EnumPgTypeField } from "./EnumPgTypeField";

@ObjectType()
class Pg {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumPgAmenities,
    isArray: true,
  })
  @IsEnum(EnumPgAmenities, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumPgAmenities], {
    nullable: true,
  })
  amenities?: Array<"Option1">;

  @ApiProperty({
    required: false,
    type: () => [Booking],
  })
  @ValidateNested()
  @Type(() => Booking)
  @IsOptional()
  bookings?: Array<Booking>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumPgLocation,
  })
  @IsEnum(EnumPgLocation)
  @IsOptional()
  @Field(() => EnumPgLocation, {
    nullable: true,
  })
  location?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPgTypeField,
  })
  @IsEnum(EnumPgTypeField)
  @IsOptional()
  @Field(() => EnumPgTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Pg as Pg };
