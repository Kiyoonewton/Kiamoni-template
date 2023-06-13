import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../types";

export const useKiamoniBlock11Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: props => ({
    width: "100%",
    background: props?.colors?.[100],
    padding: theme.spacing(8, 0),
    "&.layout_4": {
      padding: 0
    },
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(3, 0),
    },
    "& h1, h4, p": {
      margin: 0,
      padding: 0,
      lineSpace: "0.2px",
      fontFamily: props?.fonts?.body
    },
    "& h1": {
      fontSize: theme.design.typography.h1,
      fontWeight: theme.design.typography.fontWeightMedium,
      lineHeight: "48px",
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.design.typography.h4, lineHeight: "40px"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.design.typography.h5, lineHeight: "30px"
      },
      "& p": {
        fontSize: theme.typography.fontSize + 2, lineHeight: "30px",
        [theme.breakpoints.down("lg")]: {
          lineHeight: "21px",
          fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: `${theme.typography.fontSize} !important`,
          lineHeight: "21px",
        },
      }
    },
    "& p": {
      fontSize: theme.typography.fontSize + 2,
      lineHeight: "30px",
      [theme.breakpoints.down("sm")]: {
        fontSize: `${theme.typography.fontSize}px!important`,
        lineHeight: "21px",
      },
    },
    "&.layout_2": {
      "& p": {
        color: props?.colors?.[100]
      }
    },
    "& h4": {
      fontSize: theme.design.typography.h4,
      fontWeight: theme.design.typography.fontWeightSmall,
      lineHeight: "30px",
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.design.typography.h5,
        lineHeight: "21px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.design.typography.h6,
        lineHeight: "21px",
      },
    },
  }),
  container: {
    margin: "auto",
    width: "100%",
    maxWidth: "unset"
  },
  carouselContainer: {
    width: "100%",
    height: "100%"
  }
}))