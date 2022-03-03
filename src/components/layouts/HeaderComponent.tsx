import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";

import { menuList } from "@/constants/MenuList";
import clsxm from "@/lib/helpers/clsxm";

import Button from "../buttons/Button";
import UnstyledLink from "../links/UnstyledLink";

const HeaderComponent = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const router = useRouter();

  const handleChangeTheme = () => {
    return setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white font-primary opacity-90 dark:bg-primary-700">
      <div className="h-1.5 bg-gradient-to-r from-primary-500 via-slate-500 to-zinc-500"></div>
      <nav
        className={clsx(
          "layout flex items-center justify-between",
          "mx-auto h-14 max-w-4xl px-4 py-0.5 md:px-1"
        )}
      >
        <UnstyledLink href="/" openNewTab={false} className="font-bold">
          <h5>yehezgun.com</h5>
        </UnstyledLink>
        <div className="flex items-center justify-end gap-3">
          {menuList.map((menu, index) => (
            <UnstyledLink
              href={menu.route}
              key={index}
              className={clsxm(
                "hidden font-semibold hover:underline sm:inline-flex",
                router.pathname === menu.route && "font-black underline"
              )}
            >
              {menu.menu_name}
            </UnstyledLink>
          ))}
          <Button
            className={clsxm(
              "bg-primary-200 dark:bg-slate-600",
              "hover:bg-gray-500 dark:hover:bg-gray-400",
              "ml-2 p-2 text-black dark:text-white",
              "rounded-full border-none"
            )}
            onClick={() => handleChangeTheme()}
          >
            {resolvedTheme === "light" ? (
              <BiMoon size={20} />
            ) : (
              <BiSun size={20} />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
