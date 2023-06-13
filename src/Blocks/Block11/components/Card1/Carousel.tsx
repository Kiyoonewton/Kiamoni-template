import { BlockProviderProps } from "../../../../components";
import { useSelector } from "react-redux";
import { CustomThemeProps } from "../../../../../types";
import { useCarousel3Styles } from ".";
import clx from "classnames";
import { FC, useEffect, useRef, useState } from "react";
import { Pointer } from "../../../../components";
import { useStyles } from "../../helper";
import { CarouselProps } from "../../types";

export const Carousel3: FC<CarouselProps> = ({
  layouts,
  images,
  clickable,
}) => {
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useCarousel3Styles(mainConfig as CustomThemeProps);
  const [position, setPosition] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const layoutArray = ["layout_2", "layout_3", "layout_4", "layout_5"];
  const { rightStyles, centerStyles, leftStyles } = useStyles(position);

  const handleClick = (i: number) => {
    setPosition(i);
  };

  const startInterval = () => {
    if (layouts === "layout_4") return;
    intervalRef.current = setInterval(() => {
      setPosition((cardIndex) => (cardIndex > 1 ? 0 : cardIndex + 1));
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  return (
    <div className={classes.root}>
      <div
        className={classes.container}
        onMouseEnter={stopInterval}
        onMouseLeave={startInterval}
      >
        {layouts === "layout_5" ? (
          <div
            className={clx(classes.blockImages, layouts)}
            style={{
              backgroundImage: `url('${images[0]}')`,
            }}
          />
        ) : (
          <>
            <div
              className={clx(classes.left, layouts)}
              style={leftStyles}
              onClick={() => clickable && setPosition(2)}
            >
              <div
                className={clx(classes.blockImages, "smallScale")}
                style={{
                  backgroundImage: `url('${images[0]}')`,
                  backgroundPosition: position === 1 ? "60%" : "10%",
                }}
              />
            </div>
            <div
              className={clx(classes.center, layouts)}
              style={centerStyles}
              onClick={() => clickable && setPosition(0)}
            >
              <div
                className={clx(classes.blockImages, "smallScale")}
                style={{
                  backgroundImage: `url('${images[1]}')`,
                  backgroundPosition: position === 2 ? "70%" : "10%",
                }}
              />
            </div>
            <div
              className={clx(classes.right, layouts)}
              style={rightStyles}
              onClick={() => clickable && setPosition(1)}
            >
              <div
                className={clx(classes.blockImages, "adjustImage")}
                style={{
                  backgroundImage: `url('${images[2]}')`,
                  backgroundPosition: position === 0 ? "50%" : "10%",
                }}
              />
            </div>
          </>
        )}
      </div>
      {!layoutArray.includes(layouts) && (
        <div className={classes.pointerContainer}>
          <Pointer
            pointerCount={3}
            currentSlide={position}
            onClick={handleClick}
            lg={true}
          />
        </div>
      )}
    </div>
  );
};
