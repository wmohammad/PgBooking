/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
  IsNumber,
  Min,
  Max,
} from "class-validator";

import { EnumPgAmenities } from "./EnumPgAmenities";
import { BookingCreateNestedManyWithoutPgsInput } from "./BookingCreateNestedManyWithoutPgsInput";
import { Type } from "class-transformer";
import { EnumPgLocation } from "./EnumPgLocation";
import { EnumPgTypeField } from "./EnumPgTypeField";

@InputType()
class PgCreateInput {
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
  address?: string | null;

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
    type: () => BookingCreateNestedManyWithoutPgsInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutPgsInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutPgsInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutPgsInput;

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
  name?: string | null;

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
  phoneNumber?: string | null;

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
  price?: number | null;

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
}

export { PgCreateInput as PgCreateInput };
