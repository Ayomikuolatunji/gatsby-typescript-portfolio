import path from "path";
import type { GatsbyConfig } from "gatsby";
import { siteMetadata } from "gatsby/siteMetaData";

const config: GatsbyConfig = {
  siteMetadata: siteMetadata,
  graphqlTypegen: true,
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-top-layout",
    "gatsby-plugin-mui-emotion",
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
