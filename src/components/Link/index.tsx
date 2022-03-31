import React from "react";
import NextLink from "next/link";
import { ILink } from "./interface";

const Link = (props: ILink) => {
  return (
    <NextLink href={props.href}>
      <a {...props}>{props.children}</a>
    </NextLink>
  );
};

export default Link;
