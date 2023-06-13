import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useCarousel4Styles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  container: {
    width: "100%",
    height: "95%",
    display: "grid",
    gridTemplateColumns: "repeat(3,100%)",
    transition: "transform 0.8s ease-in-out",
    "&.layout_3": {
      gridTemplateColumns: "1fr",
    },
  },
  backgroundImage: {
    width: "100%",
    padding: "18% 0%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "auto",
    backgroundRepeat: "no-repeat",
    transition: "opacity 0.8s ease-in-out",
    "&.layout_3": {
      gridColumn: "1/2",
      gridRow: "1/2"
    },
  },
  pointerContainer: {
    height: "5%",
    width: "100%",
    marginTop: theme.spacing(-7.5),
    zIndex: 3,
    position: "absolute",
  }
}))