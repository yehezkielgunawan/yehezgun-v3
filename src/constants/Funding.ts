import { GiPayMoney } from "react-icons/gi";
import { SiGithubsponsors } from "react-icons/si";

import { SingleContact } from "./contactList";

export const fundingSources: Array<SingleContact> = [
  {
    name: "Github Sponsor",
    icon: SiGithubsponsors,
    link_route: "https://github.com/sponsors/yehezkielgunawan",
  },
  {
    name: "Support Via Mayar (IDR Only)",
    icon: GiPayMoney,
    link_route: "https://yehezgun.mayar.link/support",
  },
];
