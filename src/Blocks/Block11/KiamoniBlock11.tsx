import { BlockProvider } from "../../components";
import { useGetColor, useLayoutParameter } from "../../hooks";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { Carousel3 } from ".";
import { useKiamoniBlock11Styles } from "./styles";
import { FC } from "react";
import { Carousel4 } from "./components";
import clx from "classnames";

export const KiamoniBlock11: FC<KiamoniPropType> = ({
  configuration,
  layouts,
  content,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const classes = useKiamoniBlock11Styles(mainConfig);
  const { layoutClass, selectedLayout } = useLayoutParameter(layouts);
  const layoutArray = ["layout-2", "layout-3"];

  return (
    <BlockProvider mainConfig={mainConfig}>
      <section className={clx(classes.root, layoutClass)}>
        <div className={clx(classes.container, layoutClass)}>
          <div className={classes.carouselContainer}>
            {layoutArray.includes(selectedLayout ?? "") ? (
              <Carousel4 layouts={layoutClass ?? ""} images={content.images} />
            ) : (
              <Carousel3
                layouts={layoutClass ?? ""}
                images={content.images}
                clickable={selectedLayout === "layout-4" ? false : true}
              />
            )}
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
