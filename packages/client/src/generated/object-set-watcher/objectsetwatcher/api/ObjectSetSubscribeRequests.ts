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

import type { ObjectSetSubscribeRequest } from "./ObjectSetSubscribeRequest.js";
import type { RequestId } from "./RequestId.js";

/**
 * The list of object sets that should be subscribed to. A client can stop subscribing to an object set by removing the
 * request from subsequent ObjectSetSubscribeRequests.
 */
export interface ObjectSetSubscribeRequests {
  requests: Array<ObjectSetSubscribeRequest>;
  id: RequestId;
}
