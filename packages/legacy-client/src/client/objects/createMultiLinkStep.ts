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

import type { ClientContext } from "@osdk/shared.net";
import type {
  MultiLink,
  OntologyObject,
  ParameterValue,
} from "../baseTypes/index.js";
import type {
  GetLinkedObjectError,
  ListLinkedObjectsError,
} from "../errors/index.js";
import {
  getLinkedObject,
  getLinkedObjectNoErrors,
} from "../net/getLinkedObject.js";
import {
  listLinkedObjects,
  loadLinkedObjects,
} from "../net/listLinkedObjects.js";
import {
  pageLinkedObjects,
  pageLinkedObjectsOrThrow,
} from "../net/pageLinkedObjects.js";
import type { Page } from "../Page.js";
import type { Result } from "../Result.js";

export function createMultiLinkStep<T extends OntologyObject = OntologyObject>(
  client: ClientContext<any>,
  sourceApiName: string,
  sourcePrimaryKey: ParameterValue,
  targetApiName: string,
): MultiLink<T> {
  return {
    get(
      primaryKey: T["__primaryKey"],
    ): Promise<Result<T, GetLinkedObjectError>> {
      return getLinkedObject(
        client,
        sourceApiName,
        sourcePrimaryKey,
        targetApiName,
        primaryKey.toString(),
      );
    },
    fetchOneWithErrors(
      primaryKey: T["__primaryKey"],
    ): Promise<Result<T, GetLinkedObjectError>> {
      return getLinkedObject(
        client,
        sourceApiName,
        sourcePrimaryKey,
        targetApiName,
        primaryKey.toString(),
      );
    },
    fetchOne(
      primaryKey: T["__primaryKey"],
    ): Promise<T> {
      return getLinkedObjectNoErrors(
        client,
        sourceApiName,
        sourcePrimaryKey,
        targetApiName,
        primaryKey.toString(),
      );
    },
    all(): Promise<Result<T[], ListLinkedObjectsError>> {
      return listLinkedObjects(
        client,
        sourceApiName,
        sourcePrimaryKey,
        targetApiName,
      );
    },

    page(
      options?:
        | { pageSize?: number | undefined; pageToken?: string | undefined }
        | undefined,
    ): Promise<Result<Page<T>, ListLinkedObjectsError>> {
      return pageLinkedObjects(
        client,
        sourceApiName,
        sourcePrimaryKey,
        targetApiName,
        options,
      );
    },

    fetchPage(
      options?:
        | { pageSize?: number | undefined; pageToken?: string | undefined }
        | undefined,
    ): Promise<Page<T>> {
      return pageLinkedObjectsOrThrow(
        client,
        sourceApiName,
        sourcePrimaryKey,
        targetApiName,
        options,
      );
    },
    fetchPageWithErrors(
      options?:
        | { pageSize?: number | undefined; pageToken?: string | undefined }
        | undefined,
    ): Promise<Result<Page<T>, ListLinkedObjectsError>> {
      return pageLinkedObjects(
        client,
        sourceApiName,
        sourcePrimaryKey,
        targetApiName,
        options,
      );
    },
    asyncIter(): AsyncIterableIterator<T> {
      return loadLinkedObjects(
        client,
        sourceApiName,
        sourcePrimaryKey,
        targetApiName,
      );
    },
  };
}
