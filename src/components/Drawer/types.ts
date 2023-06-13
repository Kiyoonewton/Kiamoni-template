import { ReactNode } from "react";

export type DrawerProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  hasSearchBar: boolean;
  active: boolean;
  value: string;
  onChange: (value: string) => void;
};
