import { ClassNameMap } from "@mui/material";

export type DisplayLinkProps = {
  content: { [key: string]: any };
  classes: ClassNameMap;
  path?: string;
};