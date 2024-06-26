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

import type {
  MultiLink,
  OntologyObject,
  SingleLink,
} from "../baseTypes/index.js";
import type { ObjectSet } from "../index.js";

export type InferLinkType<T> = T extends SingleLink<infer V> ? V
  : T extends MultiLink<infer V> ? V
  : never;

export type SearchAroundKeys<T extends { __apiName: {} }> = keyof {
  [
    K in keyof T["__apiName"] as K extends `searchAround${string}`
      ? (K & string)
      : never
  ]: string;
};

export type SearchAround<T extends OntologyObject> = {
  [
    K
      in keyof (T extends
        { __apiName: Partial<Record<SearchAroundKeys<T>, any>> }
        ? Required<Pick<T["__apiName"], SearchAroundKeys<T>>>
        : never)
  ]: K extends `searchAround${infer Z}`
    ? Uncapitalize<Z> extends keyof T
      ? (() => ObjectSet<InferLinkType<T[Uncapitalize<Z>]>>)
    : Z extends keyof T ? (() => ObjectSet<InferLinkType<T[Z]>>)
    : (numbers: keyof T) => {}
    : () => {};
};
