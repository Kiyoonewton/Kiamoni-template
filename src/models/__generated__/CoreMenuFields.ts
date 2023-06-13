/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CoreRestaurantFields } from "./CoreRestaurantFields";

// ====================================================
// GraphQL fragment: CoreMenuFields
// ====================================================

export interface CoreMenuFields_options_config_options_selection {
  name: string;
  amount: number;
}

export interface CoreMenuFields_options_config_options_deselection {
  name: string;
  amount: number;
}

export interface CoreMenuFields_options_config_options_extras {
  name: string;
  amount: number;
}

export interface CoreMenuFields_options_config_options {
  selection: (CoreMenuFields_options_config_options_selection | null)[];
  deselection: (CoreMenuFields_options_config_options_deselection | null)[];
  extras: (CoreMenuFields_options_config_options_extras | null)[];
}

export interface CoreMenuFields_options_config {
  uuid: string;
  name: string;
  type: string;
  options: CoreMenuFields_options_config_options;
}

export interface CoreMenuFields_menuItems_menuCategory {
  uuid: string;
  title: string;
}

export interface CoreMenuFields_menuItems {
  uuid: string;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
  options: string[] | null;
  menuCategory: Partial<CoreMenuFields_menuItems_menuCategory> | null;
}

export interface CoreMenuFields_menuCategories {
  uuid: string;
  title: string;
  description?: string;
}

export interface CoreMenuFields {
  uuid: string;
  name: string;
  options_config: (CoreMenuFields_options_config | null)[] | null;
  menuItems: CoreMenuFields_menuItems[];
  menuCategories: CoreMenuFields_menuCategories[];
  restaurant: CoreRestaurantFields;
  __typename: string;
  image?: string
}
