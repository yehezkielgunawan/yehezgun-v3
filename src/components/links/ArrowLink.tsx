import React from "react";

import clsxm from "@/lib/helpers/clsxm";

import UnderlineLink from "./UnderlineLink";
import { UnstyledLinkProps } from "./UnstyledLink";

type ArrowLinkProps<C extends React.ElementType> = {
  as?: C;
  direction?: "left" | "right";
} & UnstyledLinkProps &
  React.ComponentProps<C>;

export default function ArrowLink<C extends React.ElementType>({
  children,
  className,
  direction = "right",
  as,
  ...rest
}: ArrowLinkProps<C>) {
  const Component = as || UnderlineLink;

  return (
    <Component
      {...rest}
      className={clsxm(
        "group gap-1",
        direction === "right" ? "flex-row-reverse" : "flex-row",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsxm(
          "h-6 w-6 transition-transform duration-200 group-hover:-translate-x-1",
          direction === "right" && "rotate-180 group-hover:translate-x-1"
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {children}
    </Component>
  );
}
