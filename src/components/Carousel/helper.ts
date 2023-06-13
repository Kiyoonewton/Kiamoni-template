
import { OnSlideProps } from "./type";

export function onSlide(
  { dimension, isMoved, setCurrentSlide, setIsMoved, cards, currentSlide, itemsPerSlide }: OnSlideProps
) {
  return () => {
    if (dimension) {
      if (isMoved.move === 0) {
        setCurrentSlide(currentSlide);
      } else if (isMoved.up > isMoved.down) {
        setIsMoved((prev: any) => ({ ...prev, ["move"]: 0 }));
        const index =
          cards && currentSlide === 0 ? currentSlide - 0 : currentSlide - 1;
        setCurrentSlide(index);
        setIsMoved((prev: any) => ({
          ...prev,
          ["move"]: 0,
          ["up"]: 0,
          ["down"]: 0,
        }));
      } else if (isMoved.up < isMoved.down && isMoved.up !== 0) {
        setIsMoved((prev: any) => ({ ...prev, ["move"]: 0 }));
        const index =
          cards && currentSlide === cards.length - (itemsPerSlide ?? 0)
            ? currentSlide + 0
            : currentSlide + 1;
        setCurrentSlide(index);
        setIsMoved((prev: any) => ({
          ...prev,
          ["move"]: 0,
          ["up"]: 0,
          ["down"]: 0,
        }));
      } else {
        setCurrentSlide(currentSlide);
      }
    }
  };
}