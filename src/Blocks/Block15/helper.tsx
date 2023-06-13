import { FeatureCard } from "../../components";
import { FC } from "react";
import { DisplayDish } from "./types";

export const displayDishes: FC<DisplayDish> = ({
  image_url,
  price,
  name,
  uuid,
  currency,
  hasFavorite,
  hasStar,
}) => {
  return (
    <div className={"cardBorder"}>
      <FeatureCard
        rating={0}
        dish={image_url}
        price={price}
        dishName={name}
        hasSearch={false}
        favorite={false}
        link={uuid}
        currency={currency}
        hasFavorite={hasFavorite}
        hasStar={hasStar}
      />
    </div>
  );
};
