import { FC, useEffect, useRef, useState } from "react";
import { BlockProviderProps, Pointer } from "../../../../components";
import { SpinAnimationProps } from "../../type";
import { useSpinAnimationStyles } from "../SpinAnimation";
import clx from "classnames";
import { Spinner } from "../Spinner2";
import { useSelector } from "react-redux";
import { CustomThemeProps } from "../../../../../types";

export const AutoCarousel: FC<SpinAnimationProps> = ({ size, images }) => {
  const [spinCount, setSpinCount] = useState(0);
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const divRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const [divWidth, setDivWidth] = useState(0);
  const classes = useSpinAnimationStyles(mainConfig as CustomThemeProps);

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

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setSpinCount((prev) => {
        return prev === 3 ? 0 : prev + 1;
      });
    }, 3000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    images?.splice(0, 0, "");
  }, [images]);

  const handleSlideClick = (index: number) => {
    setSpinCount(index);
  };

  return (
    <div
      className={classes.spinnerContainer}
      ref={divRef}
      onMouseEnter={stopInterval}
      onMouseLeave={startInterval}
    >
      <div className={classes.autoCarouselComponent} />
      <div
        className={clx(classes.spinnerCarousel)}
        style={{
          transform: `translateX(-${spinCount * (100 / 3)}%)`,
        }}
      >
        <Spinner
          size={size}
          divWidth={divWidth}
          translate={spinCount}
          imageArray={images}
        />
      </div>
      <div className={classes.pointerContainer}>
        <Pointer
          pointerCount={4}
          currentSlide={spinCount}
          onClick={handleSlideClick}
          lg={true}
        />
      </div>
    </div>
  );
};
