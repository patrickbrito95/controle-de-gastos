import React from "react";
import { IButton } from "./inteface";

const Button = (props: IButton) => {
  return (
    <button
      {...props}
      className="bg-blue-500 h-10 text-white font-bold hover:bg-blue-300 disabled:cursor-not-allowed disabled:bg-blue-100"
    >
      {props.children}
    </button>
  );
};

export default Button;
