import { createTheme } from "@mui/material/styles";

type ExtendedThemeOptions = {
  design: {
    font: { [key: string]: string };
    colors: { [key: string]: string };
    background: { [key: string]: string };
    border: { [key: string]: string };
    typography: { [key: string]: any };
    shadows: string[];
    overlay: { [key: string]: string };
  };
  styles: { [key: string]: string };
};

declare module "@mui/material/styles" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme extends ExtendedThemeOptions { }

  // allow configuration using `createMuiTheme`
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ThemeOptions extends ExtendedThemeOptions { }
}

export const theme: any = {
  breakpoints: {
    values: {
      sm: 450,
      md: 768,
      lg: 1024,
      xl: 1440,
      xxl: 1728,
    },
  },
  styles: {
    maxWidth: 1720,
    tabMaxWidth: 700,
    mobileMaxWidth: 300,
  },
  design: {
    typography: {
      fontWeightSmall: 400,
      fontWeightMedium: 600,
      h1: "3rem",
      h2: "2.5rem",
      h3: "2.25rem",
      h4: "2rem",
      h5: "1.5rem",
      h6: "1.25rem",
    },
    font: {
      montserrat: "Montserrat",
    },
    colors: {
      neutralWhite: "#FFFFFF",
      neutral100: "#FAFAFA",
      neutral200: "#FAFAFA",
      neutral300: "#F2F2F2",
      neutral400: "#C4C0CC",
      neutral500: "#939099",
      neutral600: "#4A494D",
      neutral700: "#333235",
      neutralBlack: "#232227",
      secondary300: "#E0731F",
      overlay100: "rgba(0,0,0,.1)"
    },
    shadows: [
      'none',
      '0 1px 2px rgba(16, 24, 40, 0.05)',
      '0 1px 3px rgba(16, 24, 40, 0.1)',
      '0 4px 8px rgba(16, 24, 40, 0.1)',
      '0 12px 16px rgba(16, 24, 40, 0.08)',
      '0 32px 64px rgba(16, 24, 40, 0.14)',
      `0px 12px 16px rgba(78, 9, 14, 0.2)`,
      `0 2px 6px rgba(0, 0, 0, 0.3)`
    ],
    background: {
      gradient: `linear-gradient(107.76deg, #E44551 20.81%, #F09E61 103.65%)`,
      gradient100: "radial-gradient(circle, #EE3844 1.18%, #ED4B56 35.32%, #F16B74 76.89%)",
      background200: "linear-gradient(#E44551 19.79%, #F09E61 100%)",
      background300: "2px 8px 25px rgba(0, 0, 0, 0.4)",
      overlay100: "linear-gradient(#E44551 19.79%, #F09E61 100%)",
      overlay200: "rgba(0,0,0,0.5)",
      overlay300: "2px 8px 25px rgba(0, 0, 0, 0.4)",
      overlay400: "rgba(228, 69, 81, .8)",
      overlay500: "rgba(240, 158, 97, .8)",
      overlay600: "rgba(0,0,0,0.05)",
    },
  },
};

export default createTheme(theme);
