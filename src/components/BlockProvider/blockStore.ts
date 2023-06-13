import { legacy_createStore as createStore, } from "redux";
import { BlockProviderProps } from "./types";

type mainAction = {
  type: "GET_MAIN_PROPS",
  payload: string[];
}

type blockAction = mainAction

export type blockState = {
  main: {
    colors?: Record<string, string>;
    fonts?: any
  };
}

export const blockReducer = (state: blockState, action: blockAction) => {
  switch (action.type) {
    case "GET_MAIN_PROPS":
      return { ...state, main: action.payload };
    default:
      return state
  }
}

export const blockStore = ({ mainConfig, buttonConfig, animations }: BlockProviderProps) =>
  createStore(blockReducer as any, {
    mainConfig, buttonConfig, animations
  });