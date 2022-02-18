import { useRouter } from "next/router";
import React from "react";

import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
import UnstyledLink from "@/components/links/UnstyledLink";
import { menuList } from "@/constants/MenuList";
import clsxm from "@/lib/helpers/clsxm";
import { menuIcon } from "@/lib/helpers/menuIcon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <section>
      <HeaderComponent />
      <div className="layout-container">{children}</div>
      <FooterComponent />
      <div
        className={clsxm(
          "fixed bottom-4 left-1/2 flex w-11/12 -translate-x-1/2 items-center justify-around",
          "rounded-lg bg-slate-300 py-2 opacity-90 shadow-xl",
          "dark:bg-slate-600 md:hidden"
        )}
      >
        {menuList.map((menu, index) => (
          <UnstyledLink
            key={index}
            href={menu.route}
            className={clsxm(
              "flex flex-col items-center justify-center gap-2 p-2",
              "hover:rounded-md hover:border hover:border-primary-100",
              router.pathname === menu.route &&
                "rounded-md border-2 border-primary-100"
            )}
          >
            {menuIcon(menu.menu_name)}
            <h5 className="font-bold">{menu.menu_name}</h5>
          </UnstyledLink>
        ))}
      </div>
    </section>
  );
};

export default Layout;
