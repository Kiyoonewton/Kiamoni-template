import { BlockProviderProps, Button } from "../../../../components";
import { useSelector } from "react-redux";
import { CustomThemeProps } from "../../../../../types";
import { useExploreCardStyles } from "./";
import clx from "classnames";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ExploreCardProps } from "./type";
import { FC } from "react";

export const ExploreCard: FC<ExploreCardProps> = ({
  type,
  button,
  animate,
  layoutClass,
  cardItem,
}) => {
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useExploreCardStyles(mainConfig as CustomThemeProps);

  return (
    <div className={classes.container}>
      <a
        href={cardItem?.uuid}
        className={clx(classes.cardContainer, type, { animate }, layoutClass)}
        style={{
          backgroundImage: type === "image" ? `url('${cardItem?.image}')` : "",
        }}
      >
        {type !== "image" && (
          <div
            className={clx(
              classes.textContainer,
              { animate },
              type,
              layoutClass
            )}
          >
            <h4 className={clx(classes.cardHeaderText, { animate })}>
              {cardItem?.title}
            </h4>
            <p className={clx(classes.cardSubtext, type, "whiteText")}>
              {cardItem?.description}
            </p>
            {button && (
              <div className={clx(classes.buttonContainer)}>
                <Button type={"tertiary"} destination={"/menu"}>
                  <p className={classes.button}>
                    view all
                    <AiOutlineArrowRight className={classes.buttonArrow} />
                  </p>
                </Button>
              </div>
            )}
          </div>
        )}
      </a>
      <a
        href={cardItem?.uuid}
        className={clx(classes.imageContainer, { animate })}
        style={{
          backgroundImage: `url('${cardItem?.image}')`,
        }}
      />
    </div>
  );
};
