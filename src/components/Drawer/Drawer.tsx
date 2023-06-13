import { useState } from "react";
import clx from "classnames";
import { DrawerProps } from "./types";
import { FiSearch } from "react-icons/fi";
import { useDrawerStyles } from "./styles";
import { InputText } from "../Input/Input";
import { useSelector } from "react-redux";
import { CustomThemeProps } from "../../../types";
import { BlockProviderProps } from "..";

export const Drawer = ({
  children,
  isOpen,
  onClose,
  hasSearchBar,
  onChange,
  active,
}: DrawerProps) => {
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useDrawerStyles(mainConfig as CustomThemeProps);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const handleClose = () => {
    onClose?.();
    onChange?.("");
    setInputValue("");
  };

  return (
    <div
      className={clx(classes.mobileNav, {
        [classes.displayMobileNav]: isOpen,
      })}
    >
      <div className={classes.mobileNavHeader}>
        <div className={clx(classes.closeIcon)} onClick={handleClose}>
          <img src="https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Close-icon.svg" />
        </div>
      </div>
      {hasSearchBar && (
        <div className={clx(classes.searchWrapper, "mobile__search-wrapper")}>
          <div className={clx(classes.searchIcon)}>
            <FiSearch className={classes.searchFi} />
          </div>
          <InputText
            value={inputValue}
            onChange={handleInputChange}
            placeholder="search menu"
            active={active}
            variant="input__variant"
            name="search"
          />
        </div>
      )}
      {children}
    </div>
  );
};
