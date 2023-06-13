import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../../types";

export const useFooterContentStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  footerContentContainer: props => ({
    position: "relative",
    maxWidth: theme.styles.maxWidth,
    margin: "auto",
    width: "85%",
    justifyItems: "center",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    alignItems: "center",
    gap: theme.spacing(2.5),
    "@media(max-width:1300px)": {
      width: "90%"
    },
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "60% 40%",
      justifyContent: "flex-start",
      gap: 0,
      "&.layout_3": {
        "& > *:nth-child(5)": {
          marginTop: theme.spacing(5)
        },
      },
      "&.layout_4": {
        margin: theme.spacing(0, 6),
        justifyContent: "space-evenly"
      }
    },
    '@media(max-width:700px)':
    {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing(6.25),
      marginTop: theme.spacing(3.75)
    },
    "&.layout_3,&.layout_4,&.layout_5": {
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 0,
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "60% 40%",
        justifyContent: "center"
      },
      "@media(max-width:520px)": {
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(5)
      },
      "& p": {
        justifyContent: "flex-start",
      }
    },
    "& p": {
      color: props?.colors?.[100],
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up("lg")]: {
        justifyContent: "center",
      }
    },
  }),
  footerContentContainerLogo: {
    [theme.breakpoints.up("lg")]: {
      gridColumn: "1 / 4",
      gridRow: "1/2",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(1.25),
    },
    [theme.breakpoints.down("lg")]: {
      justifySelf: "flex-start",
      alignSelf: "flex-start",
      marginTop: `-${theme.spacing(2.125)}`,
      "&.layout_3,&.layout_4,&.layout_5": {
        gridRow: "1/2",
      }
    },
    [theme.breakpoints.down("sm")]: {
      alignSelf: "flex-start",
    },
    "&.layout_3,&.layout_4,&.layout_5": {
      gridColumn: "1 / 2",
      margin: theme.spacing(0, 0, 5),
      justifySelf: "flex-start",
      alignSelf: "flex-start",
      "& img": {
        padding: theme.spacing(0, 0, 2)
      },
    },
    "& img": {
      padding: theme.spacing(0, 0, 2),
      [theme.breakpoints.up("lg")]: {
        padding: theme.spacing(1.9)
      }
    },
  },
  footerContentContainerLower: props => ({
    display: "grid",
    gridTemplateColumns: "30% 30% 30%",
    color: props?.colors?.[100],
    justifyContent: "space-evenly",
    margin: "auto",
    maxWidth: theme.styles.maxWidth,
    width: "85%",
  }),
  footerSocialContent: props => ({
    justifyContent: "center",
    margin: "auto",
    marginBottom: theme.spacing(3),
    color: props?.colors?.[100],
    paddingTop: theme.spacing(2.5),
    display: "none",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("lg")]: {
      marginBottom: 0,
    },
    "&.layout_3,&.layout_4,&.layout_5": {
      display: "flex",
      paddingTop: `${0}!important`,
      justifyContent: "left",
    },
    "&.layout_3,&.layout_5": {
      paddingTop: theme.spacing(8),
      [theme.breakpoints.down("lg")]: {
        paddingTop: 0,
      },
    },
    "@media(max-width:700px)": {
      "&.layout_4,&.layout_5": {
        paddingTop: `${theme.spacing(5)}!important`,
      },
      "&.layout_3": {
        marginBottom: `0px !important`,
      }
    }
  }),
  second: {
    [theme.breakpoints.down("lg")]: {
      gridRow: "3/5 !important",
      "&.layout_4, &.layout_3": {
        marginTop: theme.spacing(5)
      },
      "&.layout_5": {
        paddingTop: theme.spacing(6),
        "@media(max-width:520px)": {
          paddingTop: theme.spacing(0),
        }
      },
    },
    "@media(max-width:700px)": {
      "&.layout_4,&.layout_5": {
        marginTop: `${0} !important`,
        paddingTop: theme.spacing(0),
      }
    }
  },
  footerShoppingLinks: props => ({
    "& a": {
      color: props?.colors?.[100],
      textDecoration: "none",
      display: "block",
      paddingTop: theme.spacing(3),
      cursor: "pointer",
      "@media(max-width:520px)": {
        paddingTop: theme.spacing(2),
      }
    }
  }),
}))