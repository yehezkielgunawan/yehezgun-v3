import { AiFillHome } from "react-icons/ai";
import { FaPencilRuler, FaRocket } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { RiAccountCircleFill } from "react-icons/ri";

type MenuListProps = {
  menu_name: string;
  route: string;
  icon: IconType;
};

export const menuList: Array<MenuListProps> = [
  {
    menu_name: "Home",
    route: "/",
    icon: AiFillHome,
  },
  {
    menu_name: "Projects",
    route: "/projects",
    icon: FaRocket,
  },
  {
    menu_name: "Articles",
    route: "/articles",
    icon: FaPencilRuler,
  },
  {
    menu_name: "About Me",
    route: "/aboutme",
    icon: RiAccountCircleFill,
  },
];
