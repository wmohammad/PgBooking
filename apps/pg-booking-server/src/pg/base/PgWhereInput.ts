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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { BookingListRelationFilter } from "../../booking/base/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumPgLocation } from "./EnumPgLocation";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EnumPgTypeField } from "./EnumPgTypeField";

@InputType()
class PgWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  address?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => BookingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BookingListRelationFilter)
  @IsOptional()
  @Field(() => BookingListRelationFilter, {
    nullable: true,
  })
  bookings?: BookingListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumPgLocation,
  })
  @IsEnum(EnumPgLocation)
  @IsOptional()
  @Field(() => EnumPgLocation, {
    nullable: true,
  })
  location?: "Option1";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phoneNumber?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  price?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumPgTypeField,
  })
  @IsEnum(EnumPgTypeField)
  @IsOptional()
  @Field(() => EnumPgTypeField, {
    nullable: true,
  })
  typeField?: "Option1";
}

export { PgWhereInput as PgWhereInput };
