import * as React from "react";
import { graphql, Link, PageProps } from "gatsby";
import "@local/styles/home.css";
import { Layouts } from "@local/components";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  console.log(data);
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
        <p></p>
      </section>
    </Layouts>
  );
};

export const query = graphql`
  query ProjectPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
  }
`;

export default IndexPage;
