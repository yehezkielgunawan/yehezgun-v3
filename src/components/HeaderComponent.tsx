import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

import { menuList } from "@/constants/MenuList";
import clsxm from "@/lib/helpers/clsxm";

import Button from "./buttons/Button";
import UnstyledLink from "./links/UnstyledLink";

const HeaderComponent = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const handleChangeTheme = () => {
    return setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 z-50 w-full bg-white p-0.5 opacity-90 dark:bg-gray-700">
      <div
        className={clsx(
          "layout flex items-center justify-between",
          "mx-auto h-14 max-w-4xl px-2 md:px-1"
        )}
      >
        <UnstyledLink
          href="https://yehezgun.com"
          openNewTab={false}
          className="font-bold"
        >
          yehezgun.com
        </UnstyledLink>
        <div className="flex items-center justify-end gap-3">
          {menuList.map((menu, index) => (
            <UnstyledLink
              href={menu.route}
              key={index}
              className="hidden font-bold hover:underline md:table-cell"
            >
              {menu.menu_name}
            </UnstyledLink>
          ))}
          <Button
            variant="outline"
            className={clsxm(
              "dark:border-white dark:text-white dark:hover:bg-gray-500",
              "hover:border-black hover:bg-gray-200",
              "ml-2 border-black p-2 text-black"
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
      </div>
    </header>
  );
};

export default HeaderComponent;
