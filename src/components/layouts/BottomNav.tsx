import { useRouter } from "next/router";
import React from "react";

import { menuList } from "@/constants/MenuList";
import useScroll from "@/hooks/useScroll";
import clsxm from "@/lib/helpers/clsxm";

import UnstyledLink from "../links/UnstyledLink";

const BottomNav = () => {
  const router = useRouter();
  const { scrollDirection } = useScroll();
  return (
    <div
      className={clsxm(
        "fixed bottom-0.5 left-1/2 flex w-full -translate-x-1/2 items-center justify-around",
        "rounded-lg bg-gainsboro-400/70 py-2 shadow-sm shadow-lightsteel-600 dark:shadow-lightsteel-100",
        "dark:bg-errieblack-400/70 sm:hidden",
        "backdrop-blur-sm transition duration-300",
        scrollDirection === "Down" ? "translate-y-20" : "translate-y-0"
      )}
    >
      {menuList.map((menu, index) => (
        <UnstyledLink
          key={index}
          href={menu.route}
          className={clsxm(
            "flex flex-col items-center justify-center",
            "hover:rounded-md hover:border hover:border-primary-200",
            "focus:border-none"
          )}
        >
          <div
            className={clsxm(
              router?.pathname === menu.route &&
                "rounded-full bg-primary-400  dark:bg-primary-600",
              "px-3 py-1"
            )}
          >
            <menu.icon size={28} />
          </div>
          <h5 className="font-primary">{menu.menu_name}</h5>
        </UnstyledLink>
      ))}
    </div>
  );
};

export default BottomNav;
