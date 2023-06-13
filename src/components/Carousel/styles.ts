import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { CustomThemeProps } from "../../../types";
export const useCarouselStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  carouselContainer: {
    overflow: "hidden",
    margin: "auto",
  },
  carouselImage: {
    display: "grid",
    gridTemplateColumns: "1fr",
    "&.arrow": {
      gridTemplateColumns: "4% 1fr 4%",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "100%",
      justifyContent: "center"
    }
  },
  buttonArrow: {
    color: "white",
    padding: theme.spacing(1.875),
    borderRadius: "50%",
    backgroundImage: `url('https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/ArrowRight.svg')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "&.prev": {
      backgroundImage: `url('https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/ArrowLeft.svg')`,
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1.5),
    }
  },
  arrow: {
    background: props =>
      `linear-gradient(107.76deg, ${props.colors[500]} 20.81%, ${props.colors[400]} 103.65%)`,
    borderRadius: "50%",
  },
  carouselSlide: {
    width: "100%",
    display: "flex",
    overflow: "hidden",
    "&.carousel4": {
      width: "25px",
    },
  },
  carouselPrevious: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 3,
    "&.changeDirection": {
      position: "absolute",
      top: 0
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }
  },
  carouselRender: {
    display: "flex",
    overflow: "hidden",
    "&.changeDirection": {
      width: "100%",
    }
  },
  carouselNext: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 3,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&.changeDirection": {
      position: "absolute",
      top: 0,
      left: "15%",
    },
  },
  pointers: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    cursor: "pointer",
    paddingTop: theme.spacing(2.5)
  },
  pointerImg: {
    width: "13px",
    height: "13px"
  },
  pointerImgActive: {
    width: "13px",
    height: "13px"
  },
  arrowContainer: {
    display: "none",
    justifyContent: "space-between",
    width: "100px",
    "&.hasArrow": {
      display: "flex",
    }
  },
}))