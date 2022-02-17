type MenuListProps = {
  menu_name: string;
  route: string;
};

export const menuList: Array<MenuListProps> = [
  {
    menu_name: "Home",
    route: "/",
  },
  {
    menu_name: "Projects",
    route: "/projects",
  },
  {
    menu_name: "Articles",
    route: "/articles",
  },
  {
    menu_name: "About Me",
    route: "/aboutme",
  },
];
