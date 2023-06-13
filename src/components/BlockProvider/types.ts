import { ReactNode } from "react";

export type BlockProviderProps = {
  mainConfig?: {
    colors: { [key: string]: string };
    fonts: any;
  },
  buttonConfig?: {
    colors: { [key: string]: string };
    fonts: any;
  };
  animations?: {
    name: string;
    isSelected: boolean;
  }[];
  children?: ReactNode;
};