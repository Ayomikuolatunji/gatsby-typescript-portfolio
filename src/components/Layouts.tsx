import { PageProps } from "gatsby";
import React, { PropsWithChildren } from "react";
import "@local/styles/global.css";
import { Footer } from "@local/components";
import { Navbar } from "@local/components";

const Layouts: React.FC<PageProps | PropsWithChildren> = ({ children }) => {
  return (
    <div className="layouts">
      <Navbar />
      <>
        {/* contents */}
        {children}
      </>
      <Footer />
    </div>
  );
};

export default Layouts;
