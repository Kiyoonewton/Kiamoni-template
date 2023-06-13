import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useVeggiesStyles = makeStyles((theme: Theme) => ({
  veggiesImage: {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    zIndex: 0
  },
  containerImage1: {
    top: "3%",
    left: 0,
    width: "20%",
    height: "30%",
  },
  containerImage2: {
    top: "35%",
    left: 0,
    width: "20%",
    height: "20%",
  },
  containerImage3: {
    width: "50%",
    height: "40%",
    bottom: 0,
    left: 0,
  },
  containerImage4: {
    width: "110px",
    height: "35%",
    top: "30%",
    right: 0,
    [theme.breakpoints.down("sm")]: {
      right: "-50px",
    }
  },
  containerImage5: {
    width: "180px",
    height: "45%",
    top: 0,
    right: "50px",
    [theme.breakpoints.down("lg")]: {
      right: 0,
    },
    [theme.breakpoints.down("md")]: {
      right: "-55px",
    },
    [theme.breakpoints.down("sm")]: {
      right: "-100px",
    }
  },
  containerImage6: {
    width: "80px",
    height: "100px",
    bottom: "10%",
    right: "15%",
    [theme.breakpoints.down("md")]: {
      right: "-55px",
      bottom: "8%",
    }
  },
  containerImage7: {
    width: "180px",
    height: "120px",
    bottom: 0,
    right: "50%",
    [theme.breakpoints.down("lg")]: {
      bottom: "-50px",
    },
    [theme.breakpoints.down("sm")]: {
      bottom: "-70px",
    }
  }
}))