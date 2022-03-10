import { useRouter } from "next/router";
import React from "react";

import { menuList } from "@/constants/MenuList";
import clsxm from "@/lib/helpers/clsxm";

import UnstyledLink from "../links/UnstyledLink";

const BottomNav = () => {
  const router = useRouter();
  return (
    <div
      className={clsxm(
        "fixed bottom-0.5 left-1/2 flex w-full -translate-x-1/2 items-center justify-around",
        "rounded-lg bg-slate-300 py-2 opacity-95 shadow-sm shadow-primary-600 dark:shadow-primary-100",
        "dark:bg-slate-600 sm:hidden"
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
            // router.pathname === menu.route &&
            //   "rounded-md border-2 border-primary-500 dark:border-primary-200"
          )}
        >
          <div
            className={clsxm(
              router.pathname === menu.route &&
                "rounded-full bg-blue-400  dark:bg-blue-500",
              "px-4 py-2"
            )}
          >
            <menu.icon size={36} />
          </div>
          <h5 className="font-primary">{menu.menu_name}</h5>
        </UnstyledLink>
      ))}
    </div>
  );
};

export default BottomNav;
