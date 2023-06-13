import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../types";

export const useFeatureCardStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  card: props => ({
    display: "flex",
    flexDirection: "column",
    color: props?.colors?.[100],
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      cursor: "pointer"
    },
  }),
  dishCardImg: {
    margin: "auto",
    padding: "39%",
    boxSizing: "border-box",
    backgroundPosition: "center",
    borderRadius: "50%",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  dishCard: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: theme.spacing(3.75),
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(2.5),
      paddingTop: theme.spacing(5),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1.25),
      paddingTop: theme.spacing(2),
    },
  },
  dishCardText: {
    fontSize: theme.typography.fontSize + 2,
    paddingBottom: theme.spacing(1.5),
    userSelect: "none",
    "&.alignLeft": {
      textAlign: "left",
    },
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  dishStar: props => ({
    margin: "auto",
    color: props?.colors?.[400],
    display: "flex",
    userSelect: "none",
    justifyContent: "center",
    "&.alignLeft": {
      justifyContent: "flex-start",
    },
    "& svg": {
      width: "20px",
      height: "20px",
      [theme.breakpoints.down("sm")]: {
        width: "15px",
        height: "15px",
      }
    }
  }),
  dishCost: {
    fontSize: theme.typography.fontSize + 2,
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(1.25, "auto"),
    userSelect: "none",
    "&.alignLeft": {
      textAlign: "left"
    }
  },
  arrowContainer: {
    display: "flex",
    gap: theme.spacing(5),
    width: "88px",
  },
  favorite: props => ({
    position: "absolute",
    cursor: "pointer",
    top: 15,
    right: 15,
    "& .outline": {
      color: props?.colors?.[600]
    },
    "& .fill": {
      color: props?.colors?.[800]
    },
    "& svg": {
      marginTop: theme.spacing(0.25),
      width: "25px",
      height: "23px",
      [theme.breakpoints.up("lg")]: {
        width: "29px",
        height: "29px",
        marginTop: theme.spacing(0.25),
      }
    },
    [theme.breakpoints.down("md")]: {
      top: 5,
      right: 5,
    }
  }),
  dishCardWrapper: {
    textAlign: "center",
    width: "100%",
    marginTop: "20px",
    "& .alignLeft": {
      justifySelf: "center",
    },
  },
  cardTextWrapper: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    width: "80%",
    maxWidth: "285px"
  },
}))