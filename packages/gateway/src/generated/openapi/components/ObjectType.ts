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

import type { DisplayName } from "./DisplayName.js";
import type { ObjectTypeApiName } from "./ObjectTypeApiName.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { ObjectTypeVisibility } from "./ObjectTypeVisibility.js";
import type { Property } from "./Property.js";
import type { PropertyApiName } from "./PropertyApiName.js";
import type { ReleaseStatus } from "./ReleaseStatus.js";

/** Represents an object type in the Ontology. */
export interface ObjectType {
  apiName: ObjectTypeApiName;
  displayName?: DisplayName;
  status: ReleaseStatus;
  /** The description of the object type. */
  description?: string;
  visibility?: ObjectTypeVisibility;
  /** The primary key of the object. This is a list of properties that can be used to uniquely identify the object. */
  primaryKey: ReadonlyArray<PropertyApiName>;
  /** A map of the properties of the object type. */
  properties: Record<PropertyApiName, Property>;
  rid: ObjectTypeRid;
}
