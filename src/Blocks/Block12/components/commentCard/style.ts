import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCommentCardStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
    margin: "auto",
    width: "100%",
    paddingTop: theme.spacing(5),
    "&.double": {
      width: "92%",
      padding: "8%"
    },
    "&.center::before": {
      left: "50%",
      transform: "translateX(-50%)",
    },
    boxSizing: "border-box",
    zIndex: 1,
    "&::before": {
      content: '""',
      backgroundImage: `url("https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/%E2%80%9C.png")`,
      display: "block",
      width: "150px",
      height: "150px",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      [theme.breakpoints.down("lg")]: {
        width: "100px",
        height: "100px",
      }
    },
  },
  containerName: {
    paddingBottom: `${theme.spacing(2)}!important`,
    zIndex: 2,
    background: "transparent"
  }
}))