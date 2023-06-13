import { useVeggiesStyles } from "./";
import clx from "classnames";

export const Veggies = () => {
  const classes = useVeggiesStyles();
  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/veggies1.png')`,
        }}
        className={clx(classes.containerImage1, classes.veggiesImage)}
      />
      <div
        style={{
          backgroundImage:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/veggies5.png)",
        }}
        className={clx(classes.containerImage2, classes.veggiesImage)}
      />
      <div
        style={{
          backgroundImage:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/veggies2.png)",
        }}
        className={clx(classes.containerImage3, classes.veggiesImage)}
      />
      <div
        style={{
          backgroundImage:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/veggies7.png)",
        }}
        className={clx(classes.containerImage5, classes.veggiesImage)}
      />
      <div
        style={{
          backgroundImage:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/veggies3.png)",
        }}
        className={clx(classes.containerImage4, classes.veggiesImage)}
      />
      <div
        style={{
          backgroundImage:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/veggies6.png)",
        }}
        className={clx(classes.containerImage6, classes.veggiesImage)}
      />
      <div
        style={{
          backgroundImage:
            "url(https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/veggies4.png)",
        }}
        className={clx(classes.containerImage7, classes.veggiesImage)}
      />
    </>
  );
};
