import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCarousel3Styles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  container: {
    position: "relative",
    width: "100%",
    height: "95%",
    padding: "20% 0%",
  },
  left: {
    width: "49%",
    height: "80%",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    "&.layout_5": {
      display: "none"
    },
  },
  right: {
    width: "49%",
    height: "80%",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: 0,
    "&.layout_4": {
      "& .adjustImage": {
        backgroundPosition: "88% !important"
      }
    },
    "&.layout_5": {
      display: "none"
    },
  },
  center: {
    width: "49%",
    height: "80%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "&.layout_4,&.layout_5": {
      display: "none"
    },
  },
  blockImages: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    cursor: "pointer",
    "&.layout_5": {
      backgroundSize: "cover",
      backgroundPosition: "10%",
      position: "absolute",
      top: 0,
    }
  },
  pointerContainer: {
    marginTop: theme.spacing(5)
  }
}))