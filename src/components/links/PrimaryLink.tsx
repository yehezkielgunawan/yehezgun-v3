import React from "react";

import clsxm from "@/lib/helpers/clsxm";

import UnstyledLink, { UnstyledLinkProps } from "./UnstyledLink";

const PrimaryLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          "inline-flex items-center",
          "font-medium text-primary-600 hover:brightness-125",
          "focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

PrimaryLink.displayName = "PrimaryLink";

export default PrimaryLink;
