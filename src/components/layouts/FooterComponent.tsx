import React from "react";

import { footerLinks } from "@/constants/footerLink";
import clsxm from "@/lib/helpers/clsxm";

import ButtonLink from "../buttons/ButtonLink";
import UnderlineLink from "../links/UnderlineLink";

const FooterComponent = () => {
  return (
    <footer
      className={clsxm(
        "mx-auto max-w-4xl border-t pt-12 pb-32 text-center md:pb-12",
        "flex flex-wrap-reverse items-center justify-center gap-4 md:flex-nowrap md:justify-between",
        "px-2 md:px-1"
      )}
    >
      <UnderlineLink
        href="https://yehezgun.com"
        className="font-primary text-sm"
      >
        {new Date().getFullYear()} | Yehezkiel Gunawan
      </UnderlineLink>
      <div
        className={clsxm(
          "flex flex-wrap items-center justify-center md:justify-end",
          "gap-2 font-primary text-sm md:mt-0 md:flex-nowrap"
        )}
      >
        {footerLinks.map((footerLink, index) => (
          <ButtonLink key={index} variant="ghost" href={footerLink.url}>
            {footerLink.labelName}
          </ButtonLink>
        ))}
      </div>
    </footer>
  );
};

export default FooterComponent;
