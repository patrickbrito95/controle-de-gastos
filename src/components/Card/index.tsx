import React from "react";
import Button from "../Button";
import { ICards } from "./interface";

const Cards = (props: ICards) => {
  return (
    <article className="bg-blue-200 dark:bg-silver p-4 shadow-md h-40 relative rounded-2xl flex justify-between flex-col gap-2">
      <div className="absolute top-2 right-2">
        <Button variant="secondary">Excluir</Button>
      </div>
      <h2 className="font-bold text-xl">{props.expense}</h2>
      <p className="px-4 h-8 flex items-center bg-white self-start rounded-full font-bold text-md">
        {props.tag}
      </p>
      <p className="font-medium">R$ {props.price}</p>
    </article>
  );
};

export default Cards;
