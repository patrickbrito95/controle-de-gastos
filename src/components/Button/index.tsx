import React from "react";
import { IButton } from "./inteface";
import { MainButton, SecondaryButton } from "./styles";

const Button = (props: IButton) => {
  if (props.variant === "primary") {
    return <MainButton {...props}>{props.children}</MainButton>;
  }

  return <SecondaryButton {...props}>{props.children}</SecondaryButton>;
};

export default Button;
