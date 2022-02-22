import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FcTemplate } from "react-icons/fc";
import { IconType } from "react-icons/lib";
import { MdEmail } from "react-icons/md";
import { SiReadthedocs, SiDevpost } from "react-icons/si";

export type SingleContact = {
  name: string;
  icon: IconType;
  link_route: string;
};

export const contactList: Array<SingleContact> = [
  {
    name: "Linkedin",
    icon: FaLinkedin,
    link_route: "https://www.linkedin.com/in/yehezkiel-gunawan-595128138/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link_route: "https://twitter.com/YehezGun",
  },
  {
    name: "Github",
    icon: FaGithub,
    link_route: "https://github.com/yehezkielgunawan",
  },
  {
    name: "Diskusi Tech",
    icon: SiDevpost,
    link_route: "https://diskusi.tech/yehezkielgunawan",
  },
  {
    name: "Dev.to",
    icon: FaDev,
    link_route: "https://dev.to/yehezkielgunawan",
  },
  {
    name: "Email",
    icon: MdEmail,
    link_route: "mailto:yehezkiel.gunawan28@gmail.com",
  },
];

export const specialItems: Array<SingleContact> = [
  {
    name: "Starter Template",
    icon: FcTemplate,
    link_route:
      "https://github.com/yehezkielgunawan?tab=repositories&q=starter&type=&language=&sort=",
  },
  {
    name: "Personal Docs",
    icon: SiReadthedocs,
    link_route: "https://docs.yehezgun.com",
  },
];
