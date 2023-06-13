import { CoreMenuFields } from "models";
import { CardLayoutProps } from "./type";

export const cardType = (i: number, selectedLayout: string, xmd: boolean, lg: boolean) => {
  if (selectedLayout === "layout-2")
    return xmd && i === 3
      ? "mixed"
      : i % 2
        ? "dark"
        : xmd && i === 2
          ? "dark"
          : "mixed";
  if (selectedLayout === "layout-3")
    return xmd && i === 3
      ? "image"
      : i % 2
        ? "dark"
        : xmd && i === 2
          ? "dark"
          : "image";
  if (selectedLayout === "layout-5" && lg)
    return [1, 2, 5, 6].includes(i) ? "image" : "dark";
  if (selectedLayout === "layout-5")
    return i % 2 && i > 3 ? "dark" : i % 2 === 0 && i < 4 ? "dark" : "image";
  return xmd && i === 3
    ? "none"
    : i % 2
      ? "dark"
      : xmd && i === 2
        ? "dark"
        : "none";
};

export const getCards = (clientMenuItems: CoreMenuFields) => {
  const getCards = clientMenuItems?.menuCategories.map((menuCategory) => {
    const image = clientMenuItems?.menuItems?.find(
      (item) => item?.menuCategory?.uuid === menuCategory?.uuid
    )?.image_url;
    const cardArray = { ...menuCategory, image };
    return cardArray;
  });
  return getCards;
};

export const cardsLayout = (cardArray: CardLayoutProps[], selectedLayout: string) => {
  if (selectedLayout === "layout-3") {
    return cardArray
      ?.flatMap((element: CardLayoutProps) => [element, element])
      ?.slice(0, 6);
  }
  if (selectedLayout === "layout-5") {
    return cardArray
      ?.flatMap((element: CardLayoutProps) => [element, element])
      ?.slice(0, 8);
  }

  return cardArray;
};