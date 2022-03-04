import { useRouter } from "next/router";
import React from "react";

import FooterComponent from "@/components/layouts/FooterComponent";
import HeaderComponent from "@/components/layouts/HeaderComponent";
import UnstyledLink from "@/components/links/UnstyledLink";
import { menuList } from "@/constants/MenuList";
import { PreloadProvider } from "@/context/PreloadContext";
import clsxm from "@/lib/helpers/clsxm";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <>
      <HeaderComponent />
      <PreloadProvider>
        <div className="layout-container">{children}</div>
      </PreloadProvider>
      <FooterComponent />
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
              "flex flex-col items-center justify-center gap-2 py-2 px-4",
              "hover:rounded-md hover:border hover:border-primary-200",
              router.pathname === menu.route &&
                "rounded-md border-2 border-primary-500 dark:border-primary-200"
            )}
          >
            <menu.icon size={32} />
          </UnstyledLink>
        ))}
      </div>
    </>
  );
};

export default Layout;
