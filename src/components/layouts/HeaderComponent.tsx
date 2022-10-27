import clsx from "clsx";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { menuList } from "@/constants/MenuList";
import clsxm from "@/lib/helpers/clsxm";

import Button from "../buttons/Button";
import UnstyledLink from "../links/UnstyledLink";

const HeaderComponent = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();

  const handleChangeTheme = () => {
    return setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-gainsboro-400 font-primary opacity-90 backdrop-blur-sm dark:bg-gainsboro-800">
      <div className="h-1.5 bg-gradient-to-r from-lightsteel-600 via-charcoal-300 to-errieblack-300"></div>
      <nav
        className={clsx(
          "layout flex items-center justify-between",
          "mx-auto h-14 max-w-4xl px-4 py-0.5 md:px-1"
        )}
      >
        <UnstyledLink href="/" openNewTab={false} className="font-bold">
          <h5>yehezgun.com</h5>
        </UnstyledLink>
        <div className="flex items-center justify-end gap-2">
          {menuList.map((menu, index) => (
            <UnstyledLink
              href={menu.route}
              key={index}
              className={clsxm(
                "hidden font-semibold hover:underline sm:inline-flex",
                "p-1 hover:rounded-md hover:bg-primary-400 dark:hover:bg-primary-600",
                router?.pathname === menu.route && "font-black underline"
              )}
            >
              {menu.menu_name}
            </UnstyledLink>
          ))}
          {mounted ? (
            <Button
              className={clsxm(
                "bg-errieblack-100 dark:bg-errieblack-300",
                "hover:bg-gray-500 dark:hover:bg-gray-400",
                "ml-2 p-2 text-black dark:text-white",
                "rounded-full border-none",
                "hover:rotate-45"
              )}
              onClick={() => handleChangeTheme()}
            >
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </Button>
          ) : (
            <div
              className={clsxm(
                "ml-2 h-9 w-9 animate-pulse rounded-full",
                "bg-errieblack-100 dark:bg-errieblack-300"
              )}
            ></div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
