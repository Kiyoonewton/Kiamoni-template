import { FC } from "react";

export type KiamoniPropType = {
  index?: number;
  mode?: "view" | "edit";
  activeElement?: string;
  handleSelect?: (index: number) => void;
  isSsr?: boolean;
  content: {
    [key: string]: any;
  };
  ssr_network_operation?: string;
  layouts?: { name: string; isSelected: boolean }[];
  animations?: {
    name: string;
    isSelected: boolean;
  }[];
  configuration?: {
    colors: {
      [key: string]: any;
    };
    fonts: {
      [key in "heading" | "body" | "misc"]: string;
    };
  };
};

export type KiamoniTemplateType = {
  name: string;
  component: FC<KiamoniPropType>;
  props: KiamoniPropType;
}

export type CustomThemeProps = {
  colors: {
    [key: string]: any
  };
  fonts: {
    heading: string,
    body: string,
    misc?: string,
  }
}