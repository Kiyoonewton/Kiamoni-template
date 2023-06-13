import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../types";
export const useKiamoniBlock2Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: props => ({
    background: props?.colors?.[200],
    width: "100%",
  }),
  container: {
    width: "85%",
    height: "auto",
    maxWidth: theme.styles.maxWidth,
    margin: theme.spacing("auto", "auto"),
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down("lg")]: {
      width: "90%"
    },
    "&.layout_5, &.layout_6": {
      paddingTop: theme.spacing(0),
      fontSize: theme.typography.fontSize + 2,
    }
  },
  headingWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: props => ({
    display: "flex",
    color: props?.colors?.[100],
    fontFamily: props?.fonts?.heading,
    margin: "auto",
    fontSize: theme.design.typography.h1,
    fontWeight: theme.design.typography.fontWeightMedium,
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.design.typography.h2,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: theme.design.typography.h3,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.design.typography.h5,
    }
    , "&.layout_3": {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    "& p": {
      fontSize: theme.design.typography.h5,
      fontWeight: theme.typography.fontWeightRegular,
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.typography.fontSize + 2,
      },
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.fontSize,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSize - 2,
      }
    }
  }),
  headerImg: {
    maxWidth: "30%",
    minWidth: "20%",
    "&.layout_3": { paddingTop: theme.spacing(3) },
  },
  content: props => ({
    width: "60%",
    textAlign: "center",
    color: props?.colors?.[100],
    fontSize: theme.typography.fontSize + 2,
    fontFamily: props?.fonts?.body,
    paddingTop: theme.spacing(2.5),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: "32px",
    letterSpacing: "0.3px",
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize,
      width: "70%",
      lineHeight: "25px",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
      lineHeight: "21px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize - 2,
      width: "90%",
    },
  }),
  instagramImg: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    gridTemplateColumns: `repeat(3, 1fr)`,
    gridGap: theme.spacing(2.25),
    padding: theme.spacing(5, 0),
    "&.layout_2": {
      gridGap: 0
    },
    [theme.breakpoints.down("md")]: {
      gridGap: theme.spacing(1.25),
    },
    [theme.breakpoints.down("sm")]: {
      gridGap: theme.spacing(0.875),
      padding: theme.spacing(3, 0),
    },
    "&.layout_3": {
      gridTemplateColumns: `repeat(4, 1fr)`,
      gridGap: 0,
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: `repeat(3, 1fr)`,
      }
    },
    "&.layout_5, &.layout_6": {
      gridTemplateColumns: `repeat(5, 1fr)`,
      [theme.breakpoints.down("lg")]:
        { gridTemplateColumns: `repeat(4, 1fr)`, },
      [theme.breakpoints.down("sm")]:
        { gridTemplateColumns: `repeat(3, 1fr)`, }
    },
  },
  instagramImgs: {
    width: "100%",
    height: "auto",
  },
  instagramBanner: {
    width: "272px",
    height: "56px",
    backgroundImage: `url('https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Frame+421.svg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "auto",
    position: "relative",
    top: 68,
    [theme.breakpoints.down("lg")]: {
      top: 64,
      borderRadius: "10px"
    },
    [theme.breakpoints.down("md")]: {
      top: 58,
      width: "220px",
      height: "45px",
    },
    [theme.breakpoints.down("sm")]: {
      top: 40,
      width: "175px",
      height: "35px",
    }
  },
  instagramContent: props => ({
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3.4),
    fontFamily: props?.fonts?.body,
    "&  p": {
      color: props?.colors?.[100],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: theme.spacing(1.25),
      fontFamily: props?.fonts?.body,
      fontSize: theme.typography.fontSize + 6,
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.typography.fontSize + 2,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSize - 2,
      },
      "&  span": {
        backgroundColor: props?.colors?.[300],
        padding: theme.spacing(1.25),
        borderRadius: theme.spacing(1.25)
      }
    },
  }),
  instagramTag: props => ({
    color: props?.colors?.[100],
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(5),
    "&  p": {
      fontFamily: props?.fonts?.body,

    },
  }),
  kiamoniBrandName: {
    padding: theme.spacing(1.25),
    fontWeight: 600
  }
}))