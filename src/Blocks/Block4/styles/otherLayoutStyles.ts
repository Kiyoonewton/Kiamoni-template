import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useKiamoniOtherLayoutBlockStyles4 = makeStyles((theme: Theme) => ({
  layoutContainer: {
    "&.layout_3": {
      [theme.breakpoints.up("lg")]: {
        '& > *:nth-child(1)': {
          minWidth: "310px",
          maxWidth: "700px",
          gridColumn: "1 / 2",
          gridRow: "1 / 3",
          margin: "auto"
        },
        '& > *:nth-child(3)': {
          gridRow: "2 / 3",
        },
        '& > *:nth-child(5)': {
          display: "block"
        }
      },
      [theme.breakpoints.down("lg")]: {
        maxWidth: "800px",
        "& p": { fontSize: theme.typography.fontSize },
        "& h4": {
          order: 1,
          paddingTop: theme.spacing(2),
        },
        "& > div > div": {
          flexDirection: "column",
          alignSelf: "center"
        },
        gridTemplateColumns: "repeat(2,1fr)",
        '& > *:nth-child(1)': {
          textAlign: "center",
          maxWidth: "400px",
          margin: "auto",
          gridColumn: "1 / 3",
        },
        '& > *:nth-child(5)': {
          display: "grid"
        },
        [theme.breakpoints.down("sm")]: {
          "& > div > div": {
            display: "flex",
            flexDirection: "column !important",
            "& h4": {
              alignSelf: "flex-start !important"
            }
          },
        }
      },
    },
    "&.layout_2,&.layout_4,&.layout_5": {
      [theme.breakpoints.between("md", "lg")]: {
        "& > div > div": {
          display: "flex",
          flexDirection: "column !important",
          "& h4": {
            alignSelf: "flex-start !important"
          }
        },
      },
    },
    "&.layout_4": {
      [theme.breakpoints.up("lg")]: {
        '& > *:nth-child(1)': {
          minWidth: "310px",
          maxWidth: "700px",
          gridColumn: "1 / 2",
          gridRow: "1 / 2",
          margin: "auto"
        },
        '& > *:nth-child(5)': {
          gridColumn: "3 / 4",
          gridRow: "1 / 3",
          display: "grid"
        },
        '& > *:nth-child(3)': {
          gridColumn: "2 / 3",
          gridRow: "2 / 3",
        },
      },
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "unset",
        maxWidth: "850px",
        '& > *:nth-child(5)': {
          gridColumn: "3 / 4",
          gridRow: "1 / 4",
        },
        "& > div > div": {
          display: "flex",
          flexDirection: "row-reverse !important",
          "& h4": {
            alignSelf: "flex-end !important"
          }
        },
        '& > *:nth-child(1)': {
          textAlign: "left",
        },
      },
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        maxWidth: "500px",
        margin: "auto",
        '& > *:nth-child(1)': { textAlign: "center" },
        '& > *:nth-child(5)': {
          gridColumn: "1 / 2",
          gridRow: "5 / 6",
        },
      }
    },
    "&.layout_5": {
      [theme.breakpoints.up("lg")]: {
        '& > *:nth-child(1)': {
          gridColumn: "3 / 4",
          gridRow: "1 / 3",
          margin: "auto"
        },
        '& > *:nth-child(3)': {
          gridColumn: "2 / 3",
          gridRow: "2 / 3",
          margin: "auto"
        },
        '& > *:nth-child(5)': {
          display: "grid"
        }
      },
      [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "repeat(3,1fr)",
        maxWidth: "100%",
        '& > *:nth-child(1)': {
          textAlign: "left",
          gridColumn: "3 / 4",
          gridRow: "1 / 3",
        },
      },
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        maxWidth: "450px",
        margin: "auto",
        '& > *:nth-child(1)': {
          textAlign: "center",
          gridColumn: "1 / 2",
          gridRow: "1 / 2",
        },
      }
    },
  },
}))