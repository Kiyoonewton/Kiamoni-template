import { FC, useEffect, useRef, useState } from "react";
import { useSpinAnimationStyles } from "./style";
import clx from "classnames";
import { BlockProviderProps, Pointer } from "../../../../components";
import { SpinAnimationProps } from "../../type";
import { Spinner1 } from "../Spinner1";
import { useSelector } from "react-redux";
import { CustomThemeProps } from "../../../../../types";

export const SpinAnimation: FC<SpinAnimationProps> = ({
  size,
  hasNoPointer,
  images,
}) => {
  const [rotation, setRotation] = useState(45);
  const [currentSlide, setCurrentSlide] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const [divWidth, setDivWidth] = useState(0);
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useSpinAnimationStyles(mainConfig as CustomThemeProps);
  const duplicatedImages = images.concat(images);
  const intervalRef = useRef<number | null>(null);

  const handleResize = () => {
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      setDivWidth(width);
    }
  };

  useEffect(() => {
    document.addEventListener("resize", handleResize);
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      setDivWidth(width);
    }
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  const getActiveItem = () => {
    const value = rotation / 45;
    if (value < 4) setCurrentSlide(value);
    setCurrentSlide(value % 4);
  };

  useEffect(() => {
    duplicatedImages?.splice(0, 0, "");
  }, [duplicatedImages]);

  useEffect(() => {
    getActiveItem();
  }, [rotation]);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setRotation((rotation) => rotation + 45);
    }, 3000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const getRotationDegree = (index: number): number => {
    const degreesMap: number[] = [90, 45, 0, 315, 270, 225, 180, 135];
    return degreesMap.indexOf(index);
  };

  const handleSlideClick = (index: number) => {
    setRotation(index * 45);
  };

  return (
    <div
      className={classes.spinnerContainer}
      ref={divRef}
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
    >
      <div
        className={classes.spinnerLine}
        style={{ width: divWidth, height: divWidth }}
      ></div>
      <div
        className={clx(classes.spinnerPath)}
        style={{
          transition: "transform .8s cubic-bezier(0.34,1.56,0.64,1)",
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <Spinner1
          size={size}
          divWidth={divWidth}
          getRotationDegree={getRotationDegree}
          rotation={rotation}
          duplicatedImages={duplicatedImages}
        />
      </div>
      {!hasNoPointer && (
        <div className={classes.pointerWrapper}>
          {Pointer({
            pointerCount: 4,
            currentSlide,
            onClick: handleSlideClick,
            lg: true,
          })}
        </div>
      )}
    </div>
  );
};
