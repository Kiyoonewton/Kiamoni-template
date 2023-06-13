import { useLayoutParameter } from "../../hooks/useLayoutParameter";
import clx from "classnames";
import { useKiamoniBlock7Style } from "./styles";
import { useGetColor } from "../../hooks/useGetColor";
import { Button } from "../../components/Button";
import { Heading } from "../../components";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { Arrow, BlockProvider, Carousel, KiamoniState } from "../../components";
import { FC, useEffect, useMemo, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useGetClientMenu } from "./hooks";
import { useSelector } from "react-redux";
import { initialClientMenuItems } from "./data";
import { FeatureCard } from "../../components/FeatureCard";
import { ItemProps } from "./types";
export const KiamoniBlock7: FC<KiamoniPropType> = ({
  content,
  configuration,
  layouts,
  isSsr,
}) => {
  const { restaurant } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const menu = restaurant?.menu;
  const [clientMenuItems, setClientMenuItems] = useState(
    initialClientMenuItems
  );
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useKiamoniBlock7Style(mainConfig);
  const { layoutClass, selectedLayout, sm, lg, md } =
    useLayoutParameter(layouts);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChange = (data: number) => {
    setCurrentSlide(data);
  };

  const getClientMenu = useGetClientMenu();

  const fetchMenu = async () => {
    const clientMenu = await getClientMenu(content?.menuItems_uuid);
    setClientMenuItems(clientMenu as any);
  };

  useEffect(() => {
    if (isSsr || !content?.menu_uuid) return;
    fetchMenu();
  }, [content?.menu_uuid]);

  const getMenu = useMemo(() => {
    const contentMenu = content?.menu_uuids?.map((uuid: string) => {
      const menuItem = (menu ?? clientMenuItems)?.menuItems?.find(
        (item: { uuid: string }) => item?.uuid === uuid
      );
      return menuItem;
    });
    return contentMenu;
  }, [content?.menu_uuids]);

  const heading = content?.text?.heading;
  const subHeading = content?.text?.subHeading;

  const buttonVariant = ["layout-3", "layout-5"].includes(
    selectedLayout as string
  )
    ? "tertiary"
    : "secondary";

  const slidesCount = sm ? 2 : md ? 3 : lg ? 3 : 4;

  content.dishes =
    selectedLayout === "layout-1" && sm
      ? getMenu?.slice(0, 7)
      : selectedLayout === "layout-1" && lg
      ? getMenu?.slice(0, 8)
      : selectedLayout === "layout-1"
      ? getMenu?.slice(0, 7)
      : getMenu?.slice(0, 8);

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
          <article className={clx(classes.headerWrapper, layoutClass)}>
            <Heading
              heading={heading}
              subHeading={subHeading}
              layoutClass={layoutClass}
            />
            {selectedLayout === "layout-4" && !md && (
              <div className={classes.arrowContainer}>
                <Arrow
                  onChange={handleChange}
                  itemsPerSlide={slidesCount}
                  itemsToSlide={1}
                  cards={getDishes(true)}
                  currentSlider={currentSlide}
                />
              </div>
            )}
          </article>
          {selectedLayout === "layout-4" ? (
            <div className={classes.carouselContainer}>
              <Carousel
                cards={getDishes(true)}
                itemsPerSlide={slidesCount}
                itemsToSlide={1}
                currentSlider={currentSlide}
                arrow={false}
                onChange={handleChange}
              />
            </div>
          ) : (
            getDishes(true)
          )}
          {selectedLayout === "layout-1" ? (
            <div
              className={clx(classes.adContainer, classes.adContinerVertical)}
              style={{
                backgroundImage: `url('${content?.advert?.vertical}')`,
              }}
            />
          ) : selectedLayout === "layout-5" ? (
            <img
              className={clx(classes.adContainer, layoutClass)}
              src={content?.advert?.horizontal}
            />
          ) : null}
          <div className={clx(classes.buttonContainer, layoutClass)}>
            {buttonVariant === "secondary" ? (
              <Button
                type={buttonVariant}
                destination={content?.button?.[0]?.link}
              >
                {content?.button?.[0]?.text}
                <AiOutlineArrowRight className={classes.buttonArrow} />
              </Button>
            ) : (
              <Button
                type={buttonVariant}
                destination={content?.button?.[0]?.link}
              >
                <p className={classes.button}>
                  {content?.button?.[0]?.text}
                  <AiOutlineArrowRight className={classes.buttonArrow} />
                </p>
              </Button>
            )}
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
