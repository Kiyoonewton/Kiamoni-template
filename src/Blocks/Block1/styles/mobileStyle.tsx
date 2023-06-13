import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../../types";

export const useKiamoniBlock1MobileStyles = makeStyles<Theme, CustomThemeProps>(
  (theme: Theme) => ({
    mobileWrapper: (props) => ({
      display: "none",
      boxSizing: "border-box",
      padding: "0 5%",
      height: "40px",
      background: `linear-gradient(20.76deg, ${props?.colors?.[100]} 20.81%, ${props?.colors?.[400]} 103.65%)`,
      boxShadow: theme.design.shadows[6],
      justifyContent: "space-evenly",
      margin: theme.spacing("auto", "auto"),
      "& a span": { fontSize: theme.typography.fontSize - 2 },
      "& p, a": {
        textDecoration: "none",
        margin: theme.spacing("auto", "auto"),
      },
      "&.layout_3": {
        [theme.breakpoints.down("sm")]: {
          display: "flex",
        },
      },
      "&.layout_5": {
        [theme.breakpoints.down("sm")]: {
          display: "flex",
          height: "50px",
        },
      },
      "&.layout_4": {
        [theme.breakpoints.down("sm")]: {
          display: "flex",
          height: "57px",
        },
      },
    }),
    cart: (props) => ({
      width: "27px",
      height: "28px",
      background: props?.colors?.[600],
      borderRadius: "50%",
      padding: theme.spacing(0.5),
      cursor: "pointer",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&.searchPop": {
        [theme.breakpoints.down("sm")]: {
          display: "none !important",
        },
      },
      "& .cart__number": {
        position: "absolute",
        color: props?.colors?.[200],
        fontSize: theme.typography.fontSize - 4,
        background: props?.colors?.[700],
        borderRadius: "50%",
        width: "15px",
        height: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "3px",
        left: "18px",
        fontFamily: props?.fonts?.body,
      },
      "&:hover": {
        background: props?.colors?.[300],
      },
      "&:focus": {
        background: props?.colors?.[300],
      },
      "&:active": {
        background: props?.colors?.[300],
      },
    }),
    cartImg: {
      width: "15px",
      height: "16px",
      margin: theme.spacing("auto", "auto"),
    },
    divOverlay: {
      backgroundColor: theme.design.background.grad3,
      opacity: 0,
      visibility: "hidden",
      width: "100vw",
      zIndex: 11,
      height: "100vh",
      position: "fixed",
      transition: "all 0.3s",
    },
    showOverlay: {
      opacity: 1,
      visibility: "visible",
    },
    openNav: {
      display: "none",
      cursor: "pointer",
      [theme.breakpoints.down("lg")]: {
        display: "block",
        transition: "all 0.5s",
      },
      "&.layout_2": {
        [theme.breakpoints.down("sm")]: { order: 5 },
      },
      "&.layout_3": {
        [theme.breakpoints.down("sm")]: { display: "none" },
      },
      "&.layout_4": {
        order: 5,
        [theme.breakpoints.down("sm")]: {
          display: "block",
          position: "absolute",
          top: "90px",
        },
      },
      "&.layout_5": {
        display: "none",
        [theme.breakpoints.down("lg")]: {
          display: "flex",
          order: 5,
        },
        [theme.breakpoints.down("sm")]: {
          display: "flex",
          order: 0,
        },
      },
    },
    openNavImg: {
      width: "44px",
      height: "44px",
      margin: theme.spacing("auto", "auto"),
      [theme.breakpoints.down("sm")]: {
        width: "28px",
        height: "28px",
      },
      "&.layout_4": {
        order: 5,
      },
    },
    button: {
      display: "none",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      whiteSpace: "nowrap",
      width: "90px !important",
      height: "50px !important",
      "& a": {
        fontSize: theme.typography.fontSize,
      },
      "&.layout_4": {
        display: "flex",
        order: 4,
        [theme.breakpoints.down("lg")]: {
          display: "none",
        },
      },
      "&.layout_5": {
        display: "flex",
        order: 5,
        [theme.breakpoints.down("lg")]: {
          display: "none",
        },
      },
    },
  })
);
