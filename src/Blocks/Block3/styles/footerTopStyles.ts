import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../../types";

export const useFooterTopStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  footerLocation: {
    gridRow: "2 / 4",
    display: "flex",
    flexDirection: "column",
    justifySelf: "flex-start",
    alignSelf: "flex-start",
    gap: theme.spacing(3.5),
    "& a": {
      display: "flex",
      gap: theme.spacing(1.25),
      textDecoration: "none",
    },
    "& img": { margin: 0 },
    "& p": {
      margin: 0,
      "&.layout_3,&.layout_4,&.layout_5": {
        gridRow: "2 / 3",
        padding: theme.spacing(1.5, 1.5),
      },
    },
    [theme.breakpoints.down("lg")]: {
      gridRow: "1 / 2 !important",
      gridColumn: "2 / 3",
      "&.layout_3,&.layout_4,&.layout_5": {
        gridColumn: "1 / 2",
        gridRow: "2 / 3 !important",
      },
    },
    "&.layout_3,&.layout_4,&.layout_5": {
      display: "grid",
      gap: theme.spacing(2.5),
      gridRow: "2/ 3",
      [theme.breakpoints.down("lg")]: {
        gridRow: "2/3",
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1.25),
      },
    },
  },
  footerLocationCenter: {
    display: "block",
    gridColumn: "2 / 3",
    gridRow: "2/3",
    marginTop: `-${theme.spacing(4)}`,
    [theme.breakpoints.down("lg")]: {
      display: "none",
      gridColumn: "1 / 2",
      gridRow: "3/4",
      position: "unset",
      top: 0,
      "&.layout_3": {
        "& p": {
          display: "none"
        },
      },
      "&.layout_4": {
        justifySelf: "flex-start !important",
        paddingTop: theme.spacing(5),
        "@media(max-width:700px)": {
          paddingTop: 0
        }
      },
      "&.layout_5": {
        "@media(min-width:700px)": {
          paddingTop: theme.spacing(6),
        },
        justifySelf: "flex-start !important",
        "& div": {
          gap: theme.spacing(1.5),
          justifyContent: "flex-start"
        }
      }
    },
    "&.layout_3,&.layout_4,&.layout_5": {
      marginTop: "unset",
      gridRow: "1 / 2",
      gridColumn: "4 / 5",
      alignSelf: "flex-start",
      justifySelf: "flex-start",
      [theme.breakpoints.down("lg")]: {
        gridRow: "3 / 4", gridColumn: "1 / 2",
        display: "block"
      },
      "& h6": {
        marginBottom: `${theme.spacing(2.5)}!important`
      }
    },
    "&.layout_4,&.layout_5": {
      justifySelf: "flex-end",
      width: "250px"
    },
    "& div": {
      display: "flex",
      justifyContent: "space-evenly",
      "&.layout_3,&.layout_4": {
        gap: theme.spacing(2.5),
        justifyContent: "flex-start"
      },
      "&.layout_5": {
        justifyContent: "space-between",
        width: "200px"
      },
      [theme.breakpoints.down("sm")]: {
        justifyContent: "space-between",
      }
    },
    "& img": {
      padding: theme.spacing(0.625)
    },
  },
  footerLocationRight: {
    placeSelf: "flex-start flex-end",
    whiteSpace: "nowrap",
    display: "grid",
    gap: theme.spacing(3.5),
    "& div": {
      display: "flex",
      gap: theme.spacing(1.25),
    },
    "& img": {
      margin: 0
    },
    "& p": {
      margin: 0
    },
    [theme.breakpoints.down("lg")]: {
      gridRow: "2 / 4",
      gridColumn: "2/3",
      placeSelf: "flex-end flex-start",
      "&.layout_3": {
        display: "none"
      }
    },
    '@media(max-width:520px)': {
      alignSelf: "flex-start",
      marginTop: theme.spacing(5.625),
      "&.layout_3": {
        marginTop: theme.spacing(5.625),
      }
    },
    '@media(max-width:700px)': {
      alignSelf: "flex-start",
      marginTop: 0,
      "&.layout_3": {
        marginTop: theme.spacing(4),
        display: "grid",
        "& h6": {
          marginBottom: "0px !important"
        }
      },
      "&.layout_3,&.layout_4,&.layout_5": {
        "& h6": {
          marginBottom: `${theme.spacing(2)}!important`
        }
      }
    },
    "&.layout_4,&.layout_5": {
      [theme.breakpoints.down("lg")]: {
        gridColumn: "1/2",
        gridRow: "4/5",
      },
      gap: theme.spacing(1.8),
      gridColumn: "4/5",
      gridRow: "2/3",
      textAlign: "left",
    },
    "& > h6": {
      margin: 0,
    },
  },
  footerDate: {
    padding: theme.spacing(0.375)
  },
  scheduleTime: {
    fontWeight: `${theme.design.typography.fontWeightSmall}!important`,
    fontSize: theme.typography.fontSize,
    paddingLeft: theme.spacing(0.8),
  },
  footerContainer: {
    maxWidth: theme.styles.maxWidth,
    width: "80%",
    margin: theme.spacing("auto", "auto"),
    "&.layout_2, &.layout_5": {
      width: "100%",
    }
  },
}))