import React from "react";

import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="dark:bg-dark">
      <HeaderComponent />
      <div className="layout-container">{children}</div>
      <FooterComponent />
    </section>
  );
};

export default Layout;
