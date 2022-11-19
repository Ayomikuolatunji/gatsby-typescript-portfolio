import * as React from "react";
import type { PageProps } from "gatsby";
import { Layouts } from "@local/components";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layouts>
      <main>IndexPage</main>
    </Layouts>
  );
};

export default IndexPage;
