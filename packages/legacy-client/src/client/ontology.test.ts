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
import { createClientContext } from "@osdk/shared.net";
import { MOCK_ORIGIN, MockOntology } from "@osdk/shared.test";
import { beforeEach, describe, expect, it } from "vitest";
import { USER_AGENT } from "../USER_AGENT.js";
import { createObjectSetCreator } from "./ontology.js";

describe(createObjectSetCreator, () => {
  let client: ClientContext<MockOntology>;

  beforeEach(() => {
    try {
      client = createClientContext(
        MockOntology,
        MOCK_ORIGIN,
        () => "Token",
        USER_AGENT,
        fetch,
      );
    } catch (e) {
      console.error(e);
    }
  });

  it("has an enumerable list of object types", () => {
    const objectSetCreator = createObjectSetCreator(client);
    expect(Object.getOwnPropertyNames(objectSetCreator)).toMatchInlineSnapshot(`
      [
        "Task",
        "Todo",
        "ObjectTypeWithAllPropertyTypes",
        "ObjectTypeWithReservedNames",
      ]
    `);
  });
});
