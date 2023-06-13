import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { ExploreCard } from "./";
import { useGetColor, useLayoutParameter } from "../../hooks";
import { useKiamoniBlock10Styles } from "./styles";
import clx from "classnames";
import { cardsLayout, cardType, getCards } from "./helper";
import { BlockProvider, Heading, KiamoniState } from "../../components";
import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CoreMenuFields } from "../../models";
import { useGetClientCategories } from "./hooks";
import { CardLayoutProps } from "./type";
import { initialClientCategories } from "./data";

export const KiamoniBlock10: FC<KiamoniPropType> = ({
  content,
  configuration,
  layouts,
  isSsr,
}) => {
  const { restaurant } = useSelector<KiamoniState, KiamoniState>(
    (store) => store
  );
  const menu = restaurant?.menu;
  const [clientCategories, setClientCategories] = useState<CoreMenuFields>(
    initialClientCategories
  );
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useKiamoniBlock10Styles(mainConfig as CustomThemeProps);
  const { layoutClass, xmd, selectedLayout, lg } = useLayoutParameter(layouts);
  const layoutArray = ["layout-4", "layout-5"].includes(selectedLayout ?? "");
  const cardData = getCards(menu ?? clientCategories);
  const getClientCategories = useGetClientCategories();

  useEffect(() => {
    if (isSsr || !content?.menu_uuid) return;
    const fetchMenu = async () => {
      const clientCategories = await getClientCategories(content?.menu_uuid);
      setClientCategories(clientCategories as any);
    };
    fetchMenu();
  }, [content?.menu_uuid]);

  const renderExploreCard = () => {
    return (
      <div className={clx(classes.exploreCardContainer, layoutClass)}>
        {cardsLayout(cardData, selectedLayout as string)?.map(
          (item: CardLayoutProps, i: number) => (
            <div key={i}>
              <ExploreCard
                cardItem={item}
                layoutClass={layoutClass ?? ""}
                type={cardType(i, selectedLayout ?? "", xmd, lg)}
                animate={selectedLayout === "layout-1" ? true : false}
                button={layoutArray ? true : false}
              />
            </div>
          )
        )}
      </div>
    );
  };

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig}>
      <section className={clx(classes.root, layoutClass)}>
        <div className={classes.container}>
          <div className={classes.headerContainer}>
            <Heading heading={content?.text?.heading} image={true} />
          </div>
          {renderExploreCard()}
        </div>
      </section>
    </BlockProvider>
  );
};
