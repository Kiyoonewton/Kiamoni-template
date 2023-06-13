import { legacy_createStore as createStore } from "redux";
import { CoreMenuFields } from "../../models"

type kiamoniAction = {
  type: "GET_KIAMONI";
  payload: string[];
};

export type RestaurantState = {
  menu?: CoreMenuFields;
};

export type KiamoniState = {
  gatewayUrl?: string;
  fonts?: {
    [key: string]: {
      [key: string]: string;
    };
  };
  colors?: {
    [key: string]: {
      [key: string]: string;
    };
  };
  restaurant?: RestaurantState;
};

export const kiamoniReducer = (state: KiamoniState, action: kiamoniAction) => {
  switch (action.type) {
    case "GET_KIAMONI":
      return { ...state, main: action.payload };
    default:
      return state;
  }
};

export const store = () =>
  createStore(kiamoniReducer as any, {
    gatewayUrl: "https://ploutonion.hivedeck.com/graphql",
    colors: {
      primary: {
        main: "#E44551",
        100: "#FFF5F5",
        200: "#F27079",
        300: "#CD2732",
        400: "#870E16",
      },
      neutral: {
        white: "#FFFFFF",
        100: "#FAFAFA",
        200: "#FAFAFA",
        300: "#F2F2F2",
        400: "#C4C0CC",
        500: "#939099",
        600: "#4A494D",
        700: "#333235",
        black: "#232227",
      },
      secondary: {
        main: "#F09E61",
        100: "#FFF9F5",
        200: "#FA9C55",
        300: "#E0731F",
        400: "#8F460E",
      },
      error: { 100: "#E50E00" },
      info: { 100: "#0076E5" },
      success: { 100: "#1E8A0E" },
    },
    fonts: {
      heading: "Montserrat",
      body: "Open Sans",
    },
  });
