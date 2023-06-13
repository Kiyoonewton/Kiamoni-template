import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../../types";
export const useKiamoniBlock1Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: props => ({
    width: "100%",
    backgroundImage: `linear-gradient(107.76deg, ${props?.colors?.[100]} 20.81%, ${props?.colors?.[400]} 103.65%)`,
    fontFamily: props?.fonts?.body
  }),
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: theme.styles.maxWidth,
    width: "85%",
    margin: theme.spacing("auto", "auto"),
    height: "75px",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      gap: theme.spacing(.5),
    },
    "&.layout_4": {
      [theme.breakpoints.down("xs")]: {
        gap: theme.spacing(2),
      },
    },
  },
  logoWrapper: {
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      flexGrow: 3,
    },
    "&.searchPop": {
      [theme.breakpoints.down("sm")]: {
        display: "none !important"
      }
    },
    "&.layout_2": {
      order: 2,
      [theme.breakpoints.down("lg")]: {
        flexGrow: .9,
      },
    },
    "&.layout_3,&.layout_2": {
      [theme.breakpoints.down("lg")]: {
        flexGrow: 0,
      },
      [theme.breakpoints.down("sm")]: {
        flexGrow: 3,
      },
    }, "&.layout_4": {
      [theme.breakpoints.down("lg")]: {
        flexGrow: 0,
      },
      [theme.breakpoints.down("sm")]: {
        flexGrow: .8,
      },
    },
    "&.layout_5": {
      [theme.breakpoints.down("lg")]: {
        flexGrow: 0,
      },
    }
  },
  logo__container: {
    display: "flex",
    margin: theme.spacing("auto", "auto"),
    "&.layout_2": {
      [theme.breakpoints.down("lg")]: {
        margin: theme.spacing("auto", "auto"),
      },
      [theme.breakpoints.down("sm")]: {
        margin: 0,
      },
    },
    "&.layout_4": {
      margin: 0,
    },
    "&.layout_3, &.layout_5": { margin: 0, }
  },
  logo: {
    objectFit: "cover", height: "30px",
    margin: theme.spacing("auto", "auto"),
    [theme.breakpoints.down("sm")]: {
      height: "25px",
      width: "121px",
    },
  },
  iconWrapper: {
    display: "flex",
    gap: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      gap: theme.spacing(.5),
    },
    "&.layout_2": {
      order: 4
    },
    "&.layout_3": {
      order: 4,
    },
    "&.layout_4": {
      order: 3,
    }, "&.layout_5": {
      order: 4,
      [theme.breakpoints.down("sm")]: { marginLeft: 0 },
    },
  },
  aiIcon: props => ({
    color: props?.colors?.[200],
    padding: theme.spacing(.37),
  }),
  heart: props => ({
    background: props?.colors?.[600],
    borderRadius: "50%",
    width: "27px", height: "28px",
    padding: theme.spacing(.5),
    cursor: "pointer", display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&.layout_3": {
      [theme.breakpoints.down("sm")]: {
        display: "none"
      },
    },
    "&.layout_4": {
      [theme.breakpoints.down("sm")]: { position: "absolute", top: "85px", display: "block" },
    },
    "&:hover": {
      background: props?.colors?.[300]
    }
  }),
  links: props => ({
    cursor: "pointer",
    color: `${props?.colors?.[200]}!important`,
    fontSize: theme.typography.fontSize,
    fontWeight: theme.design.typography.fontWeightSmall,
    fontFamily: props?.fonts?.body,
    whiteSpace: "nowrap",
    "&:hover": {
      fontWeight: theme.design.typography.fontWeightMedium
    },
    "&:focus": {
      fontWeight: theme.design.typography.fontWeightMedium
    },
    "&:active": {
      fontWeight: theme.design.typography.fontWeightMedium
    },
  }),
  menuList: props => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(4),
    fontSize: theme.typography.fontSize + 2,
    fontFamily: props?.fonts?.body,
    fontWeight: theme.typography.fontWeightBold,
    color: props?.colors?.[200],
    "& a, p": {
      textDecoration: "none",
    },
    [theme.breakpoints.down(1300)]: {
      gap: theme.spacing(1.2),
    },
    [theme.breakpoints.down("lg")]: {
      display: "none"
    },
    "&.layout_3": {
      order: 3
    },
    "&.layout_5": {
      order: 3,
      [theme.breakpoints.down("lg")]: {
        display: "none"
      },
      [theme.breakpoints.down("xl")]: {
        gap: theme.spacing(2),
      },
    },
  }),
  zeroMargin: {
    margin: 0, [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  icon: {
    display: "flex", gap: theme.spacing(1.125),
  },
  mobileNavWrapper: (props) => ({
    alignItems: "flex-start",
    flexDirection: "column",
    color: props?.colors?.[200],
    display: "flex",
    width: " 80%",
    margin: "auto",
  }),
}))