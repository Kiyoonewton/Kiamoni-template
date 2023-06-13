import { ReactNode } from "react";

export type CarouselProps = {
  cards?: JSX.Element[];
  itemsPerSlide?: number;
  children?: ReactNode;
  itemsToSlide?: number;
  currentSlider?: number;
  arrow: boolean;
  onChange: (data: number) => void;
  hasPointer?: boolean
};

export type ArrowProps = {
  onChange: (data: number) => void;
  itemsPerSlide: number;
  itemsToSlide: number;
  cards: JSX.Element[];
  currentSlider?: number;
  hasArrow?: boolean
};

export type OnSlideProps = {
  dimension: DOMRect | undefined,
  isMoved: { move: number; up: number; down: number },
  setCurrentSlide: any,
  currentSlide: number,
  setIsMoved: any
  cards: JSX.Element[] | undefined,
  itemsPerSlide: number | undefined
}

export type SwiperProps = {
  dimension: DOMRect | undefined;
  currentSlide: number;
  isMoved: { move: number; up: number; down: number };
  handleSlide: () => void;
  isDragging: boolean;
  cards: JSX.Element[] | undefined;
  imageWidth: number | undefined;
  setIsMoved: any;
  setIsDragging: any;
  handleDrag: any;
}

export type PointerProps = {
  pointerCount: number;
  currentSlide: number;
  onClick: (index: number) => void;
  lg: boolean;
};