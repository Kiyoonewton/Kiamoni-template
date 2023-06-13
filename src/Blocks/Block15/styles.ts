import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../types";

export const useKiamoniBlock15Styles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: props => ({
    fontFamily: props?.fonts?.body,
  }),
  headerContainer: props => ({
    color: props?.colors?.[800],
    "& svg": {
      color: props?.colors?.[800]
    },
    width: "100%",
    fontSize: theme.design.typography.h5,
    fontWeight: theme.design.typography.fontWeightSmall,
    "& .cardSize": {
      width: "50%"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.design.typography.h6,
    },
    "& .price": {
      color: props?.colors?.[500],
    }
  }),
  header: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(-3.5),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    }
  },
  headerText: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    }
  },
  modalContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  dividingLine: props => ({
    height: "350px",
    alignSelf: "center",
    background: props?.colors?.[700],
    width: "1px",
    [theme.breakpoints.down("sm")]: {
      height: "1px",
      width: "100%"
    }
  }),
  subHeader: props => ({
    color: props?.colors?.[100],
    width: "50%",
    padding: theme.spacing(3.8),
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      padding: theme.spacing(1.3),
    }
  }),
  subHeaderItems: {
    paddingBottom: theme.spacing(1),
    fontSize: theme.typography.fontSize
  },
  subHeaderText: {
    fontSize: theme.typography.fontSize,
    lineHeight: "21px"
  },
  continueButton: props => ({
    color: props?.colors?.[800],
    padding: theme.spacing(2, 0),
    cursor: "pointer",
    fontSize: theme.typography.fontSize - 2,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    }
  }),
  buttonDivider: props => ({
    width: "100%",
    height: "1px",
    background: props?.colors?.[700],
    margin: theme.spacing(2, 0)
  }),
  checkoutbutton: {
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(1),
    }
  },
  buttonText: {
    fontSize: theme.typography.fontSize - 2
  },
  metaData: props => ({
    color: props?.colors?.[100],
    fontSize: theme.typography.fontSize,
  })
}))