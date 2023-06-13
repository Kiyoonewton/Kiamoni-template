import { makeStyles } from "@mui/styles"
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../types";

export const useKiamoniBlockStyles4 = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: props => ({
    color: props?.colors?.[100],
    width: "100%",
    background: props?.colors?.[200],
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

  }),
  container: {
    width: "85%",
    maxWidth: theme.styles.maxWidth,
    margin: "auto",
    [theme.breakpoints.down("lg")]: {
      width: "90%"
    },
  },
  contentContainer: {
    width: "100%",
    gap: theme.spacing(5),
    alignItems: "center",
    padding: theme.spacing(8, 0),
    [theme.breakpoints.down("lg")]: {
      gap: theme.spacing(3.75)
    },
    "&.layout_3": {
      [theme.breakpoints.down("md")]: {
        gap: theme.spacing(2)
      },
    }
  },
  paragraph: {
    fontSize: theme.typography.fontSize + 2,
    lineHeight: "30px",
  },
  heading: {
    margin: "auto",
    "& p": {
      paddingTop: theme.spacing(2.5),
      [theme.breakpoints.down("md")]:
        { lineHeight: "21px" },
    },
  },
  contentWrapper: props => ({
    background: props?.colors?.[700],
    display: "grid",
    padding: theme.spacing(6.25, 5),
    boxSizing: "border-box",
    boxShadow: "0 4px 12px  rgba(20, 20, 21, 0.4)",
    gap: theme.spacing(2.5),
    [theme.breakpoints.down("lg")]: { padding: theme.spacing(2.5) },
    [theme.breakpoints.down("md")]: { padding: theme.spacing(1.15) },
    "& p": {
      fontSize: theme.typography.fontSize + 2, lineHeight: "30px",
      fontWeight: theme.typography.fontWeightRegular,
      color: props?.colors?.[400],
      [theme.breakpoints.down("lg")]: {
        lineHeight: "21px",
        fontSize: theme.typography.fontSize,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSize
      },
    },
    "& div": {
      display: "flex",
      justifyContent: "space-between",
      "& h4": {
        alignSelf: "flex-end",
        fontSize: theme.typography.fontSize + 6,
        fontWeight: theme.design.typography.fontWeightMedium,
        [theme.breakpoints.down("lg")]: {
          fontSize: theme.typography.fontSize + 2,
        },
      },
      "& img": {
        minWidth: "75px",
        width: "20%",
        [theme.breakpoints.down("lg")]: {
          minWidth: "55px",
        }, [theme.breakpoints.down("sm")]: {
          width: "48px",
        }
      },
    },
    "&.layout_2,&.layout_3,&.layout_4,&.layout_5,": {
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(3.75)
      }
    },
    "&.layout_3,": {
      [theme.breakpoints.down("md")]: {
        padding: `${theme.spacing(2)} !important`
      }
    },
    "&.layout_1,": {
      [theme.breakpoints.down("md")]: {
        padding: `${theme.spacing(4.5)} !important`
      }
    }
  }),
}))