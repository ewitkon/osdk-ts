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

import type { PropertyOrdering } from "./PropertyOrdering.js";

/**
 * Ordering which causes objects to be returned in an order determined by values of provided properties in set
 * order. If property ordering is empty, the results will be sorted in an unspecified but deterministic order
 */
export interface PropertyValueResultOrdering {
  propertyOrdering: Array<PropertyOrdering>;
}
