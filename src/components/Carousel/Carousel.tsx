import { FC, useCallback, useEffect, useState } from "react";
import { Swiper, useCarouselStyles } from "./";
import { CarouselProps } from "./type";
import clx from "classnames";
import { useSelector } from "react-redux";
import { CustomThemeProps } from "../../../types";
import { BlockProviderProps } from "../BlockProvider";
import { onSlide } from "./helper";

export const Carousel: FC<CarouselProps> = ({
  cards,
  itemsPerSlide,
  currentSlider,
  itemsToSlide,
  arrow,
  onChange,
  hasPointer = true,
}) => {
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useCarouselStyles(mainConfig as CustomThemeProps);

  const imageWidth = itemsPerSlide && 100 / itemsPerSlide;
  const pointerValue =
    cards && itemsPerSlide && Math.floor(cards.length / itemsPerSlide);
  const pointerCount =
    cards &&
    itemsPerSlide &&
    itemsToSlide &&
    cards.length - itemsPerSlide + itemsToSlide;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [endNext, setEndNext] = useState(true);
  const [endPrev, setEndPrev] = useState(false);

  useEffect(() => {
    setCurrentSlide(currentSlider as number);
  }, [currentSlider]);

  useEffect(() => {
    onChange(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    setEndNext(
      currentSlide + (itemsPerSlide ?? 0) - (itemsToSlide ?? 0) >=
        (cards?.length ?? 0) - 1
    );
    setEndPrev(
      currentSlide + (itemsPerSlide ?? 0) - (itemsToSlide ?? 0) <=
        (itemsPerSlide ?? 0) - (itemsToSlide ?? 0)
    );
  }, [currentSlide, currentSlider]);

  const prevSlide = useCallback(() => {
    const index =
      currentSlide + (itemsPerSlide ?? 0) - (itemsToSlide ?? 0) <= 2
        ? (cards?.length ?? 0) - (itemsPerSlide ?? 0)
        : currentSlide - (itemsToSlide ?? 0);
    setCurrentSlide(index);
  }, [setCurrentSlide, currentSlide, itemsPerSlide, itemsPerSlide]);

  const nextSlide = useCallback(() => {
    const index =
      cards &&
      currentSlide + (itemsPerSlide ?? 0) - (itemsToSlide ?? 0) >=
        cards.length - 1
        ? 0
        : currentSlide + (itemsToSlide ?? 0);
    setCurrentSlide(index);
  }, [setCurrentSlide, currentSlide, itemsPerSlide, itemsPerSlide]);

  const [isMoved, setIsMoved] = useState({ move: 0, up: 0, down: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const box = document.querySelector("#carousel_1");
  const dimension = box?.getBoundingClientRect();

  const handleSlide = onSlide({
    dimension,
    isMoved,
    setCurrentSlide,
    currentSlide,
    setIsMoved,
    cards,
    itemsPerSlide,
  });

  const handleDrag: React.MouseEventHandler<HTMLDivElement> | undefined =
    useCallback(
      (e: { clientX: any }) => {
        isDragging && setIsMoved((prev) => ({ ...prev, ["move"]: e.clientX }));
      },
      [isDragging, setIsMoved]
    );

  const handlePointer = (i: number) => setCurrentSlide(i);

  return (
    <div className={clx(classes.carouselContainer, "carousels")}>
      <div
        className={clx(classes.carouselImage, {
          arrow: arrow,
        })}
      >
        {arrow && (
          <div className={clx(classes.carouselPrevious)}>
            {!endPrev && (
              <div className={clx(classes.arrow)} onClick={prevSlide}>
                <div className={clx(classes.buttonArrow, "prev")} />
              </div>
            )}
          </div>
        )}
        <div className={clx(classes.carouselRender)}>
          <Swiper
            dimension={dimension}
            currentSlide={currentSlide}
            isMoved={isMoved}
            handleSlide={handleSlide}
            isDragging={isDragging}
            cards={cards}
            imageWidth={imageWidth}
            setIsMoved={setIsMoved}
            setIsDragging={setIsDragging}
            handleDrag={handleDrag}
          />
        </div>
        {arrow && !endNext && (
          <div className={clx(classes.carouselNext)} onClick={nextSlide}>
            <div className={clx(classes.arrow)}>
              <div className={classes.buttonArrow} />
            </div>
          </div>
        )}
      </div>
      {hasPointer && pointerValue && itemsPerSlide !== 0 && (
        <div className={classes.pointers}>
          {Array(pointerCount)
            .fill(0)
            ?.map((num, i) => {
              return i !== currentSlide ? (
                <img
                  key={i}
                  src={
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Ellipse+7.svg"
                  }
                  onClick={() => handlePointer(i)}
                  className={classes.pointerImg}
                />
              ) : (
                <img
                  key={i}
                  src={
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Group+8.svg"
                  }
                  onClick={() => handlePointer(i)}
                  className={classes.pointerImgActive}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};
