import path from "path";
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Typescript blog Starter`,
    description: `A simple blog starter using Typescript in front & back side with eslint & prettier.`,
    author: {
      name: "Julien CARON",
      content: "I like build some things using Javascript",
    },
    social: {
      github: "https://github.com/Junscuzzy",
    },
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-mui-emotion",
    "gatsby-plugin-top-layouts",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@local/styles": path.resolve(__dirname, "src/styles"),
          "@local/pages": path.resolve(__dirname, "src/pages"),
          "@local/components": path.resolve(__dirname, "src/components"),
          "@static": path.resolve(__dirname, "static"),
        },
        extensions: [".tsx", ".ts", ".css", ".module.css"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
