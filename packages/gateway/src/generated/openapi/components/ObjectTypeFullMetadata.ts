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

import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { LinkTypeSideV2 } from "./LinkTypeSideV2.js";
import type { ObjectTypeInterfaceImplementation } from "./ObjectTypeInterfaceImplementation.js";
import type { ObjectTypeV2 } from "./ObjectTypeV2.js";
import type { PropertyApiName } from "./PropertyApiName.js";
import type { SharedPropertyTypeApiName } from "./SharedPropertyTypeApiName.js";

export interface ObjectTypeFullMetadata {
  objectType: ObjectTypeV2;
  linkTypes: ReadonlyArray<LinkTypeSideV2>;
  /** A list of interfaces that this object type implements. */
  implementsInterfaces: ReadonlyArray<InterfaceTypeApiName>;
  /** A list of interfaces that this object type implements and how it implements them. */
  implementsInterfaces2: Record<
    InterfaceTypeApiName,
    ObjectTypeInterfaceImplementation
  >;
  /**
   * A map from shared property type API name to backing local property API name for the shared property types
   * present on this object type.
   */
  sharedPropertyTypeMapping: Record<SharedPropertyTypeApiName, PropertyApiName>;
}
