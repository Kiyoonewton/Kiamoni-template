import { useNavigate } from "react-router-dom";
import { useButtonStyles } from "./style";
import { ButtonProps } from "./types";
import clx from "classnames";
import { useSelector } from "react-redux";
import { BlockProviderProps } from "..";
import { CustomThemeProps } from "../../../types";

export const Button = ({ type, destination, children }: ButtonProps) => {
  const { buttonConfig } = useSelector((state: BlockProviderProps) => state);
  const buttonClasses = useButtonStyles(buttonConfig as CustomThemeProps);

  return (
    <a className={clx(buttonClasses.buttonDisplay, type)} href={destination}>
      {children}
    </a>
  );
};
