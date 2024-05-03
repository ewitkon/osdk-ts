/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type {
  ActionDefinition,
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
  VersionBound,
} from "@osdk/api";
import type { CheckVersionBound, Client } from "./Client.js";
import type { UNSTABLE_ObjectSet } from "./objectSet/createUnstableObjectSet.js";
import type { MinimalObjectSet, ObjectSet } from "./objectSet/ObjectSet.js";

export interface UnstableClient extends Client {
  <Q extends (InterfaceDefinition<any, any> & VersionBound<any>)>(
    o: CheckVersionBound<Q>,
  ): MinimalObjectSet<Q>;

  <Q extends (ObjectTypeDefinition<any, any> & VersionBound<any>)>(
    o: CheckVersionBound<Q>,
  ): UNSTABLE_ObjectSet<Q>;

  __UNSTABLE_preexistingObjectSet<T extends ObjectOrInterfaceDefinition>(
    type: T,
    rid: string,
  ): UNSTABLE_ObjectSet<T>;

  ctx: unknown;
}
