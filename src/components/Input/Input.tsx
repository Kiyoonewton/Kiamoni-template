import { ChangeEvent, useEffect, useRef } from "react";
import { useInputStyles } from "./styles";
import { InputProps } from "./types";
import clx from "classnames";

export const InputText = ({
  variant,
  value,
  onChange,
  placeholder,
  active,
  cancelButton,
  name,
}: InputProps) => {
  const classes = useInputStyles();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const desktopInput =
      placeholder === "search"
        ? document.getElementById("search")
        : document.getElementById("search menu");
    active && desktopInput?.focus();
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value, name);
  };

  return (
    <div className={classes.textInput}>
      <input
        ref={inputRef}
        value={value}
        id={placeholder}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        className={clx(classes.input__search, variant)}
      />
      {!cancelButton && value && value.length > 0 && (
        <img
          src={
            "https://sytbuildr.s3.eu-west-2.amazonaws.com/kiamoni-template/Close.svg"
          }
          onClick={() => {
            onChange("", "");
          }}
        />
      )}
    </div>
  );
};
