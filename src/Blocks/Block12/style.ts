import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../types";

export const useKiamoniBlocks12Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: props => ({
    color: props?.colors?.[100],
    width: "100%",
    height: "100%",
    backgroundColor: props?.colors?.[200],
    padding: theme.spacing(7.8, 0),
    overflow: "hidden",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(3, 0),
    },
    position: "relative",
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
        fontSize: theme.design.typography.h4,
        lineHeight: "40px"
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.design.typography.h5, lineHeight: "30px"
      },
    },
    "& p": {
      fontSize: theme.typography.fontSize + 2,
      lineHeight: "30px",
      [theme.breakpoints.down("sm")]: {
        fontSize: `${theme.typography.fontSize}px!important`,
        lineHeight: "21px",
      },
    },
    "& h4": {
      fontSize: theme.design.typography.h5,
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
    "&.layout_2": {
      backgroundColor: theme.design.background.overlay200,
    },
  }),
  backgroundImageContainer: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    zIndex: -1
  },
  imageContainer: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "91%",
    zIndex: 3,
    position: "relative",
  },
  container: {
    width: "85%",
    maxWidth: theme.styles.maxWidth,
    margin: "auto",
    zIndex: 2,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    },
    "&.layout_5": {
      [theme.breakpoints.up(500)]: {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: theme.spacing(3.95),
      },
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        textAlign: "center"
      }
    }
  },
  getHeading: {
    width: "500px",
    margin: "auto",
    paddingBottom: theme.spacing(5),
    "& > div > p": {
      fontSize: theme.design.typography.h6,
      [theme.breakpoints.down("lg")]: {
        fontSize: theme.typography.fontSize + 2,
      }
    },
    [theme.breakpoints.down("lg")]: {
      width: "400px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    "&.layout_2,&.layout_3,&.layout_4": {
      width: "870px", textAlign: "center",
      [theme.breakpoints.down("lg")]: {
        width: "450px",
      },
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    "&.layout_5": {
      width: "100% !important",
    }
  },
  arrowContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("lg")]: {
      paddingTop: theme.spacing(3),
      marginLeft: 0
    },
    "&.layout_2,&.layout_3,&.layout_4": {
      justifyContent: "center",
      marginLeft: 0,
    },
    "&.layout_5": {
      [theme.breakpoints.down("md")]: {
        justifyContent: "center"
      }
    }
  },
  commentContainer: props => ({
    border: `1px solid ${props?.colors?.[300]}`,
    margin: "auto",
    width: "550px",
    padding: theme.spacing(3.75, 2),
    marginBottom: theme.spacing(7),
    [theme.breakpoints.down("lg")]: {
      width: "400px",
      paddingTop: theme.spacing(3),
    },
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "260px",
    },
    "&.layout_2": {
      border: `1px solid ${props?.colors?.[700]}`,
    },
    "&.layout_2,&.layout_3": {
      padding: theme.spacing(3.75, 20),
      textAlign: "center",
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(3.75, 10),
      },
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(3.75, 5),
        width: "300px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3.75, 2),
        width: "260px",
      }
    },
    "&.layout_4": {
      width: "85%",
      textAlign: "center",
      [theme.breakpoints.down("lg")]: {
        width: "100%",
        padding: theme.spacing(3.75, 0),
      },
    },
    "&.layout_5": {
      width: "90% !important",
      padding: theme.spacing(2),
    }
  }),
}))