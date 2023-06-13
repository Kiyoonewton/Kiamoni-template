import { useLayoutParameter } from "../../hooks/useLayoutParameter";
import { RenderLinkProps, useKiamoniBlock3styles } from ".";
import clx from "classnames";
import { CustomThemeProps, KiamoniPropType } from "../../../types";
import { GetForm } from "./extra";
import { useFooterContentStyles } from ".";
import { useFooterTopStyles } from ".";
import { BlockProvider } from "../../components";
import { useGetColor } from "../../hooks";

export const KiamoniBlock3 = ({
  configuration,
  content,
  layouts,
}: KiamoniPropType) => {
  const mainConfig = useGetColor(configuration as CustomThemeProps, "main");
  const buttonConfig = useGetColor(configuration as CustomThemeProps, "button");
  const classes = useKiamoniBlock3styles(mainConfig as CustomThemeProps);
  const classesContent = useFooterContentStyles(mainConfig as CustomThemeProps);
  const classesFooterContent = useFooterTopStyles(
    mainConfig as CustomThemeProps
  );

  const socialLinks = content?.footerLinks?.filter(
    (item: { name: string; icons: string }) => item.name && item.icons
  )[0];

  const layoutsArray = ["layout-3", "layout-4", "layout-5"];
  const layoutsArray2 = ["layout-4", "layout-5"];

  const getIcons = ({ type, name }: RenderLinkProps) => {
    return type === "facebook"
      ? "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Vector+(8).svg"
      : type === "instagram"
      ? "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/InstagramLogo.svg"
      : type === "youtube"
      ? "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/YoutubeLogo.svg"
      : name === "address"
      ? "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Vector+(9).svg"
      : name === "phone"
      ? "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Vector+(10).svg"
      : name === "email"
      ? "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Vector+(11).svg"
      : null;
  };

  const renderPersonalDetailLinks = () => {
    const personalDetails = content?.footerLinks?.filter(
      (item: { name: string }) => !item.name
    )[0];
    return (
      <div className={clx(classesFooterContent.footerLocation, layoutClass)}>
        {personalDetails?.links?.map((link: RenderLinkProps, i: number) => (
          <a key={i} href={link?.url}>
            <img src={getIcons({ name: link?.name }) ?? ""} />
            <p>{link?.text}</p>
          </a>
        ))}
      </div>
    );
  };

  const renderOtherLinks = () => {
    const otherLinks = content?.footerLinks?.filter(
      (item: RenderLinkProps) => item.name && !item.icons
    );
    return otherLinks.map((item: RenderLinkProps, i: number) => {
      return (
        layoutsArray.includes(selectedLayout as string) && (
          <div
            key={i}
            className={clx(
              classes.footerShopping,
              i === 1 && classesContent.second,
              layoutClass
            )}
          >
            <h6
              className={clx(classesContent.footerSocialContent, layoutClass)}
            >
              {item?.name}
            </h6>
            <div className={classesContent.footerShoppingLinks}>
              {(item?.links ?? []).map((item: RenderLinkProps, i: number) => (
                <a href={item?.url} key={i}>
                  {item?.text}
                </a>
              ))}
            </div>
          </div>
        )
      );
    });
  };

  const renderSocialLink = () => {
    return (
      <div className={clx(classes.footerSocial, layoutClass)}>
        {socialLinks?.icons?.map((icon: RenderLinkProps, i: string) => (
          <a href={icon?.url} key={i}>
            <img src={getIcons({ type: icon?.type }) ?? ""} />
            <p>{icon?.type}</p>
          </a>
        ))}
      </div>
    );
  };

  const renderSchedule = () => {
    return (
      <div
        className={clx(classesFooterContent.footerLocationRight, layoutClass)}
      >
        <h6 className={clx(classesContent.footerSocialContent, layoutClass)}>
          Opening Hours
        </h6>
        {content?.schedule?.map((item: RenderLinkProps, i: number) => (
          <div key={i}>
            <img
              src={
                "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/ic_baseline-access-time.svg"
              }
            />
            <p>
              <span>{item?.day}</span>:
              <span className={classesFooterContent.scheduleTime}>
                {item?.time}
              </span>
            </p>
          </div>
        ))}
      </div>
    );
  };

  const { selectedLayout, layoutClass, lg } = useLayoutParameter(layouts);
  return (
    <BlockProvider mainConfig={mainConfig} buttonConfig={buttonConfig}>
      <footer className={clx(classes.root, layoutClass)}>
        {selectedLayout !== "layout-3" && (
          <div className={clx(classesFooterContent.footerContainer)}>
            <div className={clx(classes.footerContainerTop, layoutClass)}>
              <div className={classes.footerTop}>
                <div className={clx(classes.footerTopHeader, layoutClass)}>
                  <h1>{content?.text?.main}</h1>
                  <p>{content?.text?.body}</p>
                </div>
                <GetForm
                  position="top"
                  client={content?.client}
                  layouts={layouts ?? []}
                />
              </div>
            </div>
          </div>
        )}
        <div className={clx(classes.footerContainerBottom, layoutClass)}>
          <div
            className={clx(classesContent.footerContentContainer, layoutClass)}
          >
            <div
              className={clx(
                classesContent.footerContentContainerLogo,
                layoutClass
              )}
            >
              <img
                src={
                  "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Kiamoni+(2).svg"
                }
              />
              <p>{content?.text?.extra}</p>
            </div>
            {renderPersonalDetailLinks()}
            {renderOtherLinks()}
            <div
              className={clx(
                classesFooterContent.footerLocationCenter,
                layoutClass
              )}
            >
              <h6
                className={clx(classesContent.footerSocialContent, layoutClass)}
              >
                {socialLinks?.name}
              </h6>
              {renderSocialLink()}
            </div>
            {!layoutsArray2.includes(selectedLayout as string) && (
              <GetForm
                position="bottom"
                client={content?.client}
                layouts={layouts ?? []}
              />
            )}
            {(selectedLayout !== "layout-3" || lg) && renderSchedule()}
          </div>
        </div>
      </footer>
    </BlockProvider>
  );
};
