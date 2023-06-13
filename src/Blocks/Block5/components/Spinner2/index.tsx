import { AutoSpinnerProps } from "../../type";
import clx from "classnames";
import { FC } from "react";
import { useSpinAnimationStyles } from "../SpinAnimation";
import { useSelector } from "react-redux";
import { BlockProviderProps } from "../../../../components";
import { CustomThemeProps } from "../../../../../types";

export const Spinner: FC<AutoSpinnerProps> = ({
  size,
  divWidth,
  translate,
  imageArray,
}) => {
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useSpinAnimationStyles(mainConfig as CustomThemeProps);

  return (
    <>
      {Array(5)
        .fill(0)
        ?.map((items: number, i: number) => (
          <div
            key={i}
            className={clx(classes.dishes, "vertical")}
            style={{
              width:
                size === "small" ? `${divWidth / 5}px` : `${divWidth / 6.5}px`,
              height:
                size === "small" ? `${divWidth / 5}px` : `${divWidth / 6.5}px`,
              opacity: i === 0 ? 0 : 1,
              transform: i === translate + 1 ? "scale(1.5)" : "scale(1)",
              background:
                i === translate + 1
                  ? `${mainConfig?.colors?.[300]}`
                  : `linear-gradient(107.76deg, ${mainConfig?.colors?.[600]} 20.81%, ${mainConfig?.colors?.[700]} 103.65%)`,
            }}
          >
            <div
              style={{
                width:
                  size === "small" ? `${divWidth / 6}px` : `${divWidth / 8}px`,
                height:
                  size === "small" ? `${divWidth / 6}px` : `${divWidth / 8}px`,
              }}
              className={classes.dishLine}
            >
              <img src={imageArray[i]} className={classes.dishImage} />
            </div>
          </div>
        ))}
    </>
  );
};
