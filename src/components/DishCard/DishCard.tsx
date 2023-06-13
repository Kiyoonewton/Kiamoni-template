import { ReactNode, useEffect, useRef, useState } from "react";
import { useDishCard } from ".";
import { useSelector } from "react-redux";
import { CustomThemeProps } from "../../../types";
import clx from "classnames";
import { FiSearch } from "react-icons/fi";
import { BlockProviderProps } from "../";

export const DishCard = ({
  children,
  link,
  hasSearch,
}: {
  children: ReactNode;
  link?: string;
  hasSearch?: boolean;
}) => {
  const { mainConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useDishCard(mainConfig as CustomThemeProps);
  const divRef = useRef<HTMLDivElement>(null);
  const [divWidth, setDivWidth] = useState(0);
  const [move, setMove] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const width = divRef.current.offsetWidth;
        setDivWidth(width);
      }
    };
    window.addEventListener("resize", handleResize);
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      setDivWidth(width);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={clx(classes.parentCard, "cardSize")}
      style={{ height: divWidth }}
      onMouseMove={() => {
        setMove(true);
      }}
      onMouseLeave={() => {
        setMove(false);
      }}
    >
      <a href={link} className={classes.anchor}>
        <div
          ref={divRef}
          className={clx(classes.cardContainer, "dishCard", { rotate: move })}
          style={{ height: divWidth }}
        >
          <div className={classes.cardContainerLeft}></div>
          <div className={classes.cardContainerRight}></div>
        </div>
        <div
          style={{ height: divWidth * 0.975, width: divWidth * 0.975 }}
          className={clx(classes.dish)}
        >
          {children}
        </div>
        {hasSearch && (
          <div className={classes.searchContainer}>
            <FiSearch className={classes.search} />
          </div>
        )}
      </a>
    </div>
  );
};
