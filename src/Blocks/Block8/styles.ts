import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../types";

export const KiamoniBLock8Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: props => ({
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
        fontSize: theme.design.typography.h2
      }, [theme.breakpoints.down("md")]: {
        fontSize: theme.design.typography.h5
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
  headerContainer: {
    justifyContent: "space-between",
    gridColumn: "1/5",
    display: "flex",
    "&.layout_3": {
      [theme.breakpoints.down(1300)]: {
        gridColumn: "1 / 3",
      },
      [theme.breakpoints.down("sm")]: {
        gridColumn: "1 / 5",
      }
    },
    "&.layout_5": {
      padding: "30px"
    }
  },
  container: {
    width: "85%",
    margin: "auto",
    padding: "4% 0",
    maxWidth: theme.styles.maxWidth,
    display: "grid",
    gap: "30px",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
    "& .getHeader": {
      width: "40%",
      margin: "auto",
      textAlign: "center",
      "&.layout_1,&.layout_2,&.layout_3,&.layout_4": {
        gridColumn: "1 / 5",
        [theme.breakpoints.down("lg")]: {
          gridColumn: "1 / 3",
        }
      },
      "& img": {
        width: "45%",
        margin: "auto",
        minWidth: "150px"
      },
      "&.layout_5": {
        [theme.breakpoints.up("lg")]: {
          gridColumn: "1 / 3",
          margin: 0,
          textAlign: "left",
        }
      },
    },
    "&.layout_3": {
      [theme.breakpoints.down(1300)]: {
        gridColumn: "1 / 3",
        gridTemplateColumns: "repeat(2,1fr)",
        [theme.breakpoints.down("sm")]: {
          display: "flex",
          flexDirection: "column",
          "& h1": {
            width: "160px"
          }
        }
      }
    },
    "&.layout_2": {
      gridTemplateColumns: "repeat(3,1fr)",
      [theme.breakpoints.between("sm", "lg")]: {
        gridTemplateColumns: "repeat(2,1fr)",
      },
    },
    "& .layout_2": {
      "&:nth-child(1)": {
        gridColumn: "1 / 5",
      },
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "repeat(2,1fr)",
        "&:nth-child(2)": {
          gridColumn: "1 / 3",
        },
        "&:nth-child(1)": {
          gridColumn: "1 / 3"
        },
      },
      [theme.breakpoints.down("sm")]: {
        "&:nth-child(1)": {
          gridColumn: "1 / 5"
        },
      }
    },
  },
  buttonArrow: props => ({
    color: props?.colors?.[400],
    paddingLeft: "10px",
    display: "none"
  }),
  buttonContainer: props => ({
    width: "150px",
    height: "50px",
    margin: "auto",
    gridColumn: "1/5",
    "&.layout_2": {
      [theme.breakpoints.between("sm", "lg")]: {
        gridColumn: "1 / 3",
      },
    },
    "&.layout_3": {
      [theme.breakpoints.down(1300)]: {
        gridColumn: "1 / 3",
      }, [theme.breakpoints.down("sm")]: {
        gridColumn: "1 / 5",
      }
    },
    paddingTop: theme.spacing(3.5),
    "&:hover": {
      "& svg": {
        color: props?.colors?.[100],
      }
    },
  }),
  arrowContainer: {
    alignSelf: "center",
  },
  carouselWrapper: {
    gridColumn: "1/5",
  }
}))