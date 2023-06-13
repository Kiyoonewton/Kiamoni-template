import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../../../types";

export const useSpinAnimationStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  spinnerContainer: {
    position: "relative",
    width: "100%",
    background: "transparent",
    [theme.breakpoints.down("sm")]: {
      width: "107%",
    },
  },
  spinnerLine: props => ({
    width: "100%",
    height: "100%",
    position: 'absolute',
    top: '50%',
    left: '50%',
    border: `1px solid ${props?.colors?.[100]}`,
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)'
  }),
  spinnerPath: {
    width: "100%",
    borderRadius: "50%",
    background: "transparent",
    position: "relative",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },
  dishes: {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: theme.design.shadows[7],
    "&.vertical": {
      position: "unset",
      justifySelf: "center",

    }
  },
  verticalLine: props => ({
    width: "100%",
    bottom: '-120%',
    left: '50%',
    border: `1px solid ${props?.colors?.[100]}`,
    transform: 'translate(-50%, -50%)'
  }),
  pointerContainer: {
    position: "absolute",
    bottom: "-35%",
    right: "27%",
    zIndex: -1,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  spinnerCarousel: {
    transition: "transform .8s cubic-bezier(0.34,1.56,0.64,1)",
    display: "grid",
    gridTemplateColumns: `repeat(5,${100 / 3}%)`,
    gridTemplateRows: `100%`,
    position: "relative",
  },
  autoCarouselComponent: props => ({
    border: `1px solid ${props?.colors?.[100]}`,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "100%",
    left: "-22px"
  }),
  dishImage: {
    width: "98%",
    height: "98%",
    borderRadius: "50%"
  },
  dishLine: props => ({
    border: `1px solid ${props?.colors?.[100]}`,
    background: "transparent",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  pointerWrapper: {
    position: "absolute",
    marginTop: "55%",
    marginLeft: "15%"
  }
}))