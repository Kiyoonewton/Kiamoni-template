import { BlockProvider } from "../../components";
import { CommentCard } from "./components";
import { FC, useState } from "react";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { useGetColor, useLayoutParameter } from "../../hooks";
import { useKiamoniBlocks12Styles } from "./style";
import { Veggies } from "./components";
import { Arrow, Carousel } from "../../components";
import clx from "classnames";
import { Heading } from "../../components";

export const KiamoniBlock12: FC<KiamoniPropType> = ({
  configuration,
  content,
  layouts,
}) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const classes = useKiamoniBlocks12Styles(mainConfig as CustomThemeProps);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { selectedLayout, layoutClass, xmd } = useLayoutParameter(layouts);

  const handleChange = (data: number) => {
    setCurrentSlide(data);
  };
  const layoutArray = ["layout-1", "layout-5"];
  const layoutCenter = ["layout-2", "layout-3", "layout-4"];

  const image =
    "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Testimonial-Web-V2.png";

  const getCommentCard = () => {
    return content?.comments?.map(
      (item: { name: string; comment: string }, i: number) => (
        <div key={i}>
          <CommentCard
            name={item?.name}
            comment={item?.comment}
            double={selectedLayout === "layout-4" && !xmd ? true : false}
            center={
              layoutCenter.includes(selectedLayout as string) ? true : false
            }
          />
        </div>
      )
    );
  };

  return (
    <BlockProvider mainConfig={mainConfig}>
      <section className={clx(classes.root, layoutClass)}>
        <div
          style={{ backgroundImage: `url('${image}')` }}
          className={clx(classes.backgroundImageContainer)}
        />
        {layoutArray.includes(selectedLayout ?? "") && <Veggies />}
        <div className={clx(classes.container, layoutClass)}>
          <div className={clx(classes.contentWrapper, layoutClass)}>
            <div className={clx(classes.getHeading, layoutClass)}>
              <Heading
                heading={content?.text?.title}
                subHeading={content?.text?.subtitle}
              />
            </div>
            <div className={clx(classes.commentContainer, layoutClass)}>
              <div className={clx(classes.commentCardContainer, layoutClass)}>
                <Carousel
                  onChange={handleChange}
                  itemsPerSlide={selectedLayout === "layout-4" && !xmd ? 2 : 1}
                  itemsToSlide={1}
                  cards={getCommentCard()}
                  currentSlider={currentSlide}
                  arrow={false}
                  hasPointer={false}
                />
              </div>
              <div className={clx(classes.arrowContainer, layoutClass)}>
                <Arrow
                  onChange={handleChange}
                  itemsPerSlide={1}
                  itemsToSlide={1}
                  cards={getCommentCard()}
                  currentSlider={currentSlide}
                  hasArrow={true}
                />
              </div>
            </div>
          </div>
          {selectedLayout === "layout-5" && !xmd && (
            <div
              style={{ backgroundImage: `url('${image}')` }}
              className={clx(classes.imageContainer)}
            />
          )}
        </div>
      </section>
    </BlockProvider>
  );
};
