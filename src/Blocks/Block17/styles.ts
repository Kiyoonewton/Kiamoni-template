import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../types";

export const useKiamoniBlock17Styles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    root: (props) => ({
      width: "100%",
      fontFamily: props?.fonts?.body,
      background: props?.colors?.[200],
      color: props?.colors?.[100],
      "& h1": {
        margin: 0,
        fontSize: theme.design.typography.h1,
        whiteSpace: "nowrap",
        userSelect: "none",
        [theme.breakpoints.down("lg")]: {
          fontSize: theme.design.typography.h2,
        },
        [theme.breakpoints.down("md")]: {
          fontSize: theme.design.typography.h5,
        },
      },
      "& p": {
        lineHeight: "24px",
        lineSpace: "0.2px",
        fontFamily: "inherit",
        fontSize: theme.typography.fontSize,
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.fontSize - 2,
          lineHeight: "18px",
        },
        userSelect: "none",
      },
      "& h6": {
        lineHeight: "30px",
        lineSpace: "0.2px",
        fontFamily: "inherit",
        fontSize: theme.design.typography.h5,
        fontWeight: theme.design.typography.fontWeightMedium,
        [theme.breakpoints.down("lg")]: {
          fontSize: theme.typography.fontSize,
          lineHeight: "24px",
        },
        [theme.breakpoints.down("md")]: {
          lineHeight: "18px",
        },
        userSelect: "none",
      },
    }),
    container: {
      width: "85%",
      margin: "auto",
      padding: "4%",
      maxWidth: theme.styles.maxWidth,
    //   display: "grid",
    //   gap: "30px",
    //   gridTemplateColumns:"repeat(3,1fr)"
    },
  })
);
