import { CoreMenuFields, CoreMenuFields_menuCategories, CoreMenuFields_menuItems } from "../../models";

export type ItemProps = {
  name: string;
  image_url: string;
  rating: number;
  price: string;
  favorite?: boolean;
  uuid: string;
  currency: string;
  __typename: string,
}

export type MenuItemProps = {
  uuid: string;
  name: string;
  menuItems: ItemProps[]
}

export interface DataProps extends CoreMenuFields {
  activeMenuCategories: CoreMenuFields_menuCategories
  activeMenuItems: CoreMenuFields_menuItems[]
}
