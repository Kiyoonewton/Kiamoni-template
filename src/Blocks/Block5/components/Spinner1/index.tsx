import { BlockProviderProps } from "../../../../components";
import { FC } from "react";
import { useSelector } from "react-redux";
import { SpinnerProps } from "../../type";
import { useSpinAnimationStyles } from "../SpinAnimation";
import { CustomThemeProps } from "../../../../../types";

export const Spinner1: FC<SpinnerProps> = ({
  size,
  divWidth,
  getRotationDegree,
  rotation,
  duplicatedImages,
}) => {
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useSpinAnimationStyles(mainConfig as CustomThemeProps);

  return (
    <>
      {Array(8)
        .fill(0)
        ?.map((items: number, i: number) => (
          <div
            key={i}
            className={classes.dishes}
            style={{
              width:
                size === "small" ? `${divWidth / 5}px` : `${divWidth / 6.5}px`,
              height:
                size === "small" ? `${divWidth / 5}px` : `${divWidth / 6.5}px`,
              transform:
                getRotationDegree(
                  rotation >= 360 ? rotation % 360 : rotation
                ) === i
                  ? `translate(-50%, -50%) rotate(${45 * i}deg) translate(${
                      divWidth / 2
                    }px) rotate(-${45 * i}deg) scale(1.5)`
                  : `translate(-50%, -50%) rotate(${45 * i}deg) translate(${
                      divWidth / 2
                    }px) rotate(-${45 * i}deg)`,
              background:
                getRotationDegree(
                  rotation >= 360 ? rotation % 360 : rotation
                ) === i
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
              <img src={duplicatedImages[i]} className={classes.dishImage} />
            </div>
          </div>
        ))}
    </>
  );
};
