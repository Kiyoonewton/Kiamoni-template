import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../types";

export const useDishCard = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  parentCard: {
    position: "relative",
    transition: "transform .5s ease",
    width: "200px",
    height: "200px",
    zIndex: 10,
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      maxWidth: "200px",
      minWidth: "100px",
    },
    [theme.breakpoints.up(1024)]: {
      width: "100%",
      maxWidth: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "20px"
    },
    "&:hover": {
      transform: " translateY(15px)",
      transition: "transform .5s ease"
    },
  },
  cardContainer: {
    position: "relative",
    width: "200px",
    height: "200px",
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      maxWidth: "200px",
      minWidth: "100px",
    },
    [theme.breakpoints.up(1024)]: {
      width: "100%",
      maxWidth: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    transform: "rotate(0deg)",
    transition: "transform .5s ease",
    "&.rotate": {
      transform: "rotate(-90deg)",
      transition: "transform .5s ease"
    },
  },
  dish: props => ({
    width: "98%",
    height: "97%",
    top: "1.5%",
    left: "1.5%",
    position: "absolute",
    background: props?.colors?.[600],
    padding: "auto",
    zIndex: 2,
    boxSizing: "border-box",
    borderRadius: "50%",
    display: "flex"
  }),
  cardContainerLeft: props => ({
    background: `linear-gradient(to right, ${props?.colors?.[500]} 19.79%, ${props?.colors?.[400]} 100%)`,
    width: "50%",
    position: "absolute",
    height: "100%",
    borderRadius: "100px 0 0 100px",
  }),
  cardContainerRight: props => ({
    background: props?.colors?.[700],
    width: "50.25%",
    position: "absolute",
    top: ".5%",
    left: "50%",
    height: "99%",
    borderRadius: "0 100px 100px 0",
    transform: "rotate(0deg)",
  }),
  search: props => ({
    width: "25px",
    height: "25px",
    justifySelf: "center",
    alignSelf: "center",
    margin: "auto",
    backgroundImage: `linear-gradient(107.76deg, ${props?.colors?.[500]} 20.81%, ${props?.colors?.[400]} 103.65%)`,
    padding: "10px",
    borderRadius: "50%",
    opacity: "85%"
  }),
  searchContainer: {
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    position: "absolute",
    zIndex: 2,
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    opacity: 0,
    transition: "all ease 0.5s",
    "&:hover": {
      opacity: 0.85,
      transition: "all ease 0.5s",
    }
  },
  anchor: {
    color: "unset",
    cursor: "pointer"
  }
}))