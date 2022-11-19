import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layouts from "../components/Layouts";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layouts>
      <main>IndexPage</main>
    </Layouts>
  );
};

export default IndexPage;
