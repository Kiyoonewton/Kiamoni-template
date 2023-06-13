import { useGetColor } from "../../hooks/useGetColor";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { ItemProps, useKiamoniBlock6styles } from ".";
import clx from "classnames";
import { useLayoutParameter } from "../../hooks/useLayoutParameter";
import { useKiamoniBlock2Styles } from "../Block2";
import { Button } from "../../components/Button";
import { BlockProvider } from "../../components";
import { Arrow, Carousel } from "../../components";
import { useEffect, useMemo, useState } from "react";
import { useGetClientMenu } from "./hooks";
import { useSelector } from "react-redux";
import { initialClientMenuItems } from "./data";
import { KiamoniState } from "../../components";
import { FeatureCard } from "../../components/FeatureCard";

export const KiamoniBlock6 = ({
  content,
  configuration,
  layouts,
  isSsr,
}: KiamoniPropType) => {
  const { restaurant } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const menu = restaurant?.menu;
  const [clientMenuItems, setClientMenuItems] = useState(
    initialClientMenuItems
  );
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classesHeader = useKiamoniBlock2Styles(mainConfig);
  const classes = useKiamoniBlock6styles(mainConfig);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { layoutClass, selectedLayout, sm, lg } = useLayoutParameter(layouts);
  const svgImg =
    "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Group+18.svg";

  const getClientMenu = useGetClientMenu();

  const fetchMenu = async () => {
    const clientMenu = await getClientMenu(content?.menuItems_uuid);
    setClientMenuItems(clientMenu as any);
  };

  useEffect(() => {
    if (isSsr || !content?.menuItems_uuid) return;
    fetchMenu();
  }, [content?.menuItems_uuid]);

  const getMenu = useMemo(() => {
    const contentMenu_Uuids = content?.menu_uuids?.map((uuid: string) => {
      const menuItem = (menu ?? clientMenuItems)?.menuItems?.find(
        (item: { uuid: string }) => item?.uuid === uuid
      );
      return menuItem;
    });
    return contentMenu_Uuids;
  }, [content?.menu_uuids]);

  content.dishes = getMenu.slice(0, 8);
  const layoutArray = ["layout-3", "layout-4"];
  const slidesCount = sm ? 2 : lg ? 3 : 4;

  const handleChange = (data: number) => {
    setCurrentSlide(data);
  };

  const getHeader = (header: string, src: string) => {
    return (
      <div className={clx(classes.headerContainer, layoutClass)}>
        <h1 className={classesHeader.heading}>{header}</h1>
        {["layout-1", "layout-2"].includes(selectedLayout as string) && (
          <img className={classesHeader.headerImg} src={src} />
        )}
      </div>
    );
  };

  const getDishes = (hasSearch: boolean) => {
    return content?.dishes?.map((item: ItemProps, i: number) => (
      <div key={i} className={"cardBorder"}>
        <FeatureCard
          rating={5}
          dish={item?.image_url}
          price={item?.price}
          dishName={item?.name}
          hasSearch={hasSearch}
          favorite={true}
          link={item?.uuid}
          currency={content?.currency}
        />
      </div>
    ));
  };

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig}>
      <section className={classes.root}>
        <div className={clx(classes.container, layoutClass)}>
          <div className={clx(classes.headerWrapper, layoutClass)}>
            {getHeader(content?.text?.heading, svgImg)}
            {selectedLayout === "layout-2" && !sm && (
              <div className={classes.arrowWrapper}>
                <Arrow
                  onChange={handleChange}
                  itemsPerSlide={slidesCount}
                  itemsToSlide={1}
                  cards={getDishes(true)}
                  currentSlider={currentSlide}
                />
              </div>
            )}
          </div>
          {layoutArray.includes(selectedLayout as string) ? (
            <div
              className={clx(classes.dishesWrapper, layoutClass, "cardDisplay")}
            >
              {getDishes(false)}
            </div>
          ) : (
            <div className={clx("cardDisplay")}>
              <Carousel
                cards={getDishes(false)}
                itemsPerSlide={slidesCount}
                itemsToSlide={1}
                currentSlider={currentSlide}
                arrow={selectedLayout === "layout-2" || sm ? false : true}
                onChange={handleChange}
              />
            </div>
          )}
          {layoutArray.includes(selectedLayout as string) && (
            <div className={clx(classes.buttonContainer, layoutClass)}>
              <Button type="tertiary" destination={content?.button?.[0]?.link}>
                <p>{content?.button?.[0]?.text}</p>
              </Button>
            </div>
          )}
        </div>
      </section>
    </BlockProvider>
  );
};
