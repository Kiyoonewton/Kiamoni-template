import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CustomThemeProps } from "../../../../../types";

export const useExploreCardStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  container: props => ({
    display: "grid",
    gridTemplateColumns: "1fr",
    width: "100%",
    height: "100%",
    border: `2px solid ${props?.colors?.[300]}`
  }),
  cardContainer: props => ({
    width: "100%",
    height: "100%",
    gridColumn: "1/2",
    gridRow: "1/2",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxSizing: "border-box",
    textAlign: "center",
    background: props?.colors?.[500],
    color: props?.colors?.[100],
    textDecoration: "none",
    "&.layout_4,&.layout_5": {
      textAlign: "left",
    },
    "&.dark": {
      backgroundColor: props?.colors?.[300],
      "&:hover": {
        background: "transparent"
      },
    },
  }),
  cardHeaderText: props => ({
    display: "flex",
    alignItems: "center",
    margin: 0,
    gap: theme.spacing(.7),
    justifyContent: "center",
    marginBottom: `${theme.spacing(1.875)} !important`,
    "&::before": {
      content: "''",
      background: `linear-gradient(107.76deg, ${props?.colors?.[500]} 20.81%, ${props?.colors?.[400]} 103.65%)`,
      width: '15px',
      height: '15px',
      borderRadius: '50%',
    },
  }),
  cardSubtext: props => ({
    color: props?.colors?.[600],
    "&.dark": {
      color: `${props?.colors?.[600]} !important`
    },
  }),
  textContainer: props => ({
    position: "relative",
    zIndex: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "10%",
    boxSizing: "border-box",
    "&.layout_4,&.layout_5": {
      alignItems: "flex-start",
    },
    "&.none": {
      background: props?.colors?.[300],
    },
    "&.dark": {
      background: props?.colors?.[200],
    },
    "&.mixed": {
      background: `linear-gradient(90deg, ${theme.design.background.overlay400} 19.79%, ${theme.design.background.overlay500} 100%)`,
      "& ::before": {
        background: props?.colors?.[100]
      }
    },
    transition: "background 0.3s ease",
    "&.animate": {
      "&:hover": {
        background: `linear-gradient(90deg, ${theme.design.background.overlay400} 19.79%, ${theme.design.background.overlay500} 100%)`,
        transition: "background 0.3s ease",
        "& .whiteText": {
          color: `${props?.colors?.[100]} !important`
        },
        "& ::before": {
          background: props?.colors?.[100]
        }
      },
    }
  }),
  imageContainer: {
    gridColumn: "1/2",
    gridRow: "1/2",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  buttonContainer: props => ({
    width: "150px",
    height: "50px",
    marginRight: "auto",
    marginTop: "auto",
    paddingTop: theme.spacing(2),
    "&:hover": {
      "& svg": {
        color: props?.colors?.[100]
      }
    },
    [theme.breakpoints.down("lg")]: {
      width: "120px",
      height: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    }
  }),
  buttonArrow: props => ({
    marginLeft: theme.spacing(1.25),
    width: "20px",
    height: "15px",
    color: props?.colors?.[500],
  }),
}))