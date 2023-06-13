import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { CustomThemeProps } from "../../../types";

export const useButtonStyles = makeStyles<Theme,
  CustomThemeProps>((theme: Theme) => ({
    button: {
      display: "none",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      whiteSpace: "nowrap",
      "& a": {
        padding: theme.spacing(1.5, 2),
        fontSize: theme.typography.fontSize,
      },
      "&.layout_4": {
        display: "flex",
        order: 4,
        [theme.breakpoints.down("lg")]: {
          display: "none",
        }
      },
      "&.layout_5": {
        display: "flex",
        order: 5,
        [theme.breakpoints.down("lg")]: {
          display: "none",
        }
      }
    },
    buttonDisplay: props => ({
      display: "flex",
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(3, 0),
      color: props?.colors?.[200],
      textDecoration: "none",
      fontFamily: props?.fonts?.body,
      fontSize: theme.typography.fontSize,
      [theme.breakpoints.down("md")]: {
        fontSize: theme.typography.fontSize - 2,
      },
      cursor: "pointer",
      "&.primary": {
        background: props?.colors?.[100],
        "&:hover": {
          background: props?.colors?.[300],
          transition: 'background 0.5 ease'
        },
        "&:focus": {
          background: props?.colors?.[300],
          transition: 'background 0.5 ease'
        },
        "&:active": {
          background: props?.colors?.[300],
          transition: 'background 0.5 ease'
        },
      },
      "&.secondary": {
        padding: theme.spacing(0.25),
        background: `linear-gradient(to right, ${props?.colors?.[400]} 19.79%, ${props?.colors?.[500]} 100%)`,
        "&:hover": {
          background: theme.design.colors.neutral700,
          transition: 'background 0.5 ease'
        },
        "&:focus": {
          background: theme.design.colors.neutral700,
          transition: 'background 0.5 ease'
        },
        "&:active": {
          background: theme.design.colors.neutral700,
          transition: 'background 0.5 ease'
        },
      },
      "&.tertiary": {
        background: `linear-gradient(to right, ${props?.colors?.[400]} 19.79%, ${props?.colors?.[500]} 100%)`,
        padding: theme.spacing(0.25),
        "& p": {
          background: props?.colors?.[300],
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "Center",
          alignItems: "center",
          "&:hover": {
            background: `linear-gradient(to right, ${props?.colors?.[400]} 19.79%, ${props?.colors?.[500]} 100%)`,
            transition: 'background 0.5 ease'
          },
          "&:focus": {
            background: `linear-gradient(to right, ${props?.colors?.[400]} 19.79%, ${props?.colors?.[500]} 100%)`,
            transition: 'background 0.5 ease'
          },
          "&:active": {
            background: `linear-gradient(to right, ${props?.colors?.[400]} 19.79%, ${props?.colors?.[500]} 100%)`,
            transition: 'background 0.5 ease'
          },
        }
      },
    })
  }))
