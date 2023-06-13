import { HeadingProps } from "./type";
import clx from "classnames";
import { FC } from "react";

export const Heading: FC<HeadingProps> = ({
  heading,
  subHeading,
  layoutClass,
  image,
}) => {
  const imageSrc =
    "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Group+18.svg";
  return (
    <div className={clx(layoutClass, "getHeader")}>
      <h1>{heading}</h1>
      {subHeading && <p>{subHeading}</p>}
      {image && <img src={imageSrc} />}
    </div>
  );
};
