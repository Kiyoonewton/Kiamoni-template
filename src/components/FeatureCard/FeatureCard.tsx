import { useSelector } from "react-redux";
import { useFeatureCardStyles } from "./styles";
import { BlockProviderProps, DishCard } from "../../components";
import { CustomThemeProps } from "../../../types";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import clx from "classnames";
import { useState } from "react";
import { FeatureCardProps } from "./types";

export const FeatureCard = ({
  rating,
  dish,
  price,
  dishName,
  hasSearch,
  favorite,
  link,
  currency,
  hasStar = true,
  hasFavorite = true,
}: FeatureCardProps) => {
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useFeatureCardStyles(mainConfig as CustomThemeProps);
  const [isFavorite, setIsFavorite] = useState(favorite);

  return (
    <div className={clx(classes.card, "cardShadow")}>
      <div className={clx(classes.dishCard)}>
        {hasFavorite && (
          <div
            className={classes.favorite}
            onClick={() => {
              setIsFavorite(!isFavorite);
            }}
          >
            {isFavorite ? (
              <AiFillHeart className={"fill"} />
            ) : (
              <AiOutlineHeart className={"outline"} />
            )}
          </div>
        )}
        <DishCard link={link} hasSearch={hasSearch}>
          <div
            draggable={false}
            className={classes.dishCardImg}
            style={{ backgroundImage: `url('${dish}')` }}
          />
        </DishCard>
      </div>
      <div className={classes.cardTextWrapper}>
        <div className={clx(classes.dishCardWrapper)}>
          <p className={clx(classes.dishCardText)}>{dishName}</p>
          {hasStar && (
            <div className={clx(classes.dishStar)}>
              {Array(5)
                .fill(0)
                .fill(1, 0, rating)
                .map((item, i) =>
                  item && item === 1 ? (
                    <AiFillStar key={i} />
                  ) : (
                    <AiOutlineStar key={i} />
                  )
                )}
            </div>
          )}
          <p className={clx(classes.dishCost, "price")}>
            {currency} {price}
          </p>
        </div>
      </div>
    </div>
  );
};
