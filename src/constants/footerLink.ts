import { BsNewspaper } from "react-icons/bs";
import { FcTemplate } from "react-icons/fc";
import { IconType } from "react-icons/lib";
import { SiSimpleanalytics } from "react-icons/si";

type FooterLinkProps = {
  url: string;
  icon: IconType;
  labelName: string;
};

export const footerLinks: Array<FooterLinkProps> = [
  {
    url: "https://github.com/yehezkielgunawan?tab=repositories&q=starter&type=&language=&sort=",
    icon: FcTemplate,
    labelName: "Starter Template",
  },
  {
    url: "https://docs.yehezgun.com",
    icon: BsNewspaper,
    labelName: "Personal Docs",
  },
  {
    url: "https://umami.yehezgun.com/share/JAFbp7LG/yehezgun",
    icon: SiSimpleanalytics,
    labelName: "Analytics",
  },
];
