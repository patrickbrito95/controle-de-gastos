import React from "react";
import { IInput } from "./interface";

const Input = (props: IInput) => {
  return (
    <label className="flex flex-col w-full">
      <span>{props.label}</span>
      <input className="border border-gray-400 h-8 px-4" type={props.type} />
    </label>
  );
};

export default Input;
