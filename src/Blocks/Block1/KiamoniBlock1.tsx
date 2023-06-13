import { useState } from "react";
import { useKiamoniBlock1Styles } from ".";
import clx from "classnames";
import { FiSearch } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { Drawer } from "../../components/Drawer";
import { useDrawerStyles } from "../../components/Drawer/styles";
import { useLayoutParameter } from "../../hooks/useLayoutParameter";
import { InputText } from "../../components/Input/Input";
import { displayLink } from "./helper";
import { useGetColor } from "../../hooks/useGetColor";
import { useKiamoniBlock1MobileStyles } from ".";
import { Button } from "../../components/Button/Button";
import { BlockProvider } from "../../components";

export const KiamoniBlock1 = ({
  content,
  configuration,
  layouts,
}: KiamoniPropType) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useKiamoniBlock1Styles(mainConfig);
  const classesMobile = useKiamoniBlock1MobileStyles(mainConfig);
  const drawerClasses = useDrawerStyles(mainConfig);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchpop, setSearchPop] = useState(false);

  const handleToggle = () => {
    setActive(false);
    setToggle(!toggle);
  };

  const { path, selectedLayout, layoutClass, lg, sm } =
    useLayoutParameter(layouts);
  const clickSearchBar = selectedLayout === "layout-3";

  const handleFocus = () => {
    hasSearchBar && !clickSearchBar && setToggle(!toggle);
    hasSearchBar && clickSearchBar && setSearchPop(true);
    hasSearchBar && setActive(!clickSearchBar ? true : false);
    hasSearchBar && setSearchActive(clickSearchBar ? true : false);
  };

  const wishlist =
    (selectedLayout === "layout-2" && lg) ||
    (selectedLayout === "layout-3" && sm);

  const hasSearchBar =
    (["layout-1", "layout-2"].includes(selectedLayout ?? "") && lg) ||
    (selectedLayout !== "layout-5" && sm);
  const navDisplayLink = displayLink({ content, classes, path });

  const handleNameChange = (value: string) => {
    setSearchInput(value);
  };

  const favoriteCount = content?.icons?.find(
    (a: { name: string }) => a.name === "wishlist"
  );

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig}>
      <nav className={classes.root}>
        <div className={clx(classes.container, layoutClass)}>
          <Drawer
            isOpen={toggle}
            onClose={handleToggle}
            hasSearchBar={hasSearchBar}
            active={active}
            value={searchInput}
            onChange={handleNameChange}
          >
            <div className={clx(classes.menuList, classes.mobileNavWrapper)}>
              {navDisplayLink}
            </div>
          </Drawer>
          <div
            className={clx(classesMobile.openNav, layoutClass)}
            onClick={handleToggle}
          >
            <img
              src={
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Hamburger.svg"
              }
              className={clx(classesMobile.openNavImg, layoutClass)}
            />
          </div>
          <a
            href=""
            className={clx(classes.logoWrapper, layoutClass, {
              ["searchPop"]: searchpop,
            })}
          >
            <div className={clx(classes.logo__container, layoutClass)}>
              <img
                src={content?.image?.src}
                alt="kiamoni"
                className={clx(classes.logo)}
              />
            </div>
          </a>
          <div className={clx(classes.menuList, layoutClass)}>
            {navDisplayLink}
          </div>
          <div
            className={clx(drawerClasses.searchWrapper, layoutClass, {
              ["searchPop"]: searchpop,
            })}
          >
            <div
              className={clx(drawerClasses.searchIcon, layoutClass, {
                ["searchPop"]: searchpop,
              })}
              onClick={handleFocus}
            >
              <FiSearch size={22} className={drawerClasses.searchFi} />
            </div>
            <InputText
              value={searchInput}
              onChange={handleNameChange}
              placeholder="search"
              active={searchActive}
              cancelButton={true}
              name="search"
            />
            {((!hasSearchBar && searchInput.length > 0) ||
              (layoutClass === "layout_5" && searchInput.length > 0) ||
              (clickSearchBar && wishlist)) && (
              <img
                src={
                  "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Close-icon.svg"
                }
                className={clx(drawerClasses.cancelText, layoutClass)}
                onClick={() => {
                  setSearchInput("");
                  setSearchPop(false);
                }}
              />
            )}
          </div>
          <div className={clx(classes.iconWrapper, layoutClass)}>
            {!wishlist && (
              <a href="/wishlist" className={clx(classes.heart, layoutClass)}>
                <AiFillHeart size={"23px"} className={classes.aiIcon} />
              </a>
            )}
            <a
              href="/cart"
              className={clx(classesMobile.cart, layoutClass, {
                ["searchPop"]: searchpop,
              })}
            >
              <img
                src={
                  "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Vector+(4).svg"
                }
                className={clx(classesMobile.cartImg)}
              />
              <span className="cart__number">{favoriteCount.count}</span>
            </a>
          </div>
          <div className={clx(classesMobile.button, layoutClass)}>
            <Button type="primary" destination={content?.buttons?.[0]?.url}>
              {content?.buttons?.[0]?.text}
            </Button>
          </div>
        </div>
        <div className={clx(classesMobile.mobileWrapper, layoutClass)}>
          {layoutClass === "layout_3" && navDisplayLink}
        </div>
      </nav>
    </BlockProvider>
  );
};
