import React from "react";

import clsxm from "@/lib/helpers/clsxm";

import UnstyledLink, { UnstyledLinkProps } from "../links/UnstyledLink";

const ButtonVariant = ["primary", "outline", "ghost", "light", "dark"] as const;

type ButtonLinkProps = {
  variant?: typeof ButtonVariant[number];
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, className, variant = "primary", ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          "inline-flex items-center rounded px-4 py-2 font-semibold",
          "focus:outline-none focus-visible:ring focus-visible:ring-primary-500",
          "font-primary shadow-sm",
          "transition-colors duration-75",
          //#region  //*=========== Variants ===========
          [
            variant === "primary" && [
              "bg-primary-500 text-white",
              "border border-primary-600",
              "hover:bg-primary-600 hover:text-white",
              "active:bg-primary-500",
              "disabled:bg-primary-400 disabled:hover:bg-primary-400",
            ],
            variant === "outline" && [
              "text-primary-600 dark:text-primary-400",
              "border border-primary-500 dark:hover:bg-primary-700",
              "hover:bg-primary-200 hover:underline active:bg-primary-100 disabled:bg-primary-100",
            ],
            variant === "ghost" && [
              "text-black dark:text-white",
              "shadow-none",
              "hover:bg-primary-200 active:bg-primary-100 disabled:bg-primary-100 dark:hover:bg-zinc-500",
            ],
            variant === "light" && [
              "bg-white text-errieblack-500 ",
              "border border-gray-300",
              "hover:bg-charcoal-100 hover:text-errieblack-500",
              "active:bg-white/80 disabled:bg-charcoal-200",
            ],
            variant === "dark" && [
              "bg-errieblack-500 text-white",
              "hover:bg-charcoal-500 active:bg-charcoal-700 disabled:bg-charcoal-700",
            ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed",
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
