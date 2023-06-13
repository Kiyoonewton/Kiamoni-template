import { ReactNode } from "react";

export type InstagramCarouselProps = {
  images?: string[];
  itemsPerSlide?: number;
  children?: ReactNode;
  intervals?: number;
};