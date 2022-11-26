import { PageProps } from "gatsby";
import React, { PropsWithChildren } from "react";
import "@local/styles/global.css";
import { Navbar, Footer } from "@local/components";

export const LayoutsPage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div >
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
