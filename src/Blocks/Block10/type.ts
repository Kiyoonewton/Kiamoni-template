import { CoreMenuFields, CoreMenuFields_menuCategories, CoreMenuFields_menuItems } from "../../models";

export type CardLayoutProps = {
  image: string;
  uuid: string;
  title: string;
  description?: string;
}

export interface DataProps extends CoreMenuFields {
  activeMenuCategories: CoreMenuFields_menuCategories
  activeMenuItems: CoreMenuFields_menuItems[]
}