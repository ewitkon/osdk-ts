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

import type { AllPropertiesPropertySetV2 } from "./AllPropertiesPropertySetV2.js";
import type { SelectedPropertiesPropertySetV2 } from "./SelectedPropertiesPropertySetV2.js";
import type { SelectedTypesPropertySetV2 } from "./SelectedTypesPropertySetV2.js";
export interface PropertySetV2_selected {
  type: "selected";
  selected: SelectedPropertiesPropertySetV2;
}

export interface PropertySetV2_selectedTypes {
  type: "selectedTypes";
  selectedTypes: SelectedTypesPropertySetV2;
}

export interface PropertySetV2_allProperties {
  type: "allProperties";
  allProperties: AllPropertiesPropertySetV2;
}
/**
 * Specification of a subset of properties to load.
 */
export type PropertySetV2 =
  | PropertySetV2_selected
  | PropertySetV2_selectedTypes
  | PropertySetV2_allProperties;
