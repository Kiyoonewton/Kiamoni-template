import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material"

export const useButtonStyles = makeStyles((theme: Theme) => ({
  header: {
    margin: "auto",
    width: "100%",
    "&.layout_2,&.layout_3": {
      width: "41%",
      marginLeft: 0,
      [theme.breakpoints.down("lg")]: {
        width: "60%",
      },
    },
    "&.layout_4,&.layout_5": {
      width: "100%",
      textAlign: "center"
    },
    "&.layout_1,&.layout_4,&.layout_5": {
      padding: theme.spacing(1.25)
    }, "&.layout_3": {
      marginLeft: "auto",
      margin: "unset",
      [theme.breakpoints.down("md")]: {
        width: "280px !important",
      },
      [theme.breakpoints.down("sm")]: {
        width: "200px !important",
      },
    }
  },
  paragraphText: {
    fontSize: theme.typography.fontSize + 6,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(.5),
    },
    "&.layout_4,&.layout_5": {
      textAlign: "center"
    }
  },
  heroButton: {
    width: "150px",
    height: "50px",
    padding: "10px 0",
    "& .primary": {
      fontSize: `${theme.typography.fontSize + 2}px !important`
    },
    [theme.breakpoints.down("lg")]: {
      width: "100px",
      height: "30px",
      padding: theme.spacing(0.625, 0),
      "& .primary": {
        fontSize: `${theme.typography.fontSize - 2}px !important`,
        padding: theme.spacing(2.875, 0),
        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(1.875, 0),
        },
      },
    },
    "&.layout_4,&.layout_5": {
      margin: "auto"
    }
  },
}))