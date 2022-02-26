import React from "react";
import { BsNewspaper } from "react-icons/bs";
import { FcTemplate } from "react-icons/fc";

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
      <UnderlineLink href="https://yehezgun.com">
        {new Date().getFullYear()} | Yehezkiel Gunawan
      </UnderlineLink>
      <div className="flex items-center justify-end md:mt-0">
        <ButtonLink
          variant="ghost"
          href="https://github.com/yehezkielgunawan?tab=repositories&q=starter&type=&language=&sort="
        >
          <FcTemplate size={20} className="mr-2" /> Starter Template
        </ButtonLink>
        <ButtonLink variant="ghost" href="https://docs.yehezgun.com">
          <BsNewspaper size={20} className="mr-2" /> Personal Docs
        </ButtonLink>
      </div>
    </footer>
  );
};

export default FooterComponent;
