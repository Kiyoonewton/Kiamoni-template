import { useGetColor } from "../../hooks/useGetColor";
import { KiamoniBLock8Styles } from ".";
import { useLayoutParameter } from "../../hooks/useLayoutParameter";
import clx from "classnames";
import { Arrow, Carousel } from "../../components/Carousel";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { FC, useState } from "react";
import { Button } from "../../components/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BlockProvider, Heading } from "../../components";
import { getBlogItems } from "./helper";
import { Blog } from "./components";

export const KiamoniBlock8: FC<KiamoniPropType> = ({
  configuration,
  layouts,
  content,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = KiamoniBLock8Styles(mainConfig);
  const { layoutClass, selectedLayout, sm, lg } = useLayoutParameter(layouts);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChange = (data: number) => {
    setCurrentSlide(data);
  };

  const getHeaderData = {
    heading: content?.text?.heading,
    subHeading: content?.text?.subHeading,
    layoutClass: layoutClass,
    image: true,
  };

  switch (selectedLayout) {
    case "layout-2":
      content.blogs = content?.blogs?.slice(0, 6);
      break;
    default:
      content.blogs = content?.blogs?.slice(0, 8);
      break;
  }

  const slidesCount = sm ? 1 : lg ? 2 : 3;
  const hasNoCarousel =
    ("layout-2" === selectedLayout && !sm) || "layout-3" === selectedLayout;
  const hasArrow = selectedLayout === "layout-5" && !lg ? !sm && false : true;
  const isArrow = selectedLayout === "layout-5" && !lg && !sm;

  const getBlogCard = Blog(layoutClass);

  const blogCard = getBlogItems({
    blogs: content.blogs,
    selectedLayout: selectedLayout as string,
    getBlogCard,
  });

  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig}>
      <section className={classes.root}>
        <div className={clx(classes.container, layoutClass)}>
          <div className={clx(classes.headerContainer, layoutClass)}>
            {Heading(getHeaderData)}
            <div className={classes.arrowContainer}>
              {isArrow && (
                <Arrow
                  cards={blogCard}
                  itemsPerSlide={slidesCount}
                  itemsToSlide={1}
                  onChange={handleChange}
                />
              )}
            </div>
          </div>
          {hasNoCarousel ? (
            blogCard
          ) : (
            <div className={classes.carouselWrapper}>
              <Carousel
                cards={blogCard}
                itemsPerSlide={slidesCount}
                itemsToSlide={1}
                currentSlider={currentSlide}
                arrow={hasArrow}
                onChange={handleChange}
              />
            </div>
          )}
          <div className={clx(classes.buttonContainer, layoutClass)}>
            <Button type={"tertiary"} destination="/">
              <p className={classes.buttonText}>
                See More
                {<AiOutlineArrowRight className={classes.buttonArrow} />}
              </p>
            </Button>
          </div>
        </div>
      </section>
    </BlockProvider>
  );
};
