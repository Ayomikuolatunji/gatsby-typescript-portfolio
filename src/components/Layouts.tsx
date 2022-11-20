import { PageProps } from "gatsby";
import React, { PropsWithChildren } from "react";
import "@local/styles/global.css";
import { Navbar } from "@local/components";


const Layouts: React.FC<PageProps | PropsWithChildren> = ({ children }) => {
  return (
    <div className="layouts">
      <Navbar />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layouts;
