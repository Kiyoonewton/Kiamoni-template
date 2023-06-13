import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../../types";

export const useKiamoniBlock3styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: props => ({
    position: "relative",
    width: "100%",
    fontFamily: props?.fonts?.body,
    "& span": {
      fontWeight: theme.design.typography.fontWeightMedium,
    },
    "&.layout_2, &.layout_5": {
      background: props?.colors?.[200],
    },
    "& h1": {
      fontSize: theme.design.typography.h3,
      [theme.breakpoints.down("md")]: {
        fontSize: `${theme.design.typography.h5} !important`,
      }
    },
    "& h6": {
      fontSize: theme.design.typography.h5,
      [theme.breakpoints.down("md")]: {
        fontSize: `${theme.design.typography.h6} !important`,
      }
    },
    "& p,& a": {
      fontFamily: "inherit",
      fontSize: theme.typography.fontSize + 2,
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.fontSize,
      },
    },
  }),
  footerSocial: {
    "& a": {
      cursor: "pointer",
      display: "flex",
      textDecoration: "none",
    },
    "&.layout_3": {
      "&  p": {
        [theme.breakpoints.up("lg")]: {
          display: "flex !important"
        },
      },
    },
    "&.layout_2": {
      [theme.breakpoints.down("lg")]: {
        display: "none !important"
      },
    },
    [theme.breakpoints.down("lg")]: {
      display: "none "
    },
    "&.layout_4, &.layout_5": {
      "& p": {
        display: "none"
      },
    },
  },
  footerContainerTop: props => ({
    "&.layout_2, &.layout_5": {
      background: props?.colors?.[200],
      maxWidth: theme.styles.maxWidth,
      margin: "auto",
      width: "100%",
      position: "unset",
      transform: "translateX(0%)",
    },
    background: props?.colors?.[200],
    width: "65%",
    minWidth: 900,
    maxWidth: 1400,
    position: "absolute",
    top: 0,
    zIndex: 3,
    padding: theme.spacing(7.5, 20),
    left: "50%",
    transform: "translateX(-50%)",
    boxSizing: "border-box",
    "& h1": {
      marginTop: 0
    },
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(8, 10),
      width: "90%",
      minWidth: 300
    },
    '@media(max-width:710px)': {
      maxWidth: "83%",
      padding: theme.spacing(2.5, 3),
    }
  }),
  footerContainerBottom: props => ({
    padding: theme.spacing(10, 0),
    background: props?.colors?.[300],
    paddingTop: theme.spacing(16),
    position: "relative",
    top: "100px",
    "&.layout_3": {
      top: 0,
      paddingTop: theme.spacing(10)
    },
    "&.layout_2,&.layout_5": {
      padding: theme.spacing(10, 0),
      top: 0
    },
    "&.layout_4": {
      paddingTop: theme.spacing(25),
    },
    [theme.breakpoints.down("lg")]: {
      paddingTop: theme.spacing(35),
      "&.layout_4": {
        paddingTop: theme.spacing(30),
      }
    },
    "&.layout_2": {
      [theme.breakpoints.up("lg")]: {
        padding: `${theme.spacing(1.25, 0, 10)}!important`,
      },
      "@media(max-width:710px)": {
        paddingTop: `${theme.spacing(4)}!important`,
      }
    },
    "@media(max-width:710px)": {
      paddingTop: `${theme.spacing(22)}!important`,
      "&.layout_3, &.layout_5": {
        paddingTop: `${theme.spacing(8)}!important`
      },
    },
    "@media(max-width:520px)": {
      paddingTop: `${theme.spacing(32)}!important`,
      [theme.breakpoints.down("sm")]: {
        paddingTop: `${theme.spacing(27)}!important`
      },
    }
  }),
  footerTop: props => ({
    display: 'flex',
    color: props?.colors?.[100],
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px", margin: "auto",
    marginTop: theme.spacing(0),
    [theme.breakpoints.down("lg")]: {
      display: "block"
    },
  }),
  footerTopHeader: props => ({
    minWidth: "376px",
    width: "100%",
    "&.layout_2, &.layout_5": {
      "& p": {
        margin: theme.spacing(2.5, 0, 3.75, 0)
      },
    },
    [theme.breakpoints.down("lg")]: {
      "& p": {
        marginBottom: theme.spacing(3.75)
      },
    },
    '@media(max-width:700px)': {
      minWidth: "108px",
    },
    "& p": {
      color: props?.colors?.[400]
    },
  }),
  footerShopping: {
    marginTop: "-145px",
    gridRow: " 1 / 3 ",
    "&.layout_3,&.layout_4,&.layout_5": {
      alignSelf: "flex-start",
      marginTop: 0,
      gridRow: "1 / 3",
      [theme.breakpoints.down("lg")]: {
        gridRow: "1 / 3",
      },
      "@media(max-width:520px)": {
        marginTop: theme.spacing(5),
        "&.layout_4,&.layout_5": {
          marginTop: 0
        }
      },
    },
    "&.layout_3": {
      "@media(max-width:700px)": {
        marginTop: theme.spacing(5),
      },
    }
  },
}))