import { AnchorHTMLAttributes, ReactNode } from "react";

export interface ILink extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    href: string;
}