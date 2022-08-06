import { GiPayMoney } from "react-icons/gi";
import { SiGithubsponsors, SiKofi } from "react-icons/si";

import { SingleContact } from "./contactList";

export const fundingSources: Array<SingleContact> = [
  {
    name: "Github Sponsor",
    icon: SiGithubsponsors,
    link_route: "https://github.com/sponsors/yehezkielgunawan",
  },
  {
    name: "Ko-fi",
    icon: SiKofi,
    link_route: "https://ko-fi.com/yehezgun",
  },
  {
    name: "Saweria (in IDR only)",
    icon: GiPayMoney,
    link_route: "https://saweria.co/yehezgun",
  },
];
