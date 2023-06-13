import { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ProviderProps } from ".";
import { store } from ".";

export const Provider: FC<ProviderProps> = ({ children }) => {
  return <ReduxProvider store={store()}>{children}</ReduxProvider>;
};
