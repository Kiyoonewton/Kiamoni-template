import { useLayoutParameter } from "../../hooks/useLayoutParameter";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { useKiamoniBlock2Styles } from "./styles";
import clx from "classnames";
import { useGetColor } from "../../hooks/useGetColor";
import { BlockProvider } from "../../components";
import { InstagramCarousel } from "../../components/InstagramCarousel";

export const KiamoniBlock2 = ({
  content,
  layouts,
  configuration,
}: KiamoniPropType) => {
  const { selectedLayout, layoutClass, sm, lg } = useLayoutParameter(layouts);
  let instagramImages = content?.instagramImages;
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const classes = useKiamoniBlock2Styles(mainConfig);
  switch (selectedLayout) {
    case "layout-3":
      instagramImages = sm
        ? instagramImages.slice(0, 6)
        : instagramImages.slice(0, 8);
      break;
    case "layout-5":
    case "layout-6":
      instagramImages = lg
        ? sm
          ? instagramImages.slice(0, 3)
          : instagramImages.slice(0, 4)
        : instagramImages.slice(0, 5);
      break;
    default:
      break;
  }

  const slidesCount = sm ? 2 : lg ? 3 : 4;

  return (
    <BlockProvider mainConfig={mainConfig}>
      <section className={classes.root}>
        <div className={clx(classes.container, layoutClass)}>
          <div className={classes.headingWrapper}>
            {selectedLayout &&
              !["layout-5", "layout-6"].includes(selectedLayout) && (
                <h1 className={clx(classes.heading, layoutClass)}>
                  {content?.text?.heading}
                  {selectedLayout === "layout-3" && <p>#yummyfood</p>}
                </h1>
              )}
            {selectedLayout === "layout-1" && (
              <img
                className={classes.headerImg}
                src={
                  "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Group+18.svg"
                }
              />
            )}
            {["layout-2", "layout-4"].includes(selectedLayout as string) && (
              <p className={clx(classes.content, layoutClass)}>
                {content?.text?.description}
              </p>
            )}
          </div>
          {selectedLayout === "layout-5" && (
            <div className={classes.instagramBanner} />
          )}
          {selectedLayout !== "layout-4" ? (
            <div className={clx(classes.instagramImg, layoutClass)}>
              {instagramImages?.map((img: string, index: number) => (
                <img src={img} key={index} className={classes.instagramImgs} />
              ))}
            </div>
          ) : (
            <InstagramCarousel
              images={instagramImages}
              itemsPerSlide={slidesCount}
              intervals={5000}
            >
              <div className={classes.instagramTag}>
                <p>@{content?.text?.brandName} on Instagram</p>
              </div>
            </InstagramCarousel>
          )}
          {selectedLayout === "layout-6" && (
            <div className={classes.instagramContent}>
              <p>
                Follow us on <span> Instagram</span>
              </p>
              <p className={classes.kiamoniBrandName}>
                @{content?.text?.brandName}
              </p>
            </div>
          )}
        </div>
      </section>
    </BlockProvider>
  );
};
