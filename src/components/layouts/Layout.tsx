import React from "react";

import FooterComponent from "@/components/layouts/FooterComponent";
import HeaderComponent from "@/components/layouts/HeaderComponent";
import { PreloadProvider } from "@/context/PreloadContext";

import BottomNav from "./BottomNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderComponent />
      <PreloadProvider>
        <div className="layout-container">{children}</div>
      </PreloadProvider>
      <FooterComponent />
      <BottomNav />
    </>
  );
};

export default Layout;
