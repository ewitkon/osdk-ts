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

import type { AttachmentProperty } from "./attachments";
import type { GeoJson, GeoJsonPoint, GeoPoint, GeoShape } from "./geoshapes";
import type { LocalDate } from "./localDate";
import type { OntologyObject } from "./OntologyObject";
import type { Timestamp } from "./timestamp";
export type ParameterValue =
  | string
  | number
  | boolean
  | LocalDate
  | Timestamp
  | GeoShape
  | GeoPoint
  | OntologyObject
  | AttachmentProperty
  | Set<ParameterValue>
  | ParameterValue[]
  | {
    [key: string]: ParameterValue;
  };
export type PrimitiveParameterValue =
  | string
  | number
  | boolean
  | OntologyObject
  | GeoJson
  | GeoJsonPoint
  | PrimitiveParameterValue[]
  | {
    [key: string]: PrimitiveParameterValue;
  };