import { useLayoutParameter } from "../../hooks/useLayoutParameter";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { useKiamoniBlockStyles4 } from ".";
import clx from "classnames";
import { useGetColor } from "../../hooks/useGetColor";
import { useKiamoniLayoutBlockStyles4 } from ".";
import { useKiamoniOtherLayoutBlockStyles4 } from "./styles/otherLayoutStyles";

export const KiamoniBlock4 = ({
  content,
  layouts,
  configuration,
}: KiamoniPropType) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const classes = useKiamoniBlockStyles4(mainConfig);
  const classesLayout = useKiamoniLayoutBlockStyles4(mainConfig);
  const classesOtherLayout = useKiamoniOtherLayoutBlockStyles4(mainConfig);

  const { selectedLayout, layoutClass } = useLayoutParameter(layouts);

  const cardArray = () => {
    return ["layout-1", "layout-2"].includes(selectedLayout as string)
      ? content?.cards.slice(0, 3)
      : content?.cards;
  };
  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <div
          className={clx(
            classes.contentContainer,
            layoutClass,
            classesLayout.layoutContainer,
            classesOtherLayout.layoutContainer
          )}
        >
          <div className={classes.heading}>
            <h1>{content?.text?.title}</h1>
            <p>{content?.text?.subTitle}</p>
          </div>
          {cardArray().map(
            (
              item: {
                image: string;
                text: { title: string; subtitle: string };
              },
              i: number
            ) => (
              <div key={i} className={classes.contentWrapper}>
                <div>
                  <h4>{item?.text?.title}</h4>
                  <img src={item?.image} />
                </div>
                <p>{item?.text?.subtitle}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
