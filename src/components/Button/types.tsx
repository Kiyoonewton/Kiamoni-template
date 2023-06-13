import { ReactNode } from "react";
export type ButtonProps = {
  type: "primary" | "secondary" | "tertiary";
  destination: string;
  children: ReactNode;
};
