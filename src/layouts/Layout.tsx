import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaPencilRuler, FaRocket } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";

import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <HeaderComponent />
      <div className="layout-container">{children}</div>
      <FooterComponent />
      <div className="fixed bottom-4 left-1/2 flex h-auto w-9/12 -translate-x-1/2 items-center justify-around rounded-lg bg-slate-300 py-2 shadow-lg dark:bg-slate-600 md:hidden">
        <div className="flex flex-col items-center justify-center gap-2">
          <AiFillHome className="text-lg" />
          <h5 className="font-bold">Home</h5>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <FaRocket className="text-lg" />
          <h5 className="font-bold">Projects</h5>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <FaPencilRuler className="text-lg" />
          <h5 className="font-bold">Articles</h5>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <RiAccountCircleFill className="text-lg" />
          <h5 className="font-bold">About Me</h5>
        </div>
      </div>
    </section>
  );
};

export default Layout;
