import * as React from "react";
import { Link, PageProps } from "gatsby";
import "@local/styles/home.css";
import { Layouts } from "@local/components";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layouts>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className="btn" to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="banner" />
      </section>
    </Layouts>
  );
};

export default IndexPage;
