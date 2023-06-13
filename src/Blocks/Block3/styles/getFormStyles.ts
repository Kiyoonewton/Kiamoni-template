import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../../types";

export const useGetFormStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  footerInput: props => ({
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    minWidth: "360px",
    width: "100%",
    "& div": { gridColumn: "1/5" },
    '@media(max-width:520px)':
    {
      minWidth: "108px",
      display: "block",
      "& button": {
        width: "100%",
        marginTop: theme.spacing(1.2)
      },
      "&.layout_3": {
        "& button": {
          width: "80%"
        }
      }
    },
    "&.layout_2": {
      marginTop: `-${theme.spacing(2.5)}`,
      [theme.breakpoints.down("lg")]: {
        marginTop: theme.spacing(2.5),
      },
    },
    "&.layout_3": {
      [theme.breakpoints.down("lg")]: {
        justifySelf: "flex-start",
      },
    },
    "& input": {
      color: theme.design.colors.neutralBlack,
      background: theme.design.colors.neutralWhite,
      padding: theme.spacing(2.25, 2.5),
      fontSize: theme.typography.fontSize + 2,
      border: `.5px solid ${props?.colors?.[400]}`,
      gridColumn: "1 / 5",
    },
    gridColumn: "2 / 3",
    gridRow: "3 / 4",
    [theme.breakpoints.down("lg")]: {
      gridColumn: "1 / 2",
      gridRow: "2 / 3",
    },
    "&.layout_3,&.layout_4,&.layout_5": {
      margin: theme.spacing(3.125, 0, 0),
      gridColumn: "4 / 5",
      gridRow: "2 / 3",
      [theme.breakpoints.down("lg")]: {
        gridColumn: "1 / 2",
        gridRow: "4 / 5",
        width: "50%",
        "&.layout_3": {
          width: "100%"
        }
      },
    }
  }),
  footerInputButton: props => ({
    width: "144px",
    height: "60px",
    background: `linear-gradient(to right, ${props?.colors?.[400]} 19.79%, ${props?.colors?.[500]} 100%)`,
    outline: 0,
    border: 0,
    fontSize: theme.typography.fontSize,
    color: props?.colors?.[200],
    cursor: "pointer",
    gridColumn: "5/6",
    "&:hover": {
      background: props?.colors?.[100]
    },
  }),
  footerInputBottom: {
    "& div": { gridColumn: "1 / 5" },
    [theme.breakpoints.down("lg")]: {
      display: "block",
      height: "fit-content",
      "& input": { width: "70% !important", },
      margin: "unset",
    },
    margin: theme.spacing(-3.125, 0, 0),
    '@media(max-width:700px)': {
      display: "none",
      width: "55%",
      "&.layout_3": {
        display: "block",
      }
    },
  },
  footerButtonBottom: props => ({
    [theme.breakpoints.down("lg")]: {
      width: "80%",
      marginTop: theme.spacing(2),
      display: "block",
      padding: theme.spacing(2.75)
    },
    "&:hover": {
      background: props?.colors?.[300]
    },
  }),
  error: props => ({
    margin: "auto",
    color: `${props?.colors?.[700]} !important`,
    gridColumn: "1/-1",
    marginTop: `${theme.spacing(1.3)} !important`,
    textAlign: "center",
    justifyContent: "center !important",
  }),
  success: props => ({
    textAlign: "center",
    width: "80%",
    margin: "auto",
    color: `${props?.colors?.[600]} !important`,
    justifyContent: "center !important",
    gridColumn: "1/-1",
    marginTop: `${theme.spacing(1.3)} !important`,
    background: props?.colors?.[200],
    opacity: "95%",
    padding: theme.spacing(1.25, 3.75),
    borderRadius: "10px",
    "&.loading": {
      color: `${props?.colors?.[300]} !important`,
    }
  }),
  flashing: {
    animation: "$flash 1s linear infinite",
  },
  "@keyframes flash": {
    "0%": {
      opacity: 1
    },
    "50%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  }
}))