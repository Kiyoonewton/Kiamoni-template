import { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BlockProviderProps } from ".";
import { blockStore } from ".";

export const BlockProvider: FC<BlockProviderProps> = ({
  children,
  mainConfig,
  buttonConfig,
  animations,
}) => {
  return (
    <ReduxProvider store={blockStore({ mainConfig, buttonConfig, animations })}>
      {children}
    </ReduxProvider>
  );
};
