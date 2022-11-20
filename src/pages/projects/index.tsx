import React from "react";
import { Layouts } from "@local/components";
import "@local/styles/project.css";
import { graphql, Link } from "gatsby";

const Projects = ({ data }: any) => {
  const projects = data.allMarkdownRemark.nodes;
  return (
    <Layouts>
      <div className="portfolio">
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className="projects">
          {projects.map((project: any) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layouts>
  );
};

export const query = graphql`
  query {
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

export default Projects;
