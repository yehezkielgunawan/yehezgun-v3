import React from "react";

import { footerLinks } from "@/constants/footerLink";
import clsxm from "@/lib/helpers/clsxm";

import UnderlineLink from "../links/UnderlineLink";
import UnstyledLink from "../links/UnstyledLink";

const FooterComponent = () => {
  return (
    <footer
      className={clsxm(
        "mx-auto max-w-4xl border-t pt-12 pb-32 text-center md:pb-12",
        "flex flex-wrap-reverse items-center justify-center gap-12 md:justify-between",
        "px-2 md:px-1"
      )}
    >
      <UnderlineLink
        href="https://yehezgun.com"
        className="ml-2 font-primary text-sm md:ml-0 md:text-base"
      >
        {new Date().getFullYear()} | Yehezkiel Gunawan
      </UnderlineLink>
      <div
        className={clsxm(
          "flex flex-wrap items-center justify-center",
          "gap-4 font-primary text-sm md:mt-0 md:flex-nowrap",
          "mx-4 md:mx-0"
        )}
      >
        {footerLinks.map((footerLink, index) => (
          <UnstyledLink
            key={index}
            href={footerLink.url}
            className="text-sm font-semibold hover:underline md:text-base"
          >
            {footerLink.labelName}
          </UnstyledLink>
        ))}
      </div>
    </footer>
  );
};

export default FooterComponent;
