import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaPencilRuler, FaRocket } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";

type MenuListProps = {
  menu_name: string;
  route: string;
  icon: React.ReactNode;
};

export const menuList: Array<MenuListProps> = [
  {
    menu_name: "Home",
    route: "/",
    icon: <AiFillHome className="text-xl" />,
  },
  {
    menu_name: "Projects",
    route: "/projects",
    icon: <FaRocket className="text-xl" />,
  },
  {
    menu_name: "Articles",
    route: "/articles",
    icon: <FaPencilRuler className="text-xl" />,
  },
  {
    menu_name: "About Me",
    route: "/aboutme",
    icon: <RiAccountCircleFill className="text-xl" />,
  },
];
