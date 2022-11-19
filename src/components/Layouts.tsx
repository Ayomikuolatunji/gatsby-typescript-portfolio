import { PageProps } from "gatsby";
import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
