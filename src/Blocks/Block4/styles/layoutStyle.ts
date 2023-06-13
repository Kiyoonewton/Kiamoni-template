import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../../types";

export const useKiamoniLayoutBlockStyles4 = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  layoutContainer: {
    [theme.breakpoints.down("lg")]: {
      "& > div > div": {
        display: "flex",
        flexDirection: "column",
        "& h4": {
          order: 1,
          paddingTop: theme.spacing(2),
          alignSelf: "flex-start",
          [theme.breakpoints.down("sm")]: { fontSize: theme.typography.fontSize + 6, lineHeight: "24px" }
        }
      },
    },
    '& > *:nth-child(1)': {
      "& p": {
        [theme.breakpoints.down("md")]: {
          fontSize: theme.typography.fontSize + 2
        },
      },
    },
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    "&.layout_1,": {
      [theme.breakpoints.up("lg")]: {
        '& > *:nth-child(1)': {
          gridRow: "1 / 3"
        },
        '& > *:nth-child(3)': {
          gridColumn: "3/ 4",
          gridRow: "1/3",
        },
        '& > *:nth-child(5)': {
          display: "none"
        }
      },
      [theme.breakpoints.down("lg")]: {
        '& > *:nth-child(1)': {
          textAlign: "center"
        },
        "& > div > div": {
          display: "flex",
          flexDirection: "row-reverse !important",
          "& h4": {
            alignSelf: "flex-end !important"
          }
        },
        margin: "auto",
        gridTemplateColumns: "1fr",
        minWidth: "200px",
        maxWidth: "500px",
      },
    },
    "&.layout_2": {
      [theme.breakpoints.up("lg")]: {
        '& > *:nth-child(1)': {
          gridColumn: "1 / 4",
          width: "720px",
          textAlign: "center"
        },
        '& > *:nth-child(3)': {
          gridColumn: "3/ 4",
          gridRow: "3/4",
        },
        '& > *:nth-child(5)': {
          display: "none"
        }
      },
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "repeat(3,1fr)",
        minWidth: "200px",
        '& > *:nth-child(1)': {
          gridColumn: "1 / 4",
          margin: "auto", textAlign: "center"
        },
        '& > *:nth-child(5)': {
          display: "none"
        },
        maxWidth: "800px",
      },
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        maxWidth: "400px",
        margin: "auto",
        justifyItems: "center",
        "& > div": {
          width: "100%",
        },
        '& > *:nth-child(1)': {
          gridColumn: "1 / 2",
          margin: "auto",
        },
        '& > *:nth-child(2),& > *:nth-child(3),& > *:nth-child(4),& > *:nth-child(5)': {
          "& > div": {
            display: "flex",
            flexDirection: "row-reverse !important",
            "& > h4": {
              alignSelf: "flex-end !important"
            }
          }
        },
      },
    },
  },
}))