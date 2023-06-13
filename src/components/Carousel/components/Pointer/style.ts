import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

export const usePointerStyles = makeStyles((theme: Theme) => ({
  pointers: {
    display: "flex",
    gap: theme.spacing(1.26),
    justifyContent: "center",
    paddingBottom: theme.spacing(7),
    cursor: "pointer",
  },
  pointerImg: {
    width: "10px",
    height: "10px",
    [theme.breakpoints.down("md")]: {
      width: "7px",
      height: "7px",
    }
  },
  pointerImgActive: {
    width: "10px",
    height: "10px",
    [theme.breakpoints.down("md")]: {
      width: "7px",
      height: "7px",
    }
  },
}));
