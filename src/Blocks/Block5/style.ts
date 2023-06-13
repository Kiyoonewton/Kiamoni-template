import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material"
import { CustomThemeProps } from "../../../types";

export const useKiamoniBlock5Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: props => ({
    width: "100%",
    padding: "24.5% 0",
    overflow: "hidden",
    fontFamily: props?.fonts?.body,
    background: "transparent",
    color: props?.colors?.[100],
    [theme.breakpoints.down("lg")]: {
      padding: "28% 0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "37.5% 0",
    },
    position: "relative",
    "& h1": {
      margin: 0,
      width: "100%",
      fontSize: theme.typography.fontSize * 5,
      [theme.breakpoints.between(1023, 1250)]: {
        fontSize: theme.typography.fontSize * 3.7,
      },
      [theme.breakpoints.between(1250, 1385)]: {
        fontSize: theme.typography.fontSize * 4.2,
      },
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.design.typography.h1
      },
      [theme.breakpoints.down("md")]: {
        fontSize: theme.design.typography.h3
      },
      [theme.breakpoints.down(600)]: {
        fontSize: theme.design.typography.h5
      },
    },
    "& p": {
      lineHeight: "40px",
      lineSpace: "0.2px",
      fontFamily: "inherit",
      fontSize: theme.design.typography.h4,
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.typography.fontSize + 4,
        lineHeight: "21px",
        padding: theme.spacing(1.25, 0),
      }, [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.fontSize
      },
      [theme.breakpoints.down(600)]: {
        fontSize: theme.typography.fontSize - 2,
        padding: theme.spacing(0.875, 0),
      },
      [theme.breakpoints.between(1250, 1385)]: {
        fontSize: theme.typography.fontSize * 1.85,
      },
      [theme.breakpoints.between(1024, 1250)]: {
        fontSize: theme.typography.fontSize + 4,
      },
    }
  }),
  backgroundContainer: {
    height: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "59% bottom",
    },
    "&.layout_2,&.layout_3": {
      height: "90%",
      backgroundSize: "155%",
      backgroundPosition: "center top",
      [theme.breakpoints.down(1250)]: {
        height: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        height: "95%",
      }
    }
  },
  spinner: {
    "&.layout_4": {
      marginTop: "-40.5%",
      marginLeft: "2.7%",
      width: "100%",
      [theme.breakpoints.down("lg")]: {
        marginTop: "-37.5%",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "-35%",
        marginLeft: "-3.3%",
      },
    },
    "&.layout_2,&.layout_3": {
      marginTop: "-50%",
      marginLeft: "7%",
      [theme.breakpoints.down("lg")]: {
        marginLeft: "25%",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "-62%",
        marginLeft: "25%",
      }
    },
    "&.layout_3": {
      marginLeft: "-7%",
      [theme.breakpoints.down("lg")]: {
        marginLeft: "-33% !important",
      },
    },
    width: "100%",
    marginTop: theme.spacing(1.625),
    position: "absolute",
    marginLeft: "2.7%",
    [theme.breakpoints.down("lg")]: {
      marginTop: theme.spacing(4.625),
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
      marginLeft: "-3.3%",
    }
  },
  container: {
    top: "5%",
    maxWidth: theme.styles.maxWidth,
    margin: "auto",
    width: "85%",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    [theme.breakpoints.down(1250)]: {
      bottom: "18%",
    },
    [theme.breakpoints.down(600)]: {
      bottom: "7%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
    "&.layout_2,&.layout_3": {
      [theme.breakpoints.up(1250)]: {
        bottom: "15%",
      },
      bottom: "10%",
      top: "unset",
      [theme.breakpoints.down("lg")]: {
        bottom: "14%",
      },
      [theme.breakpoints.down(600)]: {
        bottom: "8%",
      },
      [theme.breakpoints.down("sm")]: {
        bottom: "11%",
      },
    }
  },
}))