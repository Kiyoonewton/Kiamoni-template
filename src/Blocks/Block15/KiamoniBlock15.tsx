import { useGetColor } from "../../hooks";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { BlockProvider, Button } from "../../components";
import { FC, useEffect, useState } from "react";
import { Modal } from "./components/modal/Modal";
import { IoCheckmarkOutline } from "react-icons/io5";
import { displayDishes } from "./helper";
import { initialClientMenuItem } from "./data";
import { useKiamoniBlock15Styles } from "./styles";
import { useGetClientMenu } from "./hooks";
import { ClientMenuItemProps } from "./types";

export const KiamoniBlock15: FC<KiamoniPropType> = ({
  configuration,
  content,
  isSsr,
}) => {
  const [clientMenuItem, setClientMenuItem] = useState<ClientMenuItemProps>(
    initialClientMenuItem
  );
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");

  const classes = useKiamoniBlock15Styles(mainConfig as CustomThemeProps);

  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const dish = clientMenuItem?.menuItem;

  const dishData = {
    image_url: dish?.image_url,
    price: dish?.price,
    name: dish?.name,
    uuid: dish?.uuid,
    currency: content?.currency,
    hasFavorite: false,
    hasStar: false,
  };

  const getClientMenu = useGetClientMenu();

  const fetchMenu = async () => {
    const clientMenu = await getClientMenu(content?.menuItem_uuid);
    setClientMenuItem(clientMenu as ClientMenuItemProps);
  };

  useEffect(() => {
    if (isSsr || !content?.menuItem_uuid) return;
    fetchMenu();
  }, [content?.menuItems_uuid]);

  const numberOfItems = 4;

  const getDisplayDish = displayDishes(dishData);
  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig}>
      <Modal isOpen={isOpen} onClose={handleClose} position={content?.position}>
        <div className={classes.modalContainer}>
          <h1 className={classes.headerContainer}>
            <div className={classes.header}>
              <IoCheckmarkOutline />
              <span className={classes.headerText}>{content?.text?.title}</span>
            </div>
            {getDisplayDish}
            {!dish?.metadata && (
              <>
                <p className={classes.metaData}>
                  Crust : {dish?.metadata?.crust}
                </p>
                <p className={classes.metaData}>
                  Size : {dish?.metadata?.size}
                </p>
              </>
            )}
          </h1>
          <div className={classes.dividingLine} />
          <div className={classes.subHeader}>
            <div className={classes.subHeaderText}>
              <p className={classes.subHeaderText}>
                You've populated your cart with
              </p>
              <p className={classes.subHeaderItems}>{numberOfItems} items</p>
            </div>
            <div className={classes.buttonContainer}>
              <p className={classes.continueButton} onClick={handleClose}>
                Continue Shopping
              </p>
              <div className={classes.buttonDivider} />
              <div className={classes.checkoutbutton}>
                <Button type="secondary" destination="checkout">
                  <p className={classes.buttonText}>Checkout (1)</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </BlockProvider>
  );
};
