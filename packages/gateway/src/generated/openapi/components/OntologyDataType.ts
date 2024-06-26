/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { AnyType } from "./AnyType.js";
import type { BinaryType } from "./BinaryType.js";
import type { BooleanType } from "./BooleanType.js";
import type { ByteType } from "./ByteType.js";
import type { DateType } from "./DateType.js";
import type { DecimalType } from "./DecimalType.js";
import type { DoubleType } from "./DoubleType.js";
import type { FloatType } from "./FloatType.js";
import type { IntegerType } from "./IntegerType.js";
import type { LongType } from "./LongType.js";
import type { MarkingType } from "./MarkingType.js";
import type { OntologyArrayType } from "./OntologyArrayType.js";
import type { OntologyMapType } from "./OntologyMapType.js";
import type { OntologyObjectSetType } from "./OntologyObjectSetType.js";
import type { OntologyObjectType } from "./OntologyObjectType.js";
import type { OntologySetType } from "./OntologySetType.js";
import type { OntologyStructType } from "./OntologyStructType.js";
import type { ShortType } from "./ShortType.js";
import type { StringType } from "./StringType.js";
import type { TimestampType } from "./TimestampType.js";
import type { UnsupportedType } from "./UnsupportedType.js";

export interface OntologyDataType_Any extends AnyType {
  type: "any";
}

export interface OntologyDataType_Binary extends BinaryType {
  type: "binary";
}

export interface OntologyDataType_Boolean extends BooleanType {
  type: "boolean";
}

export interface OntologyDataType_Byte extends ByteType {
  type: "byte";
}

export interface OntologyDataType_Date extends DateType {
  type: "date";
}

export interface OntologyDataType_Decimal extends DecimalType {
  type: "decimal";
}

export interface OntologyDataType_Double extends DoubleType {
  type: "double";
}

export interface OntologyDataType_Float extends FloatType {
  type: "float";
}

export interface OntologyDataType_Integer extends IntegerType {
  type: "integer";
}

export interface OntologyDataType_Long extends LongType {
  type: "long";
}

export interface OntologyDataType_Marking extends MarkingType {
  type: "marking";
}

export interface OntologyDataType_Short extends ShortType {
  type: "short";
}

export interface OntologyDataType_String extends StringType {
  type: "string";
}

export interface OntologyDataType_Timestamp extends TimestampType {
  type: "timestamp";
}

export interface OntologyDataType_Array extends OntologyArrayType {
  type: "array";
}

export interface OntologyDataType_Map extends OntologyMapType {
  type: "map";
}

export interface OntologyDataType_Set extends OntologySetType {
  type: "set";
}

export interface OntologyDataType_Struct extends OntologyStructType {
  type: "struct";
}

export interface OntologyDataType_Object extends OntologyObjectType {
  type: "object";
}

export interface OntologyDataType_ObjectSet extends OntologyObjectSetType {
  type: "objectSet";
}

export interface OntologyDataType_Unsupported extends UnsupportedType {
  type: "unsupported";
}

export type OntologyDataType =
  | OntologyDataType_Any
  | OntologyDataType_Binary
  | OntologyDataType_Boolean
  | OntologyDataType_Byte
  | OntologyDataType_Date
  | OntologyDataType_Decimal
  | OntologyDataType_Double
  | OntologyDataType_Float
  | OntologyDataType_Integer
  | OntologyDataType_Long
  | OntologyDataType_Marking
  | OntologyDataType_Short
  | OntologyDataType_String
  | OntologyDataType_Timestamp
  | OntologyDataType_Array
  | OntologyDataType_Map
  | OntologyDataType_Set
  | OntologyDataType_Struct
  | OntologyDataType_Object
  | OntologyDataType_ObjectSet
  | OntologyDataType_Unsupported;
