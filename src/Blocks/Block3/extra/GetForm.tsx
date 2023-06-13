import { useState } from "react";
import { InputText } from "../../../components";
import { useGetFormStyles } from "..";
import clx from "classnames";
import { useLayoutParameter } from "../../../hooks";
import { useSelector } from "react-redux";
import { BlockProviderProps } from "../../../components";
import { GetFormProps } from "./type";
import { CustomThemeProps } from "../../../../types";

export const GetForm = ({ position, client, layouts }: GetFormProps) => {
  const { buttonConfig } = useSelector((state: BlockProviderProps) => state);
  const classes = useGetFormStyles(buttonConfig as CustomThemeProps);
  const { layoutClass } = useLayoutParameter(layouts);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [hasSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (value: string) => {
    setHasError(false);
    setIsSubmitted(false);
    setEmail(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setHasError(true);
      setErrorMessage("*Error Occurred, please fill the email field correctly");
      delay();
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...client?.credentials,
            template_params: { email },
          }),
        }
      );
      if (response.ok) {
        setIsSubmitted(true);
        delay();
      } else {
        setHasError(true);
        setErrorMessage("Subscription Failed, please try again");
        delay();
      }
    } catch (error) {
      setHasError(true);
      setErrorMessage("An Error Occured, please try again");
      delay();
    }
    setEmail("");
    setIsLoading(false);
  };

  const delay = () => {
    setTimeout(() => {
      setHasError(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <form
      className={clx(
        classes.footerInput,
        position === "bottom" && classes.footerInputBottom,
        position === "bottom" && layoutClass
      )}
      onSubmit={handleSubmit}
    >
      <InputText
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email here"
        variant="input__variant"
        cancelButton={true}
      />
      <button
        type="submit"
        className={clx(
          classes.footerInputButton,
          position === "bottom" && classes.footerButtonBottom
        )}
      >
        Subscribe
      </button>
      {hasError ? (
        <p className={classes.error}>{errorMessage}</p>
      ) : isLoading ? (
        <p className={clx(classes.success, "loading", classes.flashing)}>
          loading...
        </p>
      ) : hasSubmitted ? (
        <p className={classes.success}>You Have SuccessFully Subscribed</p>
      ) : (
        ""
      )}
    </form>
  );
};
