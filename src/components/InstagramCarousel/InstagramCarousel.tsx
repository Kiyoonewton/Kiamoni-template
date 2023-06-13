import { useState } from "react";
import { useInstagramCarouselStyles } from ".";
import { InstagramCarouselProps } from ".";
import clx from "classnames";
import { useSelector } from "react-redux";
import { CustomThemeProps } from "../../../types";
import { BlockProviderProps } from "..";

export const InstagramCarousel = ({
  images,
  itemsPerSlide,
  children,
}: InstagramCarouselProps) => {
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useInstagramCarouselStyles(mainConfig as CustomThemeProps);
  const imageWidth = itemsPerSlide && 90 / itemsPerSlide;
  const imagePadding = itemsPerSlide && 5 / itemsPerSlide;
  const pointerValue =
    images && itemsPerSlide && Math.floor(images.length / itemsPerSlide);
  const pointerCount = images && itemsPerSlide && images.length / itemsPerSlide;
  const carouselGrid =
    itemsPerSlide === 3 ? "carousel3" : itemsPerSlide === 2 ? "carousel2" : "";
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSwiper, setCurrentSwiper] = useState(0);
  const prevSlide = () => {
    const index =
      images && itemsPerSlide && currentSlide === 0
        ? images.length / itemsPerSlide - 1
        : currentSlide - 1;
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const index =
      images &&
      itemsPerSlide &&
      currentSlide === images.length / itemsPerSlide - 1
        ? 0
        : currentSlide + 1;
    setCurrentSlide(index);
  };

  const renderSlides = () => {
    return (
      <div className={clx(classes.carouselSlide, carouselGrid)}>
        {images?.map((item, index) => (
          <img
            key={index}
            src={item}
            style={{
              transition: `transform ease 0.5s`,
              width: `${imageWidth}%`,
              padding: `${imagePadding}%`,
              transform: itemsPerSlide
                ? `translateX(-${currentSlide * itemsPerSlide * 100}%)`
                : "",
            }}
          />
        ))}
      </div>
    );
  };

  const [isMoved, setIsMoved] = useState({ move: 0, up: 0, down: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const box = document.querySelector("#carousel_1");
  const dimension = box?.getBoundingClientRect();
  const onSlide = () => {
    if (dimension) {
      if (isMoved.move === 0) {
        setCurrentSwiper(currentSwiper);
      } else if (isMoved.up > isMoved.down) {
        setIsMoved((prev) => ({ ...prev, ["move"]: 0 }));
        const index =
          images && currentSwiper === 0 ? images.length - 1 : currentSwiper - 1;
        setCurrentSwiper(index);
        setIsMoved((prev) => ({
          ...prev,
          ["move"]: 0,
          ["up"]: 0,
          ["down"]: 0,
        }));
      } else if (isMoved.up < isMoved.down && isMoved.up !== 0) {
        setIsMoved((prev) => ({ ...prev, ["move"]: 0 }));
        const index =
          images && currentSwiper === images.length - 1 ? 0 : currentSwiper + 1;
        setCurrentSwiper(index);
        setIsMoved((prev) => ({
          ...prev,
          ["move"]: 0,
          ["up"]: 0,
          ["down"]: 0,
        }));
      } else {
        setCurrentSwiper(currentSwiper);
      }
    }
  };

  const handleDrag: React.MouseEventHandler<HTMLDivElement> | undefined = (
    e
  ) => {
    isDragging && setIsMoved((prev) => ({ ...prev, ["move"]: e.clientX }));
  };

  const renderSWipable = () => {
    const onMouseMoveMent =
      dimension &&
      dimension?.width * currentSwiper -
        (isMoved.move === 0 ? 0 : isMoved.move - isMoved.down);
    return (
      <div
        draggable={false}
        onClick={onSlide}
        style={{
          display: "flex",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseUp={(e) => {
          setIsMoved((prev) => ({ ...prev, ["up"]: e.clientX }));
          setIsDragging(false);
          onSlide();
        }}
        onMouseMove={handleDrag}
        onMouseDown={(e) => {
          setIsDragging(true);
          setIsMoved((prev) => ({ ...prev, ["down"]: e.clientX }));
        }}
        onMouseLeave={() => {
          setIsDragging(false);
        }}
        onDrag={() => {
          setIsDragging(false);
        }}
      >
        {images?.map((item, index) => {
          return (
            <img
              id="carousel_1"
              key={index}
              src={item}
              style={{
                padding: "3%",
                width: "90%",
                transition: "transform .5s ease",
                transform: `translateX(${
                  onMouseMoveMent && -onMouseMoveMent
                }px)`,
              }}
              draggable={false}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className={classes.carouselContainer}>
      <div className={classes.carouselImage}>
        <div className={clx(classes.carouselPrevious)}>
          <div className={clx(classes.arrow)} onClick={prevSlide}>
            <div className={clx(classes.buttonArrow, "prev")} />
          </div>
        </div>
        <div>{itemsPerSlide === 2 ? renderSWipable() : renderSlides()}</div>
        <div className={clx(classes.carouselNext)} onClick={nextSlide}>
          <div className={clx(classes.arrow)}>
            <div className={classes.buttonArrow} />
          </div>
        </div>
      </div>
      {children}
      {pointerValue && itemsPerSlide !== 2 && (
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
                  onClick={() => setCurrentSlide(i)}
                  className={classes.pointerImg}
                />
              ) : (
                <img
                  key={i}
                  src={
                    "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Group+8.svg"
                  }
                  onClick={() => setCurrentSlide(i)}
                  className={classes.pointerImgActive}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};
