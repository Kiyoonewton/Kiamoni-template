import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../types";

export const useKiamoniBlock7Style = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: props => ({
    width: "100%",
    fontFamily: props?.fonts?.body,
    background: props?.colors?.[200],
    color: props?.colors?.[100],
    "& h1": {
      margin: 0,
      fontSize: theme.design.typography.h1,
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.design.typography.h2
      }, [theme.breakpoints.down("md")]: {
        fontSize: theme.design.typography.h5
      },
      [theme.breakpoints.down(600)]: {
        textAlign: "center"
      }
    },
    "& p": {
      lineHeight: "25px",
      lineSpace: "0.2px",
      fontFamily: "inherit",
      fontSize: theme.typography.fontSize + 2,
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.typography.fontSize,
        lineHeight: "21px",
      }, [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.fontSize - 2
      },
    }
  }),
  container: props => ({
    maxWidth: theme.styles.maxWidth,
    padding: theme.spacing(6, 0, 6),
    width: "85%", margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: theme.spacing(2.875),
    "&.layout_4": {
      gridTemplateColumns: "1fr",
    },
    [theme.breakpoints.down(800)]: {
      width: "90%",
    },
    "& > div": {
      width: "100%", height: "100%",
    },
    "& .cardBorder": {
      border: `1px solid ${props?.colors?.[300]}`,
      height: "100%",
      "&:hover": {
        background: theme.design.background.overlay600,
      },
    },
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(3,1fr)",
      "& > div > div > p": {
        paddingTop: 0,
        margin: "0 auto",
      },
    },
    [theme.breakpoints.down(600)]: {
      gridTemplateColumns: "repeat(2,1fr)",
    }
  }),
  carouselContainer: {
    gridColumn: "1/5"
  },
  headerWrapper: {
    gridColumn: "1/4",
    [theme.breakpoints.between(1023, 1550)]: {
      gridColumn: "1/5",
      textAlign: "center",
      "&.layout_3, &.layout_5": {
        gridColumn: "1/4",
        textAlign: "left",
      }
    },
    "&.layout_2": {
      width: "60%",
      maxWidth: "700px", minWidth: "300px",
      gridColumn: "1/-1",
      margin: "auto",
      textAlign: "center",
      [theme.breakpoints.down("lg")]: {
        width: "80%",
      },
      [theme.breakpoints.down(600)]: {
        width: "90%",
        gridColumn: "1/3",
      }
    },
    [theme.breakpoints.down("lg")]: {
      margin: "auto",
      textAlign: "center",
      "&.layout_3,&.layout_4,&.layout_5": {
        gridColumn: "1/3", textAlign: "left",
      },
    },
    [theme.breakpoints.down(600)]: {
      gridColumn: "1/3",
      gridRow: "1/2",
      "&.layout_3,&.layout_5": {
        textAlign: "center"
      },
    },
    "&.layout_4": {
      gridColumn: "1/5",
      display: "flex",
      gap: theme.spacing(1.875),
      justifyContent: "space-between",
      textAlign: "left",
      [theme.breakpoints.down(600)]: {
        textAlign: "center"
      },
    }
  },
  adContainer: {
    gridColumn: "4/5",
    gridRow: "1/3",
    width: "100%",
    alignSelf: "flex-start",
    objectFit: "cover",
    [theme.breakpoints.between(1023, 1550)]: {
      gridRow: "2/3",
    },
    "&.layout_5": {
      gridColumn: "1/-1",
      gridRow: "2/3",
      [theme.breakpoints.down(600)]: {
        gridColumn: "1/3",
      }
    },
    [theme.breakpoints.down("lg")]: {
      gridRow: "2/3",
      gridColumn: "3/4",
    },
    [theme.breakpoints.down(600)]: {
      gridColumn: "2/3",
    }
  },
  buttonContainer: {
    width: "150px !important",
    height: "50px !important",
    margin: "auto",
    gridColumn: "1/5",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("lg")]: {
      gridColumn: "1/4",
    },
    "&.layout_3,&.layout_5": {
      gridColumn: "-2/-1",
      gridRow: "1/2",
      margin: 'auto 0 ',
      marginLeft: "auto",
      [theme.breakpoints.down(600)]: {
        gridColumn: "1/3",
        gridRow: "6/7",
        margin: "auto"
      }
    },
    [theme.breakpoints.down(600)]: {
      gridColumn: "1/3",
      gridRow: "6/7",
    },
    "&.layout_5": {
      [theme.breakpoints.down(600)]: {
        gridRow: "7/8 !important",
      }
    },
    "&.layout_4": {
      gridColumn: "1/5",
      gridRow: "3/4"
    }
  },
  arrowContainer: {
    width: "unset !important",
    gridColumn: "-2/-1",
    gridRow: "1/2",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonArrow: {
    marginLeft: "10px",
    width: "20px", height: "15px"
  },
  adContinerVertical: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
  },
}))