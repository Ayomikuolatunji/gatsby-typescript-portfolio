import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};

export default IndexPage;
