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

import { createClientContext } from "@osdk/shared.net";
import type { Logger } from "pino";
import type {
  MinimalClient,
  MinimalClientParams,
} from "./MinimalClientContext.js";
import { createObjectSet } from "./objectSet/createObjectSet.js";
import type { ObjectSetFactory } from "./objectSet/ObjectSetFactory.js";
import {
  createStandardOntologyProviderFactory,
  type OntologyCachingOptions,
} from "./ontology/StandardOntologyProvider.js";
import { USER_AGENT } from "./util/UserAgent.js";

export function createMinimalClient(
  metadata: MinimalClientParams["metadata"],
  stack: string,
  tokenProvider: () => Promise<string> | string,
  options: OntologyCachingOptions & { logger?: Logger } = {},
  fetchFn: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => Promise<Response> = global.fetch,
  objectSetFactory: ObjectSetFactory<any, any> = createObjectSet,
) {
  if (process?.env?.NODE_ENV !== "production") {
    try {
      new URL(stack);
    } catch (e) {
      const hint = !stack.startsWith("http://") || !stack.startsWith("https://")
        ? ". Did you forget to add 'http://' or 'https://'?"
        : "";
      throw new Error(`Invalid stack URL: ${stack}${hint}`);
    }
  }
  const clientCtx: MinimalClient = {
    ...createClientContext(
      {
        metadata: {
          ...metadata,
          userAgent: "", // ontology specific user agent injected elsewhere
        },
      },
      stack,
      tokenProvider,
      USER_AGENT,
      fetchFn,
    ),
    objectSetFactory,
    ontologyRid: metadata.ontologyRid,
    ontologyProvider: undefined as any,
    logger: options.logger,
  };
  clientCtx.ontologyProvider = createStandardOntologyProviderFactory(
    options,
  )(clientCtx);
  return clientCtx;
}
