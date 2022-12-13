import React from "react";

import { footerLinks } from "@/constants/footerLink";
import clsxm from "@/lib/helpers/clsxm";

import UnderlineLink from "../links/UnderlineLink";
import UnstyledLink from "../links/UnstyledLink";

const FooterComponent = () => {
  return (
    <footer
      className={clsxm(
        "mx-auto max-w-4xl border-t border-charcoal-200 pt-12 pb-32 dark:border-charcoal-100 md:pb-12",
        "px-4 lg:px-2",
        "space-y-8 font-primary"
      )}
    >
      <div
        className={clsxm(
          "sm:flex sm:flex-wrap sm:items-center",
          "grid grid-cols-2 gap-2",
          "mx-2 md:m-0"
        )}
      >
        {footerLinks.map((footerLink, index) => (
          <UnstyledLink
            key={index}
            href={footerLink.url}
            className={clsxm(
              "text-sm font-semibold hover:underline md:text-base",
              "p-1 hover:rounded-md hover:bg-lightsteel-400 dark:hover:bg-lightsteel-800"
            )}
          >
            {footerLink.labelName}
          </UnstyledLink>
        ))}
      </div>
      <UnderlineLink
        href="https://yehezgun.com"
        className="ml-2 font-primary text-sm md:ml-0 md:text-base"
      >
        {new Date().getFullYear()} | Yehezkiel Gunawan
      </UnderlineLink>
    </footer>
  );
};

export default FooterComponent;
