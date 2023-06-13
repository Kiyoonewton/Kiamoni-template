import { FC } from "react";
import { SwiperProps } from "../../type";

export const Swiper: FC<SwiperProps> = ({
  dimension,
  currentSlide,
  isMoved,
  handleSlide,
  isDragging,
  cards,
  imageWidth,
  setIsMoved,
  setIsDragging,
  handleDrag,
}: SwiperProps) => {
  const onMouseMoveMent =
    dimension &&
    dimension?.width * currentSlide -
      (isMoved.move === 0 ? 0 : isMoved.move - isMoved.down);
  return (
    <div
      draggable={false}
      onClick={handleSlide}
      style={{
        display: "grid",
        cursor: isDragging ? "grabbing" : "pointer",
        width: `100%`,
        gridTemplateColumns: `repeat(${cards?.length}, ${imageWidth}%)`,
        gridTemplateRows: `100%`,
      }}
      onMouseUp={(e) => {
        setIsMoved((prev: any) => ({ ...prev, ["up"]: e.clientX }));
        setIsDragging(false);
        handleSlide();
      }}
      onMouseMove={handleDrag}
      onMouseDown={(e) => {
        setIsDragging(true);
        setIsMoved((prev: any) => ({ ...prev, ["down"]: e.clientX }));
      }}
      onMouseLeave={() => {
        setIsDragging(false);
      }}
      onDrag={() => {
        setIsDragging(false);
      }}
    >
      {cards?.map((item, index) => {
        return (
          <div
            id="carousel_1"
            key={index}
            style={{
              width: "100%",
              height: "100%",
              transition: "transform .8s ease",
              transform: `translateX(${onMouseMoveMent && -onMouseMoveMent}px)`,
              padding: "2%",
              boxSizing: "border-box",
            }}
            draggable={false}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
