import { SpinAnimation } from "./";
import { useKiamoniBlock5Styles } from "./style";
import { Button } from "../../components";
import { useGetColor, useLayoutParameter } from "../../hooks";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { FC } from "react";
import { BlockProvider } from "../../components";
import clx from "classnames";
import { AutoCarousel } from "./components";
import { backgroundImage } from "./helper";
import { useButtonStyles } from "./buttonStyles";

export const KiamoniBlock5: FC<KiamoniPropType> = ({
  configuration,
  layouts,
  content,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const buttonClasses = useButtonStyles();
  const classes = useKiamoniBlock5Styles(mainConfig);
  const { layoutClass, sm, selectedLayout } = useLayoutParameter(layouts);
  const isSpinCarousel = ["layout-2", "layout-3", "layout-4"].includes(
    selectedLayout as string
  );
  const hasPointer = ["layout-2", "layout-3"].includes(
    selectedLayout as string
  );

  const imageStyle = backgroundImage(
    mainConfig?.colors?.[600],
    mainConfig?.colors?.[700]
  );

  const images = content?.images;

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig}>
      <section className={clx(classes.root, layoutClass)}>
        <div
          style={{ backgroundImage: imageStyle }}
          className={clx(classes.backgroundContainer, layoutClass)}
        ></div>
        <div className={clx(classes.spinner, layoutClass)}>
          {isSpinCarousel ? (
            <SpinAnimation
              size={sm ? "small" : "large"}
              hasNoPointer={hasPointer}
              images={images}
            />
          ) : (
            <AutoCarousel
              size={sm ? "small" : "large"}
              hasNoPointer={hasPointer}
              images={images}
            />
          )}
        </div>
        <div className={clx(classes.container, layoutClass)}>
          <div className={clx(buttonClasses.header, layoutClass)}>
            <h1 className={classes.headerText}>{content?.text?.header}</h1>
            <p className={clx(buttonClasses.paragraphText, layoutClass)}>
              {content?.text?.subtext}
            </p>
            <div className={clx(buttonClasses.heroButton, layoutClass)}>
              <Button type="primary" destination={content?.buttons?.[0]?.link}>
                {content?.buttons?.[0]?.text}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
