import { useMediaQuery, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";

export const useLayoutParameter = (
  layouts: { name: string; isSelected: boolean }[] | undefined
) => {
  const location = useLocation();
  const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const queryParam = params.get("layout");
  const selectedLayout = !queryParam
    ? layouts?.find((c) => c.isSelected)?.name
    : layouts?.find((c) => c.name === queryParam)?.name;
  const layoutClass = selectedLayout?.replace(/-/g, "_");
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down(600));
  const xmd = useMediaQuery(theme.breakpoints.down(700));
  const path = location.pathname;

  return { path, selectedLayout, layoutClass, theme, lg, sm, md, xmd };
};
