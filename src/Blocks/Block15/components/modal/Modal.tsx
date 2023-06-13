import { ModalProps } from "../../types";
import { FC } from "react";
import { useModalStyles } from "./styles";
import { useSelector } from "react-redux";
import { BlockProviderProps } from "components";
import { CustomThemeProps } from "../../../../../types";
import clx from "classnames";

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  position,
}) => {
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useModalStyles(mainConfig as CustomThemeProps);
  const closeModal = () => {
    onClose();
  };

  return isOpen ? (
    <>
      <div className={clx(classes.modal, position)}>
        <div className={classes.modalContent}>
          {children}
          <img
            src="https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Close-icon.svg"
            alt="close icon"
            className={classes.closeButton}
            onClick={closeModal}
          />
        </div>
      </div>
      <div className={classes.modalOverlay} />
    </>
  ) : null;
};
