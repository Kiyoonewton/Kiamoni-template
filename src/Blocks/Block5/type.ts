export type SpinAnimationProps = {
  size: "small" | "large",
  hasNoPointer?: boolean,
  images: string[]
}

export type AutoSpinnerProps = {
  size: string,
  divWidth: number,
  translate: number,
  imageArray: string[]
}

export type SpinnerProps = {
  size: string,
  divWidth: number,
  getRotationDegree: (index: number) => number,
  rotation: number,
  duplicatedImages: string[]
}